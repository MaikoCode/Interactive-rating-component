let rate = null;
let li = document.getElementsByTagName("li");
let rateDom = document.querySelector(".rate");
let button = document.querySelector("button");
let ratingStart = document.querySelector(".rating-start");
let ratingEnd = document.querySelector(".rating-end");

let number1, number2, number3, number4, number5;

number1 = li[0];
number2 = li[1];
number3 = li[2];
number4 = li[3];
number5 = li[4];


let listFunction = {
    clickFunction: function(){
        if(rate !== null){
            li[rate-1].style.backgroundColor = "#343e47";
            li[rate-1].style.color = "hsl(216, 12%, 54%)";
            li[rate-1].addEventListener("mouseout", listFunction.mouseOut);
            li[rate-1].addEventListener("mouseover", listFunction.mouseOver);
        }
        this.style.backgroundColor = "hsl(25, 97%, 53%)";
        this.style.color = "hsl(0, 0%, 100%)";
        rate = this.textContent;
        rateDom.innerHTML = rate;
        this.removeEventListener("mouseover", listFunction.mouseOver);
        this.removeEventListener("mouseout", listFunction.mouseOut);
    },

    mouseOut: function(){
        this.style.backgroundColor = "#343e47";
        this.style.color = "hsl(216, 12%, 54%)";
    },

    mouseOver: function(){
        this.style.backgroundColor = "hsl(216, 12%, 54%)";
        this.style.color = "hsl(0, 0%, 100%)";
        this.style.opacity = "0.9";
    }
}

number1.addEventListener("click", listFunction.clickFunction);
number2.addEventListener("click", listFunction.clickFunction);
number3.addEventListener("click", listFunction.clickFunction);
number4.addEventListener("click", listFunction.clickFunction);
number5.addEventListener("click", listFunction.clickFunction);


number1.addEventListener("mouseover", listFunction.mouseOver);
number2.addEventListener("mouseover", listFunction.mouseOver);
number3.addEventListener("mouseover", listFunction.mouseOver);
number4.addEventListener("mouseover", listFunction.mouseOver);
number5.addEventListener("mouseover", listFunction.mouseOver);


number1.addEventListener("mouseout", listFunction.mouseOut);
number2.addEventListener("mouseout", listFunction.mouseOut);
number3.addEventListener("mouseout", listFunction.mouseOut);
number4.addEventListener("mouseout", listFunction.mouseOut);
number5.addEventListener("mouseout", listFunction.mouseOut);

button.addEventListener("click", (e) =>{
    console.log(rate);
    if(rate === null){
        ratingStart.style.display = "block";
        ratingEnd.style.display = "none";
    }else{
        ratingStart.style.display = "none";
        ratingEnd.style.display = "flex";
    }
})


