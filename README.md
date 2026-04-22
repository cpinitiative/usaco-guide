![USACO Guide](/public/assets/banner-image-big.jpg)

# USACO Guide

A free collection of curated, high-quality resources to take you from Bronze to
Platinum and beyond.

## Documentation + Contributing

See the [contributing module](https://usaco.guide/general/contributing). All
contributions are welcome! To get started, simply pick an
[issue](https://github.com/cpinitiative/usaco-guide/issues) you'd like to work
on, leave a comment, and submit a Pull Request!

Join our Discord server: https://discord.gg/VCxUzdYhzN

## Running Locally with Docker

Docker is the easiest way to run the site without installing Node.js or Yarn on
your machine.

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) or
   another Docker environment with Docker Compose.
2. Clone the repo and enter it:

   ```sh
   git clone https://github.com/cpinitiative/usaco-guide.git
   cd usaco-guide
   ```

3. Start the development server:

   ```sh
   docker compose up --build
   ```

4. Open http://localhost:3000.

After the first run, `docker compose up` is usually enough. The container keeps
Linux-specific dependencies inside Docker volumes, so the same command works on
macOS, Windows, and Linux.

If dependencies or generated content seem stale after changing branches, reset
the Docker volumes and rebuild:

```sh
docker compose down -v
docker compose up --build
```

## Our Team

The USACO Guide is run by the
[Competitive Programming Initiative](https://joincpi.org/). We're looking for
Content Authors to join our team to help us improve the Guide! Learn more
[here](https://docs.google.com/document/d/13QpXqdiYQwjBLnywGL1FUG7GFdh8SM_1NigIkJl-A7k/edit).

## Tech Stack

Our front-end is built with:

- React
- Next.js
- Typescript
- Tailwind CSS
- [Storybook](https://storybook.js.org/) and
  [Chromatic](https://www.chromatic.com/)
- MDX (JSX in Markdown) with @mdx-js/mdx compiler
- Firebase

## Contact Info

If you have any questions, please reach out to us at usacoguide@gmail.com.

## License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This
work is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative
Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
