
const productCards = function () {
    fetch('https://api.npoint.io/fd3d595fb5be03f5497b')
        .then(response => response.json())
        .then(data => {
            const productDetails = data.productsCart;
            console.log(productDetails);
            const productsSection = document.getElementById('products');
            productsSection.innerHTML = '';

            productDetails.forEach(product => {
                productsSection.innerHTML += `
                <div class="mx-auto mx-sm-0 pb-4 col-11 col-sm-6 col-md-4 col-lg-3"  data-aos="zoom-in">
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
                                <!-- #Price per  units -->
                                <div>
                                    <h5 class="card-title fw-semibold">$<span>${product.price}</span> / ${product.type}</h5>
                                </div>
                            </div>
    
                            <div class="d-flex justify-content-between">
                                <div>
                                    <!-- #Reviews -->
                                    <p style="font-size:small;">
                                        <i class="bi bi-star-fill text-warning"></i> (${product.review} Review)
                                    </p>
                                </div>
                                <!-- #Status -->
                                <div>
                                    <p class="fw-semibold greenText">${product.status}</p>
                                </div>
                            </div>
    
                            <div class="d-flex justify-content-between">
                                <div class="d-flex align-items-center cart">
    
                                    <button class="fs-4" style="background-color: #ffe385;">—</button>
    
                                    <input class=" text-center fw-bold" value="1">
    
                                    <button class="fs-4" style="background-color: #C0F3BE">+</button>
                                </div>
                                <div class="d-flex align-items-center px-3 justify-content-center">
                                    <p class="fs-2 cart-btn"><i class="bi bi-cart2"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            });

        })
}();
