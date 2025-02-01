<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Načtení a validace vstupů
    $name = trim($_POST['name']);
    $nazev = trim($_POST['nazev']);
    $platforma = trim($_POST['platforma']);
    $sdileni = trim($_POST['sdileni']);

    // Kontrola, zda jsou všechna povinná pole vyplněna
    if (!empty($name) && !empty($nazev) && !empty($platforma) && !empty($sdileni)) {
        // Úspěšné zpracování formuláře
        echo "<h3>Formulář byl úspěšně odeslán!</h3>";
        echo "<p><strong>Jméno a příjmení:</strong> " . htmlspecialchars($name) . "</p>";
        echo "<p><strong>Název hry:</strong> " . htmlspecialchars($nazev) . "</p>";
        echo "<p><strong>Platforma:</strong> " . htmlspecialchars($platforma) . "</p>";
        echo "<p><strong>Odkaz na sdílení:</strong> " . nl2br(htmlspecialchars($sdileni)) . "</p>";
    } else {
        echo "<p style='color:red;'>Prosím, vyplňte všechna povinná pole.</p>";
    }
} else {
    echo "<p>Formulář nebyl odeslán správně.</p>";
}
?>
