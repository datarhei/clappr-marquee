import { Events, UIContainerPlugin, $ } from 'clappr';
import urlRegex from 'url-regex-safe';
import './public/style.scss';
import icon from './public/icon.svg';
import icon_disabled from './public/icon_disabled.svg';

export default class Marquee extends UIContainerPlugin {
	constructor(container) {
		super(container);
		this.configure();
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

	bindEvents() {
		this.listenTo(this.container, Events.CONTAINER_MEDIACONTROL_SHOW, () => {
			if (this.cfg && this.cfg.position === 'bottom') {
				// Move the marquee up such that it will not be covered by the mediacontrol
				const offset = 2 * $('.media-control-layer').height();

				const currentOffset = parseInt(this.$el.css('bottom'));

				if (currentOffset < offset) {
					this.$el.css('bottom', offset + 'px');
				}
			}
		});
		this.listenTo(this.container, Events.CONTAINER_MEDIACONTROL_HIDE, () => {
			if (this.cfg && this.cfg.position === 'bottom') {
				this.$el.css('bottom', this.cfg.offset);
			}
		});
		this.listenTo(this.container, Events.CONTAINER_OPTIONS_CHANGE, this.configure);
		this.listenTo(this.container, Events.CONTAINER_RESIZE, () => {
			this.pause();
			this.start(true);
		});
		this.listenTo(this.container, Events.CONTAINER_PLAY, () => {
			this.show();
			this.start(true);
		});

		this.listenTo(this.container, Events.CONTAINER_STOP, () => {
			this.hide();
			this.pause();
		});

		document.addEventListener('fullscreenchange', () => {
			this.resize(); 
		});
		window.addEventListener('resize', () => {
			this.resize(); 
		});
	}

	configure() {
		// Defaults
		this.cfg = {
			text: '',
			speed: 10,
			fps: 25,
			direction: 'left',
			position: 'top',
			offset: '0px',
			height: '90px',
			style: {},
			linkStyle: {},
			pauseOnHover: true
		};

		const cfg = this.options.marqueeConfig || {};

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
			interval: null,	// ticker for the animation
			resize: null, // delay recalculation of elements during resize
			stepsize: this.cfg.speed / this.cfg.fps,
			windowWidth: 0,
			textWidth: 0,
		};

		this.render();
	}

	destroy() {
		this.$el.remove();
	}

	enable() {
		this.enabled = true;

		this.show();
		this.start(true);
	}

	disable() {
		this.enabled = false;

		this.hide();
		this.pause();
	}

	render() {
		let container = document.createElement('div');
		container.style.position = 'absolute';
		container.style.width = '100%';

		let div = document.createElement('div');
		div.style.position = 'absolute';
		div.style.left = '0px';

		// Parse the text for links
		let re = urlRegex({
			exact: false,
			strict: false,
			auth: false,
			localhost: false,
			parens: false,
			apostrophes: false,
			trailingPeriod: false,
			ipv4: false,
			ipv6: false,
			returnString: false,
		});

		let matches = [];
		let match = null;

		while ((match = re.exec(this.cfg.text)) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (match.index === re.lastIndex) {
				re.lastIndex++;
			}

			let link = document.createElement('a');

			if (/^https?:\/\//.test(match[0])) {
				link.href = match[0];
			}
			else {
				link.href = 'https://' + match[0];
			}

			link.setAttribute('target', '_blank');
			for (let key in this.cfg.linkStyle) {
				link.style[key] = this.cfg.linkStyle[key];
			}
			link.append(document.createTextNode(match[0]));

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
		container.append(document.createElement('hr'));

		this.state.div = div;
		this.state.container = container;

		this.$el.empty();
		this.$el.append(this.state.container);

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

		this.$el.css('opacity', 0);
		this.$el.hide();

		this.$el.remove();
		this.container.$el.append(this.$el);
	}

	resize() {
		if (!this.state) {
			return;
		}

		if (this.state.resize !== null) {
			clearTimeout(this.state.resize);
			this.state.resize = null;
		}

		this.hide();
		this.pause();
		this.state.resize = setTimeout(() => {
			this.state.resize = null;
			this.show();
			this.start(true);
		}, 1000);
	}

	update() {
		this.state.div.style.left = Math.round(this.state.position) + 'px';
	}

	show() {
		if (this.enabled === true && this.cfg.text.length == 0) {
			return;
		}

		this.$el.show();
		this.$el.css('opacity', 1);
	}

	hide() {
		this.$el.css('opacity', 0);
		this.$el.hide();
	}

	start(recalculate) {
		if (this.state.interval !== null) {
			return;
		}

		if (recalculate === true) {
			// The width of the player (w)
			this.state.windowWidth = this.container.$el.width();
			// The width of the text (t)
			this.state.textWidth = this.state.div.clientWidth;

			// 0        t                            w+t      w+2t
			// |--text--|------------player-----------|--text--|
			//                           <- |--text--| ->
			this.state.container.style.width = (this.state.windowWidth + 2 * this.state.textWidth) + 'px';
			this.state.container.style.left = -this.state.textWidth + 'px';

			if (this.cfg.direction == 'right') {
				this.state.position = 0;
			}
			else {
				this.state.position = this.state.windowWidth + this.state.textWidth;
			}
		}

		this.update();

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

	// PluginControl interface
	pluginControl() {
		let self = this;

		if (this.cfg.text.length == 0) {
			return null;
		}

		return {
			icon: function() {
				if (self.enabled === true) {
					return icon;
				}
				else {
					return icon_disabled;
				}
			},
			name: function(lang = 'en') {
				let name = 'Marquee';

				switch (lang) {
				case 'de': name = 'Lauftext'; break;
				}

				return name;
			},
			toggle: function() {
				if (self.enabled === true) {
					self.disable();
				}
				else {
					self.enable();
				}

				return self.enabled;
			},
			toggled: function() {
				return self.enabled;
			}
		};
	}
}
