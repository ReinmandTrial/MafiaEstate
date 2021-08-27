gsap.registerPlugin(MotionPathPlugin);
let car = document.querySelector("#car"),
    slide = document.querySelectorAll(".roadMap-slide"),
    pointText = document.querySelector("#pointText"),
    clickPosX,
    clickPosY,
    anchors1 = [
        {
            x: 0,
            y: 48.0044
        }, {
            x: 213,
            y: 47.0044
        }, {
            x: 242,
            y: 71.0044
        }, {
            x: 272,
            y: 71.0044
        }, {
            x: 291,
            y: 93.0044
        }, {
            x: 326,
            y: 93.0044
        }, {  //!!
            x: 357,
            y: 74.0044
        }, {
            x: 445.675,
            y: 74.0044
        }, {
            x: 508.675,
            y: 22.6836
        }, {
            x: 579.503,
            y: 22.6836
        }, {
            x: 657.029,
            y: 77.0044
        }, {
            x: 809,
            y: 170.647
        }, {
            x: 876.306,
            y: 128.947
        }, {
            x: 989.335,
            y: 128.947
        }, {
            x: 1176.99,
            y: 40.4253
        },{
            x: 1353.66,
            y: 40.4253
        },{
            x: 1396.09,
            y: 9.62354
        },{
            x: 1440,
            y: 9.62354
        }
    ], // anchor coordinates (feel free to change these if you want)

    lastIndexVal = 0,
    anchors2,
    rawPath,
    path,
    path2,
    circlePoint,
    curIndex = 0,
    drawPath,
    clickedPosX,
    clickedPosY,
    carPosX = 7,
    reversed = false;

function init() {
    lastIndexVal = lastIndex();
    rawPath = MotionPathPlugin.arrayToRawPath(anchors1, {
        curviness: 0
    });

    /*    circlePointt = document.querySelectorAll('.circlePoint');
        circlePointHover = document.querySelectorAll('.circlePointHover');

        gsap.from(circlePointHover,{
            opacity: 0,
            duration: 2
        });

        gsap.utils.toArray(circlePointt).forEach(item => {
            let hover = gsap.to(circlePointHover, {scale: 3, duration: 1.5, paused: true, ease: "power1.inOut"});
            item.addEventListener("mouseenter", () => hover.play());
            item.addEventListener("mouseleave", () => hover.reverse());
        });*/

}

function anchorGenerate(a, b) {
    if(a!=b) {
        if (a > b) {
            anchors2 = anchors1.filter((current, index) => index >= b - 1 && index < a);
            anchors2.reverse();
            reversed = true;
        } else {
            anchors2 = anchors1.filter((current, index) => index >= a - 1 && index < b);
            reversed = false;
        }
        return anchors2;
    }
}

function clickPosition(item) {
    clickPosX = item.getAttribute("cx");
    clickPosY = item.getAttribute("cy");
    //console.log("clickPosX", "clickPosY");
    //console.log(clickPosX, clickPosY);
    return clickPosX, clickPosY;
    //let pos = gsap.getProperty(car,"x");
}

function lastIndex() { //возвращает индекс в массиве, где находилась машина
    anchors1.forEach(function (item, i, arr) {
        if (clickPosX == item.x && clickPosY == item.y) {
            lastIndexVal = i;
        }
    });
    return lastIndexVal;

}
init();

// jump to a specific anchor (animate the tween to that progress value)
function goToAnchor(index) {
    curIndex = index;
    gsap.to(drawPath, {
        //progress: progressArray[curIndex],
        overwrite: true,
        duration: 2
    });

    if(reversed) {
        gsap.set(car,{scaleY:-1, scaleX:-1});
    } else {
        gsap.set(car,{scaleY:1, scaleX:1});
    }

    gsap.to(car, {
        duration: 4,
        ease: "power1.inOut",
        motionPath: {
            path: path2,
            align: path2,
            autoRotate: true,
            alignOrigin: [0.5, 1],
            //offsetX: -100,
            offsetY: -4
        }
    });
}

const svg = document.querySelector('#svg');
svg.addEventListener('click', e => {
    const {clientX, clientY} = e;
    if (e.target.tagName.toLowerCase() == 'circle') {

        const item = e.target;
        clickPosition(item);

        lastIndex();

        if(carPosX != lastIndexVal + 1){
            gsap.to(pointText , {
                x: clickPosX - 285,
                y: clickPosY - 70,
                ease: "power1.inOut",
                alignOrigin: [0.5, 0.5],
                duration: 4
            });

            let pathNew = document.querySelector('.pathNew');
            let circlePointNew = document.querySelector('.circlePointNew');
            if(pathNew) {document.querySelector("#svg").removeChild(pathNew);}
            if(circlePointNew) {document.querySelector("#svg").removeChild(circlePointNew);}

            anchors2 = anchorGenerate(carPosX, lastIndexVal + 1);
            //anchors2 = anchorGenerate(5, 8);

            rawPath2 = MotionPathPlugin.arrayToRawPath(anchors2, {
                curviness: 0
            });
            path2 = buildPath(anchors2, rawPath2);
            goToAnchor();

            carPosX = lastIndexVal + 1;
            slideIndex = carPosX - 7;

            slide.forEach(function (item) {
                item.classList.remove('active');
                if (slide[slideIndex] ){
                    slide[slideIndex].classList.add('active');
                }
            });
        }
    }
});

// -- setup ---
function buildPath(anchors, rawPath) {

    let svg = document.querySelector("#svg"),
        //pathTemplate = createSVG("path", svg, {d: MotionPathPlugin.rawPathToString(rawPath)}),
        path = createSVG("path", svg, {
            d: MotionPathPlugin.rawPathToString(rawPath),
            //filter: "url(#filter_path)",
            class: "pathNew"
        }),
        i;
        gsap.set(path, {
            stroke: "#3BE5B8",
            fill: "none"
        });

    for (i = 0; i < anchors.length; i++) {
        createSVG("circle", svg, {
            cx: anchors[i].x,
            cy: anchors[i].y,
            r: 6,
            fill: "transparent",
            class: "circlePointNew"
        });
    }
    return path;
}

function createSVG(type, container, attributes) {
    var element = document.createElementNS("http://www.w3.org/2000/svg", type),
        reg = /([a-z])([A-Z])/g,
        p;
    for (p in attributes) {
        element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
    }
    if (typeof (container) === "string") {
        container = document.querySelector(container);
    }
    container.appendChild(element);
    return element;
}