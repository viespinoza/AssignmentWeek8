//Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values to the ```<select>``` menu by using a ```for``` loop in JavaScript

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

//wait for the DOM elements to load before executing
//alert("hello");
jQuery(document).ready(function(){

for(i=0;q<cities.length;i++){ 

//When the user changes the input of the drop-down, update the background image based on what they selected
//Use $.append() in your iteration on the drop-down menu 

jQuery('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

//Use the ```$.change``` event handler to capture user actions

  jQuery('form').on('change', '#city-type',function(){

//Get the value of user input using ```$.val()```
    var city = jQuery('#city-type').val();
    if(city == 'NYC') {

//Use the ```$.attr()``` function to update html classes 

      jQuery('body').attr('class','nyc');
    }

//Use ```if/else if/else ``` conditionals to control the flow of your application

if(city == 'NYC') {
	jQuery('body').attr('class','nyc');	
}

if(city == "san francisco" || city == "sf" || city == "bay area"){
	jQuery('body').attr('class','sf');

if(city == "los angeles" || city == "la" || city == "lax"){
	jQuery('body').attr('class','la');

if(city == "austin" || city == "atx"){
	jQuery('body').attr('class','austin');

if(city == "sydney" || city == "syd"){
	jQuery('body').attr('class','sydney');

}

});
}); 


/* var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
$(document).ready(function() {
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
}); */