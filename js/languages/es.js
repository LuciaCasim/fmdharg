import createSwiper from "./../swiper.js";
import events from "./../events.js";


function translateSpanish() {

    // NAV
    document.getElementById("nav-buenosAires").innerHTML  ="Ciudad de Buenos Aires";
    document.getElementById("nav-regions").innerHTML  ="Regiones";
    document.getElementById("nav-rutaNatural").innerHTML  ="La Ruta Natural";
 
   document.getElementById("main").innerHTML =  String.raw`<section class="home" id="home" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in">
   <div class="grid grid-max">
       
       <div class="home__opacity"></div>
       <div class="home__container">
           
           <div class="home__text">
               <p class="preheader home__preheader">Argentina presenta</p>
               <h1 class="home__header">III Foro Mundial de Derechos Humanos <span>Argentina 2023</span></h1>
           </div>
           <div class="home__logos">
           <div class="home__logos-container">
           <div class="home__logos-group home__logos-group-1">
               <div class="home__logos-img">
                   <img src="img/logo_cipdh.svg" alt="Logo Centro Internacional para la promoción de los Derechos Humanos">
               </div>

               <div class="home__logos-img">
                   <img src="img/logo_secretaria.svg" alt="Logo Secretaria de Derechos Humanos">
               </div>
 
           </div>

           <div class="home__logos-group home__logos-group-2">
               <div class="home__logos-img">
                   <img src="img/logo_foro.svg" alt="Logo Foro Mundial de Derechos Humanos">
               </div>  
               <div class="home__logos-img">
                   <img src="img/logo_mintur.svg" alt="Logo Ministerio de Turismo y Deportes Argentina">
               </div>                            
       </div>

           </div>
       </div>          

   </div>         
</section>

<section class="grid quote" id="quote">
   <div class="quote__image">
       <div class="quote__image-container">
           <div class="quote__img" data-aos="fade-up" data-aos-duration="1000">
           </div>
       </div>
                      
   </div>
   <div class="quote__text">
       <div class="quote__text-inner" data-aos="fade-up" data-aos-duration="1000">
           <img src="img/quote_icon.svg" alt="" class="quote__icon">
           <p class="p-big quote__quote">Es un orgullo recibir este <strong>III Foro Mundial de Derechos Humanos,</strong> materia en la que Argentina es un ejemplo a seguir. Esperamos que disfruten de la Ciudad de Buenos Aires y que descubran los atractivos naturales, gastronómicos, culturales e históricos que ofrece nuestro país. </p>
           <p class="preheader quote__author"><strong>Matías Lammens.</strong> Ministro de Turismo y Deportes de Argentina.</p>
       </div>
       
   </div>
</section>

<section class="buenosAires" id="buenosAires">
   <div class="buenosAires__img"></div>
   <div class="buenosAires__text">
       <div class="buenosAires__text-container" data-aos="fade-up" data-aos-duration="1000">
           <p class="preheader buenosAires__preheader">Explora la</p>
           <h2 class="buenosAires__header">Ciudad de Buenos Aires</h2>
           <p class="p buenosAires__description">Vibrante, única y pasional. Una ciudad a la altura de las grandes capitales del mundo.</p>
           <a href="https://www.argentina.travel/es/province/ciudad-autonoma-de-buenos-aires" target="_blank"><button class="blueButton">Conocer más</button></a>
       </div>
       
   </div>
</section>

<section class="regions" id="regions">
   <div class="grid-max regions__text" data-aos="fade-up" data-aos-duration="1000">
       <p class="preheader regions__preheader">Conoce las</p>
       <h2 class="regions__header">Regiones de Argentina</h2>             
   </div>
   <div class="swiper mySwiper regions__slider" data-aos="fade-up" data-aos-duration="1000">

        <div class="regions__slider-cards swiper-wrapper">

           <div class="swiper-slide swiper-slide-duplicate regions__card" >
               <div class="regions__card-image regions__card-image-1"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Patagonia</h3>
               <p class="p-small regions__card-p">Lagos azulinos y vientos inconfundibles en la inmensidad del sur. De la estepa al Fin del Mundo ¡sin escalas!</p>
               <a href="https://www.argentina.travel/es/region/patagonia" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-2"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Norte</h3>
               <p class="p-small regions__card-p">Tradición y cultura, junto al legado de los pueblos originarios. Una paleta de colores vivos para explorar una y otra vez.</p>
               <a href="https://www.argentina.travel/es/region/norte" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-3"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Litoral</h3>
               <p class="p-small regions__card-p">Todo el poder de la naturaleza, entre cascadas maravillosas, especies de todo tipo y la magia del río Paraná.</p>
               <a href="https://www.argentina.travel/es/region/litoral" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-4"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Cuyo</h3>
               <p class="p-small regions__card-p">Disfruta frente a la Cordillera de los Andes con una copa del mejor Malbec del mundo. Una síntesis del buen vivir.</p>
               <a href="https://www.argentina.travel/es/region/cuyo" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-5"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Córdoba</h3>
               <p class="p-small regions__card-p">Ríos, golf, fernet y todo lo que te propongas, en el corazón de las imponentes sierras Argentinas.</p>
               <a href="https://www.argentina.travel/es/region/cordoba" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-6"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Buenos Aires</h3>
               <p class="p-small regions__card-p">Entre pueblos gauchescos y pacíficas playas, gastronomía y naturaleza lideran el disfrute.</p>
               <a href="https://www.argentina.travel/es/province/buenos-aires" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <!-- DUPLICATE -->
           <div class="swiper-slide swiper-slide-duplicate regions__card" >
               <div class="regions__card-image regions__card-image-1"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Patagonia</h3>
               <p class="p-small regions__card-p">Lagos azulinos y vientos inconfundibles en la inmensidad del sur. De la estepa al Fin del Mundo ¡sin escalas!</p>
               <a href="https://www.argentina.travel/es/region/patagonia" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-2"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Norte</h3>
               <p class="p-small regions__card-p">Tradición y cultura, junto al legado de los pueblos originarios. Una paleta de colores vivos para explorar una y otra vez.</p>
               <a href="https://www.argentina.travel/es/region/norte" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-3"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Litoral</h3>
               <p class="p-small regions__card-p">Todo el poder de la naturaleza, entre cascadas maravillosas, especies de todo tipo y la magia del río Paraná.</p>
               <a href="https://www.argentina.travel/es/region/litoral" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-4"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Cuyo</h3>
               <p class="p-small regions__card-p">Disfruta frente a la Cordillera de los Andes con una copa del mejor Malbec del mundo. Una síntesis del buen vivir.</p>
               <a href="https://www.argentina.travel/es/region/cuyo" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-5"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Córdoba</h3>
               <p class="p-small regions__card-p">Ríos, golf, fernet y todo lo que te propongas, en el corazón de las imponentes sierras Argentinas.</p>
               <a href="https://www.argentina.travel/es/region/cordoba" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-6"></div>
               <p class="preheader regions__card-preheader">Región</p>
               <h3 class="regions__card-header">Buenos Aires</h3>
               <p class="p-small regions__card-p">Entre pueblos gauchescos y pacíficas playas, gastronomía y naturaleza lideran el disfrute.</p>
               <a href="https://www.argentina.travel/es/province/buenos-aires" target="_blank"><button class="blueButton">Conocer más</button></a>
           </div>
           

       </div>
       
       <div class="regions__slider-buttons">
           <button class="regions__slider-button swiper-prev"><img src="img/arrow-left.svg" alt=""></button>
           <button class="regions__slider-button swiper-next"><img src="img/arrow-right.svg" alt=""></button>
       </div>
   </div>
</section>

<section class="rutaNatural" id="rutaNatural">
   <div class="rutaNatural__opacity"></div>
   <div class="rutaNatural__container" data-aos="fade-up" data-aos-duration="1000">
       <p class="preheader rutaNatural__preheader">¿Buscando una aventura? Explora</p>
       <h2 class="rutaNatural__header">La Ruta Natural</h2>
       <p class="p rutaNatural__text">Conoce las 17 rutas que Argentina ofrece para explorar sus paisajes, su fauna y su flora.</p>
       <a href="https://larutanatural.gob.ar/" target="_blank" rel="noopener noreferrer"><button class="blueButton">Conocer más</button></a>
   </div>
</section>`
createSwiper();
events();
 }
 
 export default translateSpanish;