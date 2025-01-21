const tasks = [
    // Jazykové překlady
    { question: "Přelož: Französisch", correct: 1, reason: "Je to: francouština. Pozor, 'Francie' je 'Frankreich'.", one: "francouština", two: "Francie" },
    { question: "Přelož: Deutsch", correct: 2, reason: "Je to: němčina. 'Němec' je 'der Deutsche'.", one: "Němec", two: "němčina" },
    { question: "Přelož: Englisch", correct: 1, reason: "Je to: angličtina. Nenechte se zmást podobností s 'English'.", one: "angličtina", two: "engličtina" },
    { question: "Přelož: Chinesisch", correct: 1, reason: "Je to: čínština. Nepoužívejte 'Číňan', což by bylo 'der Chinese'.", one: "čínština", two: "Číňan" },
    { question: "Přelož: Griechisch", correct: 1, reason: "Je to: řečtina. Pozor, 'Řecko' je 'Griechenland'.", one: "řečtina", two: "Řecko" },
    { question: "Přelož: Spanisch", correct: 1, reason: "Je to: španělština. Pozor, 'Španělsko' je 'Spanien'.", one: "španělština", two: "Španělsko" },
    { question: "Přelož: Russisch", correct: 1, reason: "Je to: ruština. Pozor, 'Rusko' je 'Russland'.", one: "ruština", two: "Rusko" },
    { question: "Přelož: Italienisch", correct: 1, reason: "Je to: italština. 'Itálie' je 'Italien'.", one: "italština", two: "Itálie" },
    { question: "Přelož: Türkisch", correct: 1, reason: "Je to: turečtina. 'Turecko' je 'die Türkei'.", one: "turečtina", two: "Turecko" },
    { question: "Přelož: Tschechisch", correct: 1, reason: "Je to: čeština. 'Česko' je 'Tschechien'.", one: "čeština", two: "Česko" },

    // Školní předměty
    { question: "Přelož: Mathematik", correct: 2, reason: "Je to: Matematika. 'Mathánština' není platné slovo.", one: "Mathánština", two: "Matematika" },
    { question: "Přelož: Informatik", correct: 2, reason: "Je to: Informatika. 'Informační hodina' by se řeklo jinak.", one: "Informační hodina", two: "Informatika" },
    { question: "Přelož: Biologie", correct: 1, reason: "Je to: Biologie.", one: "Biologie", two: "Biologický" },
    { question: "Přelož: Physik", correct: 1, reason: "Je to: Fyzika. 'Physis' by znamenalo 'fyzická podstata' – není to synonymum pro fyziku.", one: "Fyzika", two: "Physis" },
    { question: "Přelož: Kunst", correct: 1, reason: "Je to: Výtvarná výchova. 'Kunst' znamená doslova 'umění'.", one: "Výtvarná výchova", two: "Hudební výchova" },
    { question: "Přelož: Geschichte", correct: 1, reason: "Je to: Dějepis. 'Geschichte' znamená také 'příběh', ale zde se myslí školní předmět.", one: "Dějepis", two: "Geografie" },
    { question: "Přelož: Geografie", correct: 2, reason: "Je to: Zeměpis. 'Přírodopis' je 'Biologie'.", one: "Přírodopis", two: "Zeměpis" },
    { question: "Přelož: Religion", correct: 1, reason: "Je to: Náboženství. 'Víra' je obecnější pojem – 'der Glaube'.", one: "Náboženství", two: "Víra" },

    // Slovesa a gramatika
    { question: "Přelož: haben", correct: 1, reason: "Je to: mít. Je to infinitiv slovesa.", one: "mít", two: "má" },
    { question: "Přelož: (er) hat", correct: 1, reason: "Je to: má. Toto sloveso je skloňované pro 3. osobu jednotného čísla ('er/sie/es hat').", one: "má", two: "mít" },
    { question: "Přelož: (ihr) habt", correct: 1, reason: "Je to: máte. Toto sloveso je skloňované pro 2. osobu množného čísla ('ihr habt'). Ne tvar 'hat' (3. osoba).", one: "máte", two: "máš" },
    { question: "Přelož: finden", correct: 1, reason: "Je to: shledávat něco nějakým.", one: "shledávat něco nějakým", two: "fidlovat" },
    { question: "Přelož: sprechen", correct: 1, reason: "Je to: mluvit.", one: "mluvit", two: "poslouchat" },
    { question: "Přelož: (er) spricht", correct: 1, reason: "Je to: mluví. Skloňovaný tvar pro 3. osobu jednotného čísla.", one: "mluví", two: "mluvil" },

    // Hodnocení a emoce
    { question: "Přelož: toll", correct: 1, reason: "Je to: skvělý. Neplést s vysoký z angličtiny.", one: "skvělý", two: "vysoký" },
    { question: "Přelož: okay", correct: 1, reason: "Je to: v pořádku. 'Okay' se používá podobně jako v češtině.", one: "v pořádku", two: "skvělé" },
    { question: "Přelož: langweilig", correct: 1, reason: "Je to: nudný.", one: "nudný", two: "pomalý" },
    { question: "Přelož: doof", correct: 1, reason: "Je to: hloupý.", one: "hloupý", two: "chytrý" },
    { question: "Přelož: total", correct: 1, reason: "Je to: úplně. Používá se k zesílení významu, podobně jako 'úplně' v češtině.", one: "úplně", two: "částečně" },
    { question: "Přelož: hassen", correct: 1, reason: "Je to: nenávidět. Je to infinitiv.", one: "nenávidět", two: "nemít rád" },

    // Ostatní
    { question: "Přelož: die Stunde", correct: 1, reason: "Je to: hodina.", one: "hodina", two: "minuta" },
    { question: "Přelož: das Theater", correct: 1, reason: "Je to: divadlo.", one: "divadlo", two: "kino" }
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

const maxIndex = 20;
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

