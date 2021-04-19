# Front End Documentation

If you are familiar with Gatsby development, just run `yarn` and `yarn develop`
to get started.

## Quickstart

The following is written for individuals without front-end development
experience.

1. Set up your development environment.
   - Install [node.js](https://nodejs.org/en/)
     - Gatsby docs:
       https://www.gatsbyjs.org/tutorial/part-zero/#install-nodejs-for-your-appropriate-operating-system
   - Install [yarn](https://classic.yarnpkg.com/en/)
     - `npm install -g yarn`? might work
2. Clone repo
   - `git clone https://github.com/cpinitiative/usaco-guide.git`
3. Install Dependencies
   - `yarn`
4. Run development server
   - `yarn develop`

## Link Checker

`yarn build && yarn serve` -- keep this terminal alive!

`yarn check-links`

If crash due to some `bhttp` error, it's probably a timeout. To fix temporarily,
run:

```
blc http://localhost:9000 -rof --exclude train.usaco.org
```

And find where it crashes, then check the broken link manually and add to
exclusion list. As `train.usaco.org` sometimes crashes, it's added already.

## XDM Configuration

XDM configuration is currently (somewhat) duplicated across three files:

1. `src/gatsby/create-xdm-node.ts`
2. `src/components/DynamicMarkdownRenderer.tsx`
3. `src/gatsby/webpack-xdm.js`

XDM (which is ESM) and Gatsby (which is CJS) don't work well together. We had to
compile xdm into `src/gatsby/xdm.js` with Webpack:

```js
import path from 'path';

export default {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve('D:\\Code\\xdm', 'dist'),
    filename: 'bundle.js',
    library: {
      name: 'xdm',
      type: 'commonjs',
    },
  },
};
```

Every time XDM is updated this will have to be rerun and re-copy-pasted.

## Credits

- Confetti taken from Josh Comeau:
  https://github.com/joshwcomeau/react-europe-talk-2018
- Lots of inspiration from Josh Comeau's blog and Gatsbyjs documentation site
- Syllabus template from https://www.howtographql.com/
