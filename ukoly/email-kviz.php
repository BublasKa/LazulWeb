<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Získání dat z formuláře
    $name = $_POST['name'] ?? "#CHYBI#";
    $nazev = $_POST['nazev'] ?? "#CHYBI#";
    $tasks = [];

    // Dynamicky zpracování otázek
    for ($i = 0; $i < count($_POST['otazka']); $i++) {
        $task = [
            "question" => $_POST['otazka'][$i] ?? "#CHYBI#",
            "one" => $_POST['možnost1'][$i] ?? "#CHYBI#",
            "two" => $_POST['možnost2'][$i] ?? "#CHYBI#",
            "three" => $_POST['možnost3'][$i] ?? "#CHYBI#",
            "four" => $_POST['možnost4'][$i] ?? "#CHYBI#",
            "correct" => $_POST['spravnamoznost'][$i] ?? "#CHYBI#",
            "reason" => $_POST['reason'][$i] ?? "#CHYBI#",
        ];
        array_push($tasks, $task);
    }

    // Převod na JSON
    $tasks_json = json_encode($tasks, JSON_PRETTY_PRINT);

    // Nastavení pro odeslání e-mailu
    $to = "skvorv@proton.me";
    $subject = "Nový kvíz od $name";
    $headers = "From: norely@lazul.cz\r\n";
    $headers .= "Content-Type: application/json\r\n";

    // Obsah e-mailu
    $message = "Název kvízu: $nazev\n\n";
    $message .= "Otázky:\n";
    $message .= $tasks_json;

    // Odeslání e-mailu
    if (mail($to, $subject, $message, $headers)) {
        echo "E-mail úspěšně odeslán.";
    } else {
        echo "Chyba při odesílání e-mailu.";
    }
} else {
    echo "Formulář nebyl správně odeslán.";
}
?>
