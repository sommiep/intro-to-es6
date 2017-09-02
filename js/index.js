'use strict';

function go(key) {
    var a = document.getElementById('output').textContent;
    a += key;
    document.getElementById('output').textContent = a;
}
function backspace() {
    var out = document.getElementById("output").textContent;
    out = out.substring(0, out.length - 1);
    document.getElementById("output").textContent = out;
}
