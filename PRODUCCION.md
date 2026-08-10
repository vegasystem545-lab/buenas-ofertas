# Producción gráfica de Buenas Ofertas

Flujo de trabajo para crear, nombrar y organizar los recursos visuales del sitio.

## Estrategia de imágenes

| Tipo de imagen | Origen |
|---|---|
| Productos del catálogo | Fotos reales propias |
| Fondos, texturas, decoración | Stock gratuito (Pexels, Unsplash) |
| Íconos, badges de oferta, vectores | Freepik / Flaticon / SVG Repo |
| Logo | Canva o Inkscape (vector) |

## Fotos de producto con celular

1. Luz natural cerca de una ventana, sin sol directo.
2. Fondo parejo: cartulina blanca o pared clara.
3. Envase limpio con la etiqueta al frente.
4. Mismo ángulo y distancia en todas las fotos.
5. Limpiar el lente del celular antes de fotografiar.

## Herramientas

| Herramienta | Uso | Costo |
|---|---|---|
| Canva | Tarjetas, logo, piezas rápidas | Gratis + 1 mes Pro cuando haga falta |
| GIMP | Edición de fotos | Gratis (sudo apt install gimp) |
| Inkscape | Vectores y logo | Gratis (sudo apt install inkscape) |
| Photopea | Photoshop en el navegador | Gratis |
| Squoosh / TinyPNG | Comprimir imágenes para web | Gratis |

## Fuentes de recursos gratuitos

| Recurso | Qué aporta |
|---|---|
| Pexels / Unsplash / Pixabay | Fotos libres |
| Freepik | Vectores y plantillas (atribución en plan gratis) |
| Flaticon | Íconos |
| SVG Repo | Vectores libres sin atribución |
| Google Fonts | Tipografías gratuitas para el sitio |

## Convención de nombres

- Minúsculas, sin tildes, sin ñ, sin espacios: guiones medios.
- Estructura: `categoria-producto-envase.jpg`
- Ejemplos:
  - `limpieza-jabon-liquido-5l.jpg`
  - `limpieza-lavandina-3l.jpg`
  - `ocasion-galletas-dulces-250g.jpg`
  - `logo-buenas-ofertas.svg`

## Estructura de carpetas

```text
img/
├── productos/
├── logo/
└── banners/

Pipeline de producción (7 pasos)

Lista de inventario (nombre + tamaño + precio).
Sesión de fotos con celular (luz + fondo + mismo ángulo).
Edición liviana (recorte y limpieza en Canva o GIMP).
Optimización (Squoosh: ~800 px de ancho, menos de 300 KB).
Renombrar según la convención.
Guardar en img/productos/ + commit a Git.
Cargar al catálogo en el código.
Regla de optimización
JPG para fotos, SVG/PNG para logo.
~800 px de ancho, menos de ~300 KB por imagen.
Nunca subir fotos crudas de 3-5 MB: ralentizan la web e inflan el repo.
