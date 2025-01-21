<?php

    // Načítá pole z formuláře - name, email a message; odstraňuje bílé znaky; odstraňuje HTML
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $message = trim($_POST["message"]);

    // Kontroluje data popř. přesměruje na chybovou adresu
    if (empty($name) OR empty($message)) {
        header("Location: https://www.prev.lazul.cz/index.html?success=-1#form");
        exit;
    }

    // Nastavte si email, nakterý chcete, aby se vyplněný formulář odeslal - jakýkoli váš email
    $recipient = "bluelinka.p@gmail.com";

    // Nastavte předmět odeslaného emailu
    $subject = "Nový vtip od: $name";

    // Obsah emailu, který se vám odešle
    $email_content = "Web lazul.cz vám posílá vyplněný vtip.\n\nAutor: $name\n";
    $email_content .= "Vtip:\n$message\n";

    // Emailová hlavička
    $email_headers = "From: WebLazul <noreply@lazul.cz>";

    // Odeslání emailu - dáme vše dohromady
    mail($recipient, $subject, $email_content, $email_headers);
    $recipient = "skvorv@proton.me";
    mail($recipient, $subject, $email_content, $email_headers);
    $recipient = "email@lazul.cz";
    mail($recipient, $subject, $email_content, $email_headers);
    
    // Přesměrování na stránku, pokud vše proběhlo v pořádku
    header("Location:https://www.prev.lazul.cz/index.html?success=1#form");

?>
