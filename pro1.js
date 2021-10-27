const workoutPractices = JSON.parse(localStorage.getItem("favorite")) || [
  {
    name: "Push Up",
    img: "./push.jpg",
    steps: [
      "The benefits of pressure exercise to pressure exercise are many, but one of the most important benefits of these exercises is: It strengthens the chest muscles; It's one of the best physical exercises to strengthen chest muscles. It strengthens the various muscles of the body simultaneously, and can focus on one muscle to strengthen them. It strengthens the muscles of the hands and forearms. It strengthens the muscles of the shoulders from the side between the chest area and the front shoulder. It strengthens the upper back muscles, the lower back muscles. It strengthens the abdominal muscles. It works on the tendon of the knee, the quadriceps (the anterior part of the thigh), and the muscles of the leg and feet. It strengthens the heart muscle and activates it, as does any exercise that requires high effort.",
    ],
    extraImg: ["./pushupstep.jpg"],
    favourite: false,
  },
  {
    name: "Cross Body Crunch",
    img: "./cross.jpg",
    steps: [
      "The ab-toning benefits of a full-core workout may have enticed you to add them to your workout routine, but having a strong core can do more than enhance your physique—it also benefits your overall physical health and strength. The muscles of your core provide key support for your spine. Strong abdominal muscles can improve posture and even help manage, reduce, or prevent back pain.",
    ],
    extraImg: ["./CrossBodyCrunch.jpg"],
    favourite: false,
  },
  {
    name: "Plank",
    img: "./plank.jpg",
    steps: [
      "Strengthening the core is an important aspect of any workout regimen. A strong and solid core looks and feels good. But more importantly, it helps to stabilize, balance, and power the body during just about every other activity. Core strength is the basis for all coordinated and powerful athletic movements. A strong core can reduce stress on the joints and allow you to achieve better posture. The plank exercise can also be used as the basis for a core muscle strength and stability test. The plank is more of a strength-building exercise than a cardio exercise, but by engaging a range of muscles it can also help to boost your calorie burn.",
    ],
    extraImg: ["./Plank1.jpg"],
    favourite: false,
  },
  {
    name: "Pridge bodyweight",
    img: "./bridge.jpg",
    steps: [
      "The bridge (also called gymnastic bridge) is an exercise. Many variations of this exercise are employed throughout the world, most commonly the balancing of the body on the hands and the feet. It is intended to improve lower back and gluteus strength. Examples of bridging in sportive or self-defense applications are seen in Kung Fu, Judo, Brazilian jiu jitsu, Capoeira, mixed martial arts, and wrestling.In yoga, this particular pose is called Chakrasana, Urdhva Dhanurasana, or Wheel, while the Westernized nickname Bridge pose refers to a less rigorous supine backbend called Setu Bandha Sarvangasana, in which the body is fairly straight from knees to shoulders, and most of the bend is in the knees.",
    ],
    extraImg: ["./Pridgebodyweight1.jpg", "./Pridgebodyweight2.jpg"],
    favourite: false,
  },
  {
    name: "Standing calf raise",
    img: "./standing.jpg",
    steps: [
      "Standing calf raises activate the two muscles that run down the back of the lower leg: the gastrocnemius and soleus. These muscles are integral in ankle flexion and extension, propelling running and jumping.The gastrocnemius also works in tandem with the hamstrings to control knee flexion, while the soleus maintains proper balance and pumps blood from your leg back up to your heart. When weak, the calf muscles strain and tear more easily",
    ],
    extraImg: ["./Standing1.jpg"],
    favourite: false,
  },
  {
    name: "Bench Dips",
    img: "Bench.jpg",
    steps: [
      "Weighted dips are an advanced variation of the chest dip exercise that works your triceps, chest, shoulders, and arm muscles.Weighted dips should only be performed if you already have good upper body strength. If you’re new to weighted dips, try doing regular chest dips first to get the move down and build your strength. When done correctly, weighted dips can add muscle mass to your upper body. This exercise can also help build your strength for other exercises like bench presses.Another benefit of weighted dips is the ability to work opposing muscle groups at once. This is due to the fact that chest dips are a closed kinetic chain exercise.With kinetic chain exercises, the hands or feet are pressed against an immovable surface in this case parallel bars. These exercises are beneficial because they work multiple opposing muscle groups at the same time and isolate the muscles you are trying to work.",
    ],
    extraImg: ["./Bench1.jpg"],
    favourite: false,
  },
  {
    name: "Mountain Climbers",
    img: "./Mountain.jpg",
    steps: [
      "As a compound exercise, mountain climbers work multiple muscle groups and joints at the same time. In other words, they deliver serious bang for your buck targeting core muscles  such as back hips, and abs, as well as glutes leg muscles and even your shoulders.The dynamic nature of mountain climbers makes them great mobility boosters. Every time you repeat the mountain climber motion you loosen up your hip and knee joints, improving range of motion and enhancing overall function. In doing so you also reduce your risk of injury",
    ],
    extraImg: ["./Climbers.jpg"],
    favourite: false,
  },
  {
    name: "Burpees",
    img: "./Burpees.jpg",
    steps: [
      "Exercises that isolate a muscle group bicep curls tricep pull downs crunches etc. have their own time and place. However movements that require many muscles and joints to work together are a bit better for supporting everyday functional movement. Squatting jumping and planking engage the upper body lower body  and core in every repetition.Because the movement is a full body exercise it will naturally burn more calories because it requires more muscles to complete the movement. Not only that but it is also a great exercise to add to any high intensity interval training HIIT which is known to be a calorie blasting workout. More muscles used and a higher intensity typically mean more calories burned which ultimately leads to faster weight loss",
    ],
    extraImg: ["./Burpees1.jpg"],
    favourite: false,
  },
  {
    name: "Downward Dog",
    img: "Dog.jpg",
    steps: [
      "Stretches the lower body. The inversion of downward dog helps you get into position to stretch the hamstrings calves and ankles fully. Strengthens the upper body. Downward dog is a weight bearing exercise so it is effective at building strength in your shoulders and arms. This yoga pose also engages your midsection to help build strong abdominal muscles.Stimulates blood flow. Downward dog is a position that places your heart above your head allowing gravity to increase blood flow and improve your circulation.Improves posture. Downward dog opens up the chest and shoulders which can help straighten your vertebrae and align your spine leading to overall improved posture.Fine tunes your foot muscles. This pose stretches and strengthens the major muscles and bones in your body and the smaller muscles in your feet like the plantar fascia which is the ligament that connects the heel to the front of the foot. Strengthening this part of your body can improve your walking and help prevent injury to this area when you are performing more strenuous physical activity.",
    ],
    extraImg: ["./Downward.jpg"],
    favourite: false,
  },
];

const cards = document.querySelector(".cards");

let favoriteArr = []

const render = () => {
  $(".oneItem").hide();
  cards.innerHTML = ""
  workoutPractices.forEach((practice, i) => {
    cards.innerHTML += `<div class="card">
        <h2 class="exc">${practice.name}</h2>
        <img src="${practice.img}" alt="img" width="300" height="300" id="img1">
        <div class="btns">
        <button class="but" onclick = 'showItem(${i})'>  Show More </button>
        <button id="button" onclick = 'addToFavorite(${i})'><i class="${practice.favourite ? "fas fa-heart" : "far fa-heart"}"></i></button>
        </div>
    </div>`;
  });

  favoriteArr = workoutPractices.filter(item => item.favourite)
};

render();

const addToFavorite = (i) => {
    workoutPractices[i].favourite = !workoutPractices[i].favourite
    localStorage.setItem("favorite", JSON.stringify(workoutPractices))
    render();
}

const showItem = (i) => {
  let myItem = workoutPractices[i];
  $(".cards").hide();
  $("#h1").hide();
  $("#search").hide();
  $(".oneItem").show();

  $(".oneItem").append(`<h1 class="title">${myItem.name}</h1>
    <div class ="info">
    <div class='extraImg'>
    <img src='${myItem.extraImg[0]}' />
    </div>
    <div class ='steps'>
    <p class="step">${myItem.steps[0]}</p></div> 
    </div>`);
};

//   myItem.extraImg.forEach((item, i) => {
//     $(".extraImg").append(`<div class='extraImgForWork'>
//         <img src='${item}' />
//         </div>`);
//   });

//   myItem.steps.forEach((item, i) => {
//     $(".steps").append(`
//             <p class="step"> ${item}</p>`);
//   });
// };


////////////////////// for search 
const searchInData = ()=>{
  let inputValue = $("#search").val()
  const serchArr = workoutPractices.filter(item => item.inputValue)

  

}

$("#search").change(searchInData)
