(() => {
    let n = document.createElement("iframe");
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
})();
(() => {
    let style = document.createElement("style");
    style.innerHTML = (`
.buttons {
    display: flex;
    background: #88888888;
    height: 37.5;
    border: none;
    border-Radius: 7.5px;
    align-Self: start;
    justify-Self: start;
    padding-top: 9.375;
    cursor: pointer;
}
.buttons:hover {
    background: #666666;
}
.minimize {
    background: #00dd00;
    height: 25px;
    width: 25px;
    padding-top: 0;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 1.5rem;
    border-radius: 10px;
    font-family: arial;
    font-weight: bolder;
    padding-top: 0.5;
    padding-left: 0.5;
}
.minimize:hover {
    background: #00ff00;
}

.close {
    background: #dd0000;
    height: 25px;
    width: 25px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
    padding-top: 0.5;
    padding-left: 0.5;

    font-size: 1.5rem;
    border-radius: 10px;
    font-family: arial;
    font-weight: bolder;
}
.close:hover {
    background: #ff0000;
}
`);
    icons = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />`

    const GUI = document.createElement("div");
    GUI.appendChild(style);
    GUI.style.width = "400px";
    GUI.style.background = "hsl(0, 0%, 10%)";
    GUI.style.borderRadius = "10px";
    GUI.style.position = "absolute";
    GUI.style.textAlign = "center";
    GUI.style.fontFamily = "arial";
    GUI.style.color = "white";
    GUI.style.overflow = "hidden";
    GUI.style.top = "50px";
    GUI.style.left = "50px";

    var pos1 = -100, pos2 = -100, pos3 = -100, pos4 = -100;
    GUI.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            GUI.style.top = (GUI.offsetTop - pos2) + "px";
            GUI.style.left = (GUI.offsetLeft - pos1) + "px";
        });
    });

    let header = document.createElement("div");
    GUI.appendChild(header);
    header.style.position = "relative";
    header.style.height = "25px";
    header.style.width = "400px";

    let headerhtml = document.createElement("div")
    header.appendChild(headerhtml);
    headerhtml.style.position = "relative";
    headerhtml.style.fontSize = "1rem";
    headerhtml.style.fontFamily = "arial"
    headerhtml.style.cursor = "grab";
    headerhtml.style.paddingBottom = "0px";
    headerhtml.innerHTML = `Bookmarklet panel v0.2`;

    let loop;

    let close = document.createElement("button");
    header.appendChild(close);
    close.classList.add("close");
    close.innerHTML = icons + `<span class="material-symbols-outlined">close</span>`;
    close.onclick = () => {
        GUI.remove();
        clearInterval(loop);
    }

    let minimize = document.createElement("button");
    header.appendChild(minimize);
    minimize.classList.add("minimize");
    minimize.innerHTML = icons + `<span class="material-symbols-outlined">expand_less</span>`;
    minimize.onclick = () => {
        bodyDiv.hidden = !bodyDiv.hidden;
        close.hidden = bodyDiv.hidden
        if (bodyDiv.hidden == true) {
            minimize.innerHTML = icons + `<span class="material-symbols-outlined">expand_more</span>`;
            headerhtml.innerHTML = icons + `<span class="material-symbols-outlined">drag_indicator</span>`;
            GUI.style.width = "50px";
            header.style.width = "50px"
            headerhtml.style.width = "30px"
            headerhtml.style.paddingLeft = "20px";
        } else {
            minimize.innerHTML = icons + `<span class="material-symbols-outlined">expand_less</span>`;
            headerhtml.innerHTML = `Bookmarklet panel v0.2`;
            GUI.style.width = "400px";
            header.style.width = "400px"
            headerhtml.style.width = "400px"
            headerhtml.style.paddingLeft = "0px";
        }
    }

    let bodyDiv = document.createElement("div");
    let body = document.createElement("div");
    body.style.alignContent = "start";
    bodyDiv.appendChild(body);
    GUI.appendChild(bodyDiv);

    body.style.display = "flex";
    body.style.margin = "0px";
    body.style.paddingTop = "5px"
    body.style.minHeight = "70px";

    button1 = createButton()
    button1.innerText = "hide website"
    button1.onclick = () => {
        function gcloak() { var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = 'https://ssl.gstatic.com/classroom/favicon.png'; document.title = 'Classes'; console.log(document.title); document.getElementsByTagName('head')[0].appendChild(link) }; gcloak(); setInterval(gcloak, 1000);
    }
    document.body.append(GUI);

    let footer = document.createElement("div");
    bodyDiv.appendChild(footer);
    footer.style.fontSize = "0.9rem";
    footer.style.paddingBottom = "5px";
    footer.innerHTML = (`<span>Have fun :D</span>`);

    function createButton(button) {
        button = document.createElement("button")
        body.appendChild(button);
        button.classList.add("buttons");
        return button;
    }
})()
