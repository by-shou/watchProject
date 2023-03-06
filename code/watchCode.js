let reloj = document.getElementById("reloj");

function llamaAlReloj() {
    let time = new Date()
    reloj.innerHTML = time
    console.log(time)
}

llamaAlReloj()