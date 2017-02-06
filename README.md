# generator-redux-feature [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Yeoman generator for creating redux feature folders.

This generator generates a redux feature folder structure. The folder structure is similar to
[Ducks](https://github.com/erikras/ducks-modular-redux) with the main concerns split into their own
files. Each main concern (worth testing) has a matching spec file. The spec files are written to
work in a Jest testing environment.

The generated folder structure is as follows:

```
feature/
├── action-types.js
├── actions.js
├── actions.spec.js
├── constants.js
├── index.js
├── reducer.js
├── reducer.spec.js
├── selectors.js
└── selectors.spec.js
```

The generated files are based on the template in [`app/templates/feature`](https://github.com/Fullscreen/generator-redux-feature/tree/master/generators/app/templates/feature).

## Installation

First, install [Yeoman](http://yeoman.io) and generator-redux-feature using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-redux-feature
```

Then generate your new redux feature folder:

```bash
yo redux-feature feature-name  # feature-name will be the name of your new feature's folder
```

## License

MIT © [Fullscreen, Inc.](https://github.com/Fullscreen)


[npm-image]: https://badge.fury.io/js/generator-redux-feature.svg
[npm-url]: https://npmjs.org/package/generator-redux-feature
[travis-image]: https://travis-ci.org/Fullscreen/generator-redux-feature.svg?branch=master
[travis-url]: https://travis-ci.org/Fullscreen/generator-redux-feature
[daviddm-image]: https://david-dm.org/Fullscreen/generator-redux-feature.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Fullscreen/generator-redux-feature
