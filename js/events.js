
function events() {
  
  // SCROLL

  //SECTION DEFINITION

let home = document.getElementById("home");

let buenosAires = document.getElementById("buenosAires");

let regions = document.getElementById("regions");

let rutaNatural = document.getElementById("rutaNatural");


//FUNCTION DEFINITION
function scrollTo (element) {
    element.scrollIntoView({ behavior: 'smooth'});
    
}

//HANDLERS - NAV
document.getElementById("navbar__logo").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(home)
  });


  document.getElementById("nav-buenosAires").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(buenosAires)
  });

  document.getElementById("nav-regions").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(regions)
  });

  document.getElementById("nav-rutaNatural").addEventListener("click", function(event){
    event.preventDefault()
    scrollTo(rutaNatural)
  });

} 

export default events;