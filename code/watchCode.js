(function(){

    var actualizarHora = function() {
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        var pHoras = document.getElementById("hour"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutes"),
            pSegundos = document.getElementById("seconds"),
            pDiaSemana = document.getElementById("dayWeek"),
            pDia = document.getElementById("dayDate"),
            pMes = document.getElementById("month"),
            pYear = document.getElementById("year");

        var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if (horas >= 12) {
          horas = horas - 12;
          ampm = "PM";
        } else {
            ampm = "AM";
        };
        if (horas === 0) {
            horas = 12;
        };
        if (horas < 10) {
            horas = "0" + horas;
        };
        if (minutos < 10) {
            minutos = "0" + minutos;
        }
        if (segundos < 10) {
            segundos = "0" + segundos;
        };
        pHoras.textContent = horas;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };

    actualizarHora();

    var intervalo = setInterval(actualizarHora, 1000);
}())