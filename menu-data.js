const MENU_CATEGORIES = [
  {
    name: "HAMBURGUESAS",
    items: [
      { id: "hb-callejera", name: "CALLEJERA", price: 23000, description: "Vegetales frescos, carne de res, ripio crujiente, salsas clásicas callejeras, tocineta y queso mozzarella fundido." },
      { id: "hb-pug", name: "PUG", price: 27000, description: "Vegetales frescos, doble carne de res smash, queso americano, tocineta, BBQ sweet, salsa agridulce de pepinillos y cebolla crispy." },
      { id: "hb-frenchie", name: "FRENCHIE", price: 25000, description: "Vegetales frescos, carne de res, piña asada, queso philadelphia, mayonesa de ajo, BBQ sweet, tocineta y cebolla al grill." },
      { id: "hb-samoyedo", name: "SAMOYEDO", price: 25000, description: "Vegetales frescos, pollo apanado, mayonesa de ajo, tocineta, cebolla crispy, mayonesa de maracuyá y queso mozzarella fundido." },
      { id: "hb-san-bernardo", name: "SAN BERNARDO", price: 28000, description: "Vegetales frescos, carne de res, queso americano fundido, mermelada de tocineta, salsa big mac y queso philadelphia." },
      { id: "hb-beagle", name: "BEAGLE", price: 26000, description: "Vegetales frescos, carne de res 200gr o filete de pollo, tocineta, cebolla caramelizada, queso mozzarella fundido y salsas de la casa." },
      { id: "hb-golden", name: "GOLDEN", price: 29000, description: "Vegetales frescos, carne de res, queso philadelphia, tocineta, chorizo a la parrilla, pico de gallo, salsa de la casa y queso mozzarella fundido." }
    ]
  },
  {
    name: "PERROS",
    items: [
      { id: "pr-callejero", name: "CALLEJERO", price: 22000, description: "Salchicha ranchera premium, ripio crujiente, tocineta, salsas clásicas callejeras y queso mozzarella fundido." },
      { id: "pr-dogo-argentino", name: "DOGO ARGENTINO", price: 25000, description: "Jugosos trozos de churrasco al grill, chimichurri fresco de la casa y salsa ahumada." },
      { id: "pr-theo-fest", name: "THEO FEST", price: 27000, description: "Salchicha ranchera premium, carne molida jugosa, tomate verde aderezado, salsa agridulce de pepinillos, tocineta, salsa de la casa y queso mozzarella fundido." }
    ]
  },
  {
    name: "ESPECIALES",
    items: [
      { id: "es-churrasco", name: "CHURRASCO", price: 28000, description: "260gr de solomo acompañado de vegetales frescos y porción de papas a la francesa." },
      { id: "es-pollo", name: "POLLO", price: 21000, description: "220gr de filete acompañado de vegetales frescos y porción de papas a la francesa." }
    ]
  },
  {
    name: "SNACKS",
    items: [
      { id: "sn-empanadas", name: "EMPANADAS COCTELERAS X8", price: 8000, description: "Porción de 8 unidades." },
      { id: "sn-dedos", name: "DEDOS MOZARELLA X6", price: 10000, description: "Porción de 6 unidades." },
      { id: "sn-papas", name: "PAPAS A LA FRANCESA", price: 7000, description: "Porción tradicional." }
    ]
  },
  {
    name: "SALCHIPAPAS",
    items: [
      { id: "sa-chihuahua", name: "CHIHUAHUA", price: 18000, description: "Papas a la francesa, salchicha ranchera premium y salsas clásicas callejeras." },
      { id: "sa-pitbull", name: "PITBULL", price: 27500, description: "Papas a la francesa, salchicha ranchera premium, carne molida, tomate verde, salsas, ripio, queso mozarella y tocineta." }
    ]
  },
  {
    name: "ADICIONES",
    items: [
      { id: "ad-queso-mozzarella", name: "Queso Mozarella", price: 3000, description: "Extra." },
      { id: "ad-queso-philadelphia", name: "Queso Philadelphia", price: 4000, description: "Extra." },
      { id: "ad-tocineta", name: "Tocineta Crocante", price: 3000, description: "Extra." },
      { id: "ad-carne-smash", name: "Carne 100gr (Smash)", price: 6000, description: "Extra." },
      { id: "ad-carne-130", name: "Carne 130gr", price: 7000, description: "Extra." },
      { id: "ad-carne-200", name: "Carne 200gr", price: 10000, description: "Extra." },
      { id: "ad-pollo-apanado", name: "Pollo Apanado", price: 7000, description: "Extra." },
      { id: "ad-filete-pollo", name: "Filete de pollo", price: 10000, description: "Extra." }
    ]
  },
  {
    name: "BEBIDAS FRÍAS",
    items: [
      { id: "bf-malteada", name: "MALTEADA", price: 15000, description: "Café, Oreo o Milo." },
      { id: "bf-granizado-cafe", name: "GRANIZADO DE CAFÉ", price: 13000, description: "Bebida fría de café." },
      { id: "bf-milo", name: "MILO", price: 8000, description: "Bebida fría." },
      { id: "bf-limonada-natural", name: "LIMONADA NATURAL", price: 6000, description: "Bebida fría." },
      { id: "bf-limonada-cerezada", name: "LIMONADA CEREZADA", price: 9000, description: "Bebida fría." },
      { id: "bf-limonada-coco", name: "LIMONADA DE COCO", price: 10000, description: "Bebida fría." },
      { id: "bf-jugo-agua", name: "JUGO NATURAL EN AGUA", price: 8000, description: "Sabores: mora, mango, lulo o maracuyá." },
      { id: "bf-jugo-leche", name: "JUGO NATURAL EN LECHE", price: 9000, description: "Sabores: mora, mango, lulo o maracuyá." },
      { id: "bf-gaseosa-hit", name: "COCACOLA, GINGER, SODA Y JUGO HIT PERSONAL", price: 5000, description: "Bebida personal." },
      { id: "bf-postobon", name: "POSTOBON PERSONAL", price: 4000, description: "Bebida personal." },
      { id: "bf-agua", name: "AGUA", price: 3000, description: "Bebida personal." }
    ]
  },
  {
    name: "CERVEZAS",
    items: [
      { id: "cz-nacionales", name: "CERVEZAS NACIONALES", price: 6000, description: "Club Colombia, Aguila Light o Poker." },
      { id: "cz-importada", name: "CERVEZA IMPORTADA", price: 9000, description: "Corona o Stella Artois." },
      { id: "cz-michelada", name: "MICHELADA", price: 2000, description: "Preparación adicional." }
    ]
  },
  {
    name: "BEBIDAS CALIENTES",
    items: [
      { id: "bc-expreso", name: "EXPRESO", price: 4000, description: "Café." },
      { id: "bc-expreso-doble", name: "EXPRESO DOBLE", price: 5000, description: "Café." },
      { id: "bc-americano", name: "AMERICANO", price: 5000, description: "Café." },
      { id: "bc-capuccino", name: "CAPUCCINO", price: 8000, description: "Café." },
      { id: "bc-capuccino-chantilly", name: "CAPUCCINO CHANTILLY", price: 9000, description: "Café." },
      { id: "bc-latte", name: "LATTE", price: 8000, description: "Café." },
      { id: "bc-aromatica", name: "AROMÁTICA", price: 3000, description: "Infusión caliente." }
    ]
  }
];

const PAYMENT_METHODS = ["Efectivo", "Transferencia", "Datáfono"];

const MENU_GROUPS = [
  {
    name: "COMIDA",
    categories: ["HAMBURGUESAS", "PERROS", "ESPECIALES", "SNACKS", "SALCHIPAPAS"]
  },
  {
    name: "BEBIDAS",
    categories: ["BEBIDAS FRÍAS", "CERVEZAS", "BEBIDAS CALIENTES"]
  },
  {
    name: "ADICIONES",
    categories: ["ADICIONES"]
  }
];

function formatCOP(value) {
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);
}
