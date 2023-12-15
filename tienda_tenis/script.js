(() => {  // paginacion
  const productos = [
    /* Tienda Online Manizales 314 555 3813 */
    {
      id: 1,
      para: 'mujer',
      titulo: 'Adidas trenza blancos para dama',
      precio: '200.000',
      descripcion: 'Espectacular par de tenis blancos para mujer, perfectos para regalar en esta navidad',
      imagen: 'adidas_trenza_blancos_dama.jpg'
    },
    {
      id: 2,
      para: 'hombre',
      titulo: 'puma roma hombre',
      precio: '198.000',
      descripcion: 'perfectos para lucir este 24 de diciembre, lleva contigo el espiritu navideño desde tus pies',
      imagen: 'puma_roma_hombre.jpg'
    },
    {
      id: 3,
      para: 'mujer',
      titulo: 'adidas fashión dama',
      precio: '190.000',
      descripcion: '¿deseas atraer las miradas este diciembre?,<br>enseña tú mejor look con estos tenis fashión dama',
      imagen: 'adidas_fashion_dama.jpg'
    },
    {
      id: 4,
      para: 'mujer',
      titulo: 'adidas surk dama blanco',
      precio: '190.000',
      descripcion: 'perfectos para lucir este 24 de diciembre, lleva contigo el espiritu navideño desde tus pies',
      imagen: 'adidas_surk_dama_blanco.jpg'
    },
    {
      id: 5,
      para: 'mujer',
      titulo: 'adidas surk dama blanco y negro',
      precio: '190.000',
      descripcion: 'perfectos para lucir este 24 de diciembre, lleva contigo el espiritu navideño desde tus pies',
      imagen: 'adidas_surk_dama_blanco_negro.jpg'
    },
    {
      id: 6,
      para: 'hombre',
      titulo: 'jordan retro 11 low blanco / naranja hombre',
      precio: '240.000',
      descripcion: 'demuestra ese espiritu competitivo con nuestros jordan retro 11 low',
      imagen: 'jordan_retro_11_low_blanco_naranja_hombre.jpg'
    },
    {
      id: 7,
      para: 'hombre',
      titulo: 'jordan retro 11 low negro / rojo hombre',
      precio: '240.000',
      descripcion: 'demuestra ese espiritu competitivo con nuestros jordan retro 11 low',
      imagen: 'jordan_retro_11_low_negro_rojo_hombre.jpg'
    },
    {
      id: 8,
      para: 'hombre',
      titulo: 'jordan retro 11 low blanco / negro hombre',
      precio: '240.000',
      descripcion: 'demuestra ese espiritu competitivo con nuestros jordan retro 11 low',
      imagen: 'jordan_retro_11_low_blanco_negro_hombre.jpg'
    },
    {
      id: 9,
      para: 'hombre',
      titulo: 'jordan retro 11 low blanco / lima hombre',
      precio: '240.000',
      descripcion: 'demuestra ese espiritu competitivo con nuestros jordan retro 11 low',
      imagen: 'jordan_retro_11_low_blanco_lima_hombre.jpg'
    },
    {
      id: 9,
      para: 'hombre',
      titulo: 'jordan retro 11 low blanco / rojo hombre',
      precio: '240.000',
      descripcion: 'demuestra ese espiritu competitivo con nuestros jordan retro 11 low',
      imagen: 'jordan_retro_11_low_blanco_rojo_hombre.jpg'
    },
    {
      id: 10,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '280.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_1.jpg'
    },
    {
      id: 11,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '280.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_2.jpg'
    },
    {
      id: 12,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '280.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_3.jpg'
    },
    {
      id: 13,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '280.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_4.jpg'
    },
    {
      id: 14,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '320.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_5.jpg'
    },
    {
      id: 15,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '320.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_6.jpg'
    },
    {
      id: 16,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '320.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_7.jpg'
    },
    {
      id: 17,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '320.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_8.jpg'
    },
    {
      id: 18,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '320.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_9.jpg'
    },
    {
      id: 19,
      para: 'hombre',
      titulo: 'jordan hombre',
      precio: '320.000',
      descripcion: 'demuestra tú estilo con estos jordan hombre tan llamativos',
      imagen: 'jordan_hombre_10.jpg'
    },
    {
      id: 20,
      para: 'mujer',
      titulo: 'adidas drop dama',
      precio: '180.000',
      descripcion: '¿te gusta un estilo suave?, estos adidas drop dama son perfectos para combinar con tus hermosos gustos',
      imagen: 'adidas_drop_dama_1.jpg'
    },
    {
      id: 21,
      para: 'mujer',
      titulo: 'adidas drop dama',
      precio: '180.000',
      descripcion: '¿te gusta un estilo mas deportivo?, estos adidas drop dama son perfectos para combinar con tus perfectos gustos',
      imagen: 'adidas_drop_dama_2.jpg'
    },
    {
      id: 22,
      para: 'mujer',
      titulo: 'nike cortez dama',
      precio: '190.000',
      descripcion: 'estos increibles nike cortez dama luciran perfectos con cada una de tus hermosas facetas',
      imagen: 'nike_cortez_dama_1.jpg'
    },
    {
      id: 23,
      para: 'mujer',
      titulo: 'nike cortez dama',
      precio: '190.000',
      descripcion: 'estos increibles nike cortez dama luciran perfectos con cada una de tus hermosas facetas',
      imagen: 'nike_cortez_dama_2.jpg'
    },
    {
      id: 24,
      para: 'mujer',
      titulo: 'nike cortez dama',
      precio: '190.000',
      descripcion: 'estos increibles nike cortez dama luciran perfectos con cada una de tus hermosas facetas',
      imagen: 'nike_cortez_dama_3.jpg'
    },
    {
      id: 24,
      para: 'unisex',
      titulo: 'nike sb remastered dama y hombre',
      precio: '189.900',
      descripcion: 'increibles tenis unisex, para combinar con todo tipo de vestuario deportivo, formal o elegante',
      imagen: 'nike_sb_remastered_dama_hombre.jpg'
    },
    {
      id: 25,
      para: 'hombre',
      titulo: 'hugo boss hombre',
      precio: '235.000',
      descripcion: 'demuestra la cálidad de tu personalidad con estos increibles tenis hugo boss',
      imagen: 'hugo_boss_hombre_1.jpg'
    },
    {
      id: 26,
      para: 'hombre',
      titulo: 'hugo boss hombre',
      precio: '235.000',
      descripcion: 'demuestra la cálidad de tu personalidad con estos increibles tenis hugo boss',
      imagen: 'hugo_boss_hombre_2.jpg'
    },
    {
      id: 27,
      para: 'hombre',
      titulo: 'hugo boss hombre',
      precio: '235.000',
      descripcion: 'demuestra la cálidad de tu personalidad con estos increibles tenis hugo boss',
      imagen: 'hugo_boss_hombre_3.jpg'
    },
    {
      id: 28,
      para: 'hombre',
      titulo: 'hugo boss hombre',
      precio: '235.000',
      descripcion: 'demuestra la cálidad de tu personalidad con estos increibles tenis hugo boss',
      imagen: 'hugo_boss_hombre_4.jpg'
    },
    {
      id: 29,
      para: 'hombre',
      titulo: 'hugo boss hombre',
      precio: '235.000',
      descripcion: 'demuestra la cálidad de tu personalidad con estos increibles tenis hugo boss',
      imagen: 'hugo_boss_hombre_5.jpg'
    },
    {
      id: 30,
      para: 'hombre',
      titulo: 'nike air max',
      precio: '285.000',
      descripcion: 'si te gusta estar a otro nivel, estos increibles nike air max te llevaran hasta donde desees llegar',
      imagen: 'nike_air_max_1.jpg'
    },
    {
      id: 31,
      para: 'hombre',
      titulo: 'nike air max',
      precio: '285.000',
      descripcion: 'si te gusta estar a otro nivel, estos increibles nike air max te llevaran hasta donde desees llegar',
      imagen: 'nike_air_max_2.jpg'
    },
    {
      id: 32,
      para: 'hombre',
      titulo: 'nike air max',
      precio: '285.000',
      descripcion: 'si te gusta estar a otro nivel, estos increibles nike air max te llevaran hasta donde desees llegar',
      imagen: 'nike_air_max_3.jpg'
    },
    {
      id: 33,
      para: 'hombre',
      titulo: 'nike air max',
      precio: '285.000',
      descripcion: 'si te gusta estar a otro nivel, estos increibles nike air max te llevaran hasta donde desees llegar',
      imagen: 'nike_air_max_4.jpg'
    },
    {
      id: 34,
      para: 'mujer',
      titulo: 'adidas drop bota dama',
      precio: '275.000',
      descripcion: 'si te gusta la comodidad, estilo y elegancia, estos adidas drop bota para dama son exactamente lo que necesitas',
      imagen: 'adidas_drop_bota_dama_1.jpg'
    },
    {
      id: 35,
      para: 'mujer',
      titulo: 'adidas drop bota dama',
      precio: '275.000',
      descripcion: 'si te gusta la comodidad, estilo y elegancia, estos adidas drop bota para dama son exactamente lo que necesitas',
      imagen: 'adidas_drop_bota_dama_2.jpg'
    },
    {
      id: 36,
      para: 'mujer',
      titulo: 'adidas drop bota dama',
      precio: '275.000',
      descripcion: 'si te gusta la comodidad, estilo y elegancia, estos adidas drop bota para dama son exactamente lo que necesitas',
      imagen: 'adidas_drop_bota_dama_3.jpg'
    },
    {
      id: 37,
      para: 'mujer',
      titulo: 'adidas drop bota dama',
      precio: '275.000',
      descripcion: 'si te gusta la comodidad, estilo y elegancia, estos adidas drop bota para dama son exactamente lo que necesitas',
      imagen: 'adidas_drop_bota_dama_4.jpg'
    },
    {
      id: 38,
      para: 'hombre',
      titulo: 'nike zoom x<br>negro / dorado',
      precio: '315.000',
      descripcion: 'increibles nike zoom x para hombre, camina con todo el estilo que llevas dentro',
      imagen: 'nike_zoom_x_1.jpg'
    },
    {
      id: 39,
      para: 'hombre',
      titulo: 'nike zoom x<br>negro / rojo',
      precio: '315.000',
      descripcion: 'increibles nike zoom x para hombre, camina con todo el estilo que llevas dentro',
      imagen: 'nike_zoom_x_2.jpg'
    },
    {
      id: 40,
      para: 'mujer',
      titulo: 'nike zoom x',
      precio: '305.000',
      descripcion: 'increibles nike zoom x para mujer, camina con todo el estilo que llevas dentro',
      imagen: 'nike_zoom_x_3.jpg'
    }
    /* ################################################### */
  ];

  // Función para mostrar productos en la página
  function mostrarProductos(pageNumber, pageSize) {
    const container = document.getElementById('products');
    container.innerHTML = '';

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const productosPagina = productos.slice(startIndex, endIndex);

    productosPagina.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const imagen = document.createElement('img');
        imagen.src = `img/${producto.imagen}`;
        imagen.alt = producto.titulo;
        imagen.classList.add('product-image');

        const titulo = document.createElement('h2');
        titulo.classList.add('product-title');
        titulo.innerHTML = producto.titulo;

        const descripcion = document.createElement('p');
        descripcion.classList.add('product-description');
        descripcion.innerHTML = producto.descripcion;

        const precio = document.createElement('h3');
        precio.classList.add('product-price');
        precio.innerHTML = `$ ${producto.precio}`;
        

        card.appendChild(imagen);
        card.appendChild(titulo);
        card.appendChild(descripcion);
        card.appendChild(precio);

        container.appendChild(card);
    });
  }

  // Llamada inicial para mostrar productos en la primera página
  const products_per_page = 6;
  mostrarProductos(1, products_per_page);

  // Función para generar la paginación
  function generarPaginacion(total_products, products_per_page) {
    const totalPages = Math.ceil(total_products / products_per_page);
    const paginationContainer = document.getElementById('pagination');

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;

        button.addEventListener('click', () => {
            mostrarProductos(i, products_per_page);
        });

        paginationContainer.appendChild(button);
    }
  }

  // Llamada para generar la paginación (asumiendo 50 productos en total y 8 productos por página)
  generarPaginacion(productos.length, products_per_page);

})();