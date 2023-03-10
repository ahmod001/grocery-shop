// buy our products html injected from here
document.getElementById('buyOurProduct').innerHTML = `<div class="row overflow-y-hidden">
<div class="col-sm-6 pb-3 pb-sm-0" data-aos="fade-down" data-aos-delay="100">
    <div class="py-3">
        <p class="greenText fw-semibold">Buy Our Product</p>
        <h3 class="fw-bold">The product is currently available at Selected Retailers</h3>
    </div>
    <div>
        <!-- Img used 600x511 -->
        <img src="css/images/vegtable.jpg" class="img-fluid rounded" alt="">
    </div>
</div>

<div class="col-sm-6" data-aos="fade-up" data-aos-delay="100">
    <div>
        <!-- Img used 600x511 -->
        <img src="https://www.aldenvalleyridge.com/wp-content/uploads/sites/63/2019/08/GettyImages-671270196-1-600x511.jpg"
            class="img-fluid rounded" alt="">
    </div>
    <div>
        <p class="py-3" id="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat sunt laborum
            illo sit velit
            provident dolor dolores, itaque non aut eos expedita. Voluptatum, nam incidunt dolore
            
        <div id="see-text">
            <p class="fw-bold" onclick="seeMore()">See more <i class="bi bi-arrow-right text-success"></i></p>
        </div>
        </p>
    </div>
</div>
</div>`;


const description = document.getElementById('description');
const seeTextDiv = document.getElementById('see-text');

//For SeeLess Btn
const seeLess = () => {
    description.removeChild(description.firstElementChild);
    seeTextDiv.innerHTML = `<p class="fw-bold" onclick="seeMore()">See more <i class="bi bi-arrow-right text-success"></i></p>`
}
//For SeeMore Btn
const seeMore = () => {
    const seeMoreText = document.createElement('span');
    seeMoreText.innerText = `adipisci. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A deserunt sequi, Dolorum, repellendus eaque! Lorem `;
    description.appendChild(seeMoreText);

    seeTextDiv.innerHTML = `<p class="fw-bold" onclick="seeLess()">See less</p>`
}