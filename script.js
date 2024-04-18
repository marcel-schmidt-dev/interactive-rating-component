var selected;
var votings = document.querySelectorAll(".voting");
var submitbtn = document.querySelector(".submit");
var card = document.querySelector(".card");
var thanks = document.querySelector(".thanks");


function select(val, voting){
    selected = val;
    votings.forEach(element => {
        element.classList.remove("selected");
    });
    voting.classList.add("selected");
    if (submitbtn.classList.contains("error")) {
        submitbtn.classList.remove("error");
        submitbtn.innerHTML = "submit"
    }
}

function submit() {
    if (selected == undefined) {
        submitbtn.innerHTML = "please vote first"
        submitbtn.classList.add("error");
    } else{
        card.style.display = "none";
        thanks.style.display = "block";
        var result = document.querySelector(".result span");
        result.innerHTML = selected;
    }
}