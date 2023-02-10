let navbar__toggler = document.getElementById('navbar__toggler');
let navbar__links = document.getElementById('navbar__links');
let navbar__dropdown_toggle = document.getElementById('navbar__dropdown_toggle');
let navbar__header = document.getElementById('navbar__header');


navbar__toggler.addEventListener("click", toggleMenu);

function toggleMenu() {
   activeToggler();
   collapseMenu();
}

function activeToggler() {
    if (navbar__toggler.classList.contains("navbar__toggler-active")) {
        navbar__toggler.classList.remove("navbar__toggler-active")
    } else {
        navbar__toggler.classList.add("navbar__toggler-active")
    }
}

function collapseMenu() {
    if (navbar__links.classList.contains("navbar__links-collapsed")) {
        navbar__links.classList.remove("navbar__links-collapsed")
    } else {
        navbar__links.classList.add("navbar__links-collapsed")
    }
}

window.addEventListener("resize", closeMenu());

function closeMenu() {
    if (navbar__toggler.classList.contains("navbar__toggler-active")) {
        navbar__toggler.classList.remove("navbar__toggler-active")
    }

    if (!navbar__links.classList.contains("navbar__links-collapsed")) {
        navbar__links.classList.add("navbar__links-collapsed")
        console.log("open")
    }

    if (navbar__dropdown_toggle.classList.contains("navbar__dropdown_toggle-active")) {
        navbar__dropdown_toggle.classList.remove("navbar__dropdown_toggle-active")
    }

    if (navbar__dropdown.classList.contains("navbar__dropdown-active")) {
        navbar__dropdown.classList.remove("navbar__dropdown-active")
    }
    
}

//BACKGROUND TRANSPARENCY 

window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar__header.classList.add("nav-colored");
        navbar__header.classList.remove("nav-transparent");
    } 
    else {
        navbar__header.classList.add("nav-transparent");
        navbar__header.classList.remove("nav-colored");
    }
};


//LANGUAGE SELECTOR

navbar__dropdown_toggle.addEventListener("click", toggleLanguageSelector);

function toggleLanguageSelector() {
    if (navbar__dropdown_toggle.classList.contains("navbar__dropdown_toggle-active")) {
        navbar__dropdown_toggle.classList.remove("navbar__dropdown_toggle-active")
    } else {
        navbar__dropdown_toggle.classList.add("navbar__dropdown_toggle-active")
    }

    if (navbar__dropdown.classList.contains("navbar__dropdown-active")) {
        navbar__dropdown.classList.remove("navbar__dropdown-active")
    } else {
        navbar__dropdown.classList.add("navbar__dropdown-active")
    }
}

//AUTOHIDE

document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    window.addEventListener('resize', closeMenu())
  
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            closeMenu();
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;

      }); 
    }
   
  }); 
