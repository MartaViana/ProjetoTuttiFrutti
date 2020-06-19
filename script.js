/////estado das paginas/////////////////
// 1 - wetube
// 2 - fizztube
// 3 - notiseria
// 4 - noticlick


///////////////////////////////abrir abas///////////////////////////

//abrir wetube como default
function PriAba(cityName, state) {
    estado = state;
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    document.getElementById(cityName).className += " active";

    if (document.getElementById(cityName).className === " active") {
        document.getElementById(cityName).borderBottom = "1.5pt solid black";
    }
    console.log("estado" + estado);

}


function openCity(evt, cityName, state) {
    estado = state;
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    $(evt.currentTarget).addClass("active");

    if (evt.currentTarget.className === " active") {
        evt.borderBottom = "1.5pt solid black";

    }
    console.log("estado" + estado);

}


//////////////////////////auto scroll wetube////////////////////////////

setInterval(function () {
    if (estado === 1) {
        console.log("e foi para baixo!")

        /* console.log("document height" + $(document).height() );

         $(" html, body").animate({scrollTop: $(document).height()}, 2000);

         var scroll = 200 + ($("#wetube").offset()).top;
         $(".video").css("top", scroll);

         */
        console.log("document height" + $(".content").height() );

        $('#wetube1').animate({scrollTop: $('#wetube1')[0].scrollHeight}, 2000);
        var scroll = 200 + ($("#wetube").offset()).top;
        $(".video").css("top", scroll);
    }

}, 5000);

//call every 5000 miliseconds

////////////////////////////////////efeito pisca 1ª mensagem/////////////////////////////////////

// console.log("estado" + estado);
setTimeout(function piscar() {
    document.getElementById('fizz').style.backgroundColor = "#FBEFAB";
    var count = 0;
    console.log("passou aqui");
    var f = document.getElementById("faceMen");
    f.play();
    $("#chat-window").css("visibility","visible");


    function piscar2() {
        //esquanto esta na pagina wetube

        if (estado == 1 && count == 0) {
            console.log(document.getElementById('fizz').style.backgroundColor);
            console.log("e aqui");

            if (document.getElementById("fizz").style.backgroundColor === "rgb(251, 239, 171)") {
                document.getElementById('fizz').style.backgroundColor = "#A5FC67";
                console.log("1");
            }
            else if (document.getElementById("fizz").style.backgroundColor === "rgb(165, 252, 103)") {
                document.getElementById('fizz').style.backgroundColor = "#FBEFAB";
                console.log("2");
            }
        }

        if (estado == 2) {
            console.log("parou");
            clearInterval(myVar);
            count = 1;
            document.getElementById('fizz').style.backgroundColor = "#FBEFAB";


            if (estado != 2) {
                clearInterval(myVar);
                console.log("parou2");

            }
        }

    }

    var myVar = setInterval(piscar2, 500);


}, 10000);

////////////////////////////////////nova aba noticia seria/////////////////////////////////////

document.getElementById("men1").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("notiseria").style.visibility = "visible";
    openCity(event, 'notis', 3);
    $("#men1").attr("src", "images/menlida1.png")




}

////////////////////////////////////notificaçoes/////////////////////////////////////

$("#men1").click(function notificacoes() {
    console.log("aaaaaaaaaaaaaaaahhhhh");

    setTimeout(function () {
        $(".notificaçao").animate({right: '5px'});
        console.log("aaaaaaaaaaaaaaaahhhhh");

        var x = document.getElementById("noti");
        x.play();

    }, 5000);


});
console.log("aaaaaaaaaaaaaaaahhhhh");

////////////////////////////////////nova aba noticia click e mail/////////////////////////////////////


$("#noticima").click(function noti1() {

    document.getElementById('titulonoti').innerHTML = "Versa";
    document.getElementById("noticlick2").style.visibility = "visible";
    openCity(event, 'noticlick', 4);

    $("#noticima").animate({right: '-350px'});
    $("#notibaixo").animate({right: '-350px'});


    $(".noticiaclick").attr("src", "images/meme.png")

    setTimeout(function mail() {
        $(".mail").css("display", "block");

        var mS = document.getElementById("emailS");
        mS.play();
    }, 2000);

    setTimeout(function skype() {
        $("#skype").css("display", "block");

    }, 8000);

});

$("#notibaixo").click(function noti2() {
    document.getElementById('titulonoti').innerHTML = "Versa";
    document.getElementById("noticlick2").style.visibility = "visible";
    openCity(event, 'noticlick', 4);

    $("#noticima").animate({right: '-350px'});
    $("#notibaixo").animate({right: '-350px'});

    setTimeout(function mail() {
        $(".mail").css("display", "block");

    }, 2000);

    setTimeout(function skype() {
        $("#skype").css("display", "block");

        var y = document.getElementById("skypesom");
        y.play();

    }, 8000);
});

////////////////////////////////////skype e diminuir/////////////////////////////////////
$("#desligar").click(function desligar() {
    console.log("ooooooi");
    $("#skype").css("visibility", "hidden");

    var x = document.getElementById("skypesom");
    x.pause();

    setTimeout(function diminuir() {
        $(".container").css("width", "70vw");
        $("div#tabs.row").css("width", "70%");

        $(".mail").css("margin-left", "35%");
        $(".mail").css("width", "40%");

        $("#video").css("margin-left", "30%");
        $("#video").css("width", "65%");
        $("#video").css("height", "280px");
        $(".video").css("top", "30px");




        $(".container").css("float", "right");
        $(".container").css("right", "0");
        $(".telemovel").css("visibility", "visible");

        var z = document.getElementById("telesom");
        z.play();

        console.log("dimi2");

    }, 4000);
});

$("#atender").click(function atender() {
    $("#atender").css("visibility", "hidden");
    $("#desligar").css("visibility", "hidden");
    document.getElementById("subSkype").innerHTML = "Sem ligação";

    var x = document.getElementById("skypesom");
    x.pause();

    setTimeout(function diminuir() {
        document.getElementById("skype").style.visibility = "hidden";
    }, 3000);
    setTimeout(function diminuir() {
        $(".container").css("width", "70vw");
        $("div#tabs.row").css("width", "70%");

        $(".mail").css("margin-left", "35%");
        $(".mail").css("width", "40%");

        $("#video").css("margin-left", "30%");
        $("#video").css("width", "65%");
        $("#video").css("height", "280px");
        $(".video").css("top", "30px");

        $(".container").css("float", "right");
        $(".container").css("right", "0");
        $(".telemovel").css("visibility", "visible");

        var x = document.getElementById("telesom");
        x.play();

        console.log("dimi2");

    }, 4000);
});


////////////////////////////////////chamada tele/////////////////////////////////////

$("#atendertele").click(function atendertele() {
    $("#rechamada").attr("src", "images/chamadaAct.png")
    $(".opçoes").css("visibility", "hidden");

    var x = document.getElementById("telesom");
    x.pause();

    var z = document.getElementById("voz");
    z.play();

    setTimeout(function terminarchamada() {
        $("#rechamada").attr("src", "images/chamadaterminada.png")

    }, 10000);

    setTimeout(function insta() {
        $("#rechamada").css("visibility", "hidden");
        $(".insta").css("visibility", "visible");
        $("#chat-window2").css("visibility", "visible");
        var vidinsta = document.getElementById("instavid");
        vidinsta.play();

        setTimeout(piscar(), 3000);


    }, 10000);

    setTimeout(function piscar() {
        document.getElementById('fizz').style.backgroundColor = "#FBEFAB";
        var count = 0;
        console.log("passou aqui");
        var x = document.getElementById("faceMen");
        x.play();

        function piscar2() {

            //esquanto esta na pagina wetube
            console.log("debug" + count + "  " + estado);

            if (estado != 2 && count == 0) {
                console.log(document.getElementById('fizz').style.backgroundColor);
                console.log("e aqui");

                if (document.getElementById("fizz").style.backgroundColor === "rgb(251, 239, 171)") {
                    document.getElementById('fizz').style.backgroundColor = "#A5FC67";
                    console.log("1");
                }
                else if (document.getElementById("fizz").style.backgroundColor === "rgb(165, 252, 103)") {
                    document.getElementById('fizz').style.backgroundColor = "#FBEFAB";
                    console.log("2");
                }
            }

            if (estado == 2) {
                console.log("parou");
                clearInterval(myVar);
                document.getElementById('fizz').style.backgroundColor = "#FBEFAB";

            }
        }

        var myVar = setInterval(piscar2, 500);


    }, 10000);
});

$("#desligartele").click(function desligartele() {
    $("#rechamada").attr("src", "images/chamadaperdida.png")
    $(".opçoes").css("visibility", "hidden");

    var x = document.getElementById("telesom");
    x.pause();

    setTimeout(function insta() {
        $("#rechamada").css("visibility", "hidden");
        $(".insta").css("visibility", "visible");
        $("#chat-window2").css("visibility", "visible");
        var vidinsta = document.getElementById("instavid");
        vidinsta.play();

    }, 5000);

    setTimeout(function piscar() {
        document.getElementById('fizz').style.backgroundColor = "#FBEFAB";
        var count = 0;
        console.log("passou aqui");
        var x = document.getElementById("faceMen");
        x.play();

        function piscar2() {

            //esquanto esta na pagina wetube
            console.log("debug" + count + "  " + estado);

            if (estado != 2 && count == 0) {
                console.log(document.getElementById('fizz').style.backgroundColor);
                console.log("e aqui");

                if (document.getElementById("fizz").style.backgroundColor === "rgb(251, 239, 171)") {
                    document.getElementById('fizz').style.backgroundColor = "#A5FC67";
                    console.log("1");
                }
                else if (document.getElementById("fizz").style.backgroundColor === "rgb(165, 252, 103)") {
                    document.getElementById('fizz').style.backgroundColor = "#FBEFAB";
                    console.log("2");
                }
            }

            if (estado == 2) {
                console.log("parou");
                clearInterval(myVar);
                document.getElementById('fizz').style.backgroundColor = "#FBEFAB";

            }
        }

        var myVar = setInterval(piscar2, 500);


    }, 5000);

});

////////////////////////////////////escolha quizz/////////////////////////////////////

$(".quizz1").click(function quizz1show() {
    console.log("aaawwwd");
    document.getElementById('tituloquizz').innerHTML = "Quizz 1";
    document.getElementById("quizz1").style.display = "block";
    document.getElementById("quizzindivi").style.visibility = "visible";
    openCity(event, 'quizzindi', 6);

    setTimeout( function () {
        var tv = document.getElementById("tv");
        tv.play();

    },2000);
});


$(".quizz2").click(function quizz2show() {
    console.log("aaawwwd");
    document.getElementById('tituloquizz').innerHTML = "Quizz 2";
    document.getElementById("quizz2").style.display = "block";
    document.getElementById("quizzindivi").style.visibility = "visible";
    openCity(event, 'quizzindi', 6);

    setTimeout( function () {
        var tv = document.getElementById("tv");
        tv.play();

    },2000);
});

$(".quizz3").click(function quizz3show() {
    console.log("aaawwwd");
    document.getElementById('tituloquizz').innerHTML = "Quizz 3";
    document.getElementById("quizz3").style.display = "block";
    document.getElementById("quizzindivi").style.visibility = "visible";
    openCity(event, 'quizzindi', 6);

    setTimeout( function () {
        var tv = document.getElementById("tv");
        tv.play();

    },2000);

});

////////////////////////////////////mail////////////////////////////////////
$("#closemail").click(function mail() {
    setTimeout(function () {

        if ($(".mail").css("display") === "block") {
            $(".mail").css("display", "none");
            console.log("aaqowqwoeqw");
        }
        else if ($(".mail").css("display") === "none") {
            $(".mail").css("display", "block");
            console.log("aaqowqwoeqw2");

        }

    }, 200)


});


////////////////////////////////////quizz////////////////////////////////////
$("#men2").click(function mensagemsimul() {

    $("#quizz").css("visibility", "visible");
    openCity(event, 'quizzes', 5);
    $("#men2").attr("src", "images/menlida2.png")


});


////////////////////////////////////resposta quizz e mensagem////////////////////////////////////

$(".bolo").click(function mensagemsimul() {
var count= 0;
    $("#resquizz").css("display", "block");
    $("#quizz1").css("display", "none");
    $("#quizz2").css("display", "none");
    $("#quizz3").css("display", "none");

    setTimeout(function piscar() {
        document.getElementById('fizz').style.backgroundColor = "#FBEFAB";
        var count = 0;
        console.log("passou aqui");
        var x = document.getElementById("faceMen");
        x.play();

        function piscar2() {
            //esquanto esta na pagina wetube
            console.log("debug" + count + "  " + estado);

            if (estado != 2 && count == 0) {
                console.log(document.getElementById('fizz').style.backgroundColor);
                console.log("e aqui");

                if (document.getElementById("fizz").style.backgroundColor === "rgb(251, 239, 171)") {
                    document.getElementById('fizz').style.backgroundColor = "#A5FC67";
                    console.log("1");
                }
                else if (document.getElementById("fizz").style.backgroundColor === "rgb(165, 252, 103)") {
                    document.getElementById('fizz').style.backgroundColor = "#FBEFAB";
                    console.log("2");
                }
            }

            if (estado == 2) {
                console.log("parou");
                clearInterval(myVar);
                document.getElementById('fizz').style.backgroundColor = "#FBEFAB";

            }
        }

        var myVar = setInterval(piscar2, 500);


    }, 3000);


    $("#fizz").click(function mensagemsimul() {

        if(count === 0) {
            $("#chatvideo").css("display", "block");
            $("#chatmen").css("display", "none");
            $(".insta").css("display", "none");
            $("#men1").css("display", "none");
            $(".mensagemtele").css("visibility", "visible");


            var vid = document.getElementById("chatvideo");
            var vid2 = document.getElementById("mensagemtele");

            vid.play();
            vid2.play();
            count++;
        }
        console.log("aaasfinfognwogw aaaa");

        setTimeout(function showtinder() {
            $(".mensagemtele").css("visibility", "hidden");

            $(".tinder").css("display", "block");
            $(".opçoes").css("visibility", "visible");

        }, 11000)

    });

});


////////////////////////////////////tinder/////////////////////////////////////
var count = 0;

$("#sim").click(function sim() {
    var tin = document.getElementById("tinderC");
    tin.play();

    if (count === 0) {
        $("#tinderimage").attr("src", "images/tinder2.png")
    }
    if (count === 1) {
        $("#tinderimage").attr("src", "images/tinder3.png")
    }
    if (count === 2) {
        $("#tinderimage").attr("src", "images/tinder4.png")
        $("#sim").css("display", "none");
        $("#nao").css("display", "none");

        var t = document.getElementById("tinderM");
        t.play();

        setTimeout(function candy() {

            $("#candy").css("visibility", "visible");
            var vid = document.getElementById("candy");
            vid.play();

            var candy = document.getElementById("candyM");
            candy.play();
            $("#memesdiv").css("display", "block");

            setInterval(setImage, 1000);
            notiFinla();

            /*var memeS = document.getElementById("memeS");
            memeS.play();*/
        }, 3000);

        /*setTimeout (function delay(){
            $("#memesdiv").css = ("display", "block");
            setInterval(setImage, 1000);}

         ),4000;*/

        setTimeout(function final() {
            //window.location.pathname = "projeto4/fim.html/";
            window.location.href = "fim.html/";

        }, 20000);


    }
    count++;
});

$("#nao").click(function nao() {
    var tin = document.getElementById("tinderC");
    tin.play();

    if (count === 0) {
        $("#tinderimage").attr("src", "images/tinder2.png")
    }
    if (count === 1) {
        $("#tinderimage").attr("src", "images/tinder3.png")
    }
    if (count === 2) {
        $("#tinderimage").attr("src", "images/tinder4.png")
        $("#sim").css("display", "none");
        $("#nao").css("display", "none");

        var t = document.getElementById("tinderM");
        t.play();

        setTimeout(function candy() {

            $("#candy").css("visibility", "visible");
            var vid = document.getElementById("candy");
            vid.play();

            var candy = document.getElementById("candyM");
            candy.play();
            $("#memesdiv").css("display", "block");

            setInterval(setImage, 1000);
            notiFinla();

            /*var memeS = document.getElementById("memeS");
            memeS.play();*/
        }, 3000);

        /*setTimeout (function delay(){
            $("#memesdiv").css = ("display", "block");
            setInterval(setImage, 1000);}

         ),4000;*/

        setTimeout(function final() {
            //window.location.pathname = "projeto4/fim.html/";
            window.location.href = "fim.html/";

        }, 20000);


    }
    count++;
});


//////////////////////////video wetube posiçao//////////////////
$(".container").scroll(function (event) {
    var scroll = 200 + ($("#wetube").offset()).top;
    $(".video").css("top", scroll);
    //console.log("startTop: " + startTop);
    // console.log("offset: " + ($("#wetube").offset()).top);
    // console.log("scroll: " + scroll);
    //$('.video').css({top: scroll});
    // Do something
});

///////////////////////////////////memes///////////////////////////////////
var imlocation = "MEMES/";

var image_number = 0;

function ImageArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++) {
        this[i] = ' ';
    }
}

image = new ImageArray(23);
image[0] = '0.jpg';
image[1] = '1.jpg';
image[2] = '2.jpg';
image[3] = '3.jpg';
image[4] = '4.jpg';
image[5] = '5.jpg';
image[6] = '6.jpg';
image[3] = '3.jpg';
image[4] = '4.jpg';
image[5] = '5.jpg';
image[6] = '6.jpg';
image[7] = '7.jpg';
image[8] = '8.jpg';
image[9] = '9.jpg';
image[10] = '10.jpg';
image[11] = '11.jpg';
image[12] = '12.jpg';
image[13] = '13.jpg';
image[14] = '14.jpg';
image[15] = '15.jpg';
image[16] = '16.jpg';
image[17] = '17.jpg';
image[18] = '18.jpg';
image[19] = '19.jpg';
image[20] = '20.jpg';
image[21] = '21.jpg';
image[22] = '22.jpg';

let nImages = 0;


function randomimage() {
    console.log(ImageArray);
    image_number = Math.floor(image.length * Math.random());
    console.log("aasasadasdasd");
    console.log(image_number);
    return image_number;
}


function setImage() {
    var positionX = 1200 * Math.random();
    var positionY = 500 * Math.random();
    var imageId = "image_"+nImages;

    document.getElementById("memesdiv").innerHTML += " <img class='meme' id='"+imageId+"' style='width: 20%; " +
        "position: absolute' src='" + imlocation + randomimage() + ".jpg" + "'>";
    nImages++;

    var memeS = document.getElementById("memeS");
    memeS.play();


    $("#"+imageId).css("left", positionX + "px");
    $("#"+imageId).css("top", positionY + "px");


}

////////////////////////////////notificaçoes////////////////////////////
function notiFinla() {
    var count = 1;
    setInterval( function notiApa() {
        $("#notifi"+count).animate({right: '20px'});

        var n = document.getElementById("noti");
        n.play();

        count++;
    },1000)

}


