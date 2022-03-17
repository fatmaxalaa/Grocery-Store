// search icon
function search() {
        document.getElementById("search-form").classList.toggle("search-box");
}
document.getElementById("search-icon").addEventListener("click", search);

// shopping-cart 
function shoppingcart() {
        document.getElementById("shopcart").classList.toggle("cart-active");
}
document.getElementById("cart").addEventListener("click", shoppingcart);

// login form
function login() {
        document.getElementById("login").classList.toggle("loginactive")
}
document.getElementById("user").addEventListener("click", login);