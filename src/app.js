var UI = require('ui');

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();

main.on('click', 'up', function(e) {
  var main = new UI.Card({
    title: 'Pebble.js',
    icon: 'images/menu_icon.png',
    subtitle: 'Hello World! UP',
    body: 'UP'
  });
  
  main.show();
  
});

main.on('click', 'select', function(e) {
  var main = new UI.Card({
    title: 'Pebble.js',
    icon: 'images/menu_icon.png',
    subtitle: 'Hello World! SELECT',
    body: 'SELECT'
  });
  
  main.show();
  
});

main.on('click', 'down', function(e) {
  var main = new UI.Card({
    title: 'Pebble.js',
    icon: 'images/menu_icon.png',
    subtitle: 'Hello World! DOWN',
    body: 'DOWN'
  });
  
  main.show();
  
});
