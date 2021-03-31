let cartBody = document.getElementById('cart');
let inputCart = document.getElementById('cartFF');

window.addEventListener('click', (event) => {
    console.log('click');
  
    // клік на кнопку "Купити"
    if(event.target.classList.contains('button-buy')){
      console.log('клік на кнопку');
      addItems(event.target);
    }  
    if(event.target.classList.contains("delete-items")){
      console.log("виделено");
      deleteItems(event.target);
    }
  });
function addItems(element){
console.log('+');
let li = document.createElement('li');

li.innerHTML = element.dataset.img
            + '<br>'
             + element.dataset.name
             + '<br>'
             + element.dataset.price
             + '<div class="delete-items"> X </div>'
cartBody.appendChild(li);
}
function deleteItems(element){
  console.log("f");
  element.parentNode.remove();
}

