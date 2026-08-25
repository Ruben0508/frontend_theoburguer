# Theo Burger - Web Restaurante

Proyecto web completo para operación del restaurante con 3 módulos:

1. Domicilios con envío automático a WhatsApp.
2. Menú QR de solo lectura para clientes en mesa.
3. Panel móvil para meseros con comanda visual.

## Estructura del proyecto

- index.html: panel principal.
- domicilio.html: toma de pedidos desde casa.
- menu.html: menú solo lectura para QR.
- mesero.html: sistema móvil para meseros.
- qr.html: generador de QR al menú.
- menu-data.js: categorías, productos y precios.
- app.js: lógica del sistema.
- styles.css: diseño responsive.

## Configuración inicial (solo una vez)

1. Verifica el WhatsApp del restaurante en app.js.
2. La constante debe tener código de país + número, sin +.
3. Ejemplo válido: 573156164804.
4. Revisa el menú en menu-data.js (nombres, precios, descripciones).
5. Abre index.html en el navegador para pruebas internas.

## Flujo de operación por módulo

### 1) Domicilios (cliente en casa)

1. Ir a domicilio.html.
2. Llenar: nombre, teléfono, dirección y medio de pago.
3. Seleccionar productos y cantidades.
4. Clic en "Enviar pedido por WhatsApp".
5. Se abre WhatsApp con el mensaje completo listo para enviar.

El mensaje incluye:

- Datos del cliente.
- Medio de pago.
- Lista de productos con cantidades.
- Total del pedido.
- Notas del cliente.

### 2) Menú QR (cliente en mesa)

1. Publicar el sitio (Netlify, Vercel o GitHub Pages).
2. Confirmar que menu.html abre correctamente desde la URL pública.
3. Ir a qr.html.
4. Pegar la URL pública exacta de menu.html.
5. Generar el QR e imprimirlo para cada mesa.

Importante: el QR debe apuntar a menu.html para que el cliente solo vea el menú.

### 3) Panel móvil mesero (operación interna)

1. Abrir mesero.html desde el celular del mesero.
2. Ingresar número de mesa (y nombre del cliente opcional).
3. Seleccionar productos y cantidades.
4. Clic en "Generar comanda".
5. El sistema muestra un cuadro con resumen y total para cocina/caja.

## Checklist diario de apertura

1. Probar un pedido de domicilio de ejemplo y validar apertura de WhatsApp.
2. Revisar que los precios visibles coincidan con carta vigente.
3. Escanear el QR desde un celular y validar carga del menú.
4. Generar una comanda de prueba en mesero.html.

## Checklist cuando cambien precios

1. Editar valores en menu-data.js.
2. Guardar cambios y recargar navegador.
3. Verificar menu.html y domicilio.html.
4. Confirmar total en panel de mesero.

## Notas técnicas

- Es una web estática: no requiere backend para funcionar.
- Compatible con celular y escritorio.
- Escalable: luego se puede conectar a base de datos, inventario y panel admin.
