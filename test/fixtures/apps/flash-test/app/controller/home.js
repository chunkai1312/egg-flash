'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index', {
      title: 'Home',
    });
  }

  async addMessage() {
    this.ctx.flash('info', 'Flash Message Added');
    this.ctx.redirect('/');
  }

  async addMessages() {
    this.ctx.flash('info', 'Flash Message 1 Added');
    this.ctx.flash('info', 'Flash Message 2 Added');
    this.ctx.flash('info', 'Flash Message 3 Added');
    this.ctx.redirect('/');
  }

  async addAndShowMessage() {
    this.ctx.flash('info', 'Flash Message Added');
    await this.ctx.render('index', {
      title: 'Add and Show Message',
    });
  }
}

module.exports = HomeController;
