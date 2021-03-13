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

var vanskelighetsgrader = [];

var oppgObj = {};

var vanskArray = [],
    oppgObj = {};

var oppgArr;

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
    lettere: {
        pluss: [{
            func: function () {
                person = randomPerson();

                pengerStart = random(1, 6) * 10;
                penger1 = random(1, 9);

                svar = pengerStart + penger1;
                svarboks = '<input type="number" class="svarboks w2l" title="Svar" id="svarboks1" tabindex="0" />';

                return {
                    text: `${person.navn} har ${pengerStart} kr.<br/>${cfl(person.pronomen)} får ${penger1} kr til bursdagen.<br/>Hvor mange kroner har ${person.pronomen}?`,
                    svar: `${cfl(person.pronomen)} har ${svarboks} kr.`,
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
        }]
    },
    lett: {
        minus: [{
            func: function () {
                person = randomPerson();

                pengerStart = random(30, 80);
                penger1 = random(1, pengerStart - 5);

                ting1 = randomItem();

                svar = pengerStart - penger1;
                svarboks = '<input type="number" class="svarboks w2l" title="Svar" id="svarboks1" tabindex="0" />';

                return {
                    text: `${person.navn} har ${pengerStart} kr.<br/>${cfl(person.pronomen)} kjøper ${ting1} for ${penger1} kr.<br/>Hvor mange kroner har ${person.pronomen} igjen?`,
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
        }]
    },
    middels: {
        minus: [{
            func: function () {
                person = randomPerson();

                pengerStart = random(30, 80);
                penger1 = random(1, pengerStart / 2);
                penger2 = random(1, pengerStart - penger1);
                pengerStart += 2;

                ting1 = randomItem();
                ting2 = randomItem();

                svar = pengerStart - (penger1 + penger2);
                svarboks = '<input type="number" class="svarboks w2l" title="Svar" id="svarboks1" tabindex="0" />';

                return {
                    text: `${person.navn} har ${pengerStart} kr.<br/>${cfl(person.pronomen)} kjøper ${ting1} for ${penger1} kr og ${ting2} for ${penger2} kr.<br/>Hvor mange kroner har ${person.pronomen} igjen?`,
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
                    svar: `${cfl(person.pronomen)} har ${svarboks} kr.`,
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

                penger1 = random(50, 100);
                penger2 = random(50, 100);

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

                penger1 = random(1, 10) * 10;
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
    },
    vanskelig: {
        ganging: [{
            func: function () {
                person = randomPerson();

                penger1 = random(1, 20);
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
        }]
    },
    vanskeligere: {
        ganging: [{
            func: function () {
                person = randomPerson();

                penger1 = random(0, 20);
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
        }]
    }
}

var oppgave, oppgaveSvar;

function velgOppgave() {
    if ($(".checked")[0] || $(".checked").length) {
        $("#svarknapp").removeClass("hide");
        // let oppgaveObj = randomFromArr(randomFromObj(tekstoppgaver.middels));
        let randFromOppgArr = randomFromArr(vanskArray);
        let oppgaveObj = randomFromArr(tekstoppgaver[randFromOppgArr][randomFromArr(oppgObj[randFromOppgArr])]);

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

        if (!$(".openDiv").hasClass("showOpenDiv")) {
            $("#svarboks1").focus();
        }
    } else {
        // alert("Du må velge minst en oppgavetype!");
        $(".text").html('<span class="oppgaveTxt">Du må velge minst en oppgavetype!</span>');
        $(".svar").html('');
        $("#svarknapp").addClass("hide");
        return;
    }
}

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

$(".openBtn").click(function () {
    $(".openBtn").toggleClass("rot180");
    $(".openDiv").toggleClass("showOpenDiv");
    animateCSS(".openDiv", "backInDown");
    if (!$(".openDiv").hasClass("showOpenDiv")) {
        $("#svarboks1").focus();
    }
});

$(function () {
    animateCSS(".appdiv", "zoomIn");
    animateCSS("#svarknapp", "fadeInRight");
    animateCSS(".openBtn", "backInDown");
});

function optgroup(txt = "add text") {
    return `<li class="group-title">${txt}</li>`;
}

function option(txt = "add text", val = "add value") {
    return `<li data-text="${txt}" data-value="${val}"><a>${txt}</a></li>`;
}

var optList = ".option-list";

$(function () {
    oppgArr = Object.keys(tekstoppgaver);
    // console.log(oppgArr);

    for (var i = 0; i < oppgArr.length; i++) {
        let ee = tekstoppgaver;
        // console.log("ee", ee);
        let eee = ee[oppgArr[i]];
        // console.log("eee", eee);
        let eeee = Object.keys(eee);
        // console.log("eeee", eeee);
        let oppgArray = eeee;
        // console.log(tekstoppgaver[oppgArr[i]]);
        // console.log("oppgArray", oppgArray);
        for (var o = 0; o < oppgArray.length; o++) {
            //$(`.${oppgArr[i]}`).append(`<li class="li"><input class="cbox" type="checkbox" id="${ids}" value="${oppgArr[i]}_${oppgArray[o]}"><label class="label" for="${ids}">${oppgArray[o]}</label></li>`);
            $(`.${oppgArr[i]}`).append(`<label class="tgl"><input type="checkbox" class="cbox checked" checked id="${oppgArr[i]}_${oppgArray[o]}" onclick="$(this).toggleClass('checked');clickCbox()" /><span>${cfl(oppgArray[o])}</span></label>`)
            // console.log(oppgArray[o]);
        }
        // console.log(oppgArr[i]);
    }

    clickCbox();
});

function clickCbox() {
    oppgObj = {};
    vanskArray = [];

    for (var i = 0; i < oppgArr.length; i++) {
        oppgObj[oppgArr[i]] = [];
    }

    $(".cbox").each(function (index) {
        if ($(".checked").eq(index).attr("id") !== undefined) {
            let splitTxt = $(".checked").eq(index).attr("id").split("_")
            // oppgArray.push(splitTxt[1]);
            oppgObj[splitTxt[0]].push(splitTxt[1]);
            vanskArray.push(splitTxt[0]);
        }
    });
    console.log("Vanskelighetsgrader:", vanskArray, "Oppgavetyper:", oppgObj);

    velgOppgave();
}
