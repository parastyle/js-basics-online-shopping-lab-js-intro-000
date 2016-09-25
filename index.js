var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(item){
  var fItem = {}
  var price = Math.floor(Math.random())
  fItem['item'] = price
  cart.push(fItem)
  console.log('${item} has been added to your cart.')
}

function viewCart(){
  if (cart === 0){
    console.log('Your shopping cart is empty.')
  }
  else{
    for(var items in cart){
      console.log('In your cart you have [${items} for ${cart.items.}]')
    }
  }
}
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
