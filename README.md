# clappr-marquee

Displays a marquee text scrolling from right to left or vice-versa. The marquee is only displayed when the player is
playing and will hide when the player is stopped.

![Snapshot](../main/screenshot.jpg)

## TODO

- Richer text formatting

## Config

```
var player = new Clappr.Player({
	...

	plugins: [Marquee],

	marqueeConfig: {
		text: 'Lorem ipsum ...',
		speed: 10,
		direction: 'left',
		position: 'top',
		offset: '10px',
		pauseOnHover: true,
	},

	...
});
```

The text will be displayed as is. Links will be automatically detected and replaced by a real link:

```
var player = new Clappr.Player({
	...

	plugins: [Marquee],

	marqueeConfig: {
		text: 'Lorem ipsum https://www.example.com ...',
	},

	...
});
```

By default the marquee is displayed at the top of the player with gray background. You can override this by providing
your own styles:

```
var player = new Clappr.Player({
	...

	plugins: [Marquee],

	marqueeConfig: {
		text: 'Lorem ipsum https://www.example.com ...',
		style: {
			backgroundColor: 'green'
		},
		linkStyle: {
			textDecoration: 'none'
		}
	},

	...
});
```

## Config options

Option | Default | Description
-------|---------|------------
`text` | (not set) | The text to display. May contain links in Markdown syntax.
`speed` | `10` | Translation speed in pixel per second.
`fps` | `25` | Animation loop resolution.
`direction` | `left` | The direction in which the text will scroll. Either `left` or `right`.
`position` | `top` | Where the marquee should be displayed. Either 'top' or 'bottom'.
`offset` | `0px` | Distance to the top or bottom, depending on the value of `position`.
`pauseOnHover` | `true` | Whether the text should stop scrolling if the mouse hovers it.
`style` | `{}` | CSS styles in DOM syntax for styling the marquee area.
`linkStyle` | `{}` | CSS styles in DOM syntax fot styling the links in the text.

## Develop

Create updated dist files:

```
npm run build
```

or for a minified build:

``` 
npm run release
```
