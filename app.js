let products = [{
  id: '11g2233',
  name: 'Boots of Skywalking',
  description: 'These boots were made for walking, and thats what youll do',
  imgUrl: 'assets/img/boots.png',
  quantity: 3
}, {
  id: '112244',
  name: 'Bone Bow',
  description: 'Ranged attacks, Stay safe use a pointed stick from afar',
  imgUrl: 'assets/img/bow.png',
  quantity: 2
}, {
  id: '112255',
  name: 'Eagles Talon',
  description: 'Fly through your enemies with this feathered edge.',
  imgUrl: 'assets/img/dagger.png',
  quantity: 1
}, {
  id: '112266',
  name: 'Horned Helm',
  description: 'A nice horned helm be careful with the color red when wearing',
  imgUrl: 'assets/img/helm.png',
  quantity: 4
}, {
  id: '112277',
  name: 'Rations',
  description: 'Yum Yum, You are going to need to eat on your adventure. Take this!',
  imgUrl: 'assets/img/ration.png',
  quantity: 10
}, {
  id: '112288',
  name: 'Mysterious Ring',
  description: 'There is probably some left over magic in this ring purchase it to identify',
  imgUrl: 'assets/img/ring.png',
  quantity: 1
}, {
  id: '112299',
  name: 'Rope',
  description: 'No adventurer is complete without a bundle of sturdy rope',
  imgUrl: 'assets/img/rope.png',
  quantity: 4
}, {
  id: '1',
  name: 'Bag of Holding',
  description: 'Where are you going to keep all of your things without a bag such as this',
  imgUrl: 'assets/img/bag.png',
  quantity: 0
}]


let cats = ['tom', 'garfield', 'felix', 'sylvester']

cats.forEach(cat => {
  console.log('feed ' + cat)
})


// the name of the list

let productsTemplates = ''

products.forEach(p => {
  if (p.quantity > 0) {
    productsTemplates += `
    <div class="col-md-4 col-lg-3 col-sm-6">
      <div class="product">
        <img src="${p.imgUrl}" alt="Product Name" height="250">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <button class="btn btn-secondary" onclick="addToCart('${p.id}')" data-bs-toggle="offcanvas" data-bs-target="#cart">Add to Cart</button>
      </div>
    </div>
    `
  } else {
    productsTemplates += `
    <div class="col-md-4 col-lg-3 col-sm-6">  
      <div class="product sold out">
        <img src="${p.imgUrl}" alt="Product Name" height="250">
        <h3>${p.name} - SOLD OUT</h3>
      </div>
    </div>
    `
  }
})

// @ts-ignore
document.getElementById('products').innerHTML = productsTemplates


let cart = []


function addToCart(productId) {
  console.log('will it click??????', productId)

  let product = products.find(p => p.id == productId)
  console.log('what is this? ', product)

  cart.push(product)
  drawCart()
}


function drawCart() {
  let cartTemplate = ''

  cart.forEach(p => {
    cartTemplate += /*html*/`
    <div class="d-flex align-items-center justify-content-around p-3  border-bottom">
      <img src="${p.imgUrl}" alt="${p.name}" height="125">
      <h3 class="mb-0"><b>${p.name}</b></h3>
    </div>
    `
  })

  // @ts-ignore
  document.getElementById('cart-items').innerHTML = cartTemplate
}

function clearCart(){
  cart = []
  drawCart()
}





