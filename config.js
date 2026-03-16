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
  hero_principal:  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=680&h=280&fit=crop&crop=top',
  hero_streetwear: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=320&h=160&fit=crop&crop=top',
  hero_fitness:    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320&h=160&fit=crop&crop=top',

  // ── GALERÍA DE EJEMPLOS ────────────────────────────────────────
  ejemplo_mujer_elegante: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=480&h=600&fit=crop&crop=top',
  ejemplo_streetwear:     'https://images.unsplash.com/photo-1520975922203-b5a49c2f7c87?w=480&h=600&fit=crop&crop=top',
  ejemplo_casual:         'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=480&h=600&fit=crop&crop=top',
  ejemplo_fitness:        'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=480&h=600&fit=crop&crop=top',
  ejemplo_hombre_moderno: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=480&h=600&fit=crop&crop=top',
  ejemplo_influencer:     'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=480&h=600&fit=crop&crop=top',

  // ── TARJETAS DE MODELOS IA ─────────────────────────────────────
  modelo_mujer_elegante: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=480&h=600&fit=crop&crop=top',
  modelo_hombre_moderno: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=600&fit=crop&crop=top',
  modelo_streetwear:     'https://images.unsplash.com/photo-1544441893-675973e31985?w=480&h=600&fit=crop&crop=top',
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
