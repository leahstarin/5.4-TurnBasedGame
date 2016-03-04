var $ = require('jquery');
var _ = require('underscore');
var handlebars = require('handlebars');

// function renderTemplate(templateId, location, model) {
//     var templateString = $(templateId).text();
//     var templateFunction = _.template(templateString);
//     var renderedTemplate = templateFunction(model);
//     $(location).append(renderedTemplate);
// }

function puppyTemplate(data){
  // source is script tag in your html
  var source = $("#puppyPlayers").html();
  // the convert the template to a string
  var template = handlebars.compile(source);
  // passes string into template
  var compiledTemplate = template(data);
  // renders template to html element
  $('.puppyPlayersList').html(compiledTemplate);
}

function Player(options){
  options = options || {};
  this.health = options.health || 100;


}
Player.prototype.takeDamage = function(){
  this.health = this.health - 10;
}


var puppy = new Player({health: 200});

// console.log(puppy.health);

var kitten = new Player({
  health: 100
});

$('.attack-button').on('click', function(){
  puppy.takeDamage();
  kitten.takeDamage();
  $('.Kittens .health').text(kitten.health);
  console.log(kitten.health);
  $('.Puppies .health').text(puppy.health);
  console.log(puppy.health);
});

$(".btn1").click(function(){
   $("ul").slideUp();
});
$(".btn2").click(function(){
   $("ul").slideDown();
});

var puppyPlayers = [{name: 'Leah'}, {name: 'Hannah'}, {name: 'Jake'}];
puppyTemplate(puppyPlayers);

// playerTemplate({name: 'Leah'})




// random generation
// var puppyPlayers = [{name: 'A'}, {name: 'B'}, {name: 'C'}]
// console.log(puppyPlayers);
//
// var player = _.random(0,puppyPlayers.length-1);
// console.log(player);
//
// console.log(puppyPlayers[player]);





// $('.Puppies').text(puppy.health);

// console.log(kitten.health);
// console.log(puppy.health);
