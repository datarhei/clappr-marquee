import { Events, UICorePlugin } from 'clappr';
import pluginStyle from './public/style.scss';

const VERSION = '0.1.0';

export default class Marquee extends UICorePlugin {
	bindEvents() {
		this.listenTo(this.core, Events.CORE_ACTIVE_CONTAINER_CHANGED, () => {
			this.core.activeContainer.$el.append(this.el);

			this.playback = this.core.getCurrentPlayback();
			this.listenTo(this.playback, Events.PLAYBACK_PLAY, () => {
				this.isPlaying = true;
				this.state.recalculate = true;
				this.show();
			});
			this.listenTo(this.playback, Events.PLAYBACK_STOP, () => {
				this.isPlaying = false;
				this.show();
			});
		});
		this.listenToOnce(this.core, Events.CORE_READY, this.onCoreReady);
	}

	onCoreReady() {
		this.hasData = false;
		this.isPlaying = false;

		this.state = {
			container: null,
			div: null,
			position: 0,
			interval: null,
			recalculate: true,
			windowWidth: 0,
			textWidth: 0,
		};

		this.text = '';
		this.speed = 10;
		this.fps = 25;
		this.direction = 'left';
		this.style = {};
		this.pauseOnHover = true;

		const cfg = this.core.options.marqueeConfig || {};

		if ('text' in cfg) {
			this.text = cfg.text;
		}

		if ('speed' in cfg) {
			this.speed = parseInt(cfg.speed);
		}

		if ('fps' in cfg) {
			this.fps = parseInt(cfg.fps);
		}

		if ('direction' in cfg) {
			if (cfg.direction === 'right') {
				this.direction = 'right';
			}
		}

		if ('style' in cfg) {
			if (typeof cfg.style === 'object') {
				this.style = cfg.style;
			}
		}

		if ('pauseOnHover' in cfg) {
			this.pauseOnHover = !!(cfg.pauseOnHover);
		}

		this.create();
	}

	static get version() {
		return VERSION;
	}

	get name() {
		return 'marquee';
	}

	get attributes() {
		return {
			'class': this.name,
			'data-marquee': ''
		};
	}

	get events() {
		return {};
	}

	create() {
		let container = document.createElement('div');
		container.style.position = 'absolute';
		container.style.width = '100%';

		let div = document.createElement('div');
		div.style.position = 'absolute';
		div.style.left = '0px';

		let re = /\[([^\]]+)\]\(([^\)]+)\)/g;

		let matches = [];
		let match = null;

		while ((match = re.exec(this.text)) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (match.index === re.lastIndex) {
				re.lastIndex++;
			}

			let link = document.createElement('a');
			link.href = match[2];
			link.setAttribute('target', '_blank');
			link.append(document.createTextNode(match[1]));

			matches.push({
				element: link,
				start: match.index,
				end: re.lastIndex
			});
		}

		if (matches.length == 0) {
			div.append(document.createTextNode(this.text));
		}
		else {
			let pos = 0;

			for (let m of matches) {
				let text = this.text.substring(pos, m.start);
				if (text.length != 0) {
					div.append(document.createTextNode(text));
				}

				div.append(m.element);

				pos = m.end;
			}

			let text = this.text.substring(pos);
			if (text.length != 0) {
				div.append(document.createTextNode(text));
			}
		}

		container.append(div);

		this.state.div = div;
		this.state.container = container;

		this.$el.html(this.state.container);

		if (this.pauseOnHover == true) {
			this.$el.mouseover((e) => {
				e.preventDefault();
				this.pause();
			});

			this.$el.mouseleave((e) => {
				e.preventDefault();
				this.start();
			});
		}

		for (let key in this.style) {
			this.$el.css(key, this.style[key]);
		}
	}

	update() {
		this.state.div.style.left = Math.round(this.state.position) + 'px';
	}

	show() {
		if (this.text.length != 0 && this.isPlaying == true) {
			this.$el.show();
			this.start();
		}
		else {
			this.$el.hide();
			this.pause();
		}

		return;
	}

	start() {
		if (this.state.recalculate == true) {
			// The width of the player (w)
			this.state.windowWidth = this.$el.width();
			// The width of the text (t)
			this.state.textWidth = this.state.div.clientWidth;

			// 0        t                            w+t      w+2t
			// |--text--|------------player-----------|--text--|
			this.state.container.style.width = (this.state.windowWidth + 2 * this.state.textWidth) + 'px';
			this.state.container.style.left = -this.state.textWidth + 'px';

			this.state.recalculate = false;

			if (this.direction == 'right') {
				this.state.position = 0;
			}
			else {
				this.state.position = this.state.windowWidth + this.state.textWidth;
			}
		}

		if (this.state.interval !== null) {
			return;
		}

		this.state.interval = setInterval(() => {
			if (this.direction == 'right') {
				this.state.position += (this.speed / this.fps);
				if (this.state.position >= this.state.windowWidth + this.state.textWidth) {
					this.state.position = 0;
				}
			}
			else {
				this.state.position -= (this.speed / this.fps);
				if (this.state.position <= 0) {
					this.state.position = this.state.windowWidth + this.state.textWidth;
				}
			}

			this.update();
		}, 1000 / this.fps);
	}

	pause() {
		clearInterval(this.state.interval);
		this.state.interval = null;
	}
}
