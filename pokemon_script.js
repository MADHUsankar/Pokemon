$(document).ready(function(){

for (var pok = 151; pok >= 1; --pok){
  $('h1').after('<img src="http://pokeapi.co/media/img/' + pok 
  + '.png" id="' + pok + '">');
  }

$('#pokemon').on('click','img',function(){
  $.get('http://pokeapi.co/api/v1/pokemon/' + $(this).attr('id') + '/',
  function(res){
    var htmlstr="";
    htmlstr += '<h1>' + res.name + '</h1>';
    htmlstr += '<img src="http://pokeapi.co/media/img/' + res.pkdx_id + '.png">';
    htmlstr += '<h3>Types</h3><ul>';
    for(var i = 0; i < res.types.length; ++i){
      htmlstr += '<li>' + res.types[i].name + '</li>';
    }
    htmlstr += '</ul><h3>Height</h3><p>' + res.height + '</p>';
    htmlstr += '<h3>Weight</h3><p>' + res.weight + '</p>';
    $('#pokedex').html(htmlstr);
    });
  
});

});