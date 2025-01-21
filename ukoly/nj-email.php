<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $errors = htmlspecialchars($_POST['errors']);
    $to = "bluelinka.p@gmail.com";
    $subject = "Výsledek úkolů studenta $name";
    $message = "Student $name dokončil úkoly s $errors chybami.";
    $headers = "From: noreply@lazul.cz";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email byl úspěšně odeslán. Děkuji, že testujete tuto funkci.";
    } else {
        echo "Došlo k chybě při odesílání emailu.";
    }
}

?>
