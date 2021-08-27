var btn = document.getElementById('btn');


function Toggle(){
    if(btn.classList.contains("far")){
        btn.classList.remove("far");
        btn.classList.add("fas");
    }else{
        btn.classList.remove("fas");
        btn.classList.add("far");
    }
}
var btn1 = document.getElementById('btn1');


function Toggle1(){
    if(btn1.classList.contains("far")){
        btn1.classList.remove("far");
        btn1.classList.add("fas");
    }else{
        btn1.classList.remove("fas");
        btn1.classList.add("far");
    }
}
var btn2 = document.getElementById('btn2');


function Toggle2(){
    if(btn2.classList.contains("far")){
        btn2.classList.remove("far");
        btn2.classList.add("fas");
    }else{
        btn2.classList.remove("fas");
        btn2.classList.add("far");
    }
}



let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: "BROWN TSHIRT",
        tag: "BROWNTSHIRT",
        price: 37,
        inCart: 0
    },
    {
        name: "MEN JEANS",
        tag: "MENJEANS",
        price: 60,
        inCart: 0
    },
    {
        name: "WOMEN BAG",
        tag: "WOMENBAG",
        price: 45,
        inCart: 0
    }
];


for (let i = 0; i < carts.length ; i++) {
    carts[i].addEventListener('click' , () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.car span').textContent= productNumbers;
    }
}

function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.car span').textContent=productNumbers + 1;
    }else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.car span').textContent = 1;
    }
    
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null) { 
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }else {
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
    }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}


function totalCost(product) {
    //console.log("the product price is" , product.price);
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost !=null ) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer){
        productContainer.innerHTML ='';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
                <div class="product">
                    <div class="product-title">
                        <ion-icon name="close-circle-outline"></ion-icon>
                        <img style="height: 60px; width: 60px; margin: 5px;" src="${item.tag}.jpg">
                        <span style="font-size: 15px;">${item.name}</span>
                    </div>
                    <div class="price">
                        ${item.price},000 dt
                    </div>
                    <div class="quantity">
                        ${item.inCart}
                    </div>
                    <div class="total">
                        ${item.inCart*item.price},000 dt
                    </div>   
                </div>
            `;
        })

        productContainer.innerHTML +=`
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                    ${cartCost},000 dt
                </h4>
            </div>   
        `; 
    }
}

onLoadCartNumbers();
displayCart();