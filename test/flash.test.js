'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/flash.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/flash-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /add-message', () => {
    app.mockSession({ flash: {} });
    return app.httpRequest()
      .get('/add-message')
      .redirects(1)
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => {
        assert(res.statusCode === 200);
        assert(res.text.includes('<title>Home</title>'));
        assert(res.text.includes('Flash Message Added'));
      });
  });

  it('should GET /add-messages', () => {
    app.mockSession({ flash: {} });
    return app.httpRequest()
      .get('/add-messages')
      .redirects(1)
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => {
        assert(res.statusCode === 200);
        assert(res.text.includes('<title>Home</title>'));
        assert(res.text.includes('Flash Message 1 Added'));
        assert(res.text.includes('Flash Message 2 Added'));
        assert(res.text.includes('Flash Message 3 Added'));
      });
  });

  it('should GET /add-and-show-message', () => {
    app.mockSession({ flash: {} });
    return app.httpRequest()
      .get('/add-and-show-message')
      .redirects(0)
      .expect('Content-Type', /html/)
      .expect(200)
      .then(res => {
        assert(res.statusCode === 200);
        assert(res.text.includes('<title>Home</title>'));
        assert(res.text.includes('Flash Message Added'));
      });
  });
});
