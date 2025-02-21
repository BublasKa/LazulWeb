
const tasks = [
    {
        "question": "Jak se \u0159ekne lo\u010fe?",
        "one": "die Schiffen",
        "two": "die Schiffer",
        "three": "das Schiff",
        "four": "die Schiffe",
        "correct": "4",
        "reason": "Mno\u017en\u00e9 \u010d\u00edslo se tvo\u0159\u00ed u slova der Schiff pomoc\u00ed -e."
    },
    {
        "question": "Jak\u00e1 je nepravidelnost u slova sb\u00edrat?",
        "one": "je to v 1.osob\u011b - ich reble (ne rebele)",
        "two": "je to v 2.osob\u011b - du rebelst (ne reblst)",
        "three": "je to v 1.osob\u011b - ich sammle (ne sammele)",
        "four": "",
        "correct": "3",
        "reason": "U slov jako sammeln (basteln atd...) se v prvn\u00ed osob\u011b odebere \"e\" a vznik\u00e1 sammle (bastle)."
    },
    {
        "question": "Jak se p\u00ed\u0161e slovo kreslit a (j\u00e1) kresl\u00edm?",
        "one": "basteln (infinitiv) - (ich) bastele",
        "two": "bastelen (infinitiv) - (ich) bastele",
        "three": "bastlen (infinitiv) - (ich) bastle",
        "four": "ani jedno",
        "correct": "4",
        "reason": "Infinitiv je basteln, ale u slov jako basteln (sammeln atd...) se v prvn\u00ed osob\u011b odebere \"e\" a vznik\u00e1 bastle (sammle)."
    },
    {
        "question": "Jak\u00fd ur\u010dit\u00fd \u010dlen m\u00e1 klub?",
        "one": "der (Klub)",
        "two": "die (Klub)",
        "three": "Klub ur\u010dit\u00fd \u010dlen nem\u00e1.",
        "four": "das (Klub)",
        "correct": "1",
        "reason": "Je to: der Klub."
    },
    {
        "question": "P\u0159elo\u017e: z\u00fa\u010dast\u00edm se (p\u0159\u00edtomn\u00fd \u010das)",
        "one": "ich mitmache",
        "two": "ich mitmachen",
        "three": "ich mache mit",
        "four": "Nejde, mitmachen je dokonav\u00fd",
        "correct": "3",
        "reason": "Mitmachen m\u00e1 odlu\u010ditelnou p\u0159edponu."
    },
    {
        "question": "P\u0159elo\u017e: das Handy",
        "one": "Mobiln\u00ed telefon",
        "two": "Kovboj",
        "three": "Ruka",
        "four": "Ut\u011brka",
        "correct": "1",
        "reason": "Je to mobiln\u00ed telefon."
    },
    {
        "question": "P\u0159elo\u017e: Co te\u010f \u010dte\u0161?",
        "one": "Was lesst du gerade?",
        "two": "Was lest du gerade?",
        "three": "Was geradest du liest?",
        "four": "Was liest du gerade?",
        "correct": "4",
        "reason": "Lesen (\u010d\u00edst) je v 2.osob\u011b du liest a gerade je zrovna\/pr\u00e1v\u011b."
    },
    {
        "question": "P\u0159elo\u017e m\u016f\u017ee\u0161 to \u0159\u00edct znova?",
        "one": "K\u00f6nnst du das noch mal sprechen?",
        "two": "Kannst du das noch mal sagen?",
        "three": "Kannst du das noch mal sprechen?",
        "four": "Kannst du das jeschte eins sprechen?",
        "correct": "2",
        "reason": "Sprechen je mluvit, ne \u0159\u00edct. Je to tady pro procvi\u010den\u00ed nov\u00fdch slov. Sagen je \u0159\u00edkat."
    },
    {
        "question": "P\u0159elo\u017e: Opakovat\/Znova(je\u0161t\u011b jednou)",
        "one": "Wiederholen\/noch mal",
        "two": "Wiederholen\/jeschte eins",
        "three": "Resto\/jeschte eins",
        "four": "Resto\/noch mal",
        "correct": "1",
        "reason": "Opakovat je Wiederholen. Je\u0161t\u011b jednou\/Znova je noch mal."
    },
    {
        "question": "P\u0159elo\u017e: Fotografier doch dein Schiff.",
        "one": "(doporu\u010den\u00ed) Fotografuj lo\u010f.",
        "two": "(prosba) Fotografuj lo\u010f.",
        "three": "(siln\u00fd rozkaz) Fotografuj lo\u010f!",
        "four": "Mohl bys tu lo\u010f fotografovat!",
        "correct": "1",
        "reason": "Doch se pou\u017e\u00edv\u00e1 na pou\u017eit\u00ed doporu\u010den\u00ed v rozkazovac\u00ed v\u011bt\u011b."
    },
    {
        "question": "P\u0159elo\u017e: poslat",
        "one": "skypen",
        "two": "laufen",
        "three": "schicken",
        "four": "treffen",
        "correct": "3",
        "reason": "Je to schicken."
    },
    {
        "question": "P\u0159elo\u017e: po\u0161ta",
        "one": "die Post",
        "two": "der Post",
        "three": "die Poste",
        "four": "der post",
        "correct": "1",
        "reason": "Je to die Post. Podstatn\u00e1 jm\u00e9na jsou s velk\u00fdm p\u00edsmenem."
    },
    {
        "question": "P\u0159elo\u017e: Nem\u00e1m \u017e\u00e1dn\u00fd probl\u00e9m.",
        "one": "Ich habe keine Problem. (Je to die Problem.)",
        "two": "Ich habe nicht Problem. (Je to jedno jak\u00fd Problem.)",
        "three": "Ich habe kein Problem nicht. (Je to der Problem.)",
        "four": "Ich habe kein Problem. (Je to das Problem.)",
        "correct": "4",
        "reason": "Je pot\u0159eba zn\u00e1t, \u017ee to je das Problem (-e) a nepou\u017e\u00edv\u00e1 se dvojt\u00fd z\u00e1por jen kein\/e\/en\/em\/er\/es."
    },
    {
        "question": "P\u0159elo\u017e: immer",
        "one": "V (n\u011b\u010dem)",
        "two": "Cimra\/Pokoj",
        "three": "Kam?",
        "four": "V\u017edy",
        "correct": "4",
        "reason": "Je to v\u017edy."
    },
    {
        "question": "P\u0159elo\u017e: Kam?",
        "one": "Woher?",
        "two": "Wo?",
        "three": "Wohin?",
        "four": "Wowo?",
        "correct": "3",
        "reason": "Je to wohin, woher je odkud."
    },
    {
        "question": "P\u0159elo\u017e: do",
        "one": "in",
        "two": "nach",
        "three": "auf",
        "four": "f\u00fcr",
        "correct": "1",
        "reason": "Je to in. (dle slovn\u00ed z\u00e1soby)"
    },
    {
        "question": "P\u0159elo\u017e: gehen",
        "one": "J\u00edt",
        "two": "Gahovat",
        "three": "D\u00e1t",
        "four": "Malovat",
        "correct": "1",
        "reason": "Je to j\u00edt"
    },
    {
        "question": "P\u0159elo\u017e: \u010dasto",
        "one": "Manchmal",
        "two": "oft",
        "three": "schnell",
        "four": "Ofte",
        "correct": "2",
        "reason": "Je to oft."
    },
    {
        "question": "P\u0159elo\u017e: Jdu do \u0161loly",
        "one": "Ich schnelle in die Schule",
        "two": "Ich gehe in die Schule",
        "three": "Ich gehe nach die Schule",
        "four": "Ich gange in die Schule",
        "correct": "2",
        "reason": "Spravn\u011b vy\u010dasovan\u00fd chodit je gehe a do=in (+akuzativ)."
    },
    {
        "question": "P\u0159elo\u017e: die Bibliotheken",
        "one": "Knihovna (1.p\u00e1d)",
        "two": "Knihovny (mno\u017en\u00e9 \u010d\u00edslo)",
        "three": "Knihovny (2. p\u00e1d)",
        "four": "Knihovnu (4.p\u00e1d)",
        "correct": "2",
        "reason": "Je to mno\u017en\u00e9 \u010d\u00edslo."
    },
    {
        "question": "P\u0159elo\u017e: plaveck\u00fd baz\u00e9n",
        "one": "das Schwimmbad",
        "two": "der Schwimmbad",
        "three": "das Schwimmplatz",
        "four": "der Schwimmplatz",
        "correct": "1",
        "reason": "Je to das Schwimmbad nikoliv Schwimmplatz, nepl\u00e9st."
    },
    {
        "question": "P\u0159elo\u017e: das Kaufhaus",
        "one": "Obchod",
        "two": "Obchodn\u00ed husa",
        "three": "Obchod\u00ed d\u016fm",
        "four": "Prokoupit",
        "correct": "3",
        "reason": "Je to obchodn\u00ed d\u016fm."
    },
    {
        "question": "P\u0159elo\u017e: obchodn\u00ed domy",
        "one": "die Kaufh\u00e4usen",
        "two": "die Kaufh\u00e4user",
        "three": "die Kaufhause",
        "four": "die Kaufhausen",
        "correct": "2",
        "reason": "Je to die Kaufh\u00e4user (p\u0159id\u00e1no -\u00a8er)."
    },
    {
        "question": "Co znamen\u00e1 fern|sehen?",
        "one": "Na-d\u00edvat se",
        "two": "Pro-d\u00edvat se",
        "three": "D\u00edvat se na televizi (v jednom slov\u011b)",
        "four": "Z-hl\u00e9dnout",
        "correct": "3",
        "reason": "Je to (vylo\u017een\u011b) d\u00edvat se na televizi (v jednom slov\u011b)."
    },
    {
        "question": "P\u0159elo\u017e: (on) b\u011bh\u00e1",
        "one": "(es) lauft",
        "two": "(er) lauft",
        "three": "(er) l\u00e4uft",
        "four": "(er) schnellt",
        "correct": "3",
        "reason": "B\u011bhat je laufen, ale m\u00e1 siln\u00e9 sklo\u0148ov\u00e1n\u00ed, tud\u00ed\u017e ve 2. a 3. osob\u011b l\u00e4ufst a l\u00e4uft."
    },
    {
        "question": "P\u0159elo\u017e: Jede\u0161 do \u0161koly?",
        "one": "Fahrst du in die Schule?",
        "two": "Du fahrst in die Schule?",
        "three": "F\u00e4rst du in die Schule?",
        "four": "Farst du zur Schule?",
        "correct": "3",
        "reason": "Fahren je nepravideln\u00fd v 2. a 3. osob\u011b j. \u010d. du f\u00e4hrst a in = do, zur = k (t\u00e9)."
    },
    {
        "question": "P\u0159elo\u017e: potkat\/setkat se",
        "one": "treffen (du treffst)",
        "two": "treffen (du triffst)",
        "three": "treffen (ich trffe)",
        "four": "seken (ich seke)",
        "correct": "2",
        "reason": "Je to treffen, ale je nepravideln\u00e9 du triffst a er\/sie\/es trifft."
    },
    {
        "question": "P\u0159elo\u017e: hra - hry",
        "one": "das Spielen - die Spielener",
        "two": "der Spiel - die Spiele",
        "three": "die Spiel - die Spieler",
        "four": "das Spiel - die Spiele",
        "correct": "4",
        "reason": "Spr\u00e1vn\u011b je das Spiel a mno\u017en\u00e9 \u010d\u00edslo die Spiele."
    },
    {
        "question": "P\u0159elo\u017e: der Ohrring (-e)",
        "one": "Prsten",
        "two": "\u0158et\u00edzek",
        "three": "N\u00e1u\u0161nice",
        "four": "\u00d3, prsten!",
        "correct": "3",
        "reason": "Je (jsou) to n\u00e1u\u0161nice."
    },
    {
        "question": "P\u0159elo\u017e: der Ringe",
        "one": "Prsten",
        "two": "Rizz",
        "three": "Prsteny",
        "four": "Ring",
        "correct": "3",
        "reason": "Je to prsten."
    },
    {
        "question": "P\u0159elo\u017e: p\u0159edm\u011bt pro fanou\u0161ky",
        "one": "das Fanszache",
        "two": "die Fans-artikl",
        "three": "die Fan-Artikl",
        "four": "der Fan-Artikel",
        "correct": "4",
        "reason": "Je to der Fan-Artikel. (mno\u017en\u00e9 \u010d. = -)"
    },
    {
        "question": "P\u0159elo\u017e: E-maily",
        "one": "die E-mails",
        "two": "die E-mailen",
        "three": "die E-mailer",
        "four": "die E-maile",
        "correct": "1",
        "reason": "Je to s -s na konci."
    }
];




// Funkce pro zamíchání seznamu
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shuffledTasks = shuffleArray([...tasks]); // Zamíchá otázky
let currentTaskIndex = 0;
let errors = 0;

const maxIndex = 30;
// Nastav celkový počet úkolů
document.getElementById("totalTasks").textContent = maxIndex;

function submitAnswer(answer) {
    const currentTask = shuffledTasks[currentTaskIndex];
    const feedback = document.getElementById("feedback");

    if (answer === currentTask.correct) {
        feedback.textContent = "Správně!";
        feedback.style.color = "green";

        freezTask();

        setTimeout(() => {
            currentTaskIndex++;
            if (currentTaskIndex < maxIndex) {
                loadNextTask();
            } else {
                finishTasks();
            }
        }, 800);
    } else {
        feedback.textContent = `Špatně! ${currentTask.reason}`;
        feedback.style.color = "red";
        errors++;

        freezTask();

        setTimeout(() => {
            currentTaskIndex++;
            if (currentTaskIndex < maxIndex) {
                loadNextTask();
            } else {
                finishTasks();
            }
        }, 3000);
    }
}

function loadNextTask() {
    document.getElementById("currentTask").textContent = currentTaskIndex + 1;
    const currentTask = shuffledTasks[currentTaskIndex];
    document.getElementById("task").innerHTML = `
        <h1 class="sec-titulek">${currentTask.question}</h1>
        <br>
        <button onclick="submitAnswer(1)"><h1>${currentTask.one}</h1></button>
        <button onclick="submitAnswer(2)"><h1>${currentTask.two}</h1></button>
    `;
    document.getElementById("feedback").textContent = "";
}

function freezTask() {
    const currentTask = shuffledTasks[currentTaskIndex];
    document.getElementById("task").innerHTML = `
        <h1 class="sec-titulek">${currentTask.question}</h1>
        <br>
        <button onclick=""><h1>${currentTask.one}</h1></button>
        <button onclick=""><h1>${currentTask.two}</h1></button>
    `;
}

function finishTasks() {
    document.getElementById("task").innerHTML = `<h2>Hotovo!</h2>`;
    document.getElementById("feedback").textContent = `Počet chyb: ${errors}`;
    document.getElementById("feedback").style.color = errors > 1 ? "red" : "green";
    document.getElementById("send-email").style.display = "block";
    document.getElementById("errorCount").value = errors;
}

// Načtení první otázky
loadNextTask();

