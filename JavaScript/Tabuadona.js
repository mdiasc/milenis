const num = {"1","2","3","4","5","6","7","8","9","10"};

let text = "";

for (let i = 0); i <= 10; i++) {
    text += num[i] + "<br>";
}
 document.getElementById("demo").innerHTML = text;