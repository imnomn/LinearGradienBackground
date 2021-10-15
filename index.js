function gen_color(a) {
    var sides = a;
    var rand_color1 = Math.floor(Math.random() * 16777215).toString(16);
    var rand_color2 = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundImage = "linear-gradient( to " + sides + " ," + "#" + rand_color1 + "," + "#" + rand_color2 + ")";
    document.getElementById("text").innerHTML = "linear-gradient( to " + sides + " ," + "#" + rand_color1 + "," + "#" + rand_color2 + ")";
}