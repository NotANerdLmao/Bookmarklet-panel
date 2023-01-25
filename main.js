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
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 1.5rem;
    border-radius: 10px;
    font-family: arial;
    font-weight: bolder;
}
.minimize:hover {
    background: #00ff00;
}
`);

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
    header.style.width = "100%";
    header.style.position = "relative";
    header.style.height = "40px";
    header.style.paddingTop = "10px";
    header.style.fontSize = "1.5rem";
    header.style.textAlign = "center";
    header.style.verticalalign = "middle";
    header.style.fontFamily = "arial"
    header.style.verticalAlign = "middle"
    header.innerHTML = `Bookmarklet panel <span style="font-size: 0.75rem">v0.1</span>`;

    let loop;

    let close = document.createElement("button");
    header.appendChild(close);
    close.style.background = "red";
    close.style.height = "50px";
    close.style.width = "50px";
    close.style.border = "none";
    close.style.cursor = "pointer";
    close.style.position = "absolute";
    close.style.top = "0px";
    close.style.right = "0px";
    close.style.fontSize = "1.5rem";
    close.style.borderRadius = "10px";
    close.style.fontFamily = "arial";
    close.style.fontWeight = "bolder";
    close.innerText = "X";
    close.onclick = () => {
        GUI.remove();
        clearInterval(loop);
    }

    let minimize = document.createElement("button");
    header.appendChild(minimize);
    minimize.classList.add("minimize")
    minimize.innerText = "-";
    minimize.onclick = () => {
        bodyDiv.hidden = !bodyDiv.hidden;
        if (bodyDiv.hidden == true) {
            minimize.innerText = "+";
        } else {
            minimize.innerText = "-";
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
    button1.innerText = "test button #1"
    button1.onclick = () => {
        alert("this is a test :D")
    }
    document.body.append(GUI);

    let footer = document.createElement("div");
    bodyDiv.appendChild(footer);
    footer.style.fontSize = "0.9rem";
    footer.style.paddingBottom = "5px";
    footer.innerHTML = (`<span>Have fun :D</span>`);

    function createButton(button) {
        button  = document.createElement("button")
        body.appendChild(button);
        button.classList.add("buttons");
        return button;
    }
})()
