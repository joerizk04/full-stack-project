<?php require 'auth_check.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="design2.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <script src="footer.js" defer></script>
  <script src="programs.js" defer></script>
  <script src="main.js" defer></script>
  
  <title>Training Programs | The Circuit</title>
</head>
<body>
  <header>
  <nav class="sidebar">
  <div class="top_sidebar">
    <a href="index.html" class="brand">
      <span class="entirebrand">The Circuit</span>
      <span class="collap_brand">TC</span>
    </a>
    <button class="nav_toggling" id="nav_toggle">&#9776;</button>
  </div>
  <ul class="nav-links">
    <li><a href="index.html"><i class="fas fa-home"></i><span>Home</span></a></li>
    <li><a href="programs.php" class=active><i class="fas fa-dumbbell"></i><span>Programs</span></a></li>
    <li><a href="store.html"><i class="fas fa-shopping-cart"></i><span>Store</span></a></li>
    <li><a href="about.html"><i class="fas fa-info-circle"></i><span>About</span></a></li>
    <li><a href="contact.html"><i class="fas fa-envelope"></i><span>Contact</span></a></li>
    <li class="nav-login"><a href="login.html"><i class="fas fa-sign-in-alt"></i><span>Login</span></a></li>
    <li class="nav-logout"><a href="logout.php"><i class="fas fa-sign-out-alt"></i><span>Logout</span></a></li>
  </ul>
</nav>

</header>

  <section class="hero-program">
    <h1>Professional Training Programs</h1>
    <p class="program-intro">Select your specialized training path with our expertly designed programs, each featuring key exercises for major muscle groups.</p>
    
    <div class="program-choice">
      <div class="choice-card" onclick="showProgram('bodybuilding')">
        <img src="assets/gym2.jpg" alt="Bodybuilding">
        <h3>Bodybuilding</h3>
        <p class="program-description">Build mass and strength with progressive overload techniques</p>
      </div>
      <div class="choice-card" onclick="showProgram('calisthenics')">
        <img src="assets/gym4.jpg" alt="Calisthenics">
        <h3>Calisthenics</h3>
        <p class="program-description">Develop functional strength using bodyweight mastery</p>
      </div>
    </div>
  </section>

  <section id="bodybuilding-program" class="program-section hidden">
    <button class="btn back-btn" onclick="goBack()">← All Programs</button>
    <h2><i class="fas fa-dumbbell"></i> Bodybuilding Program</h2>
    <p class="program-overview">12-week mass building program with 4 weekly sessions. Focus on progressive overload and proper form.</p>

    <div class="muscle-group">
      <h3><i class="fas fa-heart"></i> Chest Development</h3>
      <p class="muscle-description">Build upper body pushing power and chest definition</p>
      <div class="exercise-pair">
        <div class="exercise-card" data-exercise="bench press">
          <img src="assets/bench-press.jpg" alt="Bench Press">
          <h4>Bench Press</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
        <div class="exercise-card" data-exercise="incline dumbbell press">
          <img src="assets/incline-dumbell-press.jpg" alt="Incline Dumbbell Press">
          <h4>Incline DB Press</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="muscle-group">
      <h3><i class="fas fa-hand-paper"></i> Arms</h3>
      <p class="muscle-description">Develop sleeve-stretching biceps and triceps</p>
      <div class="exercise-pair">
        <div class="exercise-card" data-exercise="barbell curl">
          <img src="assets/barbell-curl.jpg" alt="Barbell Curl">
          <h4>Barbell Curl</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
        <div class="exercise-card" data-exercise="tricep dip">
          <img src="assets/triceps-dip.jpg" alt="Tricep Dip">
          <h4>Tricep Dip</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="muscle-group">
      <h3><i class="fas fa-ribbon"></i> Back Development</h3>
      <p class="muscle-description">Develop a strong, defined back for posture and power</p>
      <div class="exercise-pair">
        <div class="exercise-card" data-exercise="deadlift">
          <img src="assets/deadlift.jpg" alt="Deadlift">
          <h4>Deadlift</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
        <div class="exercise-card" data-exercise="lat pulldown">
          <img src="assets/lat-pulldown.jpg" alt="Lat Pulldown">
          <h4>Lat Pulldown</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="muscle-group">
      <h3><i class="fas fa-walking"></i> Leg Development</h3>
      <p class="muscle-description">Build powerful lower body strength and stability</p>
      <div class="exercise-pair">
        <div class="exercise-card" data-exercise="squat">
          <img src="assets/squat.jpg" alt="Squat">
          <h4>Squat</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
        <div class="exercise-card" data-exercise="leg press">
          <img src="assets/leg-press.jpg" alt="Leg Press">
          <h4>Leg Press</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="calisthenics-program" class="program-section hidden">
    <button class="btn back-btn" onclick="goBack()">← All Programs</button>
    <h2><i class="fas fa-child"></i> Calisthenics Program</h2>
    <p class="program-overview">Progressive bodyweight training program with 3 weekly sessions</p>

    <div class="muscle-group">
      <h3><i class="fas fa-hand-paper"></i> Upper Body</h3>
      <p class="muscle-description">Develop pushing and pulling strength</p>
      <div class="exercise-pair">
        <div class="exercise-card" data-exercise="push up">
          <img src="assets/pushups.jpg" alt="Push-Ups">
          <h4>Push-Ups</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
        <div class="exercise-card" data-exercise="pull up">
          <img src="assets/pullup.jpg" alt="Pull-Ups">
          <h4>Pull-Ups</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
            </div>
            </div>
            <div class="exercise-card" data-exercise="triceps dip">
          <img src="assets/triceps-dip.jpg" alt="Triceps-Dip">
          <h4>Dips</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="muscle-group">
      <h3><i class="fas fa-undo"></i> Core Strength</h3>
      <p class="muscle-description">Develop stability and functional core power</p>
      <div class="exercise-pair">
        <div class="exercise-card" data-exercise="plank">
          <img src="assets/plank.jpg" alt="Plank">
          <h4>Plank</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
        <div class="exercise-card" data-exercise="hanging leg raise">
          <img src="assets/hanging-leg-raises.jpg" alt="Hanging Leg Raises">
          <h4>Leg Raises</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="muscle-group">
      <h3><i class="fas fa-walking"></i> Lower Body</h3>
      <p class="muscle-description">Build explosive leg power</p>
      <div class="exercise-pair">
        <div class="exercise-card" data-exercise="pistol squat">
          <img src="assets/pistol-squat.jpg" alt="Pistol Squat">
          <h4>Pistol Squat</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
        <div class="exercise-card" data-exercise="jump squat">
          <img src="assets/jump-squat.jpg" alt="Jump Squat">
          <h4>Jump Squat</h4>
          <button class="btn learn-more-btn">Learn More</button>
          <div class="exercise-details hidden">
            <p class="exercise-description">Loading description...</p>
            <div class="exercise-meta">
              <span><i class="fas fa-tachometer-alt"></i> <span class="difficulty">Difficulty</span></span>
              <span><i class="fas fa-dumbbell"></i> <span class="equipment">Equipment</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<div id="exerciseModal" class="modal hidden">
  <div class="modal-content">
    <span class="close-btn" id="modalClose">&times;</span>
    <h3 class="modal-title" id="modalTitle"></h3>
    <p class="modal-description" id="modalDescription"></p>
    <div class="modal-meta">
      <p><strong>Difficulty:</strong> <span class="modal-difficulty" id="modalDifficulty"></span></p>
      <p><strong>Equipment:</strong> <span class="modal-equipment" id="modalEquipment"></span></p>
    </div>
  </div>
</div>


<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-brand">
      <img src="assets/logo.png" alt="The Circuit" width="150">
      <p>Your premier fitness destination</p>
    </div>
    
    <div class="footer-grid">
      <div class="footer-col">
        <h3>Page Links</h3>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="programs.html">Programs</a></li>
          <li><a href="store.html">Store</a></li>
        </ul>
      </div>
      
      <div class="footer-col">
        <h3>Support</h3>
        <ul>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      
      <div class="footer-col">
        <h3>Connect</h3>
        <div class="social-links">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p>&copy; <span id="current-year"></span> The Circuit. All rights reserved.</p>
  </div>
</footer>
</body>
</html>