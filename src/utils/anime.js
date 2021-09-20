import anime from "animejs/lib/anime.es.js";
import {autoSlide} from "./javascript";

function animatebio() {
  const container = document.querySelector(".container-24LEp");
  const h1 = document.querySelector(".biocont-1KD6E h1");
  const p = document.querySelector(".biocont-1KD6E p");
  const rect1 = document.querySelector(".rect1");
  const rect2 = document.querySelector("rect2");
  const homenavli = document.querySelectorAll(".homenavmenu-2znHH ul li");

  anime({
    targets: container,
    easing: "easeInOutCubic",
    height: "100vh",
    duration: 2000,
  });

  anime({
    targets: h1,
    easing: "easeInOutCubic",
    translateY: [{ value: [5, -10], duration: 700, delay: 2300 }],
    opacity: [
      { value: 1, delay: 2400 },
      { value: 0, delay: 2400 },
    ],
    duration: 800,
  });

  anime({
    targets: p,
    easing: "easeInOutCubic",
    translateY: [{ value: [5, -10], duration: 700, delay: 2800 }],
    opacity: [
      { value: 1, delay: 2700 },
      { value: 0, delay: 2700 },
    ],
    duration: 800,
  });

  anime({
    targets: homenavli,
    easing: "easeInOutCubic",
    opacity: [0, 1],
    duration: 800,
    delay: anime.stagger(300, { start: 6500 }),
  });

  anime({
    targets: rect1,
    easing: "easeInOutCubic",
    translateY: [{ value: [10, -10], duration: 2000, delay: 4000 }],
    opacity: [{ value: 0, duration: 2000 }],
    duration: 1000,
  });

  anime({
    targets: rect2,
    easing: "easeInOutCubic",
    translateY: [{ value: [10, -10], duration: 2000, delay: 4000 }],
    opacity: [{ value: 0, duration: 2000 }],
    duration: 1000,
  });
}

function animatemenu() {
  const boxes = document.querySelectorAll(".containerbox-32tuN");
  const p = document.querySelectorAll(".containerbox-IkRjq p");
  const titleheader = document.querySelector(".titleHeader-3EorM");

  anime({
    targets: boxes,
    easing: "easeInOutCubic",
    opacity: [0, 1],
    duration: 700,
    delay: anime.stagger(500, { start: 700 }),
  });

  // anime({
  //   targets: p,
  //   easing: "easeInOutCubic",
  //   translateY: [-20, 0],
  //   opacity: [0, 1],
  //   duration: 900,
  //   delay: anime.stagger(300, { start: 100 }),
  // });

  anime({
    targets: titleheader,
    easing: "easeInOutCubic",
    opacity: [0, 1],
    translateY: [-10, 0],
    duration: 800,
    delay: 4000,
  });
}

//technology page
function handleTechnology(node) {
  const techmenuli = node.querySelectorAll(".techmenu-1n3A7 ul li");
  const tabparags = node.querySelectorAll(
    ".tabwrapper-3Ystf .tabcontainer-3m7xM div p"
  );
  const tabspan = node.querySelectorAll(
    ".tabwrapper-3Ystf .tabcontainer-3m7xM div div"
  );
  console.log(tabparags, "tabparags");
  anime({
    targets: techmenuli,
    easing: "easeInOutCubic",
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(200, { start: 400 }),
  });

  anime({
    targets: tabparags,
    easing: "easeInOutCubic",
    translateX: [-30, 0],
    opacity: [0, 1],
    duration: 600,
    delay: anime.stagger(150, { start: 700 }),
  });

  anime({
    targets: tabspan,
    easing: "easeInOutCubic",
    translateX: [30, 0],
    opacity: [0, 1],
    duration: 600,
    delay: anime.stagger(150, { start: 700 }),
  });
}

//hservices page
function hanldeservices(node) {
  const parags = node.querySelectorAll(".description p");
  const img = node.querySelectorAll(".rightcontainer img");

  anime({
    targets: parags,
    easing: "easeInOutCubic",
    translateY: [-20, 20],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(180, { start: 200 }),
  });

  anime({
    targets: img,
    easing: "easeInOutCubic",
    translateY: [-30, 20],
    opacity: [0, 1],
    duration: 800,
    delay: 200,
  });
}

function handleabout(node) {
  const parag = node.querySelectorAll(
    ".aboutcontainer-1ZeQg .aboutparag-ojq-O"
  );
  anime({
    targets: parag,
    easing: "easeInOutCubic",
    translateY: [-50, 20],
    opacity: [0, 1],
    duration: 1000,
  });
}

//entering fucntion for all components

function entering(node, appears) {
  const images = node.querySelectorAll(".maincontainer .rightcontainer img")
  console.log(images, 'node images');
  hanldeservices(node);
  handleTechnology(node);
  handleabout(node);
  if (images.length === 2) autoSlide(images);
}

function entered(node, isAppearing) {
  // const images = node.querySelectorAll(".websvg");
  // console.log(images, "image in etneterd");
  // console.log("entred");
  // setTimeout(() => {
  //   autoslide(images), 3500}
  //   );
  // // autoslide(images)

}

//components exiting function
function exiting(node) {
  const parags = node.querySelectorAll(".description p");
  const img = node.querySelectorAll(".rightcontainer img");

  anime({
    targets: parags,
    easing: "easeInOutCubic",
    translateY: [-10],
    opacity: [0],
    duration: 200,
    delay: anime.stagger(100),
  });

  anime({
    targets: img,
    easing: "easeInOutCubic",
    translateY: [-30],
    opacity: [0],
    duration: 700,
  });
}

function enteringtech(node, isAppearing) {
  console.log(node, "techmenu entering");
}

function exitingtech(node) {
  console.log(node, "techmenu exiting");
}

export {
  animatemenu,
  animatebio,
  entering,
  exiting,
  entered,
  enteringtech,
  exitingtech,
};
