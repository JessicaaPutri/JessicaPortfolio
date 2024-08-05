function button1(){
    'use strict';
    refresh()
    var redBox = document.getElementById('red');
    var blueIn = document.getElementById('blueIn');

    blueIn.style.visibility = 'visible';
    blueIn.style.marginLeft = '20px';
    blueIn.style.marginTop = '20px';
    redBox.style.visibility = 'visible';
}

function button2(){
    'use strict';
    refresh()
    var redBox = document.getElementById('red');
    var blueBottom = document.getElementById('blueBottom');

    redBox.style.visibility = 'visible';
    blueBottom.style.visibility = 'visible';
}

function button3(){
    'use strict';
    refresh()
    var redBox = document.getElementById('red');
    var blueIn = document.getElementById('blueIn');

    redBox.style.visibility = 'visible';
    blueIn.style.visibility = 'visible';
    blueIn.style.marginLeft = '630px';
}

function button4(){
    'use strict';
    refresh()
    var redBox = document.getElementById('red');
    var blueBottom = document.getElementById('blueBottom');

    redBox.style.visibility = 'visible';
    blueBottom.style.visibility = 'visible';
    redBox.style.position = 'absolute';
    blueBottom.style.position = 'relative';
    redBox.style.marginLeft = '330px';
    redBox.style.marginTop = '20px';
}

function button5(){
    'use strict';
    refresh()
    var redBox = document.getElementById('red');
    var blueIn = document.getElementById('blueIn');

    redBox.style.visibility = 'visible';
    blueIn.style.visibility = 'visible';
    redBox.style.position = 'relative';
    blueIn.style.position = 'absolute';
    blueIn.style.marginLeft = '255px';
    blueIn.style.marginTop = '20px';
}

function button6(){
    'use strict';
    refresh()
    var greenBox = document.getElementById('green');
    var redBox = document.getElementById('red');
    var blueIn = document.getElementById('blueIn');

    redBox.style.visibility = 'visible';
    blueIn.style.visibility = 'visible';
    greenBox.style.visibility = 'visible';
    greenBox.style.margin = '10px';
    redBox.style.margin = '10px';
    blueIn.style.margin = '10px';
}

function refresh(){
    'use strict'

    const redBox = document.getElementById('red');
    const blueBottom = document.getElementById('blueBottom');
    const blueIn = document.getElementById('blueIn');
    const greenBox = document.getElementById('green');

    redBox.style.visibility = 'hidden'; 
    blueBottom.style.visibility = 'hidden'; 
    blueIn.style.visibility = 'hidden';
    greenBox.style.visibility = 'hidden';
}

function init(){
    'use strict';
    document.getElementById('button1').addEventListener("click", button1);
    document.getElementById('button2').addEventListener("click", button2);
    document.getElementById('button3').addEventListener("click", button3);
    document.getElementById('button4').addEventListener("click", button4);
    document.getElementById('button5').addEventListener("click", button5);
    document.getElementById('button6').addEventListener("click", button6);
}
window.onload = init;

