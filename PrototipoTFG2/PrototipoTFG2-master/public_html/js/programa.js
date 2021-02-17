

//-------- RELOJ ---------

(function () {
    var actualizarHora = function () {
        var fecha = new Date(),
                horas = fecha.getHours(),
                ampm,
                minutos = fecha.getMinutes(),
                segundos = fecha.getSeconds(),
                diaSemana = fecha.getDay(),
                dia = fecha.getDate(),
                mes = fecha.getMonth(),
                year = fecha.getFullYear();

        var pHoras = document.getElementById('horas'),
                pAMPM = document.getElementById('ampm'),
                pMinutos = document.getElementById('minutos'),
                pSegundos = document.getElementById('segundos'),
                pDiaSemana = document.getElementById('diaSemana'),
                pDia = document.getElementById('dia'),
                pMes = document.getElementById('mes'),
                pYear = document.getElementById('year');

        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana];
        document.getElementById('diaTitulo').innerHTML = semana[diaSemana];
        pDia.textContent = dia;
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }

        if (horas == 0) {
            horas = 12;
        }

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };
    actualizarHora();

    var intervalo = setInterval(actualizarHora, 1000);

}())


//-------- PROGRAMA ----------

arrayIron = ["4 set shoulder press,4 set chest press,4 sets lateral raises,4 sets triceps",
    "4 sets alt biceps curls, 4 sets upright row, 4 sets deadlifts, 4 sets shrugs, 4 sets bent over rows, 4 sets bent over flys",
    "Dia de descanso",
    "4 sets goblet squats,4 sets forward lunges,4 sets silide lunges,4 sets calf raises",
    "4 sets sit-ups,4 sets sitting twists,4 sets leg raises,4 set flutter kicks"];

arrayMilitaryFit = ["20 push-ups,20 shoulder taps,20 count plank holdm 20 jumping lunges,20 knee-ins + twist, 20 raised leg circles,20 up and down planks",
    "squat hold, plank hold, push-up hold, single leg squat hold, one arm plank hold, one arm side plank hold",
    "Dia de descanso",
    "20 push-ups,5 close grup push-ups,5 wide grip push-ups,20 back extensions,20 count hold,20 upward dog stretches,20 raised leg push-ups,5 power push-ups,5 clapping push-ups",
    "30 seconds high knees,30 seconds push up,30 seconds jumping lunges,30 seconds climbers,30 seconds high knees,30 seconds shoulder taps,30 seconds jump squats,30 seconds plank walk-outs"];

arrayBoxerPrime = ["1 munute jump rope,1 minute push ups + jab + cross,1 minute jab + cross,1 minute push-ups, 1minute speed bag punches",
    "5 minutes shadowboxing,40 squats,20 seconds squat hold,40 basic burpees",
    " 20 sit-ups,20 knee-ins + twist, 10 butt-ups,20 sit-ups,20 flutter kicks,10 scissors,20 sit-ups,20 sitting twists,10 leg raises",
    "",
    "Drill 1: 4 push-ups + jab + cross + jab + cross,Drill 2: 4 push-ups + jab + hook,Drill 3: 10 push-ups + 40 jabs,Drill 4: 10 push-ups + 40 hooks,Drill 5: 10 push-ups + 10 squats + hook,Drill 6: 30 push-ups + 1 min jab-cross"];

function seleccionarPrograma() {
    let programas = document.getElementById('programas');
    let programa = programas.value;
    document.getElementById('tituloPrograma').innerText = programa;

    var fecha = new Date();
    var dia = fecha.getDay();
    
    elegirPrograma(programa, dia);

}


function elegirPrograma(dato1, dato2) {

    let arrayElegido = null;

    if (dato1 == "Iron Man") {
        arrayElegido = arrayIron;
    } else if (dato1 == "Military Fit") {
        arrayElegido = arrayMilitaryFit;
    } else if (dato1 == "Boxer Prime") {
        arrayElegido = arrayBoxerPrime;
    }
    console.log(arrayElegido);
    elegirDia(dato2,arrayElegido);
     
}

function elegirDia(numero,array) {
    switch (numero) {
        case 0:
            console.log('Hoy es domingo');
            document.getElementById('tablaEjercicios').innerText = "No hay ejercicios programados para hoy";
            break;
        case 1:
            console.log('Hoy es lunes');
            arrayLunes = array[0];
            lunesListado = arrayLunes.split(",");
            console.log(lunesListado);

            var resultado = document.getElementById("tablaEjercicios");
            resultado.innerHTML = "";

            for (let i = 0; i < lunesListado.length; i++) {
                let elemento = document.createElement("li");
                let contenido = document.createTextNode(lunesListado[i]);
                elemento.appendChild(contenido);
                console.log(elemento);
                document.getElementById('tablaEjercicios').appendChild(elemento);
            }
            break;
        case 2:
            console.log('Hoy es martes');
            arrayMartes = array[1];
            martesListado = arrayMartes.split(",");

            var resultado = document.getElementById("tablaEjercicios");
            resultado.innerHTML = "";

            for (let i = 0; i < martesListado.length; i++) {
                let elemento = document.createElement("li");
                let contenido = document.createTextNode(martesListado[i]);
                elemento.appendChild(contenido);
                console.log(elemento);
                document.getElementById('tablaEjercicios').appendChild(elemento);
            }
            break;
        case 3:
            console.log('Hoy es miercoles');
            arrayMiercoles = array[2];
            console.log(arrayMiercoles);
            miercolesListado = arrayMiercoles.split(",");

            var resultado = document.getElementById("tablaEjercicios");
            resultado.innerHTML = "";

            for (let i = 0; i < miercolesListado.length; i++) {
                let elemento = document.createElement("li");
                let contenido = document.createTextNode(miercolesListado[i]);
                elemento.appendChild(contenido);
                console.log(elemento);
                document.getElementById('tablaEjercicios').appendChild(elemento);
            }
            break;
        case 4:
            console.log('Hoy es jueves');
            arrayJueves = array[3];
            juevesListado = arrayJueves.split(",");

            var resultado = document.getElementById("tablaEjercicios");
            resultado.innerHTML = "";

            for (let i = 0; i < juevesListado.length; i++) {
                let elemento = document.createElement("li");
                let contenido = document.createTextNode(juevesListado[i]);
                elemento.appendChild(contenido);
                console.log(elemento);
                document.getElementById('tablaEjercicios').appendChild(elemento);
            }
            break;
        case 5:
            console.log('Hoy es viernes');
            arrayViernes = array[4];
            viernesListado = arrayViernes.split(",");

            var resultado = document.getElementById("tablaEjercicios");
            resultado.innerHTML = "";

            for (let i = 0; i < viernesListado.length; i++) {
                let elemento = document.createElement("li");
                let contenido = document.createTextNode(viernesListado[i]);
                elemento.appendChild(contenido);
                console.log(elemento);
                document.getElementById('tablaEjercicios').appendChild(elemento);
            }
            break;
        case 6:
            console.log('Hoy es sabado');
            document.getElementById('tablaEjercicios').innerText = "No hay ejercicios programados para hoy";
            break;
    }
}
