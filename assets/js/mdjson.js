$().ready(function(){
    $.getJSON( "/nkatgass.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});