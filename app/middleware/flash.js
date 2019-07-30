'use strict';

const { format, isArray } = require('util');

module.exports = () => {
  return async function(ctx, next) {
    if (ctx.flash) return await next();
    ctx.flash = flash.bind(ctx);

    const render = ctx.render;
    ctx.render = function() {
      ctx.locals.messages = ctx.flash();
      return render.apply(ctx, arguments);
    };

    await next();
  };
};


function flash(type, msg) {
  this.session.flash = this.session.flash || {};
  const msgs = this.session.flash;

  if (type && msg) {
    if (arguments.length > 2) {
      const args = Array.prototype.slice.call(arguments, 1);
      msg = format.apply(undefined, args);
    } else if (isArray(msg)) {
      msg.forEach(val => {
        msgs[type] = msgs[type] || [];
        msgs[type].push(val);
      });
      return msgs[type];
    }
    msgs[type] = msgs[type] || [];
    msgs[type].push(msg);
    return msgs[type];
  } else if (type) {
    const arr = msgs[type];
    delete msgs[type];
    return arr || [];
  }

  this.session.flash = {};
  return msgs;
}
