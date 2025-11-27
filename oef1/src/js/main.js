// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

//eigen js
const oefeningen = [];

function berekenTotaal(){

}

function renderUI(){
    const list = document.querySelector("#ex1_list");

    list.innerHTML = list.map(oefening => `<li class="list-group-item">${oefening}</li>`).join("");
    return list;
}

const oefeningenHandler = () => {
    const oefeningInput = document.querySelector("#ex1_ex");
    const minutenInput = document.querySelector("#ex1_min");
    const total = document.querySelector("#ex1_total");

    const oefening = oefeningInput.value.trim();
    const minuten = minutenInput.value;

    oefeningen.push({oefening, minuten});

    if (!oefening || !minuten || minuten <= 0){
        const feedback = document.querySelector("#ex1_feedback");
        feedback.className = "alert alert-warning";
        feedback.textContent = "Gelieve een geldige naam en minuten in te vullen.";
        return
    }

    total.textContent = berekenTotaal();

    renderUI();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ex1_btn")?.addEventListener("click", oefeningenHandler);
});
