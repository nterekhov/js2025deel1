// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

const personen = [];

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person{
    constructor(name, age, department){
        super(name, age);
        this.department = department;
    }
}

class Manager extends Employee{
    constructor(name, age, department, teamSize){
        super(name, age, department)
        this.teamSize = teamSize;
    }
}

function renderUI(){

}

//eigen js
const personenHandler = () => {
    const type = document.querySelector("ex2_type").value;
    const name = document.querySelector("ex2_name").value.trim();
    const age = Number(document.querySelector("ex2_age").value);
    const dep = document.querySelector("ex2_dep").value.trim();
    const team = Number(document.querySelector("ex2_team").value);
    const feedback = document.querySelector("ex2_feedback");

    if (!name || !age || !dep){
        feedback.className = "alert alert-warning";
        feedback.textContent = "Naam, leeftijd of departement zijn niet ingevuld.";
        return
    }

    if (type === "manager"){
        const persoon = new Manager(name, age, dep, team);
    }

    if (type === "employee"){
        const persoon = new Employee(name, age, dep);
    }

    personen.push(persoon);

    renderUI();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("ex2_btn")?.addEventListener("click", personenHandler);
});
