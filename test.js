
function CalculoFiguras()
{
  var val = document.getElementById('s_cust').value;
  if(val.trim() != ""){
      var opts = document.getElementById('customer_list').childNodes;
      for (var i = 0; i < opts.length; i++) {
        if(opts[i].value !== undefined){
          if (opts[i].value === val) {
            console.log(opts[i].value);
            console.log(val);
            //Ejecutando la logica de acuerdo a la figura
            if(opts[i].value == 1){
                var areaTrian, baseT, alturaT;
                baseT = parseInt(prompt("Coloca la base"));
                alturaT = parseInt(prompt("Coloca la altura"));
                areaTrian = (baseT * alturaT)/2;
                document.getElementById('cust_name').innerText = "El area de un triangulo es: " + areaTrian +  " " + opts[i].innerText;
            }
            if(opts[i].value == 2){
                var radioC, areaCir;
                radioC = parseInt(prompt("Por favor ingrese el radio del circulo"));
                areaCir = Math.PI * radioC * radioC;
                document.getElementById('cust_name').innerText = "El area de un circulo es: " + areaCir +  " " + opts[i].innerText;
            }
            if(opts[i].value == 3){
                var baseRe, alturaRe, areaRec;
                baseRe = parseInt(prompt("Coloca la base del rectangulo"));
                alturaRe = parseInt(prompt("Coloca la altura del rectangulo"));
                areaRec = baseRe * alturaRe;
                document.getElementById('cust_name').innerText = "El area de un circulo es: " + areaRec +  " " + opts[i].innerText;
            }
            if(opts[i].value == 4){
                var ladoRo, diag_unoRo, diag_dosRo, areaRom;
                ladoRo = parseInt(prompt("Por favor ingrese el lado del rombo"));
                diag_unoRo = parseInt(prompt("Por favor ingrese la diagonal uno del rombo"));
                //Diagonal dos 
                diag_dosRo = (4*(ladoRo**2) - diag_unoRo**2)**0.5;
                areaRom  = 0.5 * diag_unoRo * diag_dosRo;
                document.getElementById('cust_name').innerText = "El area de un rombo cuya diagonal y lado estan dados es: " + areaRom +  " " + opts[i].innerText;
            }
            if(opts[i].value == 5){
                var xbasmayor, xbasmenor, xaltura, xarea;
                xbasmayor = parseInt(prompt("Por favor ingrese la base mayor del trapecio"));
                xbasmenor = parseInt(prompt("Por favor ingrese la base menor del trapecio"));
                xaltura = parseInt(prompt("Por favor ingrese la altura del trapecio"));
                xarea = (xbasmayor+xbasmenor)*xaltura/2;
                document.getElementById('cust_name').innerText = "El area de un trapecio es: " + xarea +  " " + opts[i].innerText;
            }
            break;
          }
        }
      }
    }else{
        document.getElementById('cust_name').innerText = "No ha seleccionado ninguna figura";
    }
}




function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

function bounce(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

ball.onclick = function() {

  let to = field.clientHeight - ball.clientHeight;

  animate({
    duration: 2000,
    timing: makeEaseOut(bounce),
    draw(progress) {
      ball.style.top = to * progress + 'px'
    }
  });


};



function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}