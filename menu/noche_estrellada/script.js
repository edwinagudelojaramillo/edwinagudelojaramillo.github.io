const productos = [
  { id: 1, titulo: 'Panettone Italiano', descripcion: 'Un pan dulce de frutas originario de Italia.', imagen: 'panettone.jpg' },
  { id: 2, titulo: 'Turrón Español', descripcion: 'Dulce a base de almendras y miel originario de España.', imagen: 'turron.jpg' },
  { id: 3, titulo: 'Stollen Alemán', descripcion: 'Pan de frutas alemán con frutas secas y glaseado.', imagen: 'stollen.jpg' },
  { id: 4, titulo: 'Buche de Noël Francés', descripcion: 'Pastel en forma de tronco de Navidad de la repostería francesa.', imagen: 'buche.jpg' },
  { id: 5, titulo: 'Pavo Relleno', descripcion: 'Pavo asado y relleno con hierbas y especias.', imagen: 'pavo.jpg' },
  { id: 6, titulo: 'Galletas de Jengibre', descripcion: 'Galletas con forma de personas o figuras navideñas.', imagen: 'galletas_jengibre.jpg' },
  { id: 7, titulo: 'Candy Canes', descripcion: 'Bastones de caramelo con sabor a menta y rayas rojas y blancas.', imagen: 'candy_canes.jpg' },
  { id: 8, titulo: 'Gingerbread House', descripcion: 'Casas de jengibre decoradas con glaseado y caramelos.', imagen: 'gingerbread_house.jpg' },
  { id: 9, titulo: 'Roscón de Reyes Español', descripcion: 'Rosca decorada con frutas confitadas, consumida en el Día de Reyes.', imagen: 'roscón_reyes.jpg' },
  { id: 10, titulo: 'Eggnog', descripcion: 'Bebida a base de huevo, leche y ron, tradicional en Estados Unidos y Canadá.', imagen: 'eggnog.jpg' },
  { id: 11, titulo: 'Oliebollen Holandés', descripcion: 'Bolas de masa frita espolvoreadas con azúcar glas.', imagen: 'oliebollen.jpg' },
  { id: 12, titulo: 'Kransekake Noruego', descripcion: 'Pastel de anillos apilados, tradicional en Noruega.', imagen: 'kransekake.jpg' },
  { id: 13, titulo: 'Pernil Venezolano', descripcion: 'Carne de cerdo asada, un plato típico de la cena navideña en Venezuela.', imagen: 'pernil.jpg' },
  { id: 14, titulo: 'Colomba Italiana', descripcion: 'Pastel italiano similar al panettone pero con forma de paloma.', imagen: 'colomba.jpg' },
  { id: 15, titulo: 'Sarmale Rumano', descripcion: 'Hoja de parra rellena de carne y arroz, una tradición rumana.', imagen: 'sarmale.jpg' },
  { id: 16, titulo: 'Kulkuls Indio', descripcion: 'Dulce indio frito en forma de rizo, popular durante las festividades.', imagen: 'kulkuls.jpg' },
  { id: 17, titulo: 'Buñuelos de Viento Español', descripcion: 'Masas fritas esponjosas, a menudo espolvoreadas con azúcar.', imagen: 'buñuelos_viento.jpg' },
  { id: 18, titulo: 'Sufganiyah Israelí', descripcion: 'Rosquilla rellena de mermelada, consumida en Hanukkah.', imagen: 'sufganiyah.jpg' },
  { id: 19, titulo: 'Bacalao a la Vizcaína Español', descripcion: 'Plato español a base de bacalao con salsa de tomate y pimientos.', imagen: 'bacalao_vizcaina.jpg' },
  { id: 20, titulo: 'Kartoffelsalat Alemán', descripcion: 'Ensalada de papas alemana servida como acompañamiento.', imagen: 'kartoffelsalat.jpg' },
  { id: 21, titulo: 'Coquito Puertorriqueño', descripcion: 'Bebida a base de coco, ron y especias, popular en Puerto Rico.', imagen: 'coquito.jpg' },
  { id: 22, titulo: 'Pavlova Australiana', descripcion: 'Merengue crujiente con crema y frutas, un postre australiano.', imagen: 'pavlova.jpg' },
  { id: 23, titulo: 'Pudín de Ciruela Inglés', descripcion: 'Pudín a base de ciruelas y especias, un clásico inglés.', imagen: 'pudin_ciruela.jpg' },
  { id: 24, titulo: 'Caponata Siciliana', descripcion: 'Ensalada siciliana a base de berenjenas y otros vegetales.', imagen: 'caponata.jpg' },
  { id: 25, titulo: 'Kutia Ucraniana', descripcion: 'Pudín ucraniano a base de trigo, miel y frutas secas.', imagen: 'kutia.jpg' },
  { id: 26, titulo: 'Pavo al Horno con Castañas', descripcion: 'Pavo asado con relleno de castañas, una tradición en muchas cocinas.', imagen: 'pavo_castañas.jpg' },
  { id: 27, titulo: 'Sushi de Navidad Japonés', descripcion: 'Variedades de sushi decoradas con motivos navideños.', imagen: 'sushi_navidad.jpg' },
  { id: 28, titulo: 'Bibingka Filipino', descripcion: 'Pastel de arroz filipino horneado con leche de coco.', imagen: 'bibingka.jpg' },
  { id: 29, titulo: 'Pozole Mexicano', descripcion: 'Sopa espesa a base de maíz hominy, carne y condimentos.', imagen: 'pozole.jpg' },
  { id: 30, titulo: 'Gâteau des Rois Francés', descripcion: 'Pastel francés en forma de rosca para celebrar el Día de Reyes.', imagen: 'gateau_rois.jpg' },
  { id: 31, titulo: 'Heringssalat Alemán', descripcion: 'Ensalada alemana de arenque con manzanas y encurtidos.', imagen: 'heringssalat.jpg' },
  { id: 32, titulo: 'Bolo Rei Portugués', descripcion: 'Pastel portugués con frutas y frutos secos, servido en Navidad.', imagen: 'bolo_rei.jpg' },
  { id: 33, titulo: 'Salmon Gravlax Sueco', descripcion: 'Salmón marinado con eneldo y azúcar, una delicia sueca.', imagen: 'gravlax.jpg' },
  { id: 34, titulo: 'Pudín de Pan Americano', descripcion: 'Pudín a base de pan, leche y especias, popular en América.', imagen: 'pudin_pan.jpg' },
  { id: 35, titulo: 'Lechon Asado Filipino', descripcion: 'Cerdo asado a la parrilla, un festín filipino.', imagen: 'lechon_asado.jpg' },
  { id: 36, titulo: 'Doro Wat Etíope', descripcion: 'Estofado etíope de pollo picante y sabroso.', imagen: 'doro_wat.jpg' },
  { id: 37, titulo: 'Mince Pies Británicos', descripcion: 'Pequeñas tartas británicas rellenas de carne picada y frutas secas.', imagen: 'mince_pies.jpg' },
  { id: 38, titulo: 'Tamal Mexicano', descripcion: 'Masa rellena de carne y envuelta en hojas de maíz, un clásico mexicano.', imagen: 'tamal.jpg' },
  { id: 39, titulo: 'Pasta con Sardinas Italiana', descripcion: 'Plato italiano con sardinas, pan rallado y pasas.', imagen: 'pasta_sardinas.jpg' },
  { id: 40, titulo: 'Chocolate Caliente Mexicano', descripcion: 'Bebida espesa a base de chocolate, canela y especias.', imagen: 'chocolate_caliente.jpg' },
  { id: 41, titulo: 'Baklava Griego', descripcion: 'Postre griego de capas de masa filo, nueces y miel.', imagen: 'baklava.jpg' },
  { id: 42, titulo: 'Tourtière Canadiense', descripcion: 'Pastel de carne canadiense tradicionalmente servido en Navidad.', imagen: 'tourtiere.jpg' },
  { id: 43, titulo: 'Ensalada Rusa Rusa', descripcion: 'Ensalada de verduras con mayonesa, popular en la cocina rusa.', imagen: 'ensalada_rusa.jpg' },
  { id: 44, titulo: 'Sopa de Lentejas de Año Nuevo', descripcion: 'Sopa de lentejas servida como plato de Año Nuevo en Italia.', imagen: 'sopa_lentejas.jpg' },
  { id: 45, titulo: 'Pescado Ahumado Sueco', descripcion: 'Pescado ahumado servido con pan y condimentos en Suecia.', imagen: 'pescado_ahumado.jpg' },
  { id: 46, titulo: 'Makowiec Polaco', descripcion: 'Pastel polaco de semillas de amapola y frutas secas.', imagen: 'makowiec.jpg' },
  { id: 47, titulo: 'Nougat Francés', descripcion: 'Dulce de almendra y miel, una delicia francesa.', imagen: 'nougat.jpg' },
  { id: 48, titulo: 'Frittelle Italiano', descripcion: 'Buñuelos italianos fritos, a menudo rellenos de crema.', imagen: 'frittelle.jpg' },
  { id: 49, titulo: 'Zelnik Búlgaro', descripcion: 'Pastel búlgaro relleno de col y carne.', imagen: 'zelnik.jpg' },
  { id: 50, titulo: 'Pollo Asado con Castañas', descripcion: 'Pollo asado con relleno de castañas, una opción festiva.', imagen: 'pollo_castañas.jpg' }
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
      titulo.textContent = producto.titulo;

      const descripcion = document.createElement('p');
      descripcion.classList.add('product-description');
      descripcion.textContent = producto.descripcion;

      card.appendChild(imagen);
      card.appendChild(titulo);
      card.appendChild(descripcion);

      container.appendChild(card);
  });
}

// Llamada inicial para mostrar productos en la primera página
mostrarProductos(1, 8);

// Función para generar la paginación
function generarPaginacion(totalProductos, pageSize) {
  const totalPages = Math.ceil(totalProductos / pageSize);
  const paginationContainer = document.getElementById('pagination');

  for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;

      button.addEventListener('click', () => {
          mostrarProductos(i, pageSize);
      });

      paginationContainer.appendChild(button);
  }
}

// Llamada para generar la paginación (asumiendo 50 productos en total y 8 productos por página)
generarPaginacion(50, 8);