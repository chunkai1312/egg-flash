'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/add-message', controller.home.addMessage);
  router.get('/add-messages', controller.home.addMessages);
  router.get('/add-and-show-message', controller.home.addAndShowMessage);
};
