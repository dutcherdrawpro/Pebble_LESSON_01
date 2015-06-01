var UI = require('ui');

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();

main.on('click', 'select', function(e) {
  var main = new UI.Card({
    body: 'SELECT'
  });
  
  main.show();
  
});
