
(function() { const
    select = element => document.querySelector(element),

    animate = {

      welcome(ev) {
        if (!active.welcome) {
          active.welcome = true;
          const
            title = select(`#welcome>.title`),
            details = select(`#welcome>.details`);
          (() => {  // title
            title.children[0].innerHTML = 'bienvenido';
            title.style.transition = 'all 2s';
            setTimeout(() => {
              title.style.left = 0;
              title.style.opacity = 1;
            }, 1);
        
            setTimeout(() => {
              title.style.opacity = 0;
            }, 25e2);
        
            setTimeout(() => {
              title.children[0].innerHTML = 'a nuestro segundo hogar';
              title.style.opacity = 1;
            }, 45e2);
        
            setTimeout(() => {
              title.style.opacity = 0;
            }, 65e2);
        
            setTimeout(() => {
              title.children[0].innerHTML = 'Yarli Botero Accesorios';
              title.style.opacity = 1;
            }, 85e2);
        
            setTimeout(() => (title.style.top = 0), 9e3);
          })();
        
          (() => { // details
            details.style.transition = 'all 2s';
            setTimeout(() => {
              details.style.left = 0;
              details.style.opacity = 1;
            }, 1e4);
          })();
        }
      },
      pys(ev) {
        if (!active.pys) {
          active.pys = true;
          const
            title = select(`#pys>.title`),
            details = select(`#pys>.details`);
          (() => {  // title
            title.children[0].innerHTML = 'ofrecemos cálidad';
            title.style.transition = 'all 2s';
            setTimeout(() => {
              title.style.left = 0;
              title.style.opacity = 1;
            }, 1);
        
            setTimeout(() => {
              title.style.opacity = 0;
            }, 25e2);
        
            setTimeout(() => {
              title.children[0].innerHTML = 'cada producto lo hacemos con amor';
              title.style.opacity = 1;
            }, 45e2);
        
            setTimeout(() => {
              title.style.opacity = 0;
            }, 65e2);
        
            setTimeout(() => {
              title.children[0].innerHTML = 'Estos son algunos de nuestros productos';
              title.style.opacity = 1;
            }, 85e2);
        
            setTimeout(() => (title.style.top = 0), 9e3);
          })();
        
        
        
          (() => { // details
            details.style.transition = 'left 2s, opacity 2.5s';
            setTimeout(() => {
              details.style.left = 0;
              details.style.opacity = 1;
            }, 1e4);
          })();
        }
      },
      about(ev) {
        if (!active.about) {
          active.about = true;
          const
            title = select(`#about>.title`),
            details = select(`#about>.details`);
          (() => {  // title
            title.children[0].innerHTML = '¿sobre nosotros?';
            title.style.transition = 'all 2s';
            setTimeout(() => {
              title.style.left = 0;
              title.style.opacity = 1;
            }, 1);
        
            setTimeout(() => {
              title.style.opacity = 0;
            }, 25e2);
        
            setTimeout(() => {
              title.children[0].innerHTML = '¡ por supuesto !';
              title.style.opacity = 1;
            }, 45e2);
        
            setTimeout(() => {
              title.style.opacity = 0;
            }, 65e2);
        
            setTimeout(() => {
              title.children[0].innerHTML = 'Permitenos contarte más acerca de nosotros';
              title.style.opacity = 1;
            }, 85e2);
        
            setTimeout(() => (title.style.top = 0), 9e3);
          })();
        
        
        
          (() => { // details
            details.style.transition = 'all 2s';
            setTimeout(() => {
              details.style.left = 0;
              details.style.opacity = 1;
            }, 1e4);
          })();
        }
      },
      contact(ev) {
        if (!active.contact) {
          active.contact = true; 
          const
            title = select(`#contact>.title`),
            details = select(`#contact>.details`);
          (() => {  // title
            title.children[0].innerHTML = '! contactanos ¡';
            title.style.transition = 'all 2s';
            setTimeout(() => {
              title.style.left = 0;
              title.style.opacity = 1;
            }, 1);
        
            setTimeout(() => {
              title.style.opacity = 0;
            }, 25e2);
        
            setTimeout(() => {
              title.children[0].innerHTML = 'estos son nuestros medios de contacto';
              title.style.opacity = 1;
            }, 45e2);
        
            setTimeout(() => (title.style.top = 0), 5e3);
          })();
        
        
        
          (() => { // details
            details.style.transition = 'all 2s';
            setTimeout(() => {
              details.style.left = 0;
              details.style.opacity = 1;
            }, 55e2);
          })();
        }
      }

    },
    
    active = {
      welcome: false,
      pys: false,
      about: false,
      contact: false
    }

    link = section => select(`a[href="#${section}"]`),

    section = id => select(`#${id}`),

    body = select('#body');



  animate.welcome();
  link('welcome').onclick = animate.welcome;
  link('pys').onclick = animate.pys;
  link('about').onclick = animate.about;
  link('contact').onclick = animate.contact;

  body.onscroll = ev => {


    if (
      body.scrollTop >= section('welcome').offsetTop/2
      && body.scrollTop < section('pys').offsetTop/2
    ) {
      animate.welcome();
    };

    if (
      body.scrollTop >= section('pys').offsetTop/2
      && body.scrollTop < section('about').offsetTop/2
    ) {
      animate.pys();
    }

    if (
      body.scrollTop >= section('about').offsetTop/1.5
      && body.scrollTop < section('contact').offsetTop/2
    ) {
      animate.about();
    }

    if (body.scrollTop >= section('contact').offsetTop) {
      animate.contact();
    }

  };


  if (window.innerWidth >= window.innerHeight) {
    select('header#main').style = 'height: auto; padding-top: 0;';
  };
  window.onresize = ev => {
    if (window.innerWidth >= window.innerHeight) {
      select('header#main').style = 'height: auto; padding-top: 0;';
    };
  };
  
  if (window.innerWidth >= window.innerHeight) {
    select('#pys').style.height = 'auto';
  };

})();
