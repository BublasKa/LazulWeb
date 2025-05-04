function formatText(text) {
  return text.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
}

window.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  //  Vytvoření pole pro vyhledávání
  const searchBox = document.createElement("input");
  searchBox.type = "text";
  searchBox.placeholder = "Hledat články nebo #štítky...";
  searchBox.style.marginBottom = "2rem";
  searchBox.style.padding = "0.5rem";
  searchBox.style.width = "50%";
  const searchWrapper = document.createElement("div");
  searchWrapper.style.textAlign = "center";
  searchWrapper.style.marginBottom = "2rem";
  searchWrapper.appendChild(searchBox);
  main.before(searchWrapper);
  

  function highlight(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  function renderClanky(filter = "") {
    main.innerHTML = "";
    const lowerFilter = filter.toLowerCase().trim();
    const isTagSearch = lowerFilter.startsWith("#");

    clanky.forEach(clanek => {
      const matches = isTagSearch
        ? (clanek.tags || []).some(tag => `#${tag.toLowerCase()}` === lowerFilter)
        : (
            clanek.title.toLowerCase().includes(lowerFilter) ||
            clanek.author.toLowerCase().includes(lowerFilter) ||
            clanek.perex.toLowerCase().includes(lowerFilter)
          );        

      if (matches) {
        const wrapper = document.createElement(clanek.href ? "a" : "div");
        if (clanek.href) {
          wrapper.href = clanek.href;
          wrapper.style.textDecoration = "none";
        }

        const section = document.createElement("section");
        section.className = `sec ${clanek.color}`;
        section.style.borderWidth = "5px";
        section.style.width = "73%";

        const h1 = document.createElement("h1");
        h1.innerHTML = highlight(clanek.title, filter);
        h1.className = "sec-titulek";

        const br1 = document.createElement("br");

        const p = document.createElement("p");
        p.innerHTML = highlight(formatText(clanek.perex), filter);

        const br2 = document.createElement("br");

        const liAuthor = document.createElement("li");
        liAuthor.innerHTML = highlight(clanek.author, filter);

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

        // původní obsah
        section.append(h1, br1, p, br2, liAuthor, liCat, liMag);

        wrapper.appendChild(section);

        // vykreslení štítků
        if (clanek.tags && clanek.tags.length > 0) {
          const tagList = document.createElement("ul");
          tagList.style.listStyle = "none";
          tagList.style.display = "flex";
          tagList.style.flexWrap = "wrap";
          tagList.style.gap = "0.5rem";
          tagList.style.paddingLeft = "0";

          clanek.tags.forEach(tag => {
            const tagItem = document.createElement("li");
            tagItem.textContent = `#${tag}`;
            tagItem.style.padding = "0.2rem 0.5rem";
            tagItem.style.border = "1px solid gray";
            tagItem.style.borderRadius = "5px";
            tagItem.style.backgroundColor = "#f0f0f0";
            tagItem.style.fontSize = "0.9em";
            tagItem.style.cursor = "pointer";
            tagItem.addEventListener("click", () => {
              searchBox.value = `#${tag}`;
              renderClanky(`#${tag}`);
            });
            tagList.appendChild(tagItem);
          });

          section.appendChild(document.createElement("br"));
          section.appendChild(tagList);
        }

        main.appendChild(wrapper);
      }
    });
  }

  renderClanky();
  searchBox.addEventListener("input", () => {
    renderClanky(searchBox.value);
  });
});
