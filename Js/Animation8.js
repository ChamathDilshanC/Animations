 function createParticles() {
    const scene = document.getElementById('scene');
    for (let i = 0; i < 40; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.width = Math.random() * 4 + 'px';
    particle.style.height = particle.style.width;
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';
    particle.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(particle);
}
}

    function handleMouseMove(e) {
    const scene = document.getElementById('scene');
    const rect = scene.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const xAxis = (centerX - e.clientX) / 40;
    const yAxis = (centerY - e.clientY) / 40;

    scene.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

    const platforms = document.querySelectorAll('.platform');
    platforms.forEach(platform => {
    const platformRect = platform.getBoundingClientRect();
    const x = e.clientX - platformRect.left;
    const y = e.clientY - platformRect.top;
    const glow = platform.querySelector('.glow');
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, 
                                rgba(99, 102, 241, 0.3) 0%, 
                                transparent 70%)`;
});
}

    document.addEventListener('mousemove', handleMouseMove);
    createParticles();

    // Add smooth return to original rotation
    document.addEventListener('mouseleave', () => {
    const scene = document.getElementById('scene');
    scene.style.transform = 'rotateY(0deg) rotateX(0deg)';
});
