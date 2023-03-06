let reloj = document.getElementById("el-reloj");

function llamaAlReloj() {
    let time = new Date()
    reloj.innerHTML = time
    console.log(time)
}

llamaAlReloj()