import createSwiper from "./../swiper.js";
import events from "./../events.js";

function translateEnglish() {

   // NAV
   document.getElementById("nav-buenosAires").innerHTML  ="The City of Buenos Aires";
   document.getElementById("nav-regions").innerHTML  ="Regions";
   document.getElementById("nav-rutaNatural").innerHTML  ="La Ruta Natural";

  document.getElementById("main").innerHTML =  String.raw`<section class="home" id="home" data-aos="fade-in" data-aos-duration="1000" data-aos-easing="ease-in">
  <div class="grid grid-max">
      
      <div class="home__opacity"></div>
      <div class="home__container">
          
          <div class="home__text">
              <p class="preheader home__preheader">Argentina Presents</p>
              <h1 class="home__header">III World Forum on Human Rights <span>Argentina 2023</span></h1>
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
          <p class="p-big quote__quote">It is an honour for us to host this <strong>III World Forum on Human Rights,</strong> an area in which Argentina is a role model. We hope you all enjoy the City of Buenos Aires and discover the natural, gastronomic, cultural, and historical attractions our country offers.</p>
          <p class="preheader quote__author"><strong>Matías Lammens.</strong> Minister of Tourism and Sports of Argentina.</p>
      </div>
      
  </div>
</section>

<section class="buenosAires" id="buenosAires">
  <div class="buenosAires__img"></div>
  <div class="buenosAires__text">
      <div class="buenosAires__text-container" data-aos="fade-up" data-aos-duration="1000">
          <p class="preheader buenosAires__preheader">Explore the</p>
          <h2 class="buenosAires__header">City of Buenos Aires</h2>
          <p class="p buenosAires__description">Vibrant, unique, and thrilling. A city on a par with the great capitals of the world.</p>
          <a href="https://www.argentina.travel/en/province/ciudad-autonoma-de-buenos-aires" target="_blank"><button class="blueButton">Learn more</button></a>
      </div>
      
  </div>
</section>

<section class="regions" id="regions">
  <div class="grid-max regions__text" data-aos="fade-up" data-aos-duration="1000">
      <p class="preheader regions__preheader">Learn about</p>
      <h2 class="regions__header">The regions of Argentina</h2>             
  </div>
  <div class="swiper mySwiper regions__slider" data-aos="fade-up" data-aos-duration="1000">

       <div class="regions__slider-cards swiper-wrapper">

          <div class="swiper-slide swiper-slide-duplicate regions__card" >
              <div class="regions__card-image regions__card-image-1"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Patagonia</h3>
              <p class="p-small regions__card-p">Blue lakes and unmistakable winds amid the immensity of the south. Non-stop: from the steppe to the End of the World!</p>
              <a href="https://www.argentina.travel/en/region/patagonia" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-2"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">The North</h3>
              <p class="p-small regions__card-p">Tradition and culture together with the legacy of the native peoples. A palette of vivid colours to explore over and over again.</p>
              <a href="https://www.argentina.travel/en/region/norte" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-3"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Litoral</h3>
              <p class="p-small regions__card-p">The full strength of nature in wonderful waterfalls, species of all kinds, and the magic of the Paraná River.</p>
              <a href="https://www.argentina.travel/en/region/litoral" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-4"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Cuyo</h3>
              <p class="p-small regions__card-p">Enjoy yourself at the foot of the Andes Mountains with a glass of the best Malbec in the world. A synthesis of good living.</p>
              <a href="https://www.argentina.travel/en/region/cuyo" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-5"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Córdoba</h3>
              <p class="p-small regions__card-p">Rivers, golf, <i>fernet,</i> and everything you want in the heart of the stunning sierras of Argentina.</p>
              <a href="https://www.argentina.travel/en/region/cordoba" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-6"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Buenos Aires</h3>
              <p class="p-small regions__card-p">Between rural villages and peaceful beaches, gastronomy, and nature show the way of enjoyment.</p>
              <a href="https://www.argentina.travel/en/province/buenos-aires" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <!-- DUPLICATE -->

          <div class="swiper-slide swiper-slide-duplicate regions__card" >
              <div class="regions__card-image regions__card-image-1"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Patagonia</h3>
              <p class="p-small regions__card-p">Blue lakes and unmistakable winds amid the immensity of the south. Non-stop: from the steppe to the End of the World!</p>
              <a href="https://www.argentina.travel/en/region/patagonia" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-2"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">The North</h3>
              <p class="p-small regions__card-p">Tradition and culture together with the legacy of the native peoples. A palette of vivid colours to explore over and over again.</p>
              <a href="https://www.argentina.travel/en/region/norte" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-3"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Litoral</h3>
              <p class="p-small regions__card-p">The full strength of nature in wonderful waterfalls, species of all kinds, and the magic of the Paraná River.</p>
              <a href="https://www.argentina.travel/en/region/litoral" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-4"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Cuyo</h3>
              <p class="p-small regions__card-p">Enjoy yourself at the foot of the Andes Mountains with a glass of the best Malbec in the world. A synthesis of good living.</p>
              <a href="https://www.argentina.travel/en/region/cuyo" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-5"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Córdoba</h3>
              <p class="p-small regions__card-p">Rivers, golf, <i>fernet,</i> and everything you want in the heart of the stunning sierras of Argentina.</p>
              <a href="https://www.argentina.travel/en/region/cordoba" target="_blank"><button class="blueButton">Learn more</button></a>
          </div>

          <div class="swiper-slide swiper-slide-duplicate regions__card">
              <div class="regions__card-image regions__card-image-6"></div>
              <p class="preheader regions__card-preheader">Region</p>
              <h3 class="regions__card-header">Buenos Aires</h3>
              <p class="p-small regions__card-p">Between rural villages and peaceful beaches, gastronomy, and nature show the way of enjoyment.</p>
              <a href="https://www.argentina.travel/en/province/buenos-aires" target="_blank"><button class="blueButton">Learn more</button></a>
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
      <p class="preheader rutaNatural__preheader">Are you looking for adventures? Explore</p>
      <h2 class="rutaNatural__header">La Ruta Natural</h2>
      <p class="p rutaNatural__text">Learn about the 17 nature routes in Argentina to explore its landscapes, flora, and flora.</p>
      <a href="https://larutanatural.gob.ar/" target="_blank" rel="noopener noreferrer"><button class="blueButton">More information</button></a>
  </div>
</section>`
createSwiper();
events();
}



export default translateEnglish;