'use strict';

var app = app || {};

page('/', app.signInController.index);
page('/user/:id([A-Z0-9]{9})', app.homeController.index);
page('/about-page', app.aboutController.index);
page('/player-page', app.playerController.index)
page();
