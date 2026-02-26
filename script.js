const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const greetingDisplay = document.getElementById('greeting');
const animationContainer = document.getElementById('animation-container');

const colors = ['#818cf8', '#c084fc', '#f472b6', '#fbbf24', '#34d399', '#38bdf8'];

function clearAnimations() {
    animationContainer.innerHTML = '';
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 8 + 4 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        confetti.style.opacity = Math.random();
        animationContainer.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => confetti.remove(), 5000);
    }
}

function createBurst() {
    const burstCount = 5;
    for (let i = 0; i < burstCount; i++) {
        setTimeout(() => {
            const burst = document.createElement('div');
            burst.className = 'burst';
            burst.style.left = Math.random() * 80 + 10 + '%';
            burst.style.top = Math.random() * 80 + 10 + '%';
            burst.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            animationContainer.appendChild(burst);
            
            setTimeout(() => burst.remove(), 800);
        }, i * 200);
    }
}

function createPopper() {
    const particleCount = 60;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random angle and distance
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 300 + 100;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;

        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        animationContainer.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

const animations = [createConfetti, createBurst, createPopper];

greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) return;

    // Set Greeting
    greetingDisplay.textContent = `Hello ${name}!`;
    greetingDisplay.classList.add('show');

    // Trigger random animation
    clearAnimations();
    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    randomAnim();
});

// Allow Enter key to trigger greet
nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        greetBtn.click();
    }
});
