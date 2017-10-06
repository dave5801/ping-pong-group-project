'use strict';

var app = app || {};

(function(module){
  var challengePong = (callback) => {
    $('#leaderTable').off('click').on('click', '.challengeButton', () => {
      console.log(app.Player.localUser);
      console.log($(this).attr('player-id'))
      $.get('/challenge', {challenger: app.Player.localUser, defender: $(this).attr('player-id')}).then(callback);
      app.dashHandler.loadPlayer()
      $('#dash_results').show();
      $('.challengeButton').hide();
    })
  }
  module.challengePong = challengePong;
})(app)
