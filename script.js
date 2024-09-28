const textArray = ["WEB DEVELOPER", "FRONT-END DEVELOPER", "BACK-END DEVELOPER"];
        let currentIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const delayBetweenWords = 1000;
        
        const typingTextElement = document.getElementById("typing-text");

        function typeEffect() {
            const currentText = textArray[currentIndex];
            if (isDeleting) {
                typingTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    currentIndex = (currentIndex + 1) % textArray.length; 
                    setTimeout(typeEffect, typingSpeed);
                } else {-
                    setTimeout(typeEffect, deletingSpeed);
                }
            } else {
                typingTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, delayBetweenWords); 
                } else {
                    setTimeout(typeEffect, typingSpeed);
                }
            }
        }

       
        document.addEventListener("DOMContentLoaded", function() {
            setTimeout(typeEffect, typingSpeed);
        });