var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}

var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

function uusiElementti() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputField").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("HUOM! Lisää tehtävä!");
        inputField.style.border = "3px solid red";
    } else {
        document.getElementById("myUL").appendChild(li);
        inputField.style.border = "none";
        tallenna();

    }
    document.getElementById("inputField").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\uD83D\uDDD1");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            var deleteText = this.parentElement.innerText;
            var cleanedText = deleteText.slice(0, -1);
            var list = JSON.parse(localStorage.getItem("tehtävät"));
            for (i = 0; i < list.length; i++) {
                if (list[i] == cleanedText) {
                    list.splice(i, 1);
                }
            }
            localStorage.setItem("tehtävät", JSON.stringify(list));
        };
    }
}

function tallenna() {
    console.log();
    var inputValue = document.getElementById("inputField").value;
    let tallennus = JSON.parse(localStorage.getItem("tehtävät")) || [];
    tallennus.push(inputValue);
    localStorage.setItem("tehtävät", JSON.stringify(tallennus));
}