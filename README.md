# BLC Webpage Proposal Prototype
A proposal prototype to revamp Bedok Lutheran Church's webpage

[https://li-jiang-yan.github.io/blc-webpage-proposal-prototype/](https://li-jiang-yan.github.io/blc-webpage-proposal-prototype/)

## Code checks

Install Node.js 24 or later, then run:

```sh
npm ci
npm run lint
```

Individual checks are also available:

- `npm run lint:html` validates `.html` files with [HTML-Validate](https://html-validate.org/usage/cli.html) and its recommended rules.
- `npm run lint:css` checks `.css` files with [Stylelint](https://stylelint.io/user-guide/get-started/) and its standard configuration.
- `npm run lint:js` checks `.js`, `.mjs`, and `.cjs` files with [ESLint](https://eslint.org/docs/latest/use/configure/configuration-files) and its recommended rules. Browser globals are available for website scripts; configuration files and scripts under `scripts/` use Node.js globals.

The GitHub Actions workflow in `.github/workflows/ci.yml` runs all three checks on every push and pull request. It can also be run manually from the Actions tab. Errors and warnings fail CI. Dependencies are installed from `package-lock.json` using `npm ci`.

There are currently no website source files. HTML and CSS checks succeed when there are no matching files; JavaScript checks include the lint configuration files. Dependencies and generated files in `node_modules/`, `dist/`, and `coverage/` are excluded. CSS and JavaScript embedded in HTML are not separately linted; place them in external files to have them checked by Stylelint and ESLint.
