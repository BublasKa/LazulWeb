<?php
// Nastavení e-mailové adresy příjemce
$to = 'skvorv@proton.me';

// Získání údajů z formuláře
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$nazev = isset($_POST['nazev']) ? trim($_POST['nazev']) : '';
$rubrika = isset($_POST['rubrika']) ? trim($_POST['rubrika']) : '';
$text = isset($_POST['text']) ? trim($_POST['text']) : '';

// Kontrola povinných polí
if (empty($name) || empty($nazev) || empty($rubrika) || empty($text)) {
    echo 'Všechna pole jsou povinná. Prosím vraťte se zpět a vyplňte formulář.';
    exit;
}

// Předmět e-mailu
$subject = 'Nová zpráva z formuláře hry';

// Tělo e-mailu
$message = "
Byla odeslána nová zpráva z formuláře hry:

Jméno a příjmení: $name
Titulek/Název: $nazev
Rubrika: $rubrika
Text zprávy:
$text
";

// Hlavičky e-mailu
$headers = "From: no-reply@lazul.cz\r\n";
$headers .= "Reply-To: no-reply@lazul.cz\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Odeslání e-mailu
if (mail($to, $subject, $message, $headers)) {
    echo 'Zpráva byla úspěšně odeslána.';
} else {
    echo 'Došlo k chybě při odesílání zprávy. Zkuste to prosím znovu.';
}
?>
