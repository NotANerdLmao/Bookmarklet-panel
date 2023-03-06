var style = document.createElement("style");
loadimages();
style.innerText = (`
.buttons-bookmarkpanel {
    background: #88888888;
    height: 37.5px;
    border: none;
    border-Radius: 7.5px;
    padding-top: 0px;
    cursor: pointer;
    padding: 2.5px;
}
.buttons-bookmarkpanel:hover {
    background: #666666;
}
.minimize-bookmarkpanel {
    background: #00dd00;
    height: 25px;
    width: 25px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 7.5px;
    padding: 0px;
    margin: auto;
}
.minimize-bookmarkpanel:hover {
    background: #00ff00;
}

.close-bookmarkpanel {
    background: #dd0000;
    height: 25px;
    width: 25px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    right: 0px;
    border-radius: 7.5px;
    padding: 0px;
    margin: auto;
}
.close-bookmarkpanel:hover {
    background: #ff0000;
}
`);
//alert(HTMLHeadElement.style)

const GUI = document.createElement("div");
GUI.appendChild(style);
GUI.style.width = "400px";
GUI.style.background = "hsl(0, 0%, 10%)";
GUI.style.borderRadius = "7.5px";
GUI.style.position = "absolute";
GUI.style.textAlign = "center";
GUI.style.fontFamily = "arial";
GUI.style.color = "white";
GUI.style.overflow = "hidden";
GUI.style.top = "50px";
GUI.style.left = "50px";
GUI.style.zIndex = "9999";
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

let headerhtml = document.createElement("div");
header.appendChild(headerhtml);
headerhtml.style.position = "relative";
headerhtml.style.fontSize = "1rem";
headerhtml.style.fontFamily = "arial"
headerhtml.style.cursor = "grab";
headerhtml.style.paddingBottom = "0px";
headerhtml.style.margin = "auto";
headerhtml.innerHTML = `Bookmarklet panel v0.2`;

let loop;

let close = document.createElement("button");
header.appendChild(close);
close.classList.add("close-bookmarkpanel");
close.innerHTML = `<img src="https://raw.githubusercontent.com/google/material-design-icons/master/src/navigation/close/materialicons/24px.svg">`;
close.onclick = () => {
    GUI.remove();
    clearInterval(loop);
}

let minimize = document.createElement("button");
header.appendChild(minimize);
minimize.classList.add("minimize-bookmarkpanel");
minimize.innerHTML = `<img src="https://raw.githubusercontent.com/google/material-design-icons/master/src/navigation/arrow_drop_up/materialicons/24px.svg">`;
minimize.onclick = () => {
    bodyDiv.hidden = !bodyDiv.hidden;
    close.hidden = bodyDiv.hidden;
    if (bodyDiv.hidden == true) {
        minimize.innerHTML = `<img src="https://raw.githubusercontent.com/google/material-design-icons/master/src/navigation/arrow_drop_down/materialicons/24px.svg">`;
        headerhtml.innerHTML = `<img src="https://raw.githubusercontent.com/google/material-design-icons/master/src/action/drag_indicator/materialicons/24px.svg" id="drag_indicator">`;
        document.getElementById("drag_indicator").style.filter="invert(100%)";
        GUI.style.width = "50px";
        header.style.width = "50px";
        headerhtml.style.width = "30px";
        headerhtml.style.paddingLeft = "20px";
    } else {
        minimize.innerHTML = `<img src="https://raw.githubusercontent.com/google/material-design-icons/master/src/navigation/arrow_drop_up/materialicons/24px.svg">`;
        headerhtml.innerHTML = `Bookmarklet panel v0.2`;
        GUI.style.width = "400px";
        header.style.width = "400px";
        headerhtml.style.width = "400px";
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

button1 = createButton();
button1.innerText = "Hide website";
button1.title = "Sets icon and name of website to google classroom";
button1.onclick = () => {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link'); link.type = 'image/x-icon'; link.rel = 'shortcut icon'; link.href = 'https://raw.githubusercontent.com/Azboii/Bookmarklet-panel/19c9f87a86bb5728523961478edd415e05979642/icons/classroom.png'; document.title = 'Classes'; console.log(document.title); document.getElementsByTagName('head')[0].appendChild(link);
}
document.body.append(GUI);

let editing = false
button2 = createButton();
button2.innerText = "Edit website";
button2.title = "Let you edit any website you want";
button2.onclick = () => {
    if (editing == false) {
        document.body.contentEditable = 'true'; 
        document.designMode='on';
        editing = true
    } else {
        document.body.contentEditable = 'false'; 
        document.designMode='off';
        editing = false
    }
}
document.body.append(GUI);

let footer = document.createElement("div");
bodyDiv.appendChild(footer);
footer.style.fontSize = "0.9rem";
footer.style.paddingBottom = "5px";
footer.innerHTML = (`<span>Have fun :D</span>`);

function createButton(button) {
    button = document.createElement("button");
    body.appendChild(button);
    button.classList.add("buttons-bookmarkpanel");
    return button;
}

function loadimages() {
    var tempdiv = document.createElement("div");
    tempdiv.innerHTML = `<img src="https://raw.githubusercontent.com/google/material-design-icons/master/src/navigation/arrow_drop_down/materialicons/24px.svg"></img>`;
    tempdiv.innerHTML = `<img src="https://raw.githubusercontent.com/google/material-design-icons/master/src/navigation/close/materialicons/24px.svg"></img>`;
    tempdiv.innerHTML = `<img src="https://raw.githubusercontent.com/google/material-design-icons/master/src/navigation/arrow_drop_up/materialicons/24px.svg"></img>`;
    tempdiv.innerHTML = `<img src="https://raw.githubusercontent.com/google/material-design-icons/master/src/action/drag_indicator/materialicons/24px.svg" id="drag_indicator">`;
}