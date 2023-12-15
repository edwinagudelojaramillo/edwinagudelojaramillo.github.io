"use strict";

const
  header = document.querySelector('#header'),
  body = document.querySelector('#body'),
  footer = document.querySelector('#footer'),

themes = {

  desktop: {
    
    dark: {

      root: `
        font-family: monospace;
      `,
      all: `
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      `,
      body: `
        background: black;
        color: white;
      `,
  
      '#header': `
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 10vh;
        background: rgb(50,50,50);
      `,
        h1: 'text-align: center;',
        'nav ul': `
          display: flex;
          justify-content: space-evenly;
        `,
  
  
      '#body': `
        position: absolute;
        top: 10vh;
        left: 0;
        width: 100vw;
        height: 80vh;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 25px;
      `,
        '#body .background': `
          position: absolute;
          width: 100vw;
          height: 100vh;
        `,
        '#body .background img': `
          position: absolute;
          width: 100vw;
          height: 130vh;
        `,

        '.product': `
          position: relative;
          width: 500px;
          min-height: 150px;
          margin-bottom: 10px;
          display: flex;
          margin-bottom: 20px;
          justify-content: space-between;
          padding: 10px;
          border-radius: 15px;
          /* box-shadow: -3px 3px 2px 1px cyan; */
          border-bottom: 4px solid rgb(50,50,50);
        `,
        '.product:nth-child(even)': `
          flex-direction: row-reverse;
          /* box-shadow: 3px 3px 2px 1px cyan; */
        `,
        '.product:last-child': `
          border-bottom: none;
        `,
        '.info': `
          width: 50%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 5px;
          
        `,
        '.image': `
          position: relative;
          width: 45%;
          height: 100%;
        `,
        'img': `
          position: absolute;
          left: 0; right: 0;
          top: 0; bottom: 0;
          margin: auto;
          width: 100%;
          height: 100%;
          border-radius: 15px;
          object-fit: cover;
        `,
  
      '#footer': `
        position: absolute;
        top: 90vh;
        left: 0;
        width: 100vw;
        height: 10vh;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: rgb(50,50,50);
      `
  
    },
  
    light: {
      root: '',
      all: '',
    }

  },

  tablet: {},

  movile: {
    dark: {
      '.product': `
        flex-direction: column!important;
        align-items: center;
        min-height: 300px;
      `,
      '.product .info': `
        width: 60%;
      `,
      '.product .image': `
        width: 60%;
      `,
      '.product .image img': `
        height: 150px;
      `


    }
  }
  

},

setTheme = name => { const
    addStyle = (styles, StyleE) => {
      styles = typeof styles === 'string'
        ?JSON.parse(styles) :styles;
      const style = k => styles[k].replace(/  /g, '');
      StyleE.innerHTML = '';
      !!styles &&Object.keys(styles).map(k => 
        StyleE.innerHTML+= k === 'all'
          ? `*{${style(k)}}`
          : `${k === 'root'?':':''}${k}{${style(k)}}`
      );
    },
    styleElement = document.createElement('style'),
    defaultElement = document.createElement('style');
  defaultElement.classList.add('default');
  
  let device;
  window.innerWidth > 530 &&(device = 'desktop')
  window.innerWidth <= 530 &&(device = 'movile')
  /* window.innerWidth > 480 
  &&window.innerWidth < 720 &&(device = 'tablet') */
  

  addStyle(themes['desktop'][name], defaultElement);
  document.head.appendChild(defaultElement);

  if (device !== 'desktop') {
    addStyle(themes[device][name], styleElement);
    document.head.appendChild(styleElement);
  };

},

content = {
  
  header: (() => {
    let response = `
      <br>
      <h1>RESTAURANTE</h1>
      <nav><ul>
        <li><i> menu </i></li>
      </ul></nav>
    `;
    return response;
  })(),

  body: (() => {
    const products = ['hamburguesa', 'papa', 'burrito', 'hot_dog', 'google_map'];
    let response = `
      <div class="background">
        <img src="background.jpg" alt="menu restaurant">
      </div>
    `;

    products.map(product => {
      const name = `${!product.includes('_') ?product :product.replace('_', ' ')}s`;
      response += `
        <article class="product">
          <div class="info">
            <div class="titulo" id="${product}"><h3>· ${name.toUpperCase()} ·</h3></div>
            <div class="description" id="${product}">${

              product === 'hamburguesa' ?`
                ¡ con todas las de la ley !<br>
                venga y disfrute de las mas deliciosas hamburguesas de la ciudad.
                <br>
                precio: $ 14.000
              `
              
              :product === 'papa' ?`
                ¡ SI SEÑOR !<br>
                las mas crocantes, saladitas y sabrosas papás que haya probado.
                <br>
                precio: $7.000
              `

              :product === 'burrito' ?`
                ¡ INIGUALABLES !<br>
                Sabrosos burritos con explosión de sabores en cada bocado, venga y  a su familia y amigos con el este irresistible bocado.
                <br>
                precio: $11.000
              `
              
              :product === 'hot_dog' ?`
                ¡ IRRESISTIBLES !<br>
                una fiesta de sabor en cada mordisco, la delicia más sabrosa al alcance de un paladar
                <br>
                precio: $8.000
              `
              
              :product === 'google_map' &&`
                ven y encuentranos en [direccion]<br>
                o contactanos en nuestro whatsapp<br>
                [# de whatsapp]
              `
              
            }</div>
          </div>
          <div class="image" id="${product}"><img src="${product}.jpg" alt="${name}"></div>
        </article>
      `;
    });

    return response;

  })(),

  footer: (() => {
    let response = `
      « página de demostración »<br>
      <h5>2023@Edwin Agudelo. Pagina de demostración. derechos reservados.</h5>
    `;

    return response;

  })()
  
},
  
load = {

  component(name) {
    const section = document.querySelector(`#${name}`);
    
    section.innerHTML = content[name];

  }

},

init = async () => {

  setTheme('dark');

  load.component('header');
  load.component('body');
  load.component('footer');

};

document.addEventListener('DOMContentLoaded', init);