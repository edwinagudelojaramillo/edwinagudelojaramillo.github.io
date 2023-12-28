(() => { const // mobile menu setup
    btn = document.querySelector('header#main>.menu'),
    navbar = document.querySelector('header#main>nav');
  let active = false;
  btn.onclick = ev => {
    if (!active) {
      navbar.style.visibility = '';
      btn.style = '';
      navbar.children[0].style.opacity = '';
    }else {
      navbar.style.visibility = 'visible';
      btn.style = `
        width: 20px;
        height: 35px;
        margin-right: 28px;
      `;
      navbar.children[0].style.opacity = 1;
    };
    active = !active;
  }
})();

(() => { // efecto maquina de escribit titulo
  const main_title = document.querySelector('#home>.name>h1');

  let i=0; active=false;
  if (!active) {
    active = true;
    const
      text = 'servicios digitales a tu medida',
      animate = ev => {
        if (active && i < text.length) {
          main_title.onmouseenter = () => {};
          let j=1; const shadowLoop = setInterval(() => {
            main_title.style.textShadow = `
              0 0 ${j*2}px white,
              0 0 ${j*3}px white,
              0 0 ${j*4}px white`;
            j++;
            if (j === 10) {
              clearInterval(shadowLoop);
            };
          }, 30);
          setTimeout(() => {
            main_title.style.textShadow = `none`;
            main_title.style.borderBottom = '1px solid white';
            animateFunction(text);
          }, 5e2);

        };
      },
      animateFunction = text => {
        main_title.innerHTML = '';
        const loop = setInterval(() => {
          main_title.innerHTML += text[i];
          i++;
          if (i === text.length) {
            clearInterval(loop);
            active = false;
            i = 0;
          };
        }, 100);
      };
    main_title.onmouseenter = animate;
  }
})();

(() => { const // setup view_more buttons
    btn = [
      document.querySelector('.one>.left>.view_more>button'),
      document.querySelector('.two>.left>.view_more>button')
    ],
    active_view = [false, false],
    read_more = [
      /* one */ ev => {
        if (!active_view[0]) {
          const text = `<div><br>
            <i>me presento, mi nombre es</i><br>
            <h2 style="
              color: rgba(255, 217, 0, 8);
              font-size: 2em;
            "> Edwin Agudelo </h2>
            <i>y soy:</i><br>
            <i>· Diseñador gráfico ·</i><br>
            <i  style="font-size: 1.2em;">· Programador Web ·</i><br>
            <i style="
              color: rgba(255, 217, 0, 8);
              font-size: 1.2em;
            ">· JavaScript FullStack Developer ·</i><br>
            <i>· Administrador de sistemas informaticos ·</i><br>
            <i>· Experto en servicios digitales ·</i><br>
            <i>· ... y un poco de todo ... ·</i><br>
            <div style="
              font-size: .8em;
              margin-top: 20px;
            "><i>
              ... y le dijo el aprendiz al maestro ...<br>
              · maestro, ¿qué es la rutina?<br>
              ... y entonces, este respondió ...<br><br>
              « es la llave con la que apasionas tu vida »<br>
              « tira la llave que cierra tu mente »<br>
              « abre tu mente, y reconoce tu llave »<br>
              « así podrás saborear cada instante de tu vida »<br>
            </i></div><br>
          </div>`;
          document.querySelector('.one>.right').innerHTML = text;
          document.querySelector('.one>.right').style.opacity = 1;
          btn[0].innerText = 'ver menos';
        }else {
          document.querySelector('.one>.right').innerHTML = '';
          document.querySelector('.one>.right').style.opacity = 0;
          btn[0].innerText = 'ver más';
        }
        active_view[0] = !active_view[0];
      },
      /* two */ ev => {
        if (!active_view[1]) {
          
        }
      }
    ];

  btn[0].onclick = read_more[0];
  /* btn[1].onclick = read_more[1]; */
})();

(() => { const // setup portfolio images
    selectors = document.querySelectorAll('.three>.selectors>ul>li>i'),
    project_template = `
      <div [type] class="project">
        <img src="[img]" alt="proyecto">
        <div class="info"><br>
          <div class="title">
            <h3><a href="/[project]"> [title] </a></h3>
          </div><br>
          <div class="description">
            <p> [description] </p>
          </div>
        </div>
      </div>
    `,
    projects_list = [
      {
        type: 'web',
        project: 'abogacia/1',
        img: 'abogacia_1.png',
        title: 'abogacia 1',
        description: 'Innovador portal legal: Acceso instantáneo. Demuestra tú asesoría experta, soluciones jurídicas eficientes. Transforma tú experiencia legal online.'
      },
      {
        type: 'web',
        project: 'abogacia/2',
        img: 'abogacia_2.png',
        title: 'abogacia 2',
        description: 'Demuestra tus estrategias vanguardistas, consultoría especializada, representación sólida. Revoluciona la justicia digital.'
      },
      {
        type: 'web',
        project: 'hosting',
        img: 'hosting.png',
        title: 'hoteleria / residencia',
        description: 'Residencia turística de lujo: Estilo incomparable, servicios exclusivos, experiencias inolvidables. Elevamos el arte de hospedaje vacacional.'
      },
      {
        type: 'web',
        project: 'cea',
        img: 'cea.png',
        title: 'centro electrico automotriz',
        description: 'Tarjeta digital de taller especializado, con los mas profesionales servicios de electricidad automotriz de alta calidad para garantizar el rendimiento óptimo de tu vehículo.'
      },
      /*{
        type: 'web',
        project: 'yarli_botero_accesorios',
        img: 'yba.png',
        title: 'yarli botero accesorios',
        description: 'Diseño web exclusivo para joyería. Elegancia digital que realza la belleza artesanal de cada pieza única.'
      },*/
      {
        type: 'logo',
        project: '#',
        img: 'beast_barber.jpg',
        title: 'beast barber',
        description: 'Logo digital de barbería: Estilo distintivo, precisión gráfica, reflejo de la maestría. Definimos profesionalismo visual único.'
      },
      {
        type: 'web',
        project: 'menu/simple',
        img: 'menu_simple.jpg',
        title: 'menu restaurante simple',
        description: 'Logo digital de barbería: Estilo distintivo, precisión gráfica, reflejo de la maestría. Definimos profesionalismo visual único.'
      },
      {
        type: 'web',
        project: 'menu/noche_estrellada',
        img: 'menu_noche_estrellada.jpg',
        title: 'menu restaurante noche estrellada',
        description: 'Logo digital de barbería: Estilo distintivo, precisión gráfica, reflejo de la maestría. Definimos profesionalismo visual único.'
      },
      {
        type: 'web',
        project: 'tienda_tenis',
        img: 'tienda_de_tenis_online.jpg',
        title: 'tienda de tenis online',
        description: 'tienda de tenis online, con tema simple y elegante, resaltando la presentacion de cada producto. Perfecto para tiendas y negocios de productos esteticos, ropa y calzado.'
      }
    ];

    projects_list.forEach((project, i) => {
      document.querySelector('.three>.projects').innerHTML += project_template
        .replace('[type]', project.type)
        .replace('[img]', project.img)
        .replace('[project]', project.project)
        .replace('[title]', project.title)
        .replace('[description]', project.description);
    });
  
  const projects = document.querySelectorAll('.three>.projects>.project');
  let active = 'all';
  selectors.forEach(selector => selector.onclick = ev => {
    active = selector.getAttribute('select');
    projects.forEach(project => {
      if (active === 'all') {
        project.style.display = '';
      }else {
        project.attributes.hasOwnProperty(active)
        ? project.style.display = ''
        : project.style.display = 'none';
      };
    });
  });
})();

/* (() => { const // setup contact form
    name = document.querySelector('input[name]'),
    contact = document.querySelector('input[contact]'),
    message = document.querySelector('input[message]'),
    send_btn = document.querySelector('.send_message>button');
  send_btn.onclick = async ev => {
    const obj = {
      name: name.value,
      contact: contact.value,
      message: message.value,
    };
    const response = await (await fetch('https://edwinagudelojaramillo.loca.lt', { headers: {
        aj: 'enabled', 'Bypass-Tunnel-Reminder': 'secured', 'Content-Type': 'application/json'
      }, method: 'POST', body: JSON.stringify(obj)
    })).json();
    console.log(response);
  };
})(); */
