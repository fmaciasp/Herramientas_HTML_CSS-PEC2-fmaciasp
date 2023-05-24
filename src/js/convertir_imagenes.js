import imagemin from '../../node_modules/imagemin/index.js';
import imageminWebp from '../../node_modules/imagemin-webp/index.js';

(async () => {
  try {
    await imagemin(['../img/*'], {
      destination: '../img/compressed_images',
      plugins: [imageminWebp({quality: 50})]
    });

    console.log('¡Listo!');
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
})();
