import anime from "animejs/lib/anime.es.js";
import { autoSlide } from "./javascript";

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
    duration: 1500,
  });

  anime({
    targets: h1,
    easing: "easeInOutCubic",
    translateY: [{ value: [5, -10], duration: 700, delay: 1400 }],
    opacity: [
      { value: 1, delay: 1400 },
      { value: 0, delay: 1400 },
    ],
    duration: 800,
  });

  anime({
    targets: p,
    easing: "easeInOutCubic",
    translateY: [{ value: [5, -10], duration: 700, delay: 1800 }],
    opacity: [
      { value: 1, delay: 1800 },
      { value: 0, delay: 1400 },
    ],
    duration: 800,
  });

  anime({
    targets: homenavli,
    easing: "easeInOutCubic",
    opacity: [0, 1],
    duration: 700,
    delay: anime.stagger(300, { start: 5500 }),
  });



  // anime({
  //   targets: rect1,
  //   easing: "easeInOutCubic",
  //   translateY: [{ value: [10, -10], duration: 2000, delay: 4000 }],
  //   opacity: [{ value: 0, duration: 2000 }],
  //   duration: 1000,
  // });

  // anime({
  //   targets: rect2,
  //   easing: "easeInOutCubic",
  //   translateY: [{ value: [10, -10], duration: 2000, delay: 4000 }],
  //   opacity: [{ value: 0, duration: 2000 }],
  //   duration: 1000,
  // });
}

function animatemenu() {
  const boxes = document.querySelectorAll(".containerbox-32tuN");
  const p = document.querySelectorAll(".containerbox-IkRjq p");
  const images = document.querySelectorAll(
    ".container-24LEp .containermenu-2d_fc .containerbox-32tuN img"
  );

  anime({
    targets: boxes,
    easing: "easeInOutCubic",
    opacity: [0, 1],
    duration: 600,
    delay: anime.stagger(400, { start: 800 }),
  });

  anime({
    targets: images,
    easing: "easeInOutCubic",
    opacity: [
      { value: 1},
      { value: 0, delay:90},
    ],
    duration: 600,
    delay: anime.stagger(400, { start: 800 }),
  });
}

//technology page
function handleTechnology(node) {
  const techmenuli = node.querySelectorAll(".techmenu-3CKhE ul li");
  const tabparags = node.querySelectorAll(
    ".tabwrapper-1qhUY .tabcontainer-3ldPc div p"
  );
  const tabspan = node.querySelectorAll(
    ".tabwrapper-1qhUY .tabcontainer-3ldPc div div"
  );
  anime({
    targets: techmenuli,
    easing: "easeInOutCubic",
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 300,
    delay: anime.stagger(200, { start: 400 }),
  });

  anime({
    targets: tabparags,
    easing: "easeInOutCubic",
    translateX: [-30, 0],
    opacity: [0, 1],
    duration: 400,
    delay: anime.stagger(150, { start: 600 }),
  });

  anime({
    targets: tabspan,
    easing: "easeInOutCubic",
    translateX: [30, 0],
    opacity: [0, 1],
    duration: 400,
    delay: anime.stagger(150, { start: 500 }),
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

function handleContact(node) {
  const parags = node.querySelectorAll(".contactbox-3yyUT div");
  const image = node.querySelectorAll(".contactsvgcontainer-1NLZb img");

  anime({
    targets: parags,
    easing: "easeInOutCubic",
    translateY: [-20, 20],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(180, { start: 200 }),
  });

  anime({
    targets: image,
    easing: "easeInOutCubic",
    translateY: [-30, 20],
    opacity: [0, 1],
    duration: 800,
    delay: 200,
  });
}

function animatenavmenu(navli) {
  const titleheader = document.querySelector(".titleHeader-1crw8");

  anime({
    targets: titleheader,
    easing: "easeInOutCubic",
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 800,
    delay: 3500,
  });

  anime({
    targets: navli,
    easing: "easeInOutCubic",
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 500,
    delay: anime.stagger(180, { start: 3500 }),
  });
}

//entering fucntion for all components
function entering(node, appears) {
  const images = node.querySelectorAll(".maincontainer .rightcontainer img");
  hanldeservices(node);
  handleTechnology(node);
  handleContact(node);
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

function enteringtech(node, isAppearing) {}

function exitingtech(node) {}

export {
  animatemenu,
  animatenavmenu,
  animatebio,
  entering,
  exiting,
  entered,
  enteringtech,
  exitingtech,
};
