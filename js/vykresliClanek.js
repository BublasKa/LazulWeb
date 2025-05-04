window.addEventListener("DOMContentLoaded", () => {
    const url = new URL(window.location.href);
    const paramId = url.searchParams.get("id"); // např. clanek.html?id=kvantove-pocitace
  
    const clanek = clanky.find(c => c.id === paramId);
    if (!clanek) {
      document.querySelector("main").innerHTML = "<h1>Článek nebyl nalezen.</h1>";
      return;
    }
  
    document.title = `Lazul - ${clanek.title}`;
  
    const main = document.querySelector("main");
  
    // Titulek + podobné články
    const uvodniSection = document.createElement("section");
    uvodniSection.className = "sec";
    uvodniSection.style.border = "7px solid rgb(190, 0, 0)";
    uvodniSection.style.width = "85%";
  
    const h1 = document.createElement("h1");
    h1.className = "sec-titulek";
    h1.textContent = clanek.title;
  
    const details = document.createElement("details");
    details.className = "sec-details";
    const summary = document.createElement("summary");
    summary.className = "sec-summary";
    summary.textContent = "Podobné články:";
    const ul = document.createElement("ul");
    ul.className = "sec-list";
  
    if (clanek.related.length === 0) {
      const li = document.createElement("li");
      li.className = "sec-item";
      li.textContent = "Žádné podobné články zde zatím nejsou.";
      ul.appendChild(li);
    } else {
      clanek.related.forEach(id => {
        const podobny = clanky.find(c => c.id === id);
        if (podobny) {
          const li = document.createElement("li");
          li.className = "sec-item";
          const a = document.createElement("a");
          a.href = `clanek.html?id=${podobny.id}`;
          a.textContent = podobny.title;
          li.appendChild(a);
          ul.appendChild(li);
        }
      });
    }
  
    details.append(summary, ul);
    uvodniSection.append(h1, document.createElement("br"), details);
    main.appendChild(uvodniSection);
  
    // Obsah
    const obsahSection = document.createElement("section");
    obsahSection.className = "sec";
    obsahSection.style.border = "3px solid yellow";
    obsahSection.style.width = "93%";
  
    function formatText(text) {
        return text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
      }
      
      clanek.content.forEach(par => {
        const p = document.createElement("p");
        p.innerHTML = formatText(par); // <--- použij innerHTML a upravený text
        obsahSection.appendChild(p);
        obsahSection.appendChild(document.createElement("br"));
      });
      
  
    main.appendChild(obsahSection);
  
    // Autor + rubrika + audio
    const infoSection = document.createElement("section");
    infoSection.className = "sec";
    infoSection.style.border = "4px solid rgb(0, 192, 0)";
    infoSection.style.width = "70%";
  
    const liAuthor = document.createElement("li");
    liAuthor.textContent = clanek.author;
  
    const liCat = document.createElement("li");
    const aCat = document.createElement("a");
    aCat.href = clanek.category.href;
    const img = document.createElement("img");
    img.src = clanek.category.icon;
    img.alt = clanek.category.name;
    img.style.width = "100px";
    aCat.appendChild(img);
    liCat.appendChild(aCat);
  
    const liMag = document.createElement("li");
    const aMag = document.createElement("a");
    aMag.href = clanek.magazine.href;
    aMag.textContent = clanek.magazine.name;
    liMag.appendChild(aMag);
  
    infoSection.append(liAuthor, liCat, liMag);
  
    if (clanek.audio) {
      const detailsAudio = document.createElement("details");
      detailsAudio.className = "sec-details";
      const summaryAudio = document.createElement("summary");
      summaryAudio.className = "sec-summary";
      summaryAudio.textContent = "[BETA] Poslech textu:";
      const ulAudio = document.createElement("ul");
      ulAudio.className = "sec-list";
      const liAudio = document.createElement("li");
      liAudio.className = "sec-item";
      const audio = document.createElement("audio");
      audio.controls = true;
      const source = document.createElement("source");
      source.src = clanek.audio;
      source.type = "audio/mpeg";
      audio.appendChild(source);
      liAudio.appendChild(audio);
      ulAudio.appendChild(liAudio);
      detailsAudio.append(summaryAudio, ulAudio);
      infoSection.appendChild(document.createElement("br"));
      infoSection.appendChild(detailsAudio);
    }
  
    main.appendChild(infoSection);
  });
  