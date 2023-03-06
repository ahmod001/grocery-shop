// Weekend Offer Section injeced from here
document.getElementById('weekend-offer').innerHTML =`
<div class="row overflow-x-hidden rounded weekend-offer py-5">
<!-- #Image -->
<div class="col-md-5 col-lg-6 d-flex justify-content-center align-items-center pb-4 pb-md-0"
    data-aos="zoom-in-up">
    <img src="css/images/weekend-offer.png" class="w-75" alt="">
</div>

<!-- #Text -->
<div class="col-md-7 col-lg-6 px-4 px-md-5" data-aos="fade-left">
    <div>
        <p><i class="bi bi-calendar2-week"></i> Weekly Offers</p>
        <p id="news" class="fs-2"> Check deals of the day </p>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius dicta, cupiditate sequi ipsa
            mollitia perferendis quisquam.</p>

        <!-- #Timer -->
        <div class="row">
            <div class="col-lg-11">
                <div class="row text-dark pt-4">
                    <div class="col-3">
                        <div class="rounded py-1 text-center bg-light">
                            <h3 class="fw-bold">02</h3>
                            <h6>Days</h6>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="rounded py-1 text-center bg-light">
                            <h3 class="fw-bold">17</h3>
                            <h6>Hours</h6>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="rounded py-1 text-center bg-light">
                            <h3 class="fw-bold">47</h3>
                            <h6>Minutes</h6>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="rounded py-1 text-center bg-light">
                            <h3 class="fw-bold">57</h3>
                            <h6>Seconds</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

// For Animation
AOS.init({ once: true });