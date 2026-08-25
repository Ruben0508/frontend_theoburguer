const RESTAURANT_WHATSAPP = "573156164804"; // Numero del restaurante con codigo de pais, sin +.

function resolveMenuGroups() {
  const byName = new Map(MENU_CATEGORIES.map((category) => [category.name, category]));

  if (typeof MENU_GROUPS === "undefined" || !Array.isArray(MENU_GROUPS)) {
    return [{ name: "MENÚ", categories: MENU_CATEGORIES }];
  }

  return MENU_GROUPS.map((group) => ({
    name: group.name,
    categories: group.categories.map((categoryName) => byName.get(categoryName)).filter(Boolean)
  })).filter((group) => group.categories.length > 0);
}

function renderMenuCards(target, onAdd) {
  const groups = resolveMenuGroups();
  const items = MENU_CATEGORIES.flatMap((category) => category.items.map((item) => ({ ...item, category: category.name })));

  target.innerHTML = groups
    .map(
      (group, groupIndex) => `
      <section class="order-group" data-accordion-root>
        <button type="button" class="accordion-trigger order-group-title ${groupIndex === 0 ? "is-open" : ""}" data-accordion-trigger aria-expanded="${groupIndex === 0 ? "true" : "false"}" aria-controls="order-group-${groupIndex}">
          <span>${group.name}</span>
          <span class="accordion-icon">▾</span>
        </button>
        <div id="order-group-${groupIndex}" class="accordion-content ${groupIndex === 0 ? "is-open" : ""}">
          ${group.categories
          .map(
            (category) => `
            <div class="order-category">
              <h4 class="order-category-title">${category.name}</h4>
              <div class="grid order-category-grid">
                ${category.items
                  .map(
                    (item) => `
                    <article class="item-card">
                      <h3>${item.name}</h3>
                      <p>${item.description}</p>
                      <p class="price">${formatCOP(item.price)}</p>
                      <div class="qty-controls">
                        <input type="number" min="1" value="1" id="qty-${item.id}" />
                        <button type="button" data-item-id="${item.id}">Agregar</button>
                      </div>
                    </article>
                  `
                  )
                  .join("")}
              </div>
            </div>
          `
          )
          .join("")}
        </div>
      </section>
    `
    )
    .join("");

  enableSingleAccordion(target);

  target.querySelectorAll("button[data-item-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = items.find((it) => it.id === button.dataset.itemId);
      const qtyInput = document.getElementById(`qty-${item.id}`);
      const qty = Math.max(1, Number(qtyInput.value || 1));
      onAdd(item, qty);
    });
  });
}

function createOrderStore() {
  const state = new Map();
  return {
    add(item, qty) {
      const line = state.get(item.id) || { ...item, qty: 0 };
      line.qty += qty;
      state.set(item.id, line);
    },
    clear() {
      state.clear();
    },
    lines() {
      return Array.from(state.values());
    },
    total() {
      return this.lines().reduce((sum, line) => sum + line.price * line.qty, 0);
    }
  };
}

function renderOrderLines(target, totalTarget, store) {
  const lines = store.lines();
  target.innerHTML = lines
    .map(
      (line) => `
      <li>
        <span>${line.qty} x ${line.name}</span>
        <strong>${formatCOP(line.price * line.qty)}</strong>
      </li>
    `
    )
    .join("");
  totalTarget.textContent = `Total: ${formatCOP(store.total())}`;
}

function initMenuOnlyPage() {
  const host = document.getElementById("menuOnlyView");
  if (!host || typeof MENU_CATEGORIES === "undefined") return;

  const groups = resolveMenuGroups();
  const featuredWide = new Set(["HAMBURGUESAS", "BEBIDAS FRÍAS"]);
  const compact = new Set(["CERVEZAS", "ADICIONES"]);

  let cardIndex = 0;
  host.innerHTML = groups
    .map(
      (group, groupIndex) => `
      <section class="menu-group-block" data-accordion-root>
        <button type="button" class="accordion-trigger menu-group-heading ${groupIndex === 0 ? "is-open" : ""}" data-accordion-trigger aria-expanded="${groupIndex === 0 ? "true" : "false"}" aria-controls="menu-group-${groupIndex}">
          <span>${group.name}</span>
          <span class="accordion-icon">▾</span>
        </button>
        <div id="menu-group-${groupIndex}" class="accordion-content ${groupIndex === 0 ? "is-open" : ""}">
          <div class="menu-board">
          ${group.categories
            .map((category) => {
              cardIndex += 1;
              return `
                <section class="menu-section ${featuredWide.has(category.name) ? "menu-section-wide" : ""} ${compact.has(category.name) ? "menu-section-compact" : ""}" style="--delay:${cardIndex * 65}ms;">
                  <h3 class="menu-category-title">${category.name}</h3>
                  <div class="menu-items">
                    ${category.items
                      .map(
                        (item) => `
                          <article class="menu-line">
                            <div class="menu-line-main">
                              <h3>${item.name}</h3>
                              <span class="menu-line-dots"></span>
                              <p class="menu-line-price">${formatCOP(item.price)}</p>
                            </div>
                            <p class="menu-line-desc">${item.description}</p>
                          </article>
                        `
                      )
                      .join("")}
                  </div>
                </section>
              `;
            })
            .join("")}
          </div>
        </div>
      </section>
    `
    )
    .join("");

  enableSingleAccordion(host);
}

function enableSingleAccordion(container) {
  const blocks = Array.from(container.querySelectorAll("[data-accordion-root]"));
  if (!blocks.length) return;

  const setState = (block, open) => {
    const trigger = block.querySelector("[data-accordion-trigger]");
    const content = block.querySelector(".accordion-content");
    if (!trigger || !content) return;

    trigger.classList.toggle("is-open", open);
    content.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
  };

  blocks.forEach((block, index) => {
    const trigger = block.querySelector("[data-accordion-trigger]");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const content = block.querySelector(".accordion-content");
      const shouldOpen = content ? !content.classList.contains("is-open") : true;

      blocks.forEach((current) => setState(current, false));
      if (shouldOpen) setState(block, true);
    });

    if (index > 0) {
      setState(block, false);
    }
  });
}

function initDeliveryPage() {
  const menuHost = document.getElementById("deliveryMenu");
  if (!menuHost || typeof MENU_CATEGORIES === "undefined") return;

  const paymentSelect = document.getElementById("payment");
  PAYMENT_METHODS.forEach((method) => {
    const option = document.createElement("option");
    option.value = method;
    option.textContent = method;
    paymentSelect.appendChild(option);
  });

  const orderStore = createOrderStore();
  const linesHost = document.getElementById("deliveryLines");
  const totalHost = document.getElementById("deliveryTotal");

  renderMenuCards(menuHost, (item, qty) => {
    orderStore.add(item, qty);
    renderOrderLines(linesHost, totalHost, orderStore);
  });

  document.getElementById("clearDeliveryOrder").addEventListener("click", () => {
    orderStore.clear();
    renderOrderLines(linesHost, totalHost, orderStore);
  });

  document.getElementById("sendDeliveryOrder").addEventListener("click", () => {
    const form = document.getElementById("deliveryForm");
    if (!form.reportValidity()) return;

    const lines = orderStore.lines();
    if (!lines.length) {
      alert("Selecciona al menos un producto para enviar.");
      return;
    }

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const payment = document.getElementById("payment").value;
    const notes = document.getElementById("notes").value.trim();

    const orderText = lines.map((line) => `- ${line.qty} x ${line.name} (${formatCOP(line.price * line.qty)})`).join("\n");
    const msg = [
      "*NUEVO PEDIDO DOMICILIO*",
      "",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Dirección: ${address}`,
      `Medio de pago: ${payment}`,
      "",
      "Pedido:",
      orderText,
      "",
      `Total: ${formatCOP(orderStore.total())}`,
      `Notas: ${notes || "Sin notas"}`
    ].join("\n");

    const url = `https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  });
}

function initWaiterPage() {
  const menuHost = document.getElementById("waiterMenu");
  if (!menuHost || typeof MENU_CATEGORIES === "undefined") return;

  const orderStore = createOrderStore();
  const linesHost = document.getElementById("waiterLines");
  const totalHost = document.getElementById("waiterTotal");
  const ticket = document.getElementById("ticket");

  renderMenuCards(menuHost, (item, qty) => {
    orderStore.add(item, qty);
    renderOrderLines(linesHost, totalHost, orderStore);
  });

  document.getElementById("clearWaiterOrder").addEventListener("click", () => {
    orderStore.clear();
    renderOrderLines(linesHost, totalHost, orderStore);
    ticket.hidden = true;
    ticket.innerHTML = "";
  });

  document.getElementById("buildTicket").addEventListener("click", () => {
    const tableNumber = document.getElementById("tableNumber").value.trim();
    const customerName = document.getElementById("customerName").value.trim();
    if (!tableNumber) {
      alert("Ingresa la mesa para generar la comanda.");
      return;
    }

    const lines = orderStore.lines();
    if (!lines.length) {
      alert("No hay productos seleccionados.");
      return;
    }

    const now = new Date();
    ticket.hidden = false;
    ticket.innerHTML = `
      <h3>Comanda Mesa ${tableNumber}</h3>
      <small>${now.toLocaleString("es-CO")}${customerName ? ` | Cliente: ${customerName}` : ""}</small>
      <ul class="order-lines" style="margin-top:10px;">
        ${lines
          .map(
            (line) => `
            <li>
              <span>${line.qty} x ${line.name}</span>
              <strong>${formatCOP(line.qty * line.price)}</strong>
            </li>
          `
          )
          .join("")}
      </ul>
      <p class="price" style="margin-top:12px;">Total mesa: ${formatCOP(orderStore.total())}</p>
    `;
  });
}

function initQrPage() {
  const menuInput = document.getElementById("menuUrl");
  const qrButton = document.getElementById("generateQr");
  const qrImage = document.getElementById("qrImage");
  const qrInfo = document.getElementById("qrInfo");
  if (!menuInput || !qrButton || !qrImage || !qrInfo) return;

  const suggested = `${window.location.origin}/menu.html`;
  if (window.location.origin !== "null") {
    menuInput.value = suggested;
  }

  const generate = () => {
    const menuUrl = menuInput.value.trim();
    if (!menuUrl) {
      alert("Ingresa la URL pública del menú.");
      return;
    }

    const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=800x800&data=${encodeURIComponent(menuUrl)}`;
    qrImage.src = qrApi;
    qrInfo.textContent = `QR generado para: ${menuUrl}`;
  };

  qrButton.addEventListener("click", generate);
  generate();
}

initMenuOnlyPage();
initDeliveryPage();
initWaiterPage();
initQrPage();
