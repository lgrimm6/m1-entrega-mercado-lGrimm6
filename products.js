const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "Uva Crimson",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "Banana",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "Mamão",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "Maçã",
  },
  {
    title: "Teste",
    price: 8001,
    category: "Frutas",
    image: "./img/products/product_12.svg",
    imageDescription: "Teste",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Teste",
    price: 8001,
    category: "Bebidas",
    image: "./img/products/product_12.svg",
    imageDescription: "Teste",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },
  {
    title: "Teste",
    price: 8001,
    category: "Higiene",
    image: "./img/products/product_12.svg",
    imageDescription: "Teste",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];


const ulFrutas = document.createElement('ul')
const ulBebidas = document.createElement('ul')
const ulHigiene = document.createElement('ul')

for (let i = 0; i < products.length; i++) {
  if (products[i].category === "Frutas") {

    const productCard = document.createElement('li')
    productCard.classList = "product"

    const productImg = document.createElement('img')
    if (products[i].image == undefined) {
      productImg.src = "./img/products/no-img.svg"
    } else {
      productImg.src = products[i].image
    }
    productImg.alt=products[i].title
    productImg.title=products[i].imageDescription
    productImg.classList = "product-img"


    const productMain = document.createElement('main')
    productMain.classList = "product-main"

    const productTitle = document.createElement('h1')
    productTitle.classList = "product-title"
    productTitle.innerText = products[i].title

    const productCategory = document.createElement('h5')
    productCategory.classList = "product-category"
    productCategory.innerText = products[i].category

    const productPrice = document.createElement('strong')
    productPrice.classList = "product-price"
    productPrice.innerText = `R$ ${products[i].price}`


    productCard.appendChild(productImg)
    productCard.appendChild(productMain)
    productMain.appendChild(productTitle)
    productMain.appendChild(productCategory)
    productMain.appendChild(productPrice)
    ulFrutas.appendChild(productCard)

    document.querySelector('.fruits').appendChild(ulFrutas)

  }
  else if (products[i].category === "Bebidas") {

    const productCard = document.createElement('li')
    productCard.classList = "product"

    const productImg = document.createElement('img')
    if (products[i].image == undefined) {
      productImg.src = "./img/products/no-img.svg"
    } else {
      productImg.src = products[i].image
    }
    productImg.alt=products[i].title
    productImg.title=products[i].imageDescription
    productImg.classList = "product-img"


    const productMain = document.createElement('main')
    productMain.classList = "product-main"

    const productTitle = document.createElement('h1')
    productTitle.classList = "product-title"
    productTitle.innerText = products[i].title

    const productCategory = document.createElement('h5')
    productCategory.classList = "product-category"
    productCategory.innerText = products[i].category

    const productPrice = document.createElement('strong')
    productPrice.classList = "product-price"
    productPrice.innerText = `R$ ${products[i].price}`


    productCard.appendChild(productImg)
    productCard.appendChild(productMain)
    productMain.appendChild(productTitle)
    productMain.appendChild(productCategory)
    productMain.appendChild(productPrice)
    ulBebidas.appendChild(productCard)

    document.querySelector('.drinks').appendChild(ulBebidas)

  }
  else if (products[i].category === "Higiene") {

    const productCard = document.createElement('li')
    productCard.classList = "product"

    const productImg = document.createElement('img')
    if (products[i].image == undefined) {
      productImg.src = "./img/products/no-img.svg"
    } else {
      productImg.src = products[i].image
    }
    productImg.alt=products[i].title
    productImg.title=products[i].imageDescription
    productImg.classList = "product-img"


    const productMain = document.createElement('main')
    productMain.classList = "product-main"

    const productTitle = document.createElement('h1')
    productTitle.classList = "product-title"
    productTitle.innerText = products[i].title

    const productCategory = document.createElement('h5')
    productCategory.classList = "product-category"
    productCategory.innerText = products[i].category

    const productPrice = document.createElement('strong')
    productPrice.classList = "product-price"
    productPrice.innerText = `R$ ${products[i].price}`


    productCard.appendChild(productImg)
    productCard.appendChild(productMain)
    productMain.appendChild(productTitle)
    productMain.appendChild(productCategory)
    productMain.appendChild(productPrice)
    ulHigiene.appendChild(productCard)

    document.querySelector('.hygiene').appendChild(ulHigiene)

  }

  
  }
  