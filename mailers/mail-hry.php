<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Načtení a validace vstupů
    $name = trim($_POST['name']);
    $nazev = trim($_POST['nazev']);
    $platforma = trim($_POST['platforma']);
    $sdileni = trim($_POST['sdileni']);

    // Kontrola, zda jsou všechna povinná pole vyplněna
    if (!empty($name) && !empty($nazev) && !empty($platforma) && !empty($sdileni)) {
        // Nastavení e-mailových parametrů
        $to = "skvorv@proton.me";   // Nahraďte vaším e-mailem
        $subject = "Nová hra";
        $message = "Jméno a příjmení: $name\n";
        $message .= "Název hry: $nazev\n";
        $message .= "Platforma: $platforma\n";
        $message .= "Odkaz na sdílení:\n$sdileni\n";

        // Hlavičky e-mailu
        $headers = "From: noreply@lazul.cz\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Odeslání e-mailu
        if (mail($to, $subject, $message, $headers)) {
            echo "<h3>Vše proběhlo v pořádku, děkujeme za vaši hru.</h3>";
        } else {
            echo "<p style='color:red;'>Došlo k chybě při odesílání e-mailu. Zkuste to prosím znovu.</p>";
        }
    } else {
        echo "<p style='color:red;'>Prosím, vyplňte všechna povinná pole.</p>";
    }
} else {
    echo "<p>Formulář nebyl odeslán správně.</p>";
}
?>

