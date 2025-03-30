<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Accueil</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="assets/style.css" rel="stylesheet" />
</head>
<body class="bg-gray-900 text-white">
    <header class="flex justify-between items-center p-6 relative">
        <h1 class="text-3xl font-bold">Mon Portfolio</h1>
        <nav>
            <ul class="flex space-x-4">
                <li><a href="#about" class="hover:text-blue-400">À propos</a></li>
                <li><a href="#projects" class="hover:text-blue-400">Projets</a></li>
                <li><a href="#contact" class="hover:text-blue-400">Contact</a></li>
            </ul>
        </nav>
        <div class="absolute left-1/2 transform -translate-x-1/2 top-0 mt-8" >
        <div class="w-44 h-44 rounded-full bg-white shadow-lg overflow-hidden">
            <img src="DSC_0718.JPG" alt="Photo de profil" class="w-full h-full object-cover">
        </div>
    </div>
</header>

    <main class="relative flex flex-col items-center justify-center h-screen text-center">       
</div>
        <div class="absolute top-16 left-4 md:left-10 text-left space-y-4 text-xl">
            <h2 class="text-3xl font-bold">Melvin Hirep</h2>
            <p class="text-lg">Développeur web full stack</p>
            <p class="text-base text-gray-300">Recherche une alternance</p>
            <p class="text-sm text-gray-300">Septembre 2025</p>
            <p class="text-sm text-gray-300">14 mois – 3 semaines en entreprise / 1 semaine en formation</p>
        </div>
        
        <div class="mt-10"></div>
<h2 class="text-5xl font-extrabold animate-pulse">Bienvenue sur mon Portfolio</h2>
        <p class="text-lg mt-4 max-w-2xl px-4">Je m'appelle Melvin, j'ai 20 ans, et je me forme au métier de développeur web à la Web@cadémie by Epitech.<br><br>J’ai découvert le code en cherchant à comprendre ce qu’il y avait derrière les sites que j’utilisais tous les jours. Une ligne en appelant une autre, j’ai vite accroché. Ce que j’aime ? Le côté logique, la créativité, et surtout : voir quelque chose fonctionner après l’avoir construit de A à Z.<br><br>À la Web@cadémie, l’approche est simple : on apprend en faisant. Des projets concrets, des deadlines, des bugs à résoudre, et une vraie montée en compétences. Le projet qui m’a le plus challengé : reproduire Twitter en architecture MVC. J’y ai appris à organiser mes idées, à travailler en équipe, et à structurer mon code pour qu’il soit clair et maintenable.<br><br>Aujourd’hui, je cherche une alternance à partir de septembre 2025, pour une durée de 14 mois, dans un environnement stimulant où je pourrai progresser et apporter ma motivation.<br><br>En dehors du code, je suis passionné par la musique, les animés, et les jeux vidéo. Des univers créatifs qui me boostent autant que la tech.</p>
        <a href="#projects" class="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg">Découvrir mes projets</a>
    </main>

    <section id="projects" class="py-16 bg-gray-800">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold mb-8">Mes Projets</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                <div class="project-card appear relative group overflow-hidden bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-600 transition-transform duration-300">
                    <h3 class="text-xl font-semibold mb-2">Puissance 4</h3>
                    <img src="assets/Capture d’écran du 2025-03-20 15-28-20.png" alt=" " class="w-full h-48 object-cover cursor-pointer border-none" data-video="assets/Capture vidéo du 20-03-2025 15:20:04.webm">
                    <p class="mt-2 text-gray-300">Site de jeu stratégique Développé en 2 semaine / Projet individuel JS, HTML et CSS </p>
                </div>
                <div class="project-card appear relative group overflow-hidden bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-600 transition-transform duration-300">
                    <h3 class="text-xl font-semibold mb-2">Twitter</h3>
                    <img src="thumbnail_projet2.jpg" alt=" " class="w-full h-48 object-cover cursor-pointer" data-video="projet2_demo.mp4">
                    <p class="mt-2 text-gray-300">.</p>
                </div>
                <div class="project-card appear relative group overflow-hidden bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-600 transition-transform duration-300">
                    <h3 class="text-xl font-semibold mb-2">Maquette</h3>
                    <img src="thumbnail_projet3.jpg" alt=" " class="w-full h-48 object-cover cursor-pointer" data-video="projet3_demo.mp4">
                    <p class="mt-2 text-gray-300">.</p>
                </div>
            </div>
        </div>
    </section>

    <div id="videoModal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center hidden">
        <div class="relative w-3/4 max-w-4xl">
            <video id="modalVideo" controls class="w-full rounded-lg">
                <source src="" type="video/mp4">
                <source src="" type="video/webm">
                <source src="" type="video/ogg">
                Votre navigateur ne supporte pas la lecture de cette vidéo.
            </video>
            <button class="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-lg" onclick="closeVideo()">X</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
