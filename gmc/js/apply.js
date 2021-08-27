console.log("hello");
const like = document.querySelectorAll(".like");
let icon = document.querySelectorAll("#icon");
let count = document.querySelectorAll("#count");


// button clicked

let clicked = false;


like.addEventListener("click", () => {
    if(!clicked){
        clicked = true;
        icon.innerHTML = '<i class="fas fa-thumbs-up"></i>';
        count.textContent++;
    }
    else{
        clicked = false;
        icon.innerHTML = '<i class="fas fa-thumbs-up"></i>';
        count.textContent--;
    }
})
