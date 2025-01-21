
const tasks = [
    // Jídlo (Essen)
    { question: "Přelož: das Brot", correct: 1, reason: "Je to: chleba, základní potravina.", one: "chleba", two: "pečivo" },
    { question: "Přelož: die Kartoffel", correct: 2, reason: "Je to: brambora, základní příloha.", one: "kukuřice", two: "brambora" },
    { question: "Přelož: das Gemüse", correct: 1, reason: "Je to: zelenina, součást zdravé stravy.", one: "zelenina", two: "ovoce" },
    { question: "Přelož: das Brötchen", correct: 2, reason: "Je to: houska, malý kousek pečiva.", one: "chléb", two: "houska" },
    { question: "Přelož: der Fisch", correct: 1, reason: "Je to: ryba, běžný zdroj bílkovin.", one: "ryba", two: "maso" },
    { question: "Přelož: der Salat", correct: 2, reason: "Je to: salát, zeleninová směs.", one: "polévka", two: "salát" },
    { question: "Přelož: die Marmelade", correct: 1, reason: "Je to: marmeláda, ovocná pomazánka.", one: "marmeláda", two: "med" },
    { question: "Přelož: der Reis", correct: 1, reason: "Je to: rýže, běžná příloha.", one: "rýže", two: "brambory" },
    { question: "Přelož: das Fleisch", correct: 2, reason: "Je to: maso, základní zdroj bílkovin.", one: "zelenina", two: "maso" },
    { question: "Přelož: das Obst", correct: 1, reason: "Je to: ovoce, zdroj vitamínů.", one: "ovoce", two: "zelenina" },
    { question: "Přelož: der Kuchen", correct: 2, reason: "Je to: buchta, nebo koláč.", one: "pečivo", two: "buchta" },
    { question: "Přelož: die Suppe", correct: 1, reason: "Je to: polévka, často podávaná teplá.", one: "polévka", two: "salát" },

    // Jídla během dne
    { question: "Přelož: das Frühstück", correct: 1, reason: "Je to: snídaně, první jídlo dne.", one: "snídaně", two: "oběd" },
    { question: "Přelož: das Mittagessen", correct: 2, reason: "Je to: oběd, hlavní jídlo dne.", one: "večeře", two: "oběd" },
    { question: "Přelož: das Abendessen", correct: 1, reason: "Je to: večeře, poslední jídlo dne.", one: "večeře", two: "snídaně" },
    { question: "Přelož: zum Mittagessen", correct: 2, reason: "Je to: k obědu. Zum znamená k (něčemu).", one: "ve střenu", two: "k obědu" },

    // Ostatní
    { question: "Přelož: wann", correct: 2, reason: "Je to: kdy, používá se pro otázky o čase.", one: "kde", two: "kdy" },
    { question: "Přelož: schlafen", correct: 1, reason: "Je to: spát, základní sloveso.", one: "spát", two: "sedět" },
    { question: "Přelož: (er) schläft", correct: 2, reason: "Je to: spí, tvar slovesa 'schlafen' ve 3. osobě.", one: "sedí", two: "spí" },
    { question: "Přelož: essen", correct: 1, reason: "Je to: jíst, základní sloveso.", one: "jíst", two: "pít" },
    { question: "Přelož: Echt?", correct: 1, reason: "Je to: Opravdu?, běžná otázka.", one: "Opravdu?", two: "Dobře?" },
    { question: "Přelož: Wirklich?", correct: 2, reason: "Je to: skutečně?, jiný výraz pro 'Echt?'.", one: "Opravdu?", two: "Skutečně?" },
    { question: "Přelož: fantastisch", correct: 1, reason: "Je to: fantastický, běžné přídavné jméno.", one: "fantastický", two: "špatný" },
    { question: "Přelož: kalt", correct: 2, reason: "Je to: studený, opak horkého.", one: "horký", two: "studený" },
    { question: "Přelož: die Freizeit", correct: 1, reason: "Je to: volný čas, běžné podstatné jméno.", one: "volný čas", two: "škola" },
    { question: "Přelož: duchen", correct: 2, reason: "Je to: sprchovat se, základní sloveso.", one: "prát", two: "sprchovat se" },
    { question: "Přelož: das Zimmer", correct: 1, reason: "Je to: pokoj, základní podstatné jméno.", one: "pokoj", two: "dům" },
    { question: "Přelož: kochen", correct: 2, reason: "Je to: vařit, základní sloveso.", one: "číst", two: "vařit" },
    { question: "Přelož: aufstehen", correct: 1, reason: "Je to: vstávat, základní sloveso.", one: "vstávat", two: "sedět" },
    { question: "Přelož: einkaufen", correct: 2, reason: "Je to: nakupovat, běžné sloveso.", one: "prodávat", two: "nakupovat" },
    { question: "Přelož: die Lieblingsfarbe", correct: 1, reason: "Je to: oblíbená barva, běžný výraz.", one: "oblíbená barva", two: "oblíbené jídlo" },
    { question: "Přelož: Das ist ja verrückt!", correct: 1, reason: "Je to: To je šílené!, běžný výraz překvapení.", one: "To je šílené!", two: "To je skvělé!" },
    { question: "Přelož: das Lieblingswort", correct: 1, reason: "Je to: oblíbené slovo, běžný pojem.", one: "oblíbené slovo", two: "oblíbená věta" },
    { question: "Přelož: das Lieblingsessen", correct: 2, reason: "Je to: oblíbené jídlo, pojem vyjadřující osobní preferenci.", one: "oblíbený nápoj", two: "oblíbené jídlo" },
    { question: "Přelož: seine Bücher", correct: 1, reason: "Je to: jeho knihy, množné číslo pro 'kniha'.", one: "jeho knihy", two: "jejich knihy" },
    { question: "Přelož: ihre Brote", correct: 2, reason: "Je to: její chleby, množné číslo pro 'chléb'.", one: "její chléb", two: "její chleby" },
    { question: "Přelož: die Pizza", correct: 1, reason: "Je to: pizza, oblíbené italské jídlo.", one: "pizza", two: "koláč" },
    { question: "Přelož: von", correct: 1, reason: "Je to: od, vyjadřuje např. od kdy.", one: "od", two: "do" },
    { question: "Přelož: bis", correct: 1, reason: "Je to: do, používá se pro vyjádření rozsahu nebo časového úseku.", one: "do", two: "před" },
    { question: "Přelož: aufräumen", correct: 2, reason: "Je to: uklízet, běžné sloveso pro úklid.", one: "čistit", two: "uklízet" },

    //Obrácenné

        // Jídlo (Essen)
        { question: "Přelož: chleba", correct: 1, reason: "Je to: das Brot, základní potravina.", one: "das Brot", two: "die Brot" },
        { question: "Přelož: brambora", correct: 2, reason: "Je to: die Kartoffel, základní příloha.", one: "der Kartoffel", two: "die Kartoffel" },
        { question: "Přelož: zelenina", correct: 1, reason: "Je to: das Gemüse, součást zdravé stravy.", one: "das Gemüse", two: "der Gemüse" },
        { question: "Přelož: houska", correct: 2, reason: "Je to: das Brötchen, malý kousek pečiva.", one: "der Brötchen", two: "das Brötchen" },
        { question: "Přelož: ryba", correct: 1, reason: "Je to: der Fisch, běžný zdroj bílkovin.", one: "der Fisch", two: "das Fisch" },
        { question: "Přelož: salát", correct: 2, reason: "Je to: der Salat.", one: "die Salat", two: "der Salat" },
        { question: "Přelož: marmeláda", correct: 1, reason: "Je to: die Marmelade.", one: "die Marmelade", two: "das Marmelade" },
        { question: "Přelož: rýže", correct: 1, reason: "Je to: der Reis, běžná příloha.", one: "der Reis", two: "das Reis" },
        { question: "Přelož: maso", correct: 2, reason: "Je to: das Fleisch, základní zdroj bílkovin.", one: "der Fleisch", two: "das Fleisch" },
        { question: "Přelož: ovoce", correct: 1, reason: "Je to: das Obst, zdroj vitamínů.", one: "das Obst", two: "die Obst" },
        { question: "Přelož: buchta", correct: 2, reason: "Je to: der Kuchen.", one: "das Kuchen", two: "der Kuchen" },
        { question: "Přelož: polévka", correct: 1, reason: "Je to: die Suppe.", one: "die Suppe", two: "das Suppe" },
    
        // Jídla během dne
        { question: "Přelož: snídaně", correct: 1, reason: "Je to: das Frühstück, první jídlo dne.", one: "das Frühstück", two: "der Frühstück" },
        { question: "Přelož: oběd", correct: 2, reason: "Je to: das Mittagessen, hlavní jídlo dne.", one: "die Mittagessen", two: "das Mittagessen" },
        { question: "Přelož: večeře", correct: 1, reason: "Je to: das Abendessen, poslední jídlo dne.", one: "das Abendessen", two: "die Abendessen" },
    
        // Ostatní
        { question: "Přelož: kdy", correct: 2, reason: "Je to: wann, používá se pro otázky o čase.", one: "wo", two: "wann" },
        { question: "Přelož: spát", correct: 1, reason: "Je to: schlafen, základní sloveso.", one: "schlafen", two: "sitzen" },
        { question: "Přelož: spí", correct: 2, reason: "Je to: schläft, tvar slovesa 'schlafen' ve 3. osobě.", one: "(er) schlaft", two: "(er) schläft" },
        { question: "Přelož: jíst", correct: 1, reason: "Je to: essen, základní sloveso.", one: "essen", two: "trinken" },
        { question: "Přelož: jí", correct: 1, reason: "Je to: isst, tvar slovesa 'essen' ve 3. osobě.", one: "isst", two: "kocht" },
        { question: "Přelož: To je šílené!", correct: 1, reason: "Je to: Das ist ja verrückt!, běžný výraz překvapení.", one: "Das ist ja verrückt!", two: "Das ist ja veruckt!" },
        { question: "Přelož: oblíbené slovo", correct: 1, reason: "Je to: das Lieblingswort, běžný pojem.", one: "das Lieblingswort", two: "die Lieblingswort" },
        { question: "Přelož: oblíbené jídlo", correct: 2, reason: "Je to: das Lieblingsessen, pojem vyjadřující osobní preferenci.", one: "die Lieblingsessen", two: "das Lieblingsessen" },
        { question: "Přelož: jeho knihy", correct: 1, reason: "Je to: seine Bücher, množné číslo pro 'kniha'.", one: "seine Bücher", two: "seiner Bücher" },
        { question: "Přelož: její chleby", correct: 2, reason: "Je to: ihre Brote, množné číslo pro 'chléb'.", one: "ihr Brot", two: "ihre Brote" },
        { question: "Přelož: pizza", correct: 1, reason: "Je to: die Pizza, oblíbené italské jídlo.", one: "die Pizza", two: "das Pizza" },
        { question: "Přelož: od", correct: 1, reason: "Je to: von, vyjadřuje od (něčeho).", one: "von", two: "bis" },
        { question: "Přelož: do", correct: 1, reason: "Je to: bis, používá se pro vyjádření rozsahu nebo časového úseku.", one: "bis", two: "vor" },
        { question: "Přelož: uklízet", correct: 2, reason: "Je to: aufräumen, běžné sloveso pro úklid.", one: "reinigen", two: "aufräumen" },
        { question: "Přelož: vařit", correct: 2, reason: "Je to: kochen, kuchen je buchta.", one: "kuchen", two: "kochen" },
        { question: "Přelož: Opravdu?", correct: 1, reason: "Je to: Echt?, běžná otázka vyjadřující údiv nebo překvapení.", one: "Echt?", two: "Relo?" },
        { question: "Přelož: Skutečně?", correct: 2, reason: "Je to: Wirklich?, jiný výraz pro 'Echt?'.", one: "Echt?", two: "Wirklich?" },
        { question: "Přelož: fantastický", correct: 1, reason: "Je to: fantastisch, běžné přídavné jméno.", one: "fantastisch", two: "schlecht" },
        { question: "Přelož: studený", correct: 2, reason: "Je to: kalt, opak horkého.", one: "cold", two: "kalt" },
        { question: "Přelož: volný čas", correct: 1, reason: "Je to: die Freizeit, běžné podstatné jméno.", one: "die Freizeit", two: "die Freezeit" },
        { question: "Přelož: sprchovat se", correct: 2, reason: "Je to: duchen, základní sloveso.", one: "waschen", two: "duchen" },
        { question: "Přelož: pokoj", correct: 1, reason: "Je to: das Zimmer, základní podstatné jméno.", one: "das Zimmer", two: "das Haus" }

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

const maxIndex = 38;
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

