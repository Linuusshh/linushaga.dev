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

| File                  | What it holds                                                           |
| --------------------- | ----------------------------------------------------------------------- |
| `public/index.html`   | The page: header, hero, about, projects, contact and footer.            |
| `public/style.css`    | All styling, both themes and the animations.                            |
| `public/theme.js`     | Applies the saved theme before the page draws, so light doesn't flash dark. |
| `public/script.js`    | The binary rain, the theme toggle with its glitch, and the footer year. |
| `public/_headers`     | Security headers Cloudflare adds to every response, including the Content-Security-Policy and HSTS. |
| `wrangler.jsonc`      | Cloudflare Workers config: serves `public/` as static assets.           |

## Running it locally

There's nothing to install. Serve the `public/` folder with any static server, for example:

```sh
python -m http.server -d public
```

Then go to <http://localhost:8000>.

If you have Node installed, `npx wrangler dev` serves it the same way Cloudflare does, including the headers from `_headers`, at <http://localhost:8787>.

## Deployment

The site is hosted on Cloudflare Workers as static assets. Every push to `main` is built and deployed automatically by Cloudflare Workers Builds, using the config in `wrangler.jsonc`.

## Customizing

- **Rain words:** edit the `data-words` list on the `.binary` element in `public/index.html`.
- **Theme colors:** edit the variables at the top of `public/style.css`. `:root` holds the dark theme and `:root[data-theme="light"]` the light one. If you change the dark colors, update the matching `@property` initial values too.
