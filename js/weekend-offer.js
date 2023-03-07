// Weekend Offer Section injeced from here
document.getElementById('weekend-offer').innerHTML = `
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
                            <h3 class="fw-bold" id="days">00</h3>
                            <h6>Days</h6>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="rounded py-1 text-center bg-light">
                            <h3 class="fw-bold" id="hours">00</h3>
                            <h6>Hours</h6>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="rounded py-1 text-center bg-light">
                            <h3 class="fw-bold" id="minutes">00</h3>
                            <h6>Minutes</h6>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="rounded py-1 text-center bg-light">
                            <h3 class="fw-bold" id="seconds">00</h3>
                            <h6>Seconds</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

// 7days CountDown Function here
let countDownDate = new Date("Mar 14, 2023").getTime();
const setTime = setInterval(() => {
    // Get Time 
    const duration = countDownDate - Date.now();

    // this condition will increase old date by 1week
    if (duration <= 0) {
        countDownDate += 604800000;
    }

    const remainingDays = Math.floor(duration / (1000 * 60 * 60 * 24));
    const remaingHours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remaingMinutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const remaingSeconds = Math.floor((duration % (1000 * 60)) / (1000))


    // #DOM Function
    const DOM = (id, variable) => {
        const con = variable.toString().length == 1 ? document.getElementById(id).innerText = `0${variable}` : document.getElementById(id).innerText = variable;
    }

    // DOM
    DOM('days', remainingDays);
    DOM('hours', remaingHours);
    DOM('minutes', remaingMinutes);
    DOM('seconds', remaingSeconds);

}, 1000)
// For Animation
AOS.init({ once: true });