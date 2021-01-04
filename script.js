

function createCircles(s) {
    $('#circle1').circleProgress({
        value: 0.75,
        size: s,
        fill: '#E09CDD',
        startAngle: -Math.PI/2 ,
        thickness: 15
    });
    $('#circle2').circleProgress({
        value: 0.70,
        size: s,
        startAngle:-Math.PI/2 ,
        fill: '#A4DCB4',
        thickness: 15
    });
    $('#circle3').circleProgress({
        value: 0.45,
        size: s,
        fill: '#C1E2E7',
        startAngle:-Math.PI/2,
        thickness: 15
    });
    $('#circle4').circleProgress({
        value: 0.70,
        size: s,
        startAngle: -Math.PI/2,
        fill: '#C1E7CC',
        thickness: 15
    });
    $('#circle5').circleProgress({
        value: 0.60,
        size: s,
        startAngle: -Math.PI/2,
        fill: '#F9A7BA',
        thickness: 15
    });
    $('#circle6').circleProgress({
        value: 0.50,
        size: s,
        startAngle: -Math.PI/2,
        fill: '#F2B9EC',
        thickness: 15
    });
    $('#circle7').circleProgress({
        value: 0.40,
        size: s,
        startAngle: -Math.PI/2,
        fill: '#F1F390',
        thickness: 15
    });
    $('#circle8').circleProgress({
        value: 0.50,
        size: s,
        startAngle: -Math.PI/2,
        fill: '#F8CEA7',
        thickness: 15
    });
}

$(document).on("scroll", function(){
    var wn = $(document).scrollTop();
    var ele = document.getElementsByClassName("nav")[0]
    var a = document.querySelectorAll('.nav a')
    if(wn > 50){
        ele.style["background-color"] = "#34618B";
        a.forEach(elem => elem.style["color"] = "white")
    } else {
        ele.style["background-color"] = "transparent";
        a.forEach(elem => elem.style["color"] = "#828282");
    }
})
// $(document).on("scroll", function () {
//     var pageTop = $(document).scrollTop()
//     var pageBottom = pageTop + $(window).height()

//     console.log(pageBottom)
//     console.log($("#about").position().top)

//     if ($("#about").position().top < pageBottom ) {   $("#about").css({ 'animation': 'fadeInUp 2s both', 'padding': '24px'})}
//     else {  
//         console.log("here")
//         $("#about").css("animation", "")
//     }
//     if ($("#projects").position().top < pageBottom ) { $("#projects").css({ 'animation': 'fadeInUp 2s both', 'padding': '24px'})}
//     else {  
//         $("#about").css("animation", "")

// }
// })

$(window).on('load', function() {
    var width = $(window).width();
    size = width >= 768? width/9 : (width-60)/4;
    createCircles(size)
})
$(window).resize(function () {
    var width = $(window).width();
    console.log(width);
    size = width >= 768? width/9 : (width-60)/4;
    createCircles(size)
})
