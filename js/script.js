$('#shell').t({
    speed: 100,
    init: function (elm) {
        console.log('init');
    },
    typing: function (elm, left, total) {
        console.log('typing');
    },
    fin: function (elm) {
        console.log('fin');
        typing(elm);
    }
});
var command = [
    "Name",
    "Social Account",
    "WebSite",
    "Like",
    "More details",
    "PC",
    "Anime",
    "Game",
    "Programming",
    "^C"
];
var answer = [
    "Tomachi",
    "Twitter : @book000<br>Discord : tomachi#0310",
    "<a href=\"https://tomacheese.com/\">https://tomacheese.com/</a>",
    "PC, Anime, Camera, Music, Game, Programming",
    "Select Like Item",
    "<a href=\"https://tomacheese.com/pc/\">Here</a>",
    "<a href=\"https://tomacheese.com/me/\">Here</a>",
    "Steam UserPage: <br><img src=\"https://steamsignature.com/profile/default/76561198171043702.png\" style=\"display: inline;\" />",
    "PHP, Java, C#, JavaScript, NodeJS, Python etc."
];
var i = 0;
var flag = true;

function typing(elm) {
    if (flag) {
        var content = command[i];
        if (content == undefined) return;
        $(elm).a("<span class=\"command\">" + content + "</span><br>");
    } else {
        var content = answer[i];
        if (content == undefined) return;
        $(elm).a("<span class=\"answer\">" + content + "</span><br>");
        i++;
    }
    flag = !flag;
}