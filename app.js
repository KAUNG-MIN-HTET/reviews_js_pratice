let reviews = [
    {
        id: 1,
        img: "https://minimaltoolkit.com/images/randomdata/male/70.jpg",
        name: "Deandre Mosses",
        job: "Senior DevOp",
        info: "Senior DevOp.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id: 2,
        img: "https://minimaltoolkit.com/images/randomdata/male/4.jpg",
        name: "Dorian Preisser",
        job: "Chief Technical Officer",
        info: "Chief as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'."
    },
    {
        id: 3,
        img: 'https://minimaltoolkit.com/images/randomdata/female/74.jpg',
        name: "Cyndi Mitera",
        job: "UX Designer",
        info: "Designer combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
        id: 4,
        img: 'https://minimaltoolkit.com/images/randomdata/female/46.jpg',
        name: "Sanjuanita Vieths",
        job: "Web Designer",
        info: "Web has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage."
    },
    {
        id: 5,
        img: 'https://minimaltoolkit.com/images/randomdata/female/107.jpg',
        name: "Harriet Brozena",
        job: "Chief Financial Officer",
        info: "Finance is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
    },
    {
        id: 6,
        img: 'https://minimaltoolkit.com/images/randomdata/male/73.jpg',
        name: "Vicente Christing",
        job: "UX designer",
        info: "Designer combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }
];

//select
const img = document.querySelector("img");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const randomBtn = document.querySelector("#randomBtn");

//current reviews
let currentItem = 0;

//window event
window.addEventListener("load",function() {

    update();
});

function update() {
    let item = reviews[currentItem];

    img.src = item.img;
    job.textContent = item.job;
    info.textContent = item.info;
}

//next
nextBtn.addEventListener("click",function() {
    currentItem++;

    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    update();
});

//prev
prevBtn.addEventListener("click",function() {
    currentItem--;

    if(currentItem < 0) {
        currentItem = 5;
    }

    update();
});

//random
randomBtn.addEventListener("click",function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);

    update();
});