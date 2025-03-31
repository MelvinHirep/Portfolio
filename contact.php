<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sécuriser les données
    $nom = htmlspecialchars(trim($_POST['nom']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    
    $to = "melvinhirep@gmail.com";  

    
    $subject = "Nouveau message depuis le portfolio de $nom";

    
    $body = "Nom: $nom\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=utf-8\r\n";

    if ($email && mail($to, $subject, $body, $headers)) {
        echo "Formulaire envoyé";
    } else {
        echo "Erreur lors de l'envoi du formulaire.";
    }
} else {
    echo "Méthode non autorisée.";
}

