// JavaScript Document
$(document).ready(function(){
  
$('#banner').owlCarousel({
	items:3,
	nav:true,
    loop:true,
    margin:30,
    autoplay:true,
	dots:false,
	smartspeed:1000,
	autoplayTimeout:3000,
})

$('#ourpopular').owlCarousel({
	items:4,
	nav:true,
    loop:true,
    margin:30,
    autoplay:true,
	dots:true,
	smartspeed:1000,
	autoplayTimeout:3000,
})


});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





