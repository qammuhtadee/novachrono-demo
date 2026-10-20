
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#070b20">
  <title>NovaChrono | Astronaut Academy</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.min.js"></script>
  <script src="main.js" defer></script>
</head>

<body>
  <header class="navbar">
    <a href="#" class="brand" data-page="home">
      <span class="brand-icon">✦</span> NovaChrono
    </a>

    <nav class="nav-links" aria-label="Main navigation">
      <button class="nav-button active" data-page="home">Home</button>
      <button class="nav-button" data-page="about">About</button>
      <button class="nav-button" data-page="how">How to Play</button>
      <button class="nav-button nav-play" data-page="play">Play</button>
    </nav>
  </header>

  <main>
    <!-- HOME PAGE -->
    <section id="home" class="page active-page">
      <div class="home-content">
        <div class="eyebrow"><span class="live-dot"></span> YOUR SPACE ADVENTURE STARTS HERE</div>

        <h1>TRAIN TODAY.<br><span>EXPLORE TOMORROW.</span></h1>

        <p class="home-description">
          Become a junior astronaut, discover the secrets of space,
          and complete your first training missions in an interactive
          pixel-art universe.
        </p>

        <div class="home-actions">
          <button class="primary-button" data-page="play">
            Start Mission <span>→</span>
          </button>
          <button class="secondary-button" data-page="how">How to Play</button>
        </div>

        <div class="home-stats">
          <div><strong>04</strong><span>TRAINING MISSIONS</span></div>
          <div><strong>01</strong><span>JUNIOR ASTRONAUT</span></div>
          <div><strong>∞</strong><span>THINGS TO DISCOVER</span></div>
        </div>
      </div>

      <div class="hero-art" aria-label="Pixel-art astronaut on the moon">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="planet planet-large"></div>
        <div class="planet planet-small"></div>
        <div class="pixel-star star-a">✦</div>
        <div class="pixel-star star-b">✧</div>
        <div class="pixel-star star-c">✦</div>
        <div class="pixel-star star-d">·</div>

        <div class="pixel-astronaut">
          <div class="helmet">
            <div class="helmet-glass"><span></span></div>
          </div>
          <div class="neck"></div>
          <div class="suit">
            <div class="suit-badge">N</div>
            <div class="suit-panel"></div>
          </div>
          <div class="arm arm-left"></div>
          <div class="arm arm-right"></div>
          <div class="leg leg-left"></div>
          <div class="leg leg-right"></div>
          <div class="boot boot-left"></div>
          <div class="boot boot-right"></div>
        </div>

        <div class="moon-ground"></div>
        <div class="hero-label">
          <span class="live-dot"></span>
          <div><strong>MISSION CONTROL</strong><small>READY FOR LAUNCH</small></div>
        </div>
      </div>
    </section>

    <!-- ABOUT PAGE -->
    <section id="about" class="page content-page">
      <div class="section-heading">
        <div class="eyebrow">THE PROJECT</div>
        <h2>Space is for <span>everyone.</span></h2>
        <p>Curiosity is the first step to becoming an astronaut.</p>
      </div>

      <div class="info-grid">
        <article class="info-card">
          <div class="card-icon">🚀</div>
          <h3>Our Mission</h3>
          <p>NovaChrono is an educational space-training experience designed to introduce young learners to basic astronaut concepts through small, interactive missions.</p>
        </article>
        <article class="info-card">
          <div class="card-icon">🪐</div>
          <h3>Learn by Exploring</h3>
          <p>Discover spacesuits, oxygen systems, spacecraft instruments, and life in space through short lessons and simple knowledge checks.</p>
        </article>
        <article class="info-card">
          <div class="card-icon">🧑‍🚀</div>
          <h3>Made for Beginners</h3>
          <p>No previous space knowledge or gaming experience is needed. Read, explore, answer, and learn at your own pace.</p>
        </article>
      </div>

      <div class="notice">
        <span>✦</span>
        <p><strong>Our goal:</strong> make introductory space education more approachable, engaging, and fun. NovaChrono is an educational project, not an official NASA training simulator.</p>
      </div>

      <button class="primary-button" data-page="play">Explore the Academy →</button>
    </section>

    <!-- HOW TO PLAY PAGE -->
    <section id="how" class="page content-page">
      <div class="section-heading">
        <div class="eyebrow">YOUR TRAINING GUIDE</div>
        <h2>How to <span>play.</span></h2>
        <p>Four simple steps. One future astronaut.</p>
      </div>

      <div class="steps-grid">
        <article class="step-card">
          <span class="step-number">01</span>
          <div class="card-icon">📖</div>
          <h3>Learn</h3>
          <p>Read a short explanation about the topic of your current mission.</p>
        </article>
        <article class="step-card">
          <span class="step-number">02</span>
          <div class="card-icon">🔎</div>
          <h3>Explore</h3>
          <p>Click the highlighted object in the space scene to discover it.</p>
        </article>
        <article class="step-card">
          <span class="step-number">03</span>
          <div class="card-icon">🧠</div>
          <h3>Take the quiz</h3>
          <p>Choose an answer and click Check Answer to see your result.</p>
        </article>
        <article class="step-card">
          <span class="step-number">04</span>
          <div class="card-icon">⭐</div>
          <h3>Advance</h3>
          <p>Complete your mission to earn points and unlock the next one.</p>
        </article>
      </div>

      <div class="notice">
        <span>⌨</span>
        <p>You do not need keyboard controls. The game is designed around clicking or tapping buttons and objects.</p>
      </div>

      <button class="primary-button" data-page="play">I'm Ready — Start! →</button>
    </section>

    <!-- PLAY PAGE -->
    <section id="play" class="page game-page">
      <div class="game-heading">
        <div>
          <div class="eyebrow">NOVACHRONO TRAINING SIMULATOR</div>
          <h2>Mission <span>Control</span></h2>
        </div>
        <div class="score-box"><span>YOUR SCORE</span><strong id="score">0</strong></div>
      </div>

      <div class="game-layout">
        <aside class="mission-sidebar">
          <div class="sidebar-heading">YOUR MISSIONS</div>
          <div id="mission-list"></div>
          <div class="progress-area">
            <div class="progress-label"><span>ACADEMY PROGRESS</span><strong id="progress-text">0 / 4</strong></div>
            <div class="progress-track"><div id="progress-fill"></div></div>
          </div>
        </aside>

        <div class="mission-main">
          <div class="mission-banner">
            <div>
              <span id="mission-number" class="mission-tag">MISSION 01</span>
              <h3 id="mission-title">The Spacesuit</h3>
            </div>
            <span id="mission-status" class="status-pill">IN TRAINING</span>
          </div>

          <div id="game-canvas" class="game-canvas">
            <div id="game-fallback">Loading your space scene…</div>
          </div>

          <div class="object-hint">✦ Click the highlighted object in the scene to explore it.</div>

          <div class="lesson-panel">
            <div class="tab-row">
              <button id="learn-tab" class="tab-button active">📖 Learn</button>
              <button id="quiz-tab" class="tab-button">🧠 Quick Quiz</button>
            </div>

            <div id="lesson-view" class="panel-view">
              <h3 id="lesson-title">Welcome, astronaut!</h3>
              <p id="lesson-text">Your training starts here.</p>
              <div id="lesson-fact" class="fact-box"></div>
              <button id="lesson-continue" class="primary-button">Got it! Try the quiz →</button>
            </div>

            <div id="quiz-view" class="panel-view hidden">
              <div class="quiz-counter" id="quiz-counter">KNOWLEDGE CHECK</div>
              <h3 id="quiz-question">Ready for your question?</h3>
              <div id="answer-options" class="answer-options"></div>
              <div id="answer-feedback" class="answer-feedback" aria-live="polite"></div>
              <div class="quiz-actions">
                <button id="retry-answer" class="secondary-button hidden">Try Again</button>
                <button id="check-answer" class="primary-button">Check Answer</button>
                <button id="next-mission" class="primary-button hidden">Next Mission →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <span>✦ NOVACHRONO: ASTRONAUT ACADEMY</span>
    <span>LEARN · EXPLORE · DISCOVER</span>
  </footer>
</body>
</html>