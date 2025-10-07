// Header scroll
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});

let phrases = ["I imagine, I create", "I'm a curios coder who codes for fun", "What should i have to improve...?", "I never learnt HTML/CSS/JS >_<"];
let index = 0;
let charIndex = 0;
let currentPhrase = '';
let isDeleting = false;

function type() {
    if (index < phrases.length) {
        currentPhrase = phrases[index];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        document.getElementById("text").textContent = currentPhrase.substring(0, charIndex);
        
        let delay = isDeleting ? 50 : 100;

        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            delay = 1000; // Pause before deleting
        } else if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % phrases.length; // Move to the next phrase
        }

        setTimeout(type, delay); // ✅ Only one timeout call
    }
}

type();



// // Animated cards logic
// // const cards = document.querySelectorAll(".animated-divider__child");

// // function handleCardsScroll() {
// //     cards.forEach((card, index) => {
// //         const rect = card.getBoundingClientRect();
// //         const windowHeight = window.innerHeight;
        
// //         // Trigger when card enters viewport
// //         if (rect.top < windowHeight * 0.75) { // 75% from top
// //             card.classList.add("visible");
// //         } else {
// //             card.classList.remove("visible");
// //         }
// //     });
// // }

// // window.addEventListener("scroll", handleCardsScroll);
// // window.addEventListener("load", handleCardsScroll); // initial check
