const productInput = document.getElementById("Product_input");
const ul = document.getElementById("product_container");

const add_product = () => {
    const productInputValue = productInput.value;
    console.log(productInputValue);
    if (!productInputValue) {
        return;
    }
    // === input condition ====

    displayUI(productInputValue);
    // ==== display product ====

    setData(productInputValue);
    // ===== set data to local storage ====

    productInput.value = '';
    // ==== clear input =====

}
// ==== get input & call all products ===

const displayUI = name => {
    const li = document.createElement("li");
    li.innerText = name;
    ul.appendChild(li)
}
// ==== display product on UI ====

const getData = () => {
    const cart = localStorage.getItem('product');
    let cartobj;
    if (cart) {
        cartobj = JSON.parse(cart)
    } else {
        cartobj = {}
    }
    return cartobj
}
// === get data from local storage ====


const setData = name => {
    const cart = getData();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else {
        cart[name] = 1

    }
    const cartStringiFied = JSON.stringify(cart)
    localStorage.setItem('product', cartStringiFied);

}
// ==== set data to local storage ===

const displayData = () => {
    let cart = getData();
    for (const name in cart) {
        displayUI(name)
    }

}
displayData();
// ==== display local storage data on UI ===

const purchase = () => {
    document.getElementById("product_container").textContent = '';
    localStorage.removeItem('product');

}
// ==== purchase event;; data remove from UI & Local storage ===