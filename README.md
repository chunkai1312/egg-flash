# egg-flash

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-flash.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-flash
[travis-image]: https://img.shields.io/travis/chunkai1312/egg-flash.svg?style=flat-square
[travis-url]: https://travis-ci.org/chunkai1312/egg-flash
[codecov-image]: https://img.shields.io/codecov/c/github/chunkai1312/egg-flash.svg?style=flat-square
[codecov-url]: https://codecov.io/github/chunkai1312/egg-flash?branch=master
[david-image]: https://img.shields.io/david/chunkai1312/egg-flash.svg?style=flat-square
[david-url]: https://david-dm.org/chunkai1312/egg-flash
[snyk-image]: https://snyk.io/test/npm/egg-flash/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-flash
[download-image]: https://img.shields.io/npm/dm/egg-flash.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-flash

flash messages for egg

## Install

```bash
$ npm i egg-flash --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.flash = {
  enable: true,
  package: 'egg-flash',
};
```

Use `ctx.flash()` in your controller

```js
// {app_root}/app/controller/home.js
exports.index = async ctx => {
  ctx.flash('info', 'Welcome');
  ctx.render('index', {
    title: 'Home'
  });
};

exports.addFlash = async ctx => {
  ctx.flash('info', 'Flash Message Added');
  ctx.redirect('/');
};
```

Access the messages in your views via locals.messages (Nunjucks in this case):

```
{% if messages.info %}
  {% for message in messages.info %}
    <div class="message info">
      <span>{{ message }}</span>
    </div>
  {% endfor %}
{% endif %}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/chunkai1312/egg-flash/issues).

## License

[MIT](LICENSE)
