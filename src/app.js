var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Pebble.js: Hello World',
  subtitle: 'Hello World!',
  body: 'Druk op een knop!'
});

newFunction(); 

main.show();

main.on('click', 'select', function(e) {
  var main = new UI.Card({
    body: 'BODY',
    subtitle: 'SUBTITLE',
    title: 'TITLE'
  });
  
  main.title('TITLE 1');
  
  main.show();
});

main.on('click', 'up', function(e) {
  var wind = new UI.Window();
  
  var textfield = new UI.Text({
    position: new Vector2(0, 100),
    size: new Vector2(144, 168),
    font: 'gothic-18-bold',
    text: 'CUSTOM FONT TYPE'
  });
  
  wind.add(textfield);
  wind.show();
});

//main.title('test');

function newFunction(){
  console.log('This is my function');
}