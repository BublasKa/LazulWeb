const tasks = [
    // Nápoje
    { question: "Přelož: das Mineralwasser", correct: 1, reason: "Je to: minerální voda, typický nesycený nebo sycený nápoj.", one: "minerální voda", two: "minerál" },
    { question: "Přelož: die Cola", correct: 2, reason: "Je to: kola, sladký sycený nápoj.", one: "čokoláda", two: "kola" },
    { question: "Přelož: der Tee", correct: 1, reason: "Je to: čaj, nápoj připravovaný z lístků čajovníku.", one: "čaj", two: "káva" },
    { question: "Přelož do češtiny: der Eistee", correct: 1, reason: "Je to: ledový čaj, podávaný chlazený.", one: "ledový čaj", two: "teplý čaj" },
    { question: "Přelož do češtiny: der Karibik-Cocktail", correct: 2, reason: "Je to: karibský koktejl, typický ovocný nápoj.", one: "ovocný čaj", two: "karibský koktejl" },
    { question: "Přelož: das Spezi", correct: 2, reason: "Je to: směs koly a pomerančové limonády.", one: "fanta", two: "Spezi" },
    { question: "Přelož do češtiny: der Kaffee", correct: 1, reason: "Je to: káva, oblíbený horký nápoj.", one: "káva", two: "čaj" },
    { question: "Přelož do češtiny: die Limo", correct: 2, reason: "Je to: limonáda, sladký sycený nápoj.", one: "minerální voda", two: "limonáda" },

    // Ovoce
    { question: "Přelož do němčiny: banán", correct: 1, reason: "Je to: die Banane, ovoce podlouhlého tvaru.", one: "die Banane", two: "der Apfel" },
    { question: "Přelož: die Mango", correct: 2, reason: "Je to: mango, tropické ovoce s oranžovou dužinou.", one: "pomelo", two: "mango" },
    { question: "Přelož: die Zitrone", correct: 2, reason: "Je to: citron, kyselé žluté ovoce.", one: "pomeranč", two: "citron" },
    { question: "Přelož do češtiny: die Orange", correct: 1, reason: "Je to: pomeranč, citrusové ovoce.", one: "pomeranč", two: "mandarinka" },
    { question: "Přelož do němčiny: jablko", correct: 2, reason: "Je to: der Apfel, běžné ovoce mírného pásu.", one: "die Birne", two: "der Apfel" },

    // Ostatní potraviny
    { question: "Přelož: die Milch", correct: 1, reason: "Je to: mléko, nápoj z kravského mléka.", one: "mléko", two: "jogurt" },
    { question: "Přelož do němčiny: čokoláda", correct: 1, reason: "Je to: die Schokolade, sladká pochoutka.", one: "die Schokolade", two: "der Käse" },
    { question: "Přelož: die Chips", correct: 1, reason: "Je to: chipsy, slané bramborové lupínky.", one: "chipsy", two: "popcorn" },
    { question: "Přelož: die Tüte", correct: 2, reason: "Je to: sáček, často na nákupy nebo občerstvení.", one: "krabice", two: "sáček" },
    { question: "Přelož do češtiny: das Eis", correct: 1, reason: "Je to: zmrzlina, oblíbený dezert.", one: "zmrzlina", two: "led" },

    // Fráze
    { question: "Přelož: Entschuldigung!", correct: 1, reason: "Je to: omlouvám se, fráze při oslovování.", one: "omlouvám se", two: "dobrý den" },
    { question: "Přelož do němčiny: promiňte", correct: 1, reason: "Je to: Entschuldigung!, běžná omluvná fráze.", one: "Entschuldigung!", two: "Bitte!" },
    { question: "Přelož do češtiny: Auf Wiedersehen", correct: 1, reason: "Je to: na shledanou, výraz rozloučení.", one: "na shledanou", two: "dobrý večer" },

    // Ceny a peníze
    { question: "Přelož: der Euro", correct: 2, reason: "Je to: euro, měna používaná v EU.", one: "koruna", two: "euro" },
    { question: "Přelož do češtiny: das Geld", correct: 1, reason: "Je to: peníze, obecný pojem.", one: "peníze", two: "mince" },
    { question: "Přelož: der Cent", correct: 1, reason: "Je to: cent, menší jednotka eura.", one: "cent", two: "koruna" },
    { question: "Přelož do češtiny: (es) kostet", correct: 1, reason: "Je to: stojí, výraz pro cenu.", one: "stojí", two: "kupuje" },

    // Slovesa
    { question: "Přelož do němčiny: líbit se", correct: 1, reason: "Je to: gefallen, sloveso pro oblíbenost.", one: "gefallen", two: "haben" },
    { question: "Přelož: schmecken", correct: 1, reason: "Je to: chutnat, používá se při popisu chutí.", one: "chutnat", two: "vonět" },
    { question: "Přelož: mögen", correct: 2, reason: "Je to: mít rád, vyjadřuje oblibu.", one: "nemít rád", two: "mít rád" },
    { question: "Přelož do češtiny: stehen", correct: 1, reason: "Je to: stát, například na místě.", one: "stát", two: "sedět" },

    // Ostatní
    { question: "Přelož do češtiny: das Glas", correct: 1, reason: "Je to: sklenice, nádoba na nápoje.", one: "sklenice", two: "láhev" },
    { question: "Přelož do češtiny: das Buch", correct: 2, reason: "Je to: kniha, předmět ke čtení.", one: "sešit", two: "kniha" },
    { question: "Přelož: die Zeitung", correct: 2, reason: "Je to: noviny, tiskovina obsahující zprávy.", one: "časopis", two: "noviny" },

    { question: "Přelož do češtiny: der Durst", correct: 1, reason: "Je to: žízeň, stav, kdy tělo potřebuje tekutiny.", one: "žízeň", two: "hlad" },
    { question: "Přelož: lieber", correct: 2, reason: "Je to: raději, označuje preferenci.", one: "rád", two: "raději" },
    { question: "Přelož do češtiny: der Eiswürfel", correct: 1, reason: "Je to: kostka ledu, používá se k chlazení nápojů.", one: "kostka ledu", two: "kostka cukru" },
    { question: "Přelož: die Zucker", correct: 2, reason: "Je to: cukr, sladidlo používané v potravinách.", one: "sůl", two: "cukr" },
    { question: "Přelož: (du) schmeckst", correct: 1, reason: "Je to: chutnáš, tvar slovesa 'schmecken' pro 2. osobu jednotného čísla.", one: "chutnáš", two: "chutná" },
    { question: "Přelož: mehr", correct: 2, reason: "Je to: více, často používané pro označení množství.", one: "méně", two: "více" },
    { question: "Přelož do češtiny: weniger", correct: 1, reason: "Je to: méně, opak slova 'mehr'.", one: "méně", two: "více" },
    { question: "Přelož: die Flashe", correct: 2, reason: "Je to: láhev, nádoba na tekutiny.", one: "krabice", two: "láhev" },
    { question: "Přelož: (das) Popcorn", correct: 1, reason: "Je to: popcorn, oblíbené občerstvení v kině.", one: "popcorn", two: "chipsy" },
    { question: "Přelož: Das tut mir leid.", correct: 2, reason: "Je to: To je mi líto, omluvná fráze.", one: "Děkuji", two: "To je mi líto" },
    { question: "Přelož: furchtbar", correct: 1, reason: "Je to: strašný, negativní popis něčeho nepříjemného.", one: "strašný", two: "úžasný" },
    { question: "Přelož: die Sache", correct: 2, reason: "Je to: věc, označuje jakýkoliv předmět nebo záležitost.", one: "myšlenka", two: "věc" },
    { question: "Přelož do češtiny: der Name", correct: 1, reason: "Je to: jméno, označení osoby nebo objektu.", one: "jméno", two: "číslo" }

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

