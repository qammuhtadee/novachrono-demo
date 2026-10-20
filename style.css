
"use strict";

/* =========================================
   1. WEBSITE NAVIGATION
========================================= */

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll("[data-page]");
let currentPage = "home";

function showPage(pageName) {
  const target = document.getElementById(pageName);
  if (!target) return;

  currentPage = pageName;

  pages.forEach(page => {
    page.classList.toggle("active-page", page.id === pageName);
  });

  document.querySelectorAll(".nav-button").forEach(button => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Resize Phaser after the Play page becomes visible.
  if (pageName === "play" && spaceScene) {
    requestAnimationFrame(() => {
      spaceGame.scale.refresh();
      drawSpaceScene();
    });
  }
}

navButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    showPage(button.dataset.page);
  });
});


/* =========================================
   2. MISSION DATA
========================================= */

const missions = [
  {
    title: "The Spacesuit",
    icon: "🧑‍🚀",
    object: "SPACESUIT",
    lessonTitle: "Your astronaut spacesuit",
    lesson: "Space is not a place where humans can survive without protection. A spacesuit helps protect astronauts from the harsh environment of space. It provides pressure, helps manage temperature, and supports breathing.",
    fact: "SPACE FACT: A spacesuit is much more than clothing. It is a personal life-support system.",
    question: "Why do astronauts need a spacesuit during a spacewalk?",
    answers: [
      "To protect them and help them survive in space",
      "To make them walk faster",
      "To help them fly without a spacecraft",
      "To make gravity stronger"
    ],
    correct: 0,
    explanation: "Correct! A spacesuit helps protect astronauts from space hazards and provides essential life-support functions."
  },
  {
    title: "Oxygen & Life Support",
    icon: "🫧",
    object: "OXYGEN",
    lessonTitle: "Breathing beyond Earth",
    lesson: "Space does not provide a breathable atmosphere like Earth's. Astronauts need a life-support system that supplies oxygen and helps remove carbon dioxide from the air they breathe.",
    fact: "SPACE FACT: Life-support systems help maintain conditions astronauts need to stay alive.",
    question: "What does oxygen help astronauts do?",
    answers: [
      "See through walls",
      "Breathe and support their bodies",
      "Make a spacecraft invisible",
      "Create gravity"
    ],
    correct: 1,
    explanation: "Correct! Oxygen is essential for human respiration. Spacecraft and spacesuits provide systems that support breathing."
  },
  {
    title: "Spacecraft Instruments",
    icon: "🛰️",
    object: "CONTROL",
    lessonTitle: "Reading the instruments",
    lesson: "Astronauts and mission controllers use instruments and displays to monitor spacecraft systems. Depending on the instrument, they can check information such as speed, direction, altitude, and system status.",
    fact: "SPACE FACT: Instruments help crews monitor a spacecraft and make informed decisions.",
    question: "Why do astronauts monitor spacecraft instruments?",
    answers: [
      "To decorate the control room",
      "To turn every star into a planet",
      "To understand spacecraft conditions and system status",
      "To remove all gravity"
    ],
    correct: 2,
    explanation: "Correct! Instrument readings help astronauts understand how their spacecraft is operating."
  },
  {
    title: "Living in Space",
    icon: "🌎",
    object: "HABITAT",
    lessonTitle: "A home beyond Earth",
    lesson: "Astronauts living in a spacecraft or space station need air, water, food, suitable temperatures, and systems to manage waste. Microgravity also changes how people move and handle everyday objects.",
    fact: "SPACE FACT: On the International Space Station, astronauts experience microgravity and need special routines for everyday life.",
    question: "Which is essential for astronauts living in a space station?",
    answers: [
      "Unlimited fresh air from outside",
      "No water or food",
      "A way to meet their life-support needs",
      "A normal Earth-like gravity field"
    ],
    correct: 2,
    explanation: "Correct! Astronauts depend on spacecraft systems and supplies to meet essential life-support needs."
  }
];


/* =========================================
   3. GAME STATE
========================================= */

let currentMission = 0;
let selectedAnswer = null;
let score = 0;

const completedMissions = new Set();
const discoveredMissions = new Set();

const $ = id => document.getElementById(id);


/* =========================================
   4. MISSION LIST AND PROGRESS
========================================= */

function renderMissionList() {
  const list = $("mission-list");
  list.innerHTML = "";

  missions.forEach((mission, index) => {
    const unlocked = index === 0 || completedMissions.has(index - 1);
    const completed = completedMissions.has(index);

    const button = document.createElement("button");
    button.className = "mission-item";

    if (index === currentMission) button.classList.add("selected");
    if (completed) button.classList.add("completed");

    button.disabled = !unlocked;

    const icon = completed ? "✓" : unlocked ? mission.icon : "🔒";

    button.innerHTML = `
      <span class="mission-icon">${icon}</span>
      <span>
        <strong>${String(index + 1).padStart(2, "0")}. ${mission.title}</strong>
        <small>${completed ? "COMPLETED" : unlocked ? "AVAILABLE" : "LOCKED"}</small>
      </span>
    `;

    button.addEventListener("click", () => selectMission(index));
    list.appendChild(button);
  });

  $("score").textContent = score;
  $("progress-text").textContent =
    `${completedMissions.size} / ${missions.length}`;

  $("progress-fill").style.width =
    `${(completedMissions.size / missions.length) * 100}%`;
}

function selectMission(index) {
  if (index < 0 || index >= missions.length) return;

  const unlocked = index === 0 || completedMissions.has(index - 1);
  if (!unlocked) return;

  currentMission = index;
  selectedAnswer = null;

  renderMissionList();
  renderMission();
  drawSpaceScene();
}


/* =========================================
   5. RENDER THE CURRENT MISSION
========================================= */

function renderMission() {
  const mission = missions[currentMission];
  const completed = completedMissions.has(currentMission);

  $("mission-number").textContent =
    `MISSION ${String(currentMission + 1).padStart(2, "0")}`;

  $("mission-title").textContent = mission.title;

  $("mission-status").textContent =
    completed ? "COMPLETED" : "IN TRAINING";

  $("mission-status").classList.toggle("completed", completed);

  $("lesson-title").textContent = mission.lessonTitle;
  $("lesson-text").textContent = mission.lesson;
  $("lesson-fact").textContent = mission.fact;

  $("quiz-counter").textContent =
    `MISSION ${currentMission + 1} · KNOWLEDGE CHECK`;

  $("quiz-question").textContent = mission.question;

  renderAnswers();
  showLessonTab();
}


/* =========================================
   6. LESSON AND QUIZ TABS
========================================= */

function showLessonTab() {
  $("lesson-view").classList.remove("hidden");
  $("quiz-view").classList.add("hidden");

  $("learn-tab").classList.add("active");
  $("quiz-tab").classList.remove("active");
}

function showQuizTab() {
  $("lesson-view").classList.add("hidden");
  $("quiz-view").classList.remove("hidden");

  $("learn-tab").classList.remove("active");
  $("quiz-tab").classList.add("active");
}

$("learn-tab").addEventListener("click", showLessonTab);
$("quiz-tab").addEventListener("click", showQuizTab);

$("lesson-continue").addEventListener("click", showQuizTab);


/* =========================================
   7. QUIZ ANSWERS
========================================= */

function renderAnswers() {
  const mission = missions[currentMission];
  const container = $("answer-options");

  container.innerHTML = "";
  selectedAnswer = null;

  $("answer-feedback").textContent = "";
  $("answer-feedback").className = "answer-feedback";

  $("check-answer").classList.remove("hidden");
  $("retry-answer").classList.add("hidden");
  $("next-mission").classList.add("hidden");

  mission.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";

    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${answer}</span>
    `;

    button.addEventListener("click", () => {
      // Once completed, the answer cannot be changed.
      if (completedMissions.has(currentMission)) return;

      selectedAnswer = index;

      container.querySelectorAll(".answer-option").forEach(option => {
        option.classList.remove("selected");
      });

      button.classList.add("selected");
    });

    container.appendChild(button);
  });

  // Completed missions can be reviewed without earning points again.
  if (completedMissions.has(currentMission)) {
    container.querySelectorAll(".answer-option").forEach(button => {
      button.disabled = true;
    });

    container.children[mission.correct].classList.add("correct");

    $("answer-feedback").textContent =
      "Mission completed! You can review this lesson or select another unlocked mission.";

    $("answer-feedback").classList.add("good");
    $("check-answer").classList.add("hidden");
  }
}

function checkAnswer() {
  if (completedMissions.has(currentMission)) return;

  if (selectedAnswer === null) {
    $("answer-feedback").textContent =
      "Choose an answer first, astronaut!";

    $("answer-feedback").className = "answer-feedback bad";
    return;
  }

  const mission = missions[currentMission];
  const options = $("answer-options").children;

  if (selectedAnswer === mission.correct) {
    completedMissions.add(currentMission);
    score += 10;

    options[selectedAnswer].classList.add("correct");

    $("answer-feedback").textContent =
      `${mission.explanation} +10 points!`;

    $("answer-feedback").className = "answer-feedback good";

    $("check-answer").classList.add("hidden");
    $("retry-answer").classList.add("hidden");

    const isLastMission = currentMission === missions.length - 1;

    $("next-mission").textContent = isLastMission
      ? "Finish Academy ✓"
      : "Next Mission →";

    $("next-mission").classList.remove("hidden");

    $("mission-status").textContent = "COMPLETED";
    $("mission-status").classList.add("completed");

    renderMissionList();
  } else {
    options[selectedAnswer].classList.add("incorrect");

    $("answer-feedback").textContent =
      "Not quite! Read the lesson again, then try another answer.";

    $("answer-feedback").className = "answer-feedback bad";

    // Let the user try again without losing the mission.
    $("retry-answer").classList.remove("hidden");
    $("check-answer").classList.add("hidden");
  }
}

function retryAnswer() {
  if (completedMissions.has(currentMission)) return;

  renderAnswers();
  showQuizTab();
}

$("check-answer").addEventListener("click", checkAnswer);
$("retry-answer").addEventListener("click", retryAnswer);


/* =========================================
   8. NEXT MISSION
========================================= */

function goToNextMission() {
  if (!completedMissions.has(currentMission)) return;

  if (currentMission < missions.length - 1) {
    selectMission(currentMission + 1);
    return;
  }

  showCompletionScreen();
}

$("next-mission").addEventListener("click", goToNextMission);

function showCompletionScreen() {
  $("mission-number").textContent = "ACADEMY COMPLETE";
  $("mission-title").textContent = "Congratulations, Astronaut!";
  $("mission-status").textContent = "ALL MISSIONS COMPLETE";
  $("mission-status").classList.add("completed");

  $("lesson-title").textContent = "You completed your training!";
  $("lesson-text").textContent =
    `You finished all ${missions.length} training missions and earned ${score} points. Keep exploring and learning about space!`;

  $("lesson-fact").textContent =
    "NEXT STEP: Explore reliable educational resources to learn even more about real space missions.";

  $("lesson-continue").textContent = "Review First Mission ↺";

  $("lesson-continue").onclick = () => {
    $("lesson-continue").textContent = "Got it! Try the quiz →";
    $("lesson-continue").onclick = showQuizTab;
    selectMission(0);
  };

  $("lesson-view").classList.remove("hidden");
  $("quiz-view").classList.add("hidden");
  $("learn-tab").classList.add("active");
  $("quiz-tab").classList.remove("active");
}


/* =========================================
   9. PHASER SPACE SCENE
========================================= */

let spaceGame = null;
let spaceScene = null;

function createSpaceGame() {
  if (typeof Phaser === "undefined") {
    $("game-fallback").textContent =
      "Phaser could not load. Check your internet connection and reload.";
    return;
  }

  const config = {
    type: Phaser.AUTO,
    parent: "game-canvas",
    width: 960,
    height: 420,
    backgroundColor: "#080f28",
    pixelArt: true,
    antialias: false,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
      create: function () {
        spaceScene = this;
        drawSpaceScene();
        $("game-fallback").style.display = "none";
      }
    }
  };

  spaceGame = new Phaser.Game(config);
}


/* =========================================
   10. DRAW THE PIXEL-STYLE SCENE
========================================= */

function drawSpaceScene() {
  if (!spaceScene || !spaceScene.add) return;

  const scene = spaceScene;
  const mission = missions[currentMission];

  // Remove the previous mission's artwork.
  scene.children.removeAll(true);

  // Background
  scene.cameras.main.setBackgroundColor("#080f28");

  // Stars
  for (let i = 0; i < 95; i++) {
    const x = Phaser.Math.Between(8, 952);
    const y = Phaser.Math.Between(8, 325);
    const size = Math.random() > 0.8 ? 3 : 2;
    const color = Math.random() > 0.7 ? 0x67e8f9 : 0xffffff;

    scene.add.rectangle(x, y, size, size, color);
  }

  // Distant planet
  scene.add.circle(820, 85, 42, 0x6554b7);
  scene.add.circle(807, 72, 12, 0x8b7be2);
  scene.add.circle(835, 95, 9, 0x51449b);

  // Moon ground
  scene.add.rectangle(480, 365, 960, 110, 0x737b91);
  scene.add.rectangle(480, 312, 960, 4, 0xaab5cc);

  // Small ground details
  for (let i = 0; i < 20; i++) {
    const x = Phaser.Math.Between(10, 940);
    const y = Phaser.Math.Between(325, 405);
    scene.add.rectangle(x, y, Phaser.Math.Between(4, 15), 3, 0x59647c);
  }

  // Draw the object for the current mission.
  if (currentMission === 0) {
    drawSpacesuit(scene);
  } else if (currentMission === 1) {
    drawOxygen(scene);
  } else if (currentMission === 2) {
    drawControlPanel(scene);
  } else {
    drawHabitat(scene);
  }

  // Mission label
  scene.add.text(24, 20, `MISSION ${String(currentMission + 1).padStart(2, "0")}`, {
    fontFamily: "monospace",
    fontSize: "16px",
    color: "#67e8f9",
    fontStyle: "bold"
  });

  scene.add.text(24, 44, mission.object, {
    fontFamily: "monospace",
    fontSize: "12px",
    color: "#ffffff"
  });

  // Highlight the interactive object.
  const marker = scene.add.rectangle(
    480, 205, 180, 190, 0x67e8f9, 0.035
  );

  marker.setStrokeStyle(2, 0x67e8f9, 0.9);

  const hint = scene.add.text(480, 88, "▼  CLICK TO EXPLORE", {
    fontFamily: "monospace",
    fontSize: "13px",
    color: "#67e8f9",
    backgroundColor: "#101831",
    padding: { x: 8, y: 7 }
  }).setOrigin(0.5);

  // Make the mission object interactive.
  const hitArea = scene.add.rectangle(
    480, 205, 200, 205, 0xffffff, 0
  );

  hitArea.setInteractive({ useHandCursor: true });

  hitArea.on("pointerdown", () => {
    if (!discoveredMissions.has(currentMission)) {
      discoveredMissions.add(currentMission);
    }

    hint.setText("✓ OBJECT DISCOVERED!");
    hint.setColor("#86efac");
    marker.setStrokeStyle(3, 0x86efac, 1);

    $("lesson-text").textContent =
      mission.lesson + " You discovered the highlighted mission object!";

    $("lesson-fact").textContent = mission.fact;

    // Keep the lesson visible when the object is explored.
    showLessonTab();
  });
}


/* =========================================
   11. PIXEL-STYLE MISSION OBJECTS
========================================= */

function drawSpacesuit(scene) {
  // Helmet
  scene.add.rectangle(480, 165, 92, 80, 0xdce6f5);
  scene.add.rectangle(480, 165, 70, 57, 0x263a66);
  scene.add.rectangle(470, 155, 40, 35, 0x67dff3);
  scene.add.rectangle(460, 145, 13, 13, 0xffffff);

  // Body
  scene.add.rectangle(480, 252, 92, 90, 0xe5edf9);
  scene.add.rectangle(480, 252, 36, 36, 0x667799);
  scene.add.rectangle(480, 252, 18, 18, 0x67e8f9);

  // Arms
  scene.add.rectangle(420, 247, 24, 70, 0xb7c6df);
  scene.add.rectangle(540, 247, 24, 70, 0xb7c6df);

  // Legs and boots
  scene.add.rectangle(460, 315, 28, 42, 0xc6d3e8);
  scene.add.rectangle(500, 315, 28, 42, 0xc6d3e8);
  scene.add.rectangle(457, 340, 36, 13, 0x52617f);
  scene.add.rectangle(503, 340, 36, 13, 0x52617f);

  scene.add.text(480, 390, "EXPLORATION SUIT", {
    fontFamily: "monospace",
    fontSize: "12px",
    color: "#ffffff"
  }).setOrigin(0.5);
}

function drawOxygen(scene) {
  // Oxygen tank
  scene.add.rectangle(480, 230, 95, 135, 0x67e8f9);
  scene.add.rectangle(480, 230, 76, 115, 0x246b91);
  scene.add.rectangle(480, 160, 40, 15, 0xc8f5ff);
  scene.add.rectangle(480, 145, 17, 18, 0x9ca3af);

  // Tank details
  scene.add.rectangle(480, 205, 57, 7, 0xa5f3fc);
  scene.add.rectangle(480, 240, 57, 7, 0xa5f3fc);
  scene.add.rectangle(480, 275, 57, 7, 0xa5f3fc);

  // Bubbles
  scene.add.circle(405, 195, 8, 0x67e8f9, 0.8);
  scene.add.circle(555, 180, 6, 0x67e8f9, 0.8);
  scene.add.circle(415, 260, 5, 0x67e8f9, 0.8);
  scene.add.circle(550, 285, 9, 0x67e8f9, 0.8);

  scene.add.text(480, 320, "OXYGEN SUPPLY", {
    fontFamily: "monospace",
    fontSize: "12px",
    color: "#ffffff"
  }).setOrigin(0.5);
}

function drawControlPanel(scene) {
  // Console body
  scene.add.rectangle(480, 230, 250, 145, 0x697a9b);
  scene.add.rectangle(480, 225, 230, 125, 0x192644);

  // Display
  scene.add.rectangle(480, 195, 125, 48, 0x163e58);
  scene.add.rectangle(480, 195, 112, 36, 0x102f45);

  scene.add.text(480, 188, "FLIGHT DATA", {
    fontFamily: "monospace",
    fontSize: "11px",
    color: "#67e8f9"
  }).setOrigin(0.5);

  scene.add.text(480, 207, "SYS: NORMAL", {
    fontFamily: "monospace",
    fontSize: "10px",
    color: "#86efac"
  }).setOrigin(0.5);

  // Buttons and lights
  const lights = [
    [410, 260, 0xfb7185],
    [445, 260, 0x86efac],
    [480, 260, 0x67e8f9],
    [515, 260, 0xfacc15],
    [550, 260, 0xa78bfa]
  ];

  lights.forEach(([x, y, color]) => {
    scene.add.rectangle(x, y, 18, 18, color);
  });

  scene.add.text(480, 305, "CONTROL PANEL", {
    fontFamily: "monospace",
    fontSize: "12px",
    color: "#ffffff"
  }).setOrigin(0.5);
}

function drawHabitat(scene) {
  // Space habitat
  scene.add.rectangle(480, 235, 220, 125, 0x9caac4);
  scene.add.rectangle(480, 235, 192, 98, 0x283c65);

  // Windows
  scene.add.rectangle(430, 220, 42, 37, 0x67dff3);
  scene.add.rectangle(480, 220, 42, 37, 0x67dff3);
  scene.add.rectangle(530, 220, 42, 37, 0x67dff3);

  scene.add.rectangle(430, 220, 5, 37, 0x263a66);
  scene.add.rectangle(480, 220, 5, 37, 0x263a66);
  scene.add.rectangle(530, 220, 5, 37, 0x263a66);

  // Solar panels
  scene.add.rectangle(335, 235, 60, 110, 0x354b94);
  scene.add.rectangle(625, 235, 60, 110, 0x354b94);

  for (let y = 190; y <= 280; y += 18) {
    scene.add.rectangle(335, y, 58, 2, 0x67e8f9);
    scene.add.rectangle(625, y, 58, 2, 0x67e8f9);
  }

  scene.add.text(480, 305, "SPACE HABITAT", {
    fontFamily: "monospace",
    fontSize: "12px",
    color: "#ffffff"
  }).setOrigin(0.5);
}


/* =========================================
   12. START THE ACADEMY
========================================= */

renderMissionList();
renderMission();
createSpaceGame();