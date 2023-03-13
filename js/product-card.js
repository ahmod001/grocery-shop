// Rating Star Function
const RatingStars = (id, numOfStars) => {
    const ratingSpan = document.getElementById(id);
    ratingSpan.innerText = '';

    for (let i = 0; i < numOfStars; i++) {
        ratingSpan.innerHTML += `<i class="bi bi-star-fill text-warning"></i>`
    }
}

//Plus btn EventHandler 
const plusBtn = (id) => {
    const inputField = document.getElementById(id);
    inputField.value = Number.parseInt(inputField.value) + 1;
}
//Minus btn EventHandler 
const minusBtn = (id) => {
    const inputField = document.getElementById(id);
    const getInputValue = Number.parseInt(inputField.value);

    if (getInputValue > 1) {
        inputField.value = getInputValue - 1;

    }

}

// Product main Cards
const productCards = function () {
    fetch('https://api.npoint.io/fd3d595fb5be03f5497b')
        .then(response => response.json())
        .then(data => {
            const productDetails = data.productsCart;
            console.log(productDetails);
            const productsSection = document.getElementById('products');
            productsSection.innerHTML = '';

            productDetails.forEach((product, i) => {
                const index = i + 1;

                productsSection.innerHTML += `
                <div class="mx-auto mx-sm-0 pb-4 col-10 col-sm-6 col-lg-4 col-xl-3"  data-aos="zoom-in">
                    <div class="card" style="max-width:25rem;">
                        <!-- #Product image-->
                        <img src="${product.img}"
                            class="card-img-top " alt="...">
                        <div class="card-body bg-light py-4">
                            <div class="d-flex justify-content-between">
                                <!-- #Product name-->
                                <div>
                                    <h5 class="card-title">${product.name}</h5>
                                </div>
                                <!-- #Price per units -->
                                <div>
                                    <h5 class="card-title fw-semibold">$<span>${product.price}</span> / ${product.type}</h5>
                                </div>
                            </div>
    
                            <div class="d-flex justify-content-between">
                                <div>
                                    <!-- #Reviews -->
                                    <p style="font-size:small;">
                                        <span id="reviewOf${product.id}"></span> (${product.review} Review)
                                    </p>
                                </div>
                                <!-- #Status -->
                                <div>
                                    <p class="fw-semibold greenText">${product.status}</p>
                                </div>
                            </div>
    
                            <div class="d-flex justify-content-between">
                                <div class="d-flex align-items-center cart">
    
                                    <button onclick="minusBtn(${index})" class="fs-4 minus-btn" style="background-color: #ffe385;">—</button>
    
                                    <input id="${product.id}" class="text-center fw-bold" value="1">
    
                                    <button onclick="plusBtn(${index})" class="fs-4 plus-btn" style="background-color: #C0F3BE">+</button>
                                </div>
                                <div class="d-flex align-items-center px-3 justify-content-center">
                                    <p class="fs-2 cart-btn" onclick="cartBtnEvent(cart${product.id})"><i class="bi bi-cart2"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

                // Rating 4star function called here
                RatingStars(`reviewOf${product.id}`, product.rating)
            })
        });
}();
