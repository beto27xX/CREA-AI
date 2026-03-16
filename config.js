/* =================================================================
   CREA AI — ARCHIVO DE CONFIGURACIÓN
   -----------------------------------------------------------------
   EDITA SOLO ESTE ARCHIVO para cambiar fotos y tamaños de cuadros.
   El resto de la página se actualiza automáticamente.

   CÓMO EDITAR EN GITHUB:
   1. Abre este archivo en GitHub
   2. Haz clic en el lápiz (Edit this file)
   3. Cambia la URL o el número que necesitas
   4. Haz clic en "Commit changes" (botón verde abajo)
   5. Listo — la página se actualiza sola
   ================================================================= */


/* -----------------------------------------------------------------
   FOTOS — cambia las URLs de cada cuadro aquí
   -----------------------------------------------------------------
   Para cambiar una foto:
   · Sube tu imagen a Imgur (imgur.com) o Cloudinary (cloudinary.com)
   · Copia el enlace directo que termina en .jpg o .png
   · Pégalo entre las comillas del cuadro que quieres cambiar
   ----------------------------------------------------------------- */
const FOTOS = {

  // ── PORTADA (hero) ─────────────────────────────────────────────
  hero_principal:  'https://i.imgur.com/Mv624bp.jpeg',
  hero_streetwear: 'https://i.imgur.com/863cAPn.jpeg',
  hero_fitness:    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320&h=160&fit=crop&crop=top',

  // ── GALERÍA DE EJEMPLOS ────────────────────────────────────────
  ejemplo_mujer_elegante: 'https://i.imgur.com/0vclnh4.jpeg',
  ejemplo_streetwear:     'https://i.imgur.com/goCM6yX.jpeg',
  ejemplo_casual:         'https://i.imgur.com/40obeo0.jpeg',
  ejemplo_fitness:        'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=480&h=600&fit=crop&crop=top',
  ejemplo_hombre_moderno: 'https://i.imgur.com/iRoXaXu.jpeg',
  ejemplo_influencer:     'https://i.imgur.com/tvTGlhu.jpeg',

  // ── TARJETAS DE MODELOS IA ─────────────────────────────────────
  modelo_mujer_elegante: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=480&h=600&fit=crop&crop=top',
  modelo_hombre_moderno: 'https://i.imgur.com/NlStSk6.jpeg',
  modelo_streetwear:     'https://i.imgur.com/mZoI0lV.jpeg',
  modelo_fitness:        'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=480&h=600&fit=crop&crop=top',
  modelo_casual:         'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=480&h=600&fit=crop&crop=top',
  modelo_influencer:     'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=480&h=600&fit=crop&crop=top',

};


/* -----------------------------------------------------------------
   TAMAÑOS — cambia las proporciones y columnas de los cuadros aquí
   -----------------------------------------------------------------
   proporcion_cuadro → qué tan alto es el cuadro respecto a su ancho:
     '3/4'  → casi cuadrado, foto más corta
     '4/5'  → proporción catálogo (recomendado)
     '2/3'  → más alto, se ve más del cuerpo
     '1/2'  → muy alto, tipo pasarela completa

   columnas_pc      → cuántos cuadros por fila en computadora (1 a 4)
   columnas_celular → cuántos cuadros por fila en celular    (1 o 2)
   ----------------------------------------------------------------- */
const TAMAÑOS = {

  // ── GALERÍA DE EJEMPLOS ────────────────────────────────────────
  ejemplos_proporcion_cuadro: '4/5',
  ejemplos_columnas_pc:       3,
  ejemplos_columnas_celular:  2,

  // ── TARJETAS DE MODELOS IA ─────────────────────────────────────
  modelos_proporcion_cuadro:  '4/5',
  modelos_columnas_pc:        3,
  modelos_columnas_celular:   1,

};
