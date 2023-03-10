// Customer Choice product injected from here
document.getElementById('customer-choice-product').innerHTML = `
<div class="text-center py-5">
                <p>Customer's Choice <i class="bi bi-check2-circle"></i></p>
                <h3 class="fw-bold">Check Our Products</h3>
            </div>

            <!-- Product images -->

            <!-- #row-1 -->
            <div class="row pb-4" data-aos="fade-right">
                <div class="col-4 choice-product">
                    <div class="text-center">
                        <img class="rounded img-fluid"
                            src="https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg" alt="">
                    </div>
                </div>
                <div class="col-4 choice-product">
                    <div class="text-center">
                        <img class="rounded img-fluid"
                            src="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="">
                    </div>
                </div>
                <div class="col-4 choice-product">
                    <div class="text-center">
                        <img class="img-fluid rounded"
                            src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="">
                    </div>
                </div>
            </div>

            <!-- #row-2 -->
            <div class="row" data-aos="fade-left">
                <div class="col-4 choice-product">
                    <div class="text-center">
                        <img class="rounded img-fluid"
                            src="https://images.pexels.com/photos/13118857/pexels-photo-13118857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                    </div>
                </div>
                <div class="col-4 choice-product">
                    <div class="text-center">
                        <img class="rounded img-fluid"
                            src="https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="">
                    </div>
                </div>
                <div class="col-4 choice-product">
                    <div class="text-center">
                        <img class="img-fluid rounded"
                            src="https://images.pexels.com/photos/12809556/pexels-photo-12809556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="">
                    </div>
                </div>
            </div>`


// For Animation
AOS.init({ once: true });

// const customerChoiceFunc = function () {
//     fetch('https://api.npoint.io/fd3d595fb5be03f5497b')
//     .then(response => response.json())
//     .then(data => {
//         const images = data.customerChoiceProduct;
//         console.log(images);
//         const imgRowOne = document.getElementById('imgRowOne');
//         imgRowOne.innerHTML = '';
//         const imgRowTwo = document.getElementById('imgRowTwo');
//         imgRowTwo.innerHTML = '';
//         // DOM
//         const DOM = (image) => {
//             return `<div class="col-4 choice-product">
//             <div class="text-center">
//                 <img class="rounded img-fluid"
//                     src="${image.imgLink}" alt="">
//             </div>
//         </div>`
//         }
//         // Loop
//         images.forEach((img, i) => {

//             if (i <= 2) {
//                 imgRowOne.innerHTML += DOM(img);
//             }else{
//                 imgRowTwo.innerHTML += DOM(img)
//             }
//         });
//     })   
// }();
