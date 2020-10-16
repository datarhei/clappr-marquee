import { Events, UICorePlugin, $ } from 'clappr';
import './public/style.scss';

const VERSION = '0.2.0';

export default class Marquee extends UICorePlugin {
	bindEvents() {
		this.listenTo(this.core, Events.CORE_ACTIVE_CONTAINER_CHANGED, () => {
			this.core.activeContainer.$el.append(this.el);

			this.listenTo(this.core.activeContainer, Events.CONTAINER_MEDIACONTROL_SHOW, () => {
				if (this.cfg && this.cfg.position === 'bottom') {
					const offset = 2 * $('.media-control-layer').height();

					const currentOffset = parseInt(this.$el.css('bottom'));

					if (currentOffset < offset) {
						this.$el.css('bottom', offset + 'px');
					}
				}
			});

			this.listenTo(this.core.activeContainer, Events.CONTAINER_MEDIACONTROL_HIDE, () => {
				if (this.cfg && this.cfg.position === 'bottom') {
					this.$el.css('bottom', this.cfg.offset);
				}
			});
		});

		this.listenToOnce(this.core, Events.CORE_READY, this.onCoreReady);
	}

	destroy() {
		this.$el.remove();
	}

	enable() {
		this.show();
		this.start(true);
	}

	disable() {
		this.hide();
		this.pause();
	}

	onCoreReady() {
		this.cfg = {
			text: '',
			speed: 10,
			fps: 25,
			direction: 'left',
			position: 'top',
			offset: '0px',
			height: '20px',
			style: {},
			linkStyle: {},
			pauseOnHover: true
		};

		const cfg = this.core.options.marqueeConfig || {};

		if ('text' in cfg) {
			this.cfg.text = cfg.text;
		}

		if ('speed' in cfg) {
			this.cfg.speed = parseInt(cfg.speed);
		}

		if ('fps' in cfg) {
			this.cfg.fps = parseInt(cfg.fps);
		}

		if ('direction' in cfg) {
			if (cfg.direction === 'right') {
				this.cfg.direction = 'right';
			}
		}

		if ('style' in cfg) {
			if (typeof cfg.style === 'object') {
				this.cfg.style = cfg.style;
			}
		}

		if ('linkStyle' in cfg) {
			if (typeof cfg.linkStyle === 'object') {
				this.cfg.linkStyle = cfg.linkStyle;
			}
		}

		if ('pauseOnHover' in cfg) {
			this.cfg.pauseOnHover = !!(cfg.pauseOnHover);
		}

		if ('position' in cfg) {
			if (cfg.position === 'bottom') {
				this.cfg.position = 'bottom';
			}
		}

		if ('offset' in cfg) {
			this.cfg.offset = cfg.offset;
		}

		if ('height' in cfg) {
			this.cfg.height = cfg.height;
		}

		this.state = {
			container: null,
			div: null,
			position: 0,
			interval: null,
			stepsize: this.cfg.speed / this.cfg.fps,
			windowWidth: 0,
			textWidth: 0,
		};

		this.create();

		this.listenTo(this.core, Events.CORE_RESIZE, () => {
			this.pause();
			this.start(true);
		});

		this.playback = this.core.getCurrentPlayback();
		this.listenTo(this.playback, Events.PLAYBACK_PLAY, () => {
			this.show();
			this.start(true);
		});

		this.listenTo(this.playback, Events.PLAYBACK_STOP, () => {
			this.hide();
			this.pause();
		});
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

		let re = /\[([^\]]+)\]\(([^)]+)\)/g;

		let matches = [];
		let match = null;

		while ((match = re.exec(this.cfg.text)) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (match.index === re.lastIndex) {
				re.lastIndex++;
			}

			let link = document.createElement('a');
			link.href = match[2];
			link.setAttribute('target', '_blank');
			for (let key in this.cfg.linkStyle) {
				link.style[key] = this.cfg.linkStyle[key];
			}
			link.append(document.createTextNode(match[1]));

			matches.push({
				element: link,
				start: match.index,
				end: re.lastIndex
			});
		}

		if (matches.length == 0) {
			div.append(document.createTextNode(this.cfg.text));
		}
		else {
			let pos = 0;

			for (let m of matches) {
				let text = this.cfg.text.substring(pos, m.start);
				if (text.length != 0) {
					div.append(document.createTextNode(text));
				}

				div.append(m.element);

				pos = m.end;
			}

			let text = this.cfg.text.substring(pos);
			if (text.length != 0) {
				div.append(document.createTextNode(text));
			}
		}

		container.append(div);

		this.state.div = div;
		this.state.container = container;

		this.$el.html(this.state.container);

		if (this.cfg.pauseOnHover == true) {
			this.$el.mouseover(() => {
				this.pause();
			});

			this.$el.mouseleave(() => {
				this.start(false);
			});
		}

		for (let key in this.cfg.style) {
			this.$el.css(key, this.cfg.style[key]);
		}

		if (this.cfg.position == 'bottom') {
			this.$el.css('bottom', this.cfg.offset);
		}
		else {
			this.$el.css('top', this.cfg.offset);
		}

		this.$el.css('height', this.cfg.height);
	}

	update() {
		this.state.div.style.left = Math.round(this.state.position) + 'px';
	}

	show() {
		if (this.cfg.text.length == 0) {
			return;
		}

		this.$el.show();
	}

	hide() {
		this.$el.hide();
	}

	start(recalculate) {
		if (this.state.interval !== null) {
			return;
		}

		if (recalculate === true) {
			// The width of the player (w)
			this.state.windowWidth = this.$el.width();
			// The width of the text (t)
			this.state.textWidth = this.state.div.clientWidth;

			// 0        t                            w+t      w+2t
			// |--text--|------------player-----------|--text--|
			this.state.container.style.width = (this.state.windowWidth + 2 * this.state.textWidth) + 'px';
			this.state.container.style.left = -this.state.textWidth + 'px';

			if (this.cfg.direction == 'right') {
				this.state.position = 0;
			}
			else {
				this.state.position = this.state.windowWidth + this.state.textWidth;
			}
		}

		this.state.interval = setInterval(() => {
			if (this.cfg.direction == 'right') {
				this.state.position += this.state.stepsize;
				if (this.state.position >= this.state.windowWidth + this.state.textWidth) {
					this.state.position = 0;
				}
			}
			else {
				this.state.position -= this.state.stepsize;
				if (this.state.position <= 0) {
					this.state.position = this.state.windowWidth + this.state.textWidth;
				}
			}

			this.update();
		}, 1000 / this.cfg.fps);
	}

	pause() {
		clearInterval(this.state.interval);
		this.state.interval = null;
	}
}
