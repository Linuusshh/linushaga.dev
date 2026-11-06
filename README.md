# linushaga.dev

The source for my personal website, [linushaga.dev](https://linushaga.dev). It's a one-page site about me, what I work with and what I'm building, written from scratch in plain HTML, CSS and JavaScript with no frameworks and no build step.

The site is a work in progress.

## Features

- **Binary rain.** Falling columns of bits in the hero section. Each column spells out a real word (like "security" or "linux") in 8-bit binary, one bit per line, then picks a new word at a new random speed.
- **Hero intro.** The name and tagline rise in one after another when the page loads.
- **Dark and light mode.** Dark by default, with a toggle in the header. The choice is saved in `localStorage` and applied before the page draws, so a saved light theme doesn't flash dark first. The colors fade between themes instead of snapping.
- **TV glitch.** A small easter egg: switching theme makes the screen twitch like an old TV, with static, scanlines and a rolling band.
- **Reduced motion.** If you've turned on "reduce motion" in your system settings, the binary rain, intro, glitch, blinking cursor and smooth scrolling are all switched off.
- **Auto-updating footer year.**

## Structure

| File         | What it holds                                                  |
| ------------ | -------------------------------------------------------------- |
| `index.html` | The page: header, hero, about, projects, contact and footer.   |
| `style.css`  | All styling, both themes and the animations.                   |
| `script.js`  | The binary rain, the theme toggle with its glitch, and the footer year. |

## Running it locally

There's nothing to install. Open `index.html` in a browser, or serve the folder with any static server, for example:

```sh
python -m http.server
```

Then go to <http://localhost:8000>.

## Customizing

- **Rain words:** edit the `data-words` list on the `.binary` element in `index.html`.
- **Theme colors:** edit the variables at the top of `style.css`. `:root` holds the dark theme and `:root[data-theme="light"]` the light one. If you change the dark colors, update the matching `@property` initial values too.
