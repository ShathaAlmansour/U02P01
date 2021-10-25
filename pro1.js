const workoutPractices = [
    {name: "Push Up", img: "push.jpg"},
    {name: "Cross Body Crunch", img: "./cross.jpg"},
    {name: "Plank", img: "./plank.jpg"},
    {name: "Pridge bodyweight", img:"./bridge.jpg"},
    {name: "Standing calf raise", img:"./standing.jpg"},
    {name: "Bench Dips", img:"Bench.jpg"},
    {name: "Mountain Climbers", img:"./Mountain.jpg"},
    {name: "Burpees", img:"./Burpees.jpg"},
    {name: "Downward Dog", img:"Dog.jpg"},
  ];
const cards = document.querySelector(".cards")
const render = () => {

    workoutPractices.forEach(practice => {
        cards.innerHTML += `<div class="card">
        <h2 class="exc">${practice.name}</h2>
        <img src="${practice.img}" alt="img" width="300" height="300" id="img1">
        <div class="btns">
        <button class="but"> <a href="showmore1.html"> Show More</a> </button>
        <button id="button"><i class="fas fa-heart"></i></button>
        </div>
    </div>`

    })
}
render()