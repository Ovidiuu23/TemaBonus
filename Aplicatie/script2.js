document.querySelectorAll(" .carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carouselitem");  
    const buttonsHtml=Array.from(items, ()=>{
        return `<span class="carouselbutton></span>`;
    });
    
    
    carousel.insertAdjacentHTML("beforeend",`
    <div class="carouselnav">
    ${buttonsHtml.join("")}
    </div>
    `);
    
    const buttons=carousel.querySelectorAll(".carouselbutton");
    
    buttons.forEach((button, i)=> {
    button.addEventListener("click", ()=>{
    items.forEach(item=>item.classList.remove("carouselitemselected"));
    buttons.forEach(button=>button.classList.remove("carouselbuttonselected"));
    
    items[i].classList.add("carouselitemselected");
    button.classList.add("carouselbuttonselected");
    
    });
    });
    
    items[0].classList.add("carouselitemselected");
    buttons[0].classList.add("carouselbuttonselected");
    });