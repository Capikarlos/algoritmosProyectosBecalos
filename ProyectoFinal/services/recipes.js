export const getRecipes = () => [
    {
        nombre: "Ensalada César",
        ingredientes: ["lechuga", "pollo", "queso", "pan"],
        pasos: "Mezcla los ingredientes y añade aderezo.",
        categoria: "Comida",
        tiempo: 15,
        imagen: "https://media.istockphoto.com/id/1337799015/es/foto/ensalada-c%C3%A9sar.jpg?s=612x612&w=0&k=20&c=4sDhC8H3-3wjNXwQds6Zqo1zJrGd6445fi-IGOaa2dM="
    },
    {
        nombre: "Tostadas de atún",
        ingredientes: ["tostadas", "atún", "mayonesa", "jitomate", "cebolla"],
        pasos: "Mezcla el atún con los ingredientes y sirve sobre las tostadas.",
        categoria: "Comida",
        tiempo: 10,
        imagen: "https://i0.wp.com/mesasanamx.com/wp-content/uploads/2022/07/tostadas-de-atun-estilo-contramar.jpg?resize=800%2C530&ssl=1"
    },
    {
        nombre: "Hotcakes",
        ingredientes: ["harina", "huevo", "leche", "azúcar"],
        pasos: "Mezcla y cocina en sartén.",
        categoria: "Desayuno",
        tiempo: 20,
        imagen: "https://img-global.cpcdn.com/recipes/3de5f7bfa533e5a5/680x482cq70/hot-cakes-de-trigo-sarraceno-foto-principal.jpg"
    },
    {
        nombre: "Smoothie de plátano",
        ingredientes: ["plátano", "leche", "miel", "hielo"],
        pasos: "Licúa todos los ingredientes hasta obtener una mezcla homogénea.",
        categoria: "Bebida",
        tiempo: 5,
        imagen: "https://scitechdaily.com/images/Banana-Smoothie.jpg"
    },
    {
        nombre: "Guacamole",
        ingredientes: ["aguacate", "cilantro", "jitomate", "cebolla", "limón", "sal"],
        pasos: "Tritura el aguacate y mezcla con los demás ingredientes hasta lograr una textura uniforme.",
        categoria: "Aperitivo",
        tiempo: 10,
        imagen: "https://www.allrecipes.com/thmb/FOHqtfrZVg0WAMdkFE3bnp7SNO4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-RM-14064-easy-guacamole-ddmfs-3x4-9e4a1eb1bb34421a99db675b53a29e53.jpg"
    },
    {
        nombre: "Paella Valenciana",
        ingredientes: ["arroz", "pollo", "conejo", "judía verde", "garrofón", "azafrán", "aceite de oliva"],
        pasos: "Cocina en paellera el arroz con los ingredientes y caldo hasta que se evapore el líquido.",
        categoria: "Comida",
        tiempo: 50,
        imagen: "https://cuidateplus.marca.com/sites/default/files/cms/paella-valenciana-receta.jpg"
    },
    {
        nombre: "Tarta de Chocolate Casera",
        ingredientes: ["harina", "cacao en polvo", "azúcar", "huevos", "mantequilla", "leche", "polvo de hornear"],
        pasos: "Mezcla los ingredientes, hornea la masa y deja enfriar antes de servir.",
        categoria: "Postre",
        tiempo: 60,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIps3Ty7cC8_LZXXKhDsEEV4y-D5yOvAwJg&s"
    },
    {
        nombre: "Sushi Variado",
        ingredientes: ["arroz sushi", "alga nori", "pescado", "vegetales", "salsa soja"],
        pasos: "Prepara el arroz, corta el pescado y vegetales, enrolla en alga nori y sirve con salsa.",
        categoria: "Comida japonesa",
        tiempo: 30,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GF0_sBvT1sLuIuVZ0Oo2XjeIQW9bF5mCtg&s"
    },
    {
        nombre: "Pasta al Pesto",
        ingredientes: ["pasta", "albahaca", "piñones", "parmesano", "aceite de oliva", "ajo"],
        pasos: "Licúa albahaca, piñones, parmesano y ajo, mezcla con la pasta cocida.",
        categoria: "Pasta",
        tiempo: 25,
        imagen: "https://i.ytimg.com/vi/vuN6VSqhB6E/maxresdefault.jpg"
    },
    {
        nombre: "Chili con Carne",
        ingredientes: ["carne molida", "frijoles", "tomate", "chile", "cebolla", "ajo"],
        pasos: "Cocina la carne con cebolla, agrega tomate, frijoles y chile, deja hervir.",
        categoria: "Comida tex-mex",
        tiempo: 45,
        imagen: "https://www.goya.com/wp-content/uploads/2023/10/wholesome-bean-chili.jpg"
    },
    {
        nombre: "Brownies",
        ingredientes: ["chocolate", "mantequilla", "azúcar", "huevos", "harina"],
        pasos: "Derrite el chocolate y mantequilla, mezcla con los otros ingredientes, hornea.",
        categoria: "Postre",
        tiempo: 35,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeFM_CwiNDUlQtldKfwyGQcc8Jgu0jFT5Vg&s"
    },
    {
        nombre: "Gazpacho",
        ingredientes: ["tomate", "pepino", "pimiento", "ajo", "aceite de oliva", "vinagre", "sal"],
        pasos: "Licúa todos los ingredientes y refrigera antes de servir.",
        categoria: "Sopa fría",
        tiempo: 15,
        imagen: "https://www.conasi.eu/blog/wp-content/uploads/2016/06/gazpacho-1.jpg"
    },
    {
        nombre: "Pad Thai",
        ingredientes: ["fideos de arroz", "huevo", "tofu", "cacahuate", "cilantro", "salsa tamarindo", "ajo"],
        pasos: "Saltea los ingredientes con salsa de tamarindo y mezcla con los fideos.",
        categoria: "Comida tailandesa",
        tiempo: 25,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATgCcGxw3G13fdVl7THrzI7ubhlxTdpSFDw&s"
    },
    {
        nombre: "Falafel",
        ingredientes: ["garbanzos", "cebolla", "perejil", "ajo", "comino", "cilantro", "sal"],
        pasos: "Tritura los garbanzos con especias, forma bolas y fríe hasta dorar.",
        categoria: "Aperitivo",
        tiempo: 30,
        imagen: "https://d36fw6y2wq3bat.cloudfront.net/recipes/falafel-en-freidora-de-aire/900/falafel-en-freidora-de-aire_version_1693540930.jpg"
    },
    {
        nombre: "Crepas",
        ingredientes: ["harina", "leche", "huevo", "mantequilla", "sal", "azúcar"],
        pasos: "Mezcla los ingredientes, cocina en sartén delgada y rellena al gusto.",
        categoria: "Postre",
        tiempo: 20,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdyxtqipw0WM6la2yQR9S8zAPHpytii7cIw&s"
    }
];
