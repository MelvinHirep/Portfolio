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

    projects.forEach(project => observer.observe(project));

    document.querySelectorAll(".project-card img").forEach(img => {
        img.addEventListener("click", () => {
            const videoSrc = img.dataset.video;
            if (videoSrc) openVideo(videoSrc);
        });
    });

    emailjs.init("NWJA1HRiNVHeO0ag0");

    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const now = new Date().toLocaleString("fr-FR", {
                dateStyle: "full",
                timeStyle: "short",
            });
            document.getElementById("email-time").value = now;

            emailjs.sendForm("service_9khv6i7", "template_i3mujaf", this)
                .then(function () {
                    formMessage.textContent = "Message envoyé avec succès !";
                    formMessage.className = "block mb-4 p-4 rounded-lg text-center bg-green-500 text-white";
                    contactForm.reset();

                    const textarea = contactForm.querySelector("textarea[name='message']");
                    textarea.focus();
                    textarea.setSelectionRange(0, 0);
                }, function (error) {
                    formMessage.textContent = "Erreur lors de l'envoi : " + error.text;
                    formMessage.className = "block mb-4 p-4 rounded-lg text-center bg-red-500 text-white";
                });
        });
    }

});

const text = "Je ne cherche pas à entrer dans une case, je cherche à en coder de nouvelles.";
const speed = 45;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("cursor").style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", typeWriter);

const elements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }, index * 150); 
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
