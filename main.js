const menuEmail = document.querySelector('.navbar-email');
const burgerButton = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.nav-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.shopping-cart-detail');
const productDetailContainer = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerButton.addEventListener('click', toggleBurguerMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleBurguerMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleCarritoMenu(){
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

const productList=[];
    productList.push(
        {
            name:'Bike',price:120,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
    productList.push(
        {
            name:'Pantalla',price:220,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
    productList.push(
        {
            name:'Compu',price:620,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
    productList.push(
        {
            name:'Bike',price:120,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
    productList.push(
        {
            name:'Pantalla',price:220,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
    productList.push(
        {
            name:'Compu',price:620,image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});

function renderProducts(arr){
    for(product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');

        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv=document.createElement('div');

        const productPrice=document.createElement('p');
        productPrice.innerText= '$'+ product.price;

        const productName=document.createElement('p');
        productName.innerText=product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');

        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
    renderProducts(productList);