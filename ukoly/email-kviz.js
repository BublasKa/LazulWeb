
let questionCount = 1;
        document.getElementById("add-question").addEventListener("click", function () {
            questionCount++;
            const container = document.getElementById("questions-container");

            const questionHTML = `
                <h2>Otázka ${questionCount}</h2>
                <label for="otazka-${questionCount}">Otázka:</label>
                <input type="text" name="otazka[]" id="otazka-${questionCount}" required>
                <br>

                <label for="možnost1-${questionCount}">Možnost 1:</label>
                <input type="text" name="možnost1[]" id="možnost1-${questionCount}" required>
                <br>

                <label for="možnost2-${questionCount}">Možnost 2:</label>
                <input type="text" name="možnost2[]" id="možnost2-${questionCount}" required>
                <br>

                <label for="možnost3-${questionCount}">Možnost 3:</label>
                <input type="text" name="možnost3[]" id="možnost3-${questionCount}">
                <br>

                <label for="možnost4-${questionCount}">Možnost 4:</label>
                <input type="text" name="možnost4[]" id="možnost4-${questionCount}">
                <br>

                <label for="spravnamoznost-${questionCount}">Správná možnost (1-4):</label>
                <input type="number" name="spravnamoznost[]" id="spravnamoznost-${questionCount}" min="1" max="4" required>
                <br>

                <label for="reason-${questionCount}">Důvod k správné odpovědi:</label>
                <textarea name="reason[]" id="reason-${questionCount}" required></textarea>
                <br><br>
            `;

            container.insertAdjacentHTML("beforeend", questionHTML);
        });