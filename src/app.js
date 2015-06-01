var UI = require('ui');

var main = new UI.Card({
  title: 'Pebble.js: Hello World',
  subtitle: 'Hello World!',
  body: 'Druk op een knop!'
});

main.show();

main.on('click', 'select', function(e) {
  var main = new UI.Card({
    body: 'SELECT'
  });
  
  main.show();
});
