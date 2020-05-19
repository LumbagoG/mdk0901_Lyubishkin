const portfolioItem = document.querySelectorAll(".portfolio-item"),
    content = document.querySelector('.portfolio-dots');
    
for (let i = 1; i < portfolioItem.length; i++) {
    let li = document.createElement("li");
    li.classList.add('dot')
    content.append(li);
}

for (let i = 0; i < 1; i++) {
    let li = document.createElement("li");
    li.classList.add('dot');
    li.classList.add('dot-active')
    content.prepend(li);
}

const playSlider = () => {
    const portfolioItem = document.querySelectorAll(".portfolio-item"),
        dot = document.querySelectorAll(".dot"),
        portfolio = document.getElementById("portfolio"),
        prev = document.getElementById('arrow-right'),
        next = document.getElementById('arrow-left'),
        content = document.querySelector('.portfolio-dots');
    
    const addClass = (item, index, classStyle) => {
        item[index].classList.add(classStyle);
    };

    const removeClass = (item, index, classStyle) => {
        item[index].classList.remove(classStyle);
    };
    
    let count = 0;
    
    function animateSlide(){
        removeClass(portfolioItem,count, "portfolio-item-active");
        removeClass(dot,count, "dot-active");
        count++;
        if (count === portfolioItem.length) count = 0;
        addClass(portfolioItem,count, "portfolio-item-active");
        addClass(dot,count, "dot-active");
    };

    function backSlide(){
        removeClass(portfolioItem,count, "portfolio-item-active");
        removeClass(dot,count, "dot-active");
        count--;
        if (count == 0) count = 5;
        addClass(portfolioItem,count, "portfolio-item-active");
        addClass(dot,count, "dot-active");
    };

    portfolio.addEventListener("click", e =>{
        e.preventDefault();
        e.stopPropagation();
        const target = e.target;
        if ( !target.matches(".portfolio-btn, .dot" )) return;

        else if ( target.matches(".dot") && (!target.matches(".dot-active") )){

            removeClass(portfolioItem, count, "portfolio-item-active");
            removeClass(dot,count,"dot-active");

            for (let i = 0; i < portfolioItem.length; i++){
                if(dot[i] == target) count=i;
            };

            addClass(portfolioItem, count, "portfolio-item-active");
            addClass(dot,count,"dot-active");
        };
    })

    prev.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        let animate = setInterval(animateSlide, 1000);

        portfolio.addEventListener('mouseover', e => {
            e.preventDefault();
            e.stopPropagation();
            clearInterval(animate);
        })

    })

    next.addEventListener('click', e => {
        e.stopPropagation();
        e.preventDefault();
        const target = e.target;
        let animateBack = setInterval(backSlide, 1000);

        portfolio.addEventListener('mouseover', e => {
            e.preventDefault();
            e.stopPropagation();
            clearInterval(animateBack);
        })

    })
}
    
playSlider();
    
