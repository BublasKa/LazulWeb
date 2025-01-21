const tasks = [
    // Úkoly na množné číslo
    { question: "Přelož do množného čísla: die Flashe", correct: 1, reason: "Je to: die Flaschen, což je množné číslo pro 'láhev'.", one: "die Flaschen", two: "die Flascher", three: "die Flashaen" },
    { question: "Přelož do množného čísla: der Name", correct: 2, reason: "Je to: die Namen, což je správné množné číslo pro 'jméno'.", one: "die Namer", two: "die Namen", three: "die Namens" },
    { question: "Přelož do množného čísla: die Sache", correct: 3, reason: "Je to: die Sachen, což je množné číslo pro 'věc'.", one: "die Sacher", two: "die Sachs", three: "die Sachen" },
    { question: "Přelož do množného čísla: das Buch", correct: 1, reason: "Je to: die Bücher, což je množné číslo pro 'kniha'.", one: "die Bücher", two: "die Bucher", three: "die Büch" },
    { question: "Přelož do množného čísla: die Zeitung", correct: 2, reason: "Je to: die Zeitungen, což je množné číslo pro 'noviny'.", one: "die Zeitungs", two: "die Zeitungen", three: "die Zeitunger" },
    { question: "Přelož do množného čísla: der Euro", correct: 3, reason: "Je to: die Euros, což je množné číslo pro 'euro'.", one: "die Euren", two: "die Euronen", three: "die Euros" },
    { question: "Přelož do množného čísla: der Eiswürfel", correct: 1, reason: "Je to: die Eiswürfel, množné číslo zůstává stejné.", one: "die Eiswürfel", two: "die Eiswürfels", three: "die Eiswürfeln" },
    { question: "Přelož do množného čísla: die Zitrone", correct: 2, reason: "Je to: die Zitronen, množné číslo pro 'citron'.", one: "die Zitrones", two: "die Zitronen", three: "die Zitron" },
    { question: "Přelož do množného čísla: der Apfel", correct: 3, reason: "Je to: die Äpfel, což je množné číslo pro 'jablko'.", one: "die Apfels", two: "die Apfeln", three: "die Äpfel" },
    { question: "Přelož do množného čísla: die Banane", correct: 1, reason: "Je to: die Bananen, množné číslo pro 'banán'.", one: "die Bananen", two: "die Bananas", three: "die Banan" },

    // Použití sloves v množném čísle
    { question: "Přelož: Oni chtějí koupit noviny.", correct: 2, reason: "Je to: Sie möchten die Zeitungen kaufen. Modální sloveso nemůže být na konci!", one: "Die Zeitungen kaufen möchten sie.", two: "Sie möchten die Zeitungen kaufen.", three: "Sie möchten die Zeitungs kaufen." },
    { question: "Přelož: My máme knihy.", correct: 3, reason: "Je to: Wir haben die Bücher.", one: "Wir haben die Buch.", two: "Wir haben die Bucher.", three: "Wir haben die Bücher." },
    { question: "Přelož: Oni chtějí pít limonády.", correct: 1, reason: "Je to: Sie möchten die Limonaden trinken.", one: "Sie möchten die Limonaden trinken.", two: "Sie möchten die Limonads trinken.", three: "Sie möchten die Limonader trinken." },
    { question: "Přelož: On nemůže pít čaje.", correct: 2, reason: "Je to: Er kann keine Tees trinken.", one: "Er muss die Tees trinken.", two: "Er kann keine Tees trinken.", three: "Er kann die Tees trinken." },
    { question: "Přelož: My musíme koupit jablka.", correct: 3, reason: "Je to: Wir müssen die Äpfel kaufen.", one: "Wir müssen die Epfel kaufen.", two: "Wir müssen der Äpfel kaufen.", three: "Wir müssen die Äpfel kaufen." },
    { question: "Přelož: Já musím koupit banány.", correct: 1, reason: "Je to: Ich muss Bananen kaufen. Člen ein není v množném čísle.", one: "Ich muss Bananen kaufen.", two: "Ich muss Banane kaufen.", three: "Ich muss eine Bananen kaufen." },

    // Co je špatně?
    { question: "Najdi chybu/y: Zwei Limon kosten drei euro.", correct: 2, reason: "Die Limo (limonáda) je v množném čísle zwei Limos. Euro má mít velké E.", one: "Není tam žádná chyba.", two: "Jsou tam dvě chyby, jadna z nich je v množném čísle die Limo.", three: "Je tam jedna chyba v množném čísle die Limo." },
    { question: "Najdi chybu: Hast du Comics?", correct: 1, reason: "Všechno je správně.", one: "Není tam žádná chyba.", two: "Chyba je v hast, má to být habst.", three: "Chyba je v množném čísle der Comic." },
    { question: "Najdi chybu: Haben Sie zwei Flaches Milch? Ja, ich habe.", correct: 2, reason: "Flache je v množném čísle Flachen. Velké S tam může být a značí vykání.", one: "Chybý slovo mezi Flaches a Milch.", two: "Chyba je v množném čísle Flaches, má to být Flachen.", three: "Chyba je ve velkém S u oni." },

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

const maxIndex = 10;
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
        <button onclick="submitAnswer(3)"><h1>${currentTask.three}</h1></button>
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
        <button onclick=""><h1>${currentTask.three}</h1></button>
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

