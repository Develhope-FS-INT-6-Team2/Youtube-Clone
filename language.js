//var dotsMenuButton = document.getElementById("dots");
var dotsContent = document.getElementById("dots-content");
var topNav = document.querySelector(".nav")
var sideNav = document.querySelector(".side-bar")


dotsContent.style.color = "white";
/*
dotsMenuButton.addEventListener("click", function() {


  if (dotsContent.style.display === "block") {
    
    dotsContent.style.display = "none";
  } else {
    dotsContent.style.display = "block";
  }
});
*/


//language[currentLanguage].helloetext



dotsContent.addEventListener('change', (event) => {
  const selectedOption = dotsContent.value;
  console.log(selectedOption);

  if(selectedOption == "Spanish"){
    topNav.innerHTML = `<div class="yt-menu"> <button class="navicons" id="burguer-menu"><a href=""><img src="img/Navbar/3 bars.PNG" class="burguer-menu"/></a></button><button id="yt-icon"><a href="./index.html"><img src="img/Navbar/youtube icon.PNG" class=> </a></button></div><div class="nav-center"><div class="Searchbar"><input type="text" placeholder="Buscar" id="Searchbar" /><button id="Searchbutton"><a href="#"><img src="img/Navbar/search.PNG" /></a></button></div><button class="navicons" id="Navmic"><a href=""> <img src="img/Navbar/mic.PNG" /></a></button></div><div class="nav-right-side"><div><select  id="dots-content"><option  value="English">Inglés</option><option  value="Spanish" selected="selected">Español</option></select ></div><button id="sign-in" style="width: 150px"><a href=""><img src="img/Navbar/sign in.PNG" class="sign-in-pic" /><label id="sign-in-label">Iniciar Sesión</label></a></button> </div></div>`;    
    sideNav.innerHTML = `<a href="./index.html"><img src="./img/sidebar-imgs/home.png" class="sidebar-icons"/>Inicio</a><a href="./pages/shorts.html"><img src="./img/sidebar-imgs/shorts.png" class="sidebar-icons" />Shorts</a><a href="./pages/subsvideo.html"><img src="./img/sidebar-imgs/library.png"class="sidebar-icons"/>Suscripciones</a><hr/><a href="./pages/library.html"><img src="./img/sidebar-imgs/subscriptions.png" class="sidebar-icons"/>Mi biblioteca</a ><a href="./pages/history.html"><img src="./img/sidebar-imgs/history.png" class="sidebar-icons"/>Historial</a> <a href=""><img src="./img/sidebar-imgs/your-videos.png"class="sidebar-icons"/>Mis vídeos</a><a href="./pages/watch-later.html"><img src="./img/sidebar-imgs/watch-later.png" class="sidebar-icons"/>Ver más tarde</a><a href="./pages/liked-videos.html"><img src="./img/sidebar-imgs/liked-videos.png"      class="sidebar-icons"    />Vídeos que me gustan</a  >  <a href=""    ><img      src="./img/sidebar-imgs/show-more.png"      class="sidebar-icons"    />Mostar más</a  >  <hr />  <p>Suscripciones</p>  <a href="./pages/channel-page.html"    ><img src="./img/sidebar-imgs/cansungur.png" />Can Sungur ve Y...</a >  <a href="./pages/channel-page.html"><img src="./img/sidebar-imgs/purplebixi.png" />PurpleBixi</a>  <a href="./pages/channel-page.html"  ><img src="./img/sidebar-imgs/evrimagaci.png" />Evrim Ağacı</a  >  <a href="./pages/channel-page.html"><img src="./img/sidebar-imgs/flutv.png" />Flu TV</a>  <a href=""  ><img src="./img/sidebar-imgs/dedelersofrasi.png" />Dedeler Sofrası</a  >  <a href="./pages/channel-page.html"    ><img src="./img/sidebar-imgs/filmler2.png" />Filmler ve Filimler</a  >  <a href="./pages/channel-page.html"><img src="./img/sidebar-imgs/t1.png" />T1</a>  <a href="./pages/channel-page.html"    ><img src="./img/sidebar-imgs/show-more.png" />mostrar 144 más</a  >  <hr />  <p>Explorar</p>  <a href="./pages/trending.html"    ><img src="./img/sidebar-imgs/trending.png" />Tendencias</a  >  <a href="./pages/music.html"    ><img src="./img/sidebar-imgs/music.png" />Música</a  >  <a href="./pages/live.html"    ><img src="./img/sidebar-imgs/live.png" />En directo</a>  <a href="./pages/gaming.html"    ><img src="./img/sidebar-imgs/gaming.png" />Videojuegos</a><a href="./pages/sports.html"><img src="./img/sidebar-imgs/sports.png"/>Deportes</a><footer><div><div><a>Información</a><a>Prensa</a><a>Derechos de autor</a></div><div><a>Contactar</a><a>Creadores</a><a>Publicidad</a></div><div><a>Desarroladores</a></div></div><div><div><a>Términos</a><a>Privacidad</a><a>Política y seguridad</a> </div> <div><a>Cómo funciona YouTube</a></div><div><a>Probar funciones nuevas</a></div></div><div><a>© 2023 Google LLC</a></div></footer>`
    console.log(document.getElementById("dots-content"));
    //dotsContent = document.getElementById("dots-content");
  }
  else{
    topNav.innerHTML = `<div class="yt-menu"> <button class="navicons" id="burguer-menu"><a href=""><img src="img/Navbar/3 bars.PNG" class="burguer-menu"/></a></button><button id="yt-icon"><a href="./index.html"><img src="img/Navbar/youtube icon.PNG" class=> </a></button></div><div class="nav-center"><div class="Searchbar"><input type="text" placeholder="Search" id="Searchbar" /><button id="Searchbutton"><a href="#"><img src="img/Navbar/search.PNG" /></a></button></div><button class="navicons" id="Navmic"><a href=""> <img src="img/Navbar/mic.PNG" /></a></button></div><div class="nav-right-side"><div><select  id="dots-content"><option  value="English" >Inglés</option><option  value="Spanish" selected="selected">Español</option></select ></div><button id="sign-in" style="width: 150px"><a href=""><img src="img/Navbar/sign in.PNG" class="sign-in-pic" /><label id="sign-in-label">Sign in</label></a></button> </div></div>`;
    
    sideNav.innerHTML = `<a href="./index.html"
    ><img
      src="./img/sidebar-imgs/home.png"
      class="sidebar-icons"
    />Home</a
  >
  <a href="./pages/shorts.html"
    ><img
      src="./img/sidebar-imgs/shorts.png"
      class="sidebar-icons"
    />Shorts</a
  >
  <a href="./pages/subsvideo.html"
    ><img
      src="./img/sidebar-imgs/library.png"
      class="sidebar-icons"
    />Subscriptions</a
  >
  <hr />
  <a href="./pages/library.html"
    ><img
      src="./img/sidebar-imgs/subscriptions.png"
      class="sidebar-icons"
    />Library</a
  >
  <a href="./pages/history.html"
    ><img
      src="./img/sidebar-imgs/history.png"
      class="sidebar-icons"
    />History</a
  >
  <a href=""
    ><img
      src="./img/sidebar-imgs/your-videos.png"
      class="sidebar-icons"
    />Your videos</a
  >
  <a href="./pages/watch-later.html"
    ><img
      src="./img/sidebar-imgs/watch-later.png"
      class="sidebar-icons"
    />Watch later</a
  >
  <a href="./pages/liked-videos.html"
    ><img
      src="./img/sidebar-imgs/liked-videos.png"
      class="sidebar-icons"
    />Liked videos</a
  >
  <a href=""
    ><img
      src="./img/sidebar-imgs/show-more.png"
      class="sidebar-icons"
    />Show more</a
  >

  <hr />
  <p>Subscriptions</p>

  <a href="./pages/channel-page.html"
    ><img src="./img/sidebar-imgs/cansungur.png" />Can Sungur ve Y...</a
  >
  <a href="./pages/channel-page.html"><img src="./img/sidebar-imgs/purplebixi.png" />PurpleBixi</a>
  <a href="./pages/channel-page.html"
    ><img src="./img/sidebar-imgs/evrimagaci.png" />Evrim Ağacı</a
  >
  <a href="./pages/channel-page.html"><img src="./img/sidebar-imgs/flutv.png" />Flu TV</a>
  <a href=""
    ><img src="./img/sidebar-imgs/dedelersofrasi.png" />Dedeler Sofrası</a
  >
  <a href="./pages/channel-page.html"
    ><img src="./img/sidebar-imgs/filmler2.png" />Filmler ve Filimler</a
  >
  <a href="./pages/channel-page.html"><img src="./img/sidebar-imgs/t1.png" />T1</a>
  <a href="./pages/channel-page.html"
    ><img src="./img/sidebar-imgs/show-more.png" />Show 144 more</a
  >

  <hr />
  <p>Explore</p>
  <a href="./pages/trending.html"
    ><img src="./img/sidebar-imgs/trending.png" />Trending</a
  >
  <a href="./pages/music.html"
    ><img src="./img/sidebar-imgs/music.png" />Music</a
  >
  <a href="./pages/live.html"
    ><img src="./img/sidebar-imgs/live.png" />Live</a>
  <a href="./pages/gaming.html"
    ><img src="./img/sidebar-imgs/gaming.png" />Gaming</a>
  <a href="./pages/sports.html"
    ><img src="./img/sidebar-imgs/sports.png" />Sports</a
  >

  <footer>
    <div>
      <div>
        <a>About</a>
        <a>Press</a>
        <a>Copyright</a>
      </div>
      <div>
        <a>Contact us</a>
        <a>Creator</a>
        <a>Adversite</a>
      </div>
      <div>
        <a>Developers</a>
      </div>
    </div>
    <div>
      <div>
        <a>Terms</a>
        <a>Privacy</a>
        <a>Policy & Safety</a>
      </div>
      <div><a>How YouTube works</a></div>
      <div><a>Test new features</a></div>
    </div>
    <div>
      <a>© 2023 Google LLC</a>
    </div>
  </footer>`
  dotsContent = document.getElementById("dots-content");
  }

  //console.log(dotsContent);
});
