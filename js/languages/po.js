import createSwiper from "./../swiper.js";
import events from "./../events.js";

function translatePortuguese() {

    // NAV
    document.getElementById("nav-buenosAires").innerHTML  ="Cidade de Buenos Aires";
    document.getElementById("nav-regions").innerHTML  ="Regiões";
    document.getElementById("nav-rutaNatural").innerHTML  ="A Rota Natural";
 
   document.getElementById("main").innerHTML =  String.raw`<section class="home" id="home" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in">
   <div class="grid grid-max">
       
       <div class="home__opacity"></div>
       <div class="home__container">
           
           <div class="home__text">
               <p class="preheader home__preheader">Argentina apresenta</p>
               <h1 class="home__header">III Fórum Mundial de Direitos Humanos <span>Argentina 2023</span></h1>
           </div>
           <div class="home__logos">
               <div class="home__logos-container">
                   <div class="home__logos-group home__logos-group-1">
                       <div class="home__logos-img">
                           <img src="img/logo_foro.svg" alt="Logo Foro Mundial de Derechos Humanos">
                       </div>

                       <div class="home__logos-img">
                           <img src="img/logo_cipdh.svg" alt="Logo Centro Internacional para la promoción de los Derechos Humanos">
                       </div>
                   </div>

                   <div class="home__logos-group home__logos-group-2">
                       <div class="home__logos-img">
                           <img src="img/logo_mintur.svg" alt="Logo Ministerio de Turismo y Deportes Argentina">
                       </div>
                       <div class="home__logos-img">
                           <img src="img/logo_inprotur.svg" alt="Logo Inprotur - Instituto Nacional de Promoción Turística">
                       </div>  
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
           <p class="p-big quote__quote">É um orgulho receber este <strong>III Fórum Mundial de Direitos Humanos,</strong> um tema em que a Argentina é um exemplo a seguir. Esperamos que vocês aproveitem a cidade de Buenos Aires e descubram as atrações naturais, gastronômicas, culturais e históricas que nosso país oferece.</p>
           <p class="preheader quote__author"><strong>Matías Lammens.</strong> Minister of Tourism and Sports of Argentina.</p>
       </div>
       
   </div>
</section>

<section class="buenosAires" id="buenosAires">
   <div class="buenosAires__img"></div>
   <div class="buenosAires__text">
       <div class="buenosAires__text-container" data-aos="fade-up" data-aos-duration="1000">
           <p class="preheader buenosAires__preheader">Explore a</p>
           <h2 class="buenosAires__header">Cidade de Buenos Aires</h2>
           <p class="p buenosAires__description">Vibrante, única e apaixonada. Uma cidade à altura das grandes capitais do mundo.</p>
           <a href="https://www.argentina.travel/po/province/ciudad-autonoma-de-buenos-aires" target="_blank"><button class="blueButton">Saiba Mais</button></a>
       </div>
       
   </div>
</section>

<section class="regions" id="regions">
   <div class="grid-max regions__text" data-aos="fade-up" data-aos-duration="1000">
       <p class="preheader regions__preheader">Conheça as</p>
       <h2 class="regions__header">Regiões da Argentina</h2>             
   </div>
   <div class="swiper mySwiper regions__slider" data-aos="fade-up" data-aos-duration="1000">

        <div class="regions__slider-cards swiper-wrapper">

           <div class="swiper-slide swiper-slide-duplicate regions__card" >
               <div class="regions__card-image regions__card-image-1"></div>
               <p class="preheader regions__card-preheader">Região da</p>
               <h3 class="regions__card-header">Patagônia</h3>
               <p class="p-small regions__card-p">Lagos azuis e ventos inconfundíveis na imensidão do sul. Da estepe ao Fim do Mundo sem parar!</p>
               <a href="https://www.argentina.travel/po/region/patagonia" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-2"></div>
               <p class="preheader regions__card-preheader">Região</p>
               <h3 class="regions__card-header">Norte</h3>
               <p class="p-small regions__card-p">Tradição e cultura, juntamente com o legado dos povos originários. Uma paleta de cores vivas para explorar de novo e de novo.</p>
               <a href="https://www.argentina.travel/po/region/norte" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-3"></div>
               <p class="preheader regions__card-preheader">Região</p>
               <h3 class="regions__card-header">Litoral</h3>
               <p class="p-small regions__card-p">Todo o poder da natureza, entre cachoeiras maravilhosas, espécies de todos os tipos e a magia do Rio Paraná.</p>
               <a href="https://www.argentina.travel/po/region/litoral" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-4"></div>
               <p class="preheader regions__card-preheader">Região de</p>
               <h3 class="regions__card-header">Cuyo</h3>
               <p class="p-small regions__card-p">Desfrute em frente à Cordilheira dos Andes com um copo do melhor Malbec do mundo. Uma síntese do bem viver.</p>
               <a href="https://www.argentina.travel/po/region/cuyo" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-5"></div>
               <p class="preheader regions__card-preheader">Região de</p>
               <h3 class="regions__card-header">Córdoba</h3>
               <p class="p-small regions__card-p">Rios, golfe, fernet e tudo o que você propõe, no coração das imponentes serras argentinas.</p>
               <a href="https://www.argentina.travel/po/region/cordoba" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-6"></div>
               <p class="preheader regions__card-preheader">Região de</p>
               <h3 class="regions__card-header">Buenos Aires</h3>
               <p class="p-small regions__card-p">Entre aldeias gauchescas e praias tranquilas, a gastronomia e a natureza levam à diversão.</p>
               <a href="https://www.argentina.travel/po/province/buenos-aires" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <!-- DUPLICATE -->

           <div class="swiper-slide swiper-slide-duplicate regions__card" >
               <div class="regions__card-image regions__card-image-1"></div>
               <p class="preheader regions__card-preheader">Região da</p>
               <h3 class="regions__card-header">Patagônia</h3>
               <p class="p-small regions__card-p">Lagos azuis e ventos inconfundíveis na imensidão do sul. Da estepe ao Fim do Mundo sem parar!</p>
               <a href="https://www.argentina.travel/po/region/patagonia" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-2"></div>
               <p class="preheader regions__card-preheader">Região</p>
               <h3 class="regions__card-header">Norte</h3>
               <p class="p-small regions__card-p">Tradição e cultura, juntamente com o legado dos povos originários. Uma paleta de cores vivas para explorar de novo e de novo.</p>
               <a href="https://www.argentina.travel/po/region/norte" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-3"></div>
               <p class="preheader regions__card-preheader">Região</p>
               <h3 class="regions__card-header">Litoral</h3>
               <p class="p-small regions__card-p">Todo o poder da natureza, entre cachoeiras maravilhosas, espécies de todos os tipos e a magia do Rio Paraná.</p>
               <a href="https://www.argentina.travel/po/region/litoral" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-4"></div>
               <p class="preheader regions__card-preheader">Região de</p>
               <h3 class="regions__card-header">Cuyo</h3>
               <p class="p-small regions__card-p">Desfrute em frente à Cordilheira dos Andes com um copo do melhor Malbec do mundo. Uma síntese do bem viver.</p>
               <a href="https://www.argentina.travel/po/region/cuyo" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-5"></div>
               <p class="preheader regions__card-preheader">Região de</p>
               <h3 class="regions__card-header">Córdoba</h3>
               <p class="p-small regions__card-p">Rios, golfe, fernet e tudo o que você propõe, no coração das imponentes serras argentinas.</p>
               <a href="https://www.argentina.travel/po/region/cordoba" target="_blank"><button class="blueButton">Saiba Mais</button></a>
           </div>

           <div class="swiper-slide swiper-slide-duplicate regions__card">
               <div class="regions__card-image regions__card-image-6"></div>
               <p class="preheader regions__card-preheader">Região de</p>
               <h3 class="regions__card-header">Buenos Aires</h3>
               <p class="p-small regions__card-p">Entre aldeias gauchescas e praias tranquilas, a gastronomia e a natureza levam à diversão.</p>
               <a href="https://www.argentina.travel/po/province/buenos-aires" target="_blank"><button class="blueButton">Saiba Mais</button></a>
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
       <p class="preheader rutaNatural__preheader">Procurando uma aventura? Explore</p>
       <h2 class="rutaNatural__header">A Rota Natural</h2>
       <p class="p rutaNatural__text">A Rota Natural. 
           Conheça as 17 rotas que a Argentina oferece para explorar suas paisagens, fauna e flora.</p>
       <a href="https://inversionesturisticas.tur.ar/" target="_blank" rel="noopener noreferrer"><button class="blueButton">Saiba Mais</button></a>
   </div>
</section>`
createSwiper();
events();
 }
 
 export default translatePortuguese;