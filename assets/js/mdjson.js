$().ready(function(){
    $.getJSON( "../js/nkatgass.json", function( data ) {
    console.log(data);
    $("#text").html(data["text"]);
  });
});