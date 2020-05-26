$().ready(function(){
    $.getJSON( "../json/nkatgass.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});