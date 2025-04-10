function openVideo(videoSrc) {
    const video = document.getElementById('modalVideo');
    video.innerHTML = `
        <source src="${videoSrc}" type="video/mp4">
        <source src="${videoSrc.replace('.mp4', '.webm')}" type="video/webm">
        <source src="${videoSrc.replace('.mp4', '.ogg')}" type="video/ogg">
        Votre navigateur ne supporte pas la lecture de cette vidéo.
    `;
    video.load();
    document.getElementById('videoModal').classList.remove('hidden');
}

function closeVideo() {
    const video = document.getElementById('modalVideo');
    video.pause();
    document.getElementById('videoModal').classList.add('hidden');
}

document.addEventListener("DOMContentLoaded", function () {
    // Animation des projets au scroll
    const projects = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, index * 700);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    projects.forEach(project => observer.observe(project));

    // Lecture vidéo depuis image
    document.querySelectorAll(".project-card img").forEach(img => {
        img.addEventListener("click", () => {
            const videoSrc = img.dataset.video;
            if (videoSrc) openVideo(videoSrc);
        });
    });

    // === EMAILJS ===
    emailjs.init("NWJA1HRiNVHeO0ag0"); // Clé publique EmailJS

    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            emailjs.sendForm("service_9khv6i7", "template_i3mujaf", this)
            .then(function () {
                formMessage.textContent = "Message envoyé avec succès !";
                formMessage.className = "block mb-4 p-4 rounded-lg text-center bg-green-500 text-white";
                contactForm.reset();
                contactForm.querySelector("textarea[name='message']").focus();
            }, function (error) {
            
                    formMessage.textContent = "Erreur lors de l'envoi : " + error.text;
                    formMessage.className = "block mb-4 p-4 rounded-lg text-center bg-red-500 text-white";
                });
        });
    }
});
