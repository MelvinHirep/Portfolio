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

    projects.forEach(project => {
        observer.observe(project);
    });

    document.querySelectorAll(".project-card img").forEach(img => {
        img.addEventListener("click", () => {
            const videoSrc = img.dataset.video;
            if (videoSrc) openVideo(videoSrc);
        });
    });

    // Script du formulaire de contact
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const messageBox = document.getElementById("form-message");

            fetch(contactForm.action, {
                method: "POST",
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                messageBox.classList.remove("hidden", "bg-red-500", "bg-green-500");
                if (data.includes("envoyé")) {
                    messageBox.classList.add("bg-green-500", "text-white");
                } else {
                    messageBox.classList.add("bg-red-500", "text-white");
                }
                messageBox.textContent = data;
                contactForm.reset();
            })
            .catch(() => {
                messageBox.classList.remove("hidden");
                messageBox.classList.add("bg-red-500", "text-white");
                messageBox.textContent = "Erreur lors de l'envoi du message.";
            });
        });
    }
});
