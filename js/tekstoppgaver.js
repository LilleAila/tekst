var personer = [{
        navn: "Per",
        pronomen: "han"
    },
    {
        navn: "Kåre",
        pronomen: "han"
    },
    {
        navn: "Pål",
        pronomen: "han"
    },
    {
        navn: "Espen",
        pronomen: "han"
    },
    {
        navn: "Donald",
        pronomen: "han"
    },
    {
        navn: "Pavel",
        pronomen: "han"
    },
    {
        navn: "Martine",
        pronomen: "hun"
    },
    {
        navn: "Tiril",
        pronomen: "hun"
    },
    {
        navn: "Kristina",
        pronomen: "hun"
    },
    {
        navn: "Lana",
        pronomen: "hun"
    },
    {
        navn: "Kira",
        pronomen: "hun"
    }
]

var ting = ["en pizza", "en taco", "en baguett", "en kjøttdeig", "en sjokolade", "en brus", "en agurk", "en gulrot", "en banan", "et eple", "en pakke med druer", "et ostehorn", "en tomat", "en pose med chips"];

var svarboks = '<input type="number" class="svarboks" title="Svar" />';

var typeOppgave, typerOppgave;

var person = personer[0],
    pengerStart, penger1, penger2, ting1, ting2, svar, personer1;

function random(from, to) {
    let from1 = to - from;
    return Math.floor(Math.random() * from1) + from;
}

function randomItem() {
    return ting[Math.floor(Math.random() * ting.length)];
}

function randomPerson() {
    return personer[Math.floor(Math.random() * personer.length)];
}

function randomFromArr(arr) {
    return arr[random(0, arr.length)];
}

function randomFromObj(obj) {
    return obj[randomFromArr(Object.keys(obj))];
}

function cfl(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

var tekstoppgaver = {
    minus: [{
        func: function () {
            person = randomPerson();

            pengerStart = random(30, 80);
            penger1 = random(1, pengerStart / 2);
            penger2 = random(1, pengerStart - penger1);
            pengerStart += 2;

            ting1 = randomItem();
            ting2 = randomItem();

            svar = pengerStart - penger1 - penger2;
            svarboks = '<input type="number" class="svarboks w2l" title="Svar" id="svarboks1" tabindex="0" />';

            return {
                text: `${person.navn} har ${pengerStart} kr.<br/>${cfl(person.pronomen)} kjøper ${ting1} for ${penger1} kr og ${ting2} for ${penger2} kr.<br/>Hvor mange kroner har ${person.pronomen} igjen?`,
                svar: `${cfl(person.pronomen)} har ${svarboks} kr igjen.`,
                riktig: svar
            }
        },
        svarFunc: function () {
            if ($("#svarboks1").val() == oppgave.riktig) {
                feil()
            } else {
                feil();
            }
        }
    }],
    pluss: [{
        func: function () {
            person = randomPerson();

            pengerStart = random(10, 60);
            penger1 = random(5, 35);

            svar = pengerStart + penger1;
            svarboks = '<input type="number" class="svarboks w2l" title="Svar" id="svarboks1" tabindex="0" />';

            return {
                text: `${person.navn} har ${pengerStart} kr.<br/>${cfl(person.pronomen)} får ${penger1} kr til bursdagen.<br/>Hvor mange kroner har ${person.pronomen}?`,
                svar: `${cfl(person.pronomen)} har ${svarboks} kr igjen.`,
                riktig: svar
            }
        },
        svarFunc: function () {
            if ($("#svarboks1").val() == oppgave.riktig) {
                riktig();
            } else {
                feil();
            }
        }
    }, {
        func: function () {
            person = randomPerson();

            penger1 = random(5, 35);
            penger2 = random(5, 35);

            svar = penger1 + penger2;
            svarboks = '<input type="number" class="svarboks w2l" title="Svar" id="svarboks1" tabindex="0" />';

            return {
                text: `${person.navn} har bursdag.<br/>${cfl(person.pronomen)} får ${penger1} kr i familiebesøket og ${penger2} kr i  klassebesøket.<br/>Hvor mange penger får ${person.pronomen}?`,
                svar: `${cfl(person.pronomen)} får ${svarboks} kr til bursdagen.`,
                riktig: svar
            }
        },
        svarFunc: function () {
            if ($("#svarboks1").val() == oppgave.riktig) {
                riktig();
            } else {
                feil();
            }
        }
    }],
    ganging: [{
        func: function () {
            person = randomPerson();

            penger1 = random(1, 10);
            personer1 = random(2, 10);

            svar = penger1 * personer1;
            svarboks = '<input type="number" class="svarboks w2l" title="Svar" id="svarboks1" tabindex="0" />';

            return {
                text: `${person.navn} skal gi penger til ${personer1} personer.<br/>Alle får ${penger1} kr hver.<br/>Hvor mange penger gir ${person.pronomen}?`,
                svar: `${cfl(person.pronomen)} gir ${svarboks} kr.`,
                riktig: svar
            }
        },
        svarFunc: function () {
            if ($("#svarboks1").val() == oppgave.riktig) {
                riktig();
            } else {
                feil()
            }
        }
    }],
    // finnDenUkjentePluss: [],
    // finnDenUkjenteMinus: [],
    // finnDenUkjenteGanging: [],
    // klokke: [],
    // tid: [],
    // fart: [],
    // lengde: [],
    // volum: [],
    // areal: [],
    // overflate: [],
    // omkrets: []
}

var oppgave, oppgaveSvar;

function velgOppgave() {
    let oppgaveObj = randomFromArr(randomFromObj(tekstoppgaver));
    oppgave = oppgaveObj.func();
    oppgaveSvar = oppgaveObj.svarFunc;

    let oppgavTxt = oppgave["text"].split("<br/>");
    let oppgavArr = [];
    for (var i = 0; i < oppgavTxt.length; i++) {
        oppgavArr.push('<span class="oppgaveTxt">' + oppgavTxt[i] + '</span>');
    }

    let oppgavText = oppgavArr.join("");
    oppgave["text"] = oppgavText;

    //--\\

    let oppgavSvar = oppgave["svar"].split("<br/>");
    let oppgavSvarArr = [];
    for (var i = 0; i < oppgavSvar.length; i++) {
        oppgavSvarArr.push('<span class="oppgaveSvar">' + oppgavSvar[i] + '</span>');
    }

    let oppgavSvaret = oppgavSvarArr.join("");
    oppgave["svar"] = oppgavSvaret;

    $(".text").html(oppgave.text);
    $(".svar").html(oppgave.svar);
    // resizeText();
}

velgOppgave();
// console.log(oppgave);
// console.log(oppgaveSvar);

$("#svarknapp").click(function () {
    oppgaveSvar();
});

var timeout;

function shake(el, times = 1) {
    clearTimeout(timeout);
    el.addClass("shake");
    timeout = setTimeout(function () {
        el.removeClass("shake");
    }, times * 500);
}

var showSnackbarTime;

function showSnackbar() {
    clearTimeout(showSnackbarTime);
    $("#snackbar").addClass("show");
    showSnackbarTime = setTimeout(function () {
        $("#snackbar").removeClass("show");
    }, 1500);
}

function feil() {
    $("#snackbar").text("Feil");
    $("#snackbar").removeClass("riktig");
    $("#snackbar").addClass("feil");
    // shake($("#svarknapp"), 2);
    animateCSS('.appdiv', 'shakeX');
    showSnackbar();
}

function riktig() {
    $("#snackbar").text("Riktig");
    $("#snackbar").removeClass("feil");
    $("#snackbar").addClass("riktig");
    animateCSS(".appdiv", "heartBeat")
    showSnackbar();
    setTimeout(function () {
        animateCSS(".appdiv", "pulse");
        velgOppgave();
    }, 1500);
}

const animateCSS = (element, animation, prefix = 'animate__') => {
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = document.querySelector(element);

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {
            once: true
        });
    });
}

// $(".openBtn").click(function () {
//     $(".openBtn span").toggleClass("rot180");
// });

$(".openSelect").change(function () {
    typerOppgave = $(this).val();
    // console.log(typerOppgave);
});

$(function () {
    animateCSS(".appdiv", "zoomIn");
    animateCSS(".openSelect", "backInDown");
    animateCSS("#svarknapp", "fadeInRight");
});