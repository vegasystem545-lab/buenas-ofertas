# Diseño de Buenas Ofertas

## Filosofía

La página debe estar pensada para el cliente, no para el dueño.

Quien entra a Buenas Ofertas quiere hacer solo cuatro cosas:

1. Ver los productos.
2. Ver los precios.
3. Conocer el tamaño del envase.
4. Hacer un pedido rápido.

## Paleta de colores

| Rol | Color | Código |
|---|---|---|
| Fondo | Blanco puro | #FFFFFF |
| Principal | Naranja | #FF7A00 |
| Secundario | Verde | #7DDE5A |
| Complementario | Violeta | #8B5CF6 |
| Destaque | Amarillo | #FFD54A |
| Texto | Gris oscuro | #333333 |

## Inspiraciones

| Elemento | Inspiración |
|---|---|
| Velocidad y sencillez | Mercado Libre |
| Organización por categorías | Supermercados |
| Diseño limpio | Apple |
| Colores y promociones | Tiendas de artículos para el hogar |
| Adaptación al móvil | Aplicaciones modernas |

## Tipografía

- Familia: JetBrains Mono (monoespaciada, estética terminal)
- Pesos: 300 (cuerpo), 400 y 700 (énfasis)
- Fallback: ui-monospace, 'Courier New', monospace
- Carga: Google Fonts vía @import en estilos.css

## Principios de uso

- Una página, un propósito: nada de un mar de cosas.
- Quien entra a ver precios, ve precios: listado simple y rápido tipo terminal.
- Método de compra rápido y sin fricción.
- Sección de oportunidades claras y concisas.

## Estructura del sitio (3 bloques)

1. Precios: listado tipo terminal (producto, envase, precio).
2. Oportunidades: sección corta con badge de oferta.
3. Pedido rápido: formulario mínimo.

## Canal de pedidos

- WhatsApp: el botón de pedido arma un mensaje estructurado y abre wa.me.
- La mecánica del pedido no necesita servidor ni email.
- El email con dominio (contacto@buenasofertas.online) es solo identidad y confianza, no automatización.

## Visión de automatización

- Modelo "Coca-Cola a escala simple": el pedido entra solo y el dueño solo lo cumple.
- Nivel 1: WhatsApp. Nivel 2: planilla vía Apps Script. Nivel 3: confirmaciones por email.
