document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quiz-form");
    
    // Modal and its elements
    const modal = document.getElementById("result-modal");
    const modalCloseBtn = document.getElementById("close-modal");
    const resultImage = document.getElementById("result-image");
    const resultText = document.getElementById("result-text");
    const restartBtn = document.getElementById("restart-btn");
  
    // 13 different Spartan images and messages
    const spartansData = [
      { src: "images/resim1.jpeg",  message: "You are a magical Quill!" },
      { src: "images/resim2.jpeg",  message: "You are an soldier Quill! " },
      { src: "images/resim3.jpeg",  message: "You are a vomit Quill!" },
      { src: "images/resim4.jpeg",  message: "You are a prisoner Quill!" },
      { src: "images/resim5.jpeg",  message: "You are a hungary Quill!" },
      { src: "images/resim6.jpeg",  message: "You are a desperate Quill!" },
      { src: "images/resim7.jpeg",  message: "You are a leopard Quill!" },
      { src: "images/resim8.jpeg",  message: "You are a sleeper Quill!" },
      { src: "images/resim9.jpeg",  message: "You are a knight Quill!" },
      { src: "images/resim10.jpeg", message: "You are a polar bear Quill!" },
      { src: "images/resim11.jpeg", message: "You are a superman Quill !" },
      { src: "images/resim12.jpeg", message: "You are a wizard Quill!" },
      { src: "images/resim13.jpeg", message: "You are a virtual reality Quill!" }
    ];
    
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Calculate total score from answers
      let totalScore = 0;
      
      // Get answers from questions 1 to 5
      for (let i = 1; i <= 5; i++) {
        const answer = form.querySelector(`input[name="q${i}"]:checked`).value;
        switch(answer) {
          case "A": totalScore += 1; break;
          case "B": totalScore += 2; break;
          case "C": totalScore += 3; break;
          case "D": totalScore += 4; break;
        }
      }
      
      /*
       * Map totalScore (5..20) to 13 results:
       *  - 5-6   => image 1
       *  - 7     => image 2
       *  - 8     => image 3
       *  - 9     => image 4
       *  - 10    => image 5
       *  - 11    => image 6
       *  - 12    => image 7
       *  - 13    => image 8
       *  - 14    => image 9
       *  - 15    => image 10
       *  - 16    => image 11
       *  - 17    => image 12
       *  - 18-20 => image 13
       */
      let selectedIndex;
      if (totalScore <= 6) {
        selectedIndex = 0;
      } else if (totalScore === 7) {
        selectedIndex = 1;
      } else if (totalScore === 8) {
        selectedIndex = 2;
      } else if (totalScore === 9) {
        selectedIndex = 3;
      } else if (totalScore === 10) {
        selectedIndex = 4;
      } else if (totalScore === 11) {
        selectedIndex = 5;
      } else if (totalScore === 12) {
        selectedIndex = 6;
      } else if (totalScore === 13) {
        selectedIndex = 7;
      } else if (totalScore === 14) {
        selectedIndex = 8;
      } else if (totalScore === 15) {
        selectedIndex = 9;
      } else if (totalScore === 16) {
        selectedIndex = 10;
      } else if (totalScore === 17) {
        selectedIndex = 11;
      } else {
        selectedIndex = 12; // 18-20
      }
      
      // Show the modal
      modal.style.display = "block";
      // Clear any previous message
      resultText.textContent = "";
  
      // Slideshow settings: 0.1s interval, total 3s
      const intervalTime = 100;   // 0.1 sec
      const totalTime = 3000;     // 3 sec
      const maxFrames = totalTime / intervalTime; // 30 frames
      let frameCount = 0;
      let slideIndex = 0;
  
      const slideShow = setInterval(() => {
        if (frameCount < maxFrames) {
          // Show next Spartan image
          resultImage.src = spartansData[slideIndex].src;
          // Move to next image index
          slideIndex = (slideIndex + 1) % spartansData.length;
          frameCount++;
        } else {
          // Stop the slideshow after 3s
          clearInterval(slideShow);
          // Display the final result
          resultImage.src = spartansData[selectedIndex].src;
          resultText.textContent = spartansData[selectedIndex].message;
        }
      }, intervalTime);
    });
  
    // Close modal button
    modalCloseBtn.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    // "Restart" button: reset the form and close the modal
    restartBtn.addEventListener("click", function() {
      form.reset();
      modal.style.display = "none";
    });
  
    // Optional: Close modal when clicking outside of modal-content
    window.addEventListener("click", function(e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });