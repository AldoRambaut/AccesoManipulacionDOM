// Ejercicio 1
const listaTareas = document.getElementById('listaTareas');
const agregarTarea = document.getElementById('agregarTarea');
const marcarCompletada = document.getElementById('marcarCompletada');
const eliminarTarea = document.getElementById('eliminarTarea');
const listaVacia =  document.getElementById('listaVacia');

const actualizarLista = () => {
    if (listaTareas.hasChildNodes()) {
        listaVacia.className = 'd-none';
    } else {
        listaVacia.className = 'd-inline';
    }
}

agregarTarea.addEventListener('click', () => {
    const nuevaTarea = prompt(`Porfavor ingrese la tarea a agregar a la lista`);
    const tarea = document.createElement('li');
    tarea.textContent = nuevaTarea;
    listaTareas.appendChild(tarea);
    actualizarLista();
});

marcarCompletada.addEventListener('click', () => {
    const tareaAMarcar = parseInt(prompt(`Porfavor seleccione el numero de la tarea a marcar como completada`))-1;
    if (listaTareas.childNodes[tareaAMarcar].textContent.endsWith(' - completada')){
        listaTareas.childNodes[tareaAMarcar].textContent = listaTareas.childNodes[tareaAMarcar].textContent.slice(0,-13);
    }
    else{
        listaTareas.childNodes[tareaAMarcar].textContent += ' - completada';
    }
    actualizarLista();
});

eliminarTarea.addEventListener('click', () => {
    const tareaAEliminar = parseInt(prompt(`Porfavor seleccione el numero de la tarea a eliminar`))-1;
    listaTareas.removeChild(listaTareas.childNodes[tareaAEliminar]);
    actualizarLista();
})

// Ejercicio 2
const imgPrincipal = document.getElementById('imgPrincipal');
const descripcion = document.getElementById('descripcionImagen');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

img1.addEventListener('click', () =>{
    imgPrincipal.src = img1.src;
    descripcion.textContent = 'Atardecer en el mar'
});

img2.addEventListener('click', () =>{
    imgPrincipal.src = img2.src;
    descripcion.textContent = 'Lago rodeado de montañas'
});

img3.addEventListener('click', () =>{
    imgPrincipal.src = img3.src;
    descripcion.textContent = 'Lago rodeado de montañas parecido al anterior'
});

img4.addEventListener('click', () =>{
    imgPrincipal.src = img4.src;
    descripcion.textContent = 'Oasis en el desierto'
});

// Ejercio 3
const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const songInfo = document.getElementById('song-info');

const songs = [
    { title: 'Canción 1', artist: 'Artista 1', src: './music/music1.mp3' },
    { title: 'Canción 2', artist: 'Artista 2', src: './music/music2.mp3' },
    { title: 'Canción 2', artist: 'Artista 2', src: './music/music3.mp3' },
    { title: 'Canción 2', artist: 'Artista 2', src: './music/music4.mp3' },
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songInfo.textContent = `${song.title} - ${song.artist}`;
}

function play() {
    audioPlayer.play();
}

function pause() {
    audioPlayer.pause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    play();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    play();
}

playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);

loadSong(currentSongIndex);

// Ejercicio 4
const form = document.getElementById('dynamic-form');
const addButton = document.getElementById('add-field');

addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameField = prompt('Ingrese el nombre del capo a agregar');
    const inputField = document.createElement('div');
    inputField.className= 'input-field form-floating mb-2';
    inputField.innerHTML = `<input type="text" name="${nameField}" id="${nameField}" class="form-control">
    <label for="${nameField}">${nameField}</label>`;
    form.insertBefore(inputField, addButton);
});

// Ejercicio 5
function agregarFila() {
    const tableBody = document.querySelector('#data-table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" name="nombre" class="form-control"></td>
        <td><input type="number" name="edad" class="form-control"></td>
        <td><button onclick="eliminarFila(this)" class="btn btn-danger">Eliminar</button></td>
    `;
    tableBody.appendChild(newRow);
}

function eliminarFila(button) {
    const row = button.closest('tr');
    row.remove();
}

// Ejercicio 6
const contador = document.getElementById('contador');
const incremento = document.getElementById('incremento');
const decremento = document.getElementById('decremento');
const reset = document.getElementById('reset');

incremento.addEventListener('click', () =>{
    contador.textContent++;
});

decremento.addEventListener('click', () =>{
    contador.textContent--;
});

reset.addEventListener('click', () =>{
    contador.textContent = 0;
});

// Ejercicio 7
const teclado = document.getElementById('teclado');
const pantalla = document.getElementById('pantalla');
pantalla.style.height = '1rem';
pantalla.textContent = '';

const insertarBoton = (tecla) =>{
    const boton = document.createElement('div');
    boton.className = `col mb-2`;
    boton.innerHTML = `<button class="btn btn-outline-success">${tecla}</button>`;
    boton.addEventListener('click', () => {
        if (boton.textContent == '=') {
            pantalla.textContent = eval(pantalla.textContent);
        } else if (boton.textContent == 'C') {
            pantalla.textContent = '';
        } else if (isNaN(boton.textContent) && pantalla.textContent == '') {
            
        } else {
            pantalla.textContent += boton.textContent;
        }
    });
    teclado.appendChild(boton);
};

insertarBoton('1');
insertarBoton('2');
insertarBoton('3');
insertarBoton('+');
insertarBoton('4');
insertarBoton('5');
insertarBoton('6');
insertarBoton('-');
insertarBoton('7');
insertarBoton('8');
insertarBoton('9');
insertarBoton('*');
insertarBoton('0');
insertarBoton('=');
insertarBoton('C');
insertarBoton('/');

// Ejercicio 8
comentario.style.resize = "none";
comentario.style.height = "10rem";
const publicar = document.getElementById('publicar');

publicar.addEventListener('click', () => {
    const usuario = document.getElementById('usuario');
    const comentario = document.getElementById('comentario');
    const comentarios = document.getElementById('comentarios');
    const nuevoComentario = document.createElement('div');
    nuevoComentario.className = 'border mb-3';
    nuevoComentario.innerHTML = `<p class="m-2"><b>${usuario.value}:</b></p><p class="m-2">${comentario.value}</p>`;
    comentarios.appendChild(nuevoComentario);
    usuario.value = '';
    comentario.value = '';
});

// Ejercicio 9
const lenguaje = document.querySelector('#lenguaje');
const pc = document.querySelectorAll('#escritorio, #portatil');
const resultado1 = document.querySelector('#resultado1');
const resultado2 = document.querySelector('#resultado2');
const resultado3 = document.querySelector('#resultado3');
lenguaje.addEventListener('change', (e) => {
    e.preventDefault();
    resultado1.innerHTML = `Su lenguaje favorito es ${lenguaje.value}`;
});
pc.forEach((element) => {
    element.addEventListener('change', (e) => {
        resultado2.innerHTML = `El equipo que prefiere para programar es ${element.value}`;
    });     
});

// Ejercicio 10
const reservar = document.querySelector('#reservar');
let fechaInicio = document.querySelector('#fechaInicio');
let fechaFin = document.querySelector('#fechaFin');
const verReservas = document.querySelector('#verReservas');
const reservas = [];
let disponible = true;

reservar.addEventListener('click', (e) => {
    e.preventDefault();
    if (fechaInicio.value == '' || fechaFin.value == '') {
        alert('debes seleccionar fecha de inicio y fecha de terminacion');
        fechaInicio.value = '';
        fechaFin.value = '';
        return 0;
    } else {
        let fi = new Date(fechaInicio.value);
        let ff = new Date(fechaFin.value);
        let nuevaReserva = {
            fi: fi,
            ff: ff
        };
        if (((nuevaReserva.ff - nuevaReserva.fi)/3600000) <= 0) {
            alert('la reserva no tiene la suficiente duracion');
            return 0;
        }
        reservas.forEach((element) => {
            if ((nuevaReserva.fi > element.fi && nuevaReserva.fi < element.ff) || (nuevaReserva.ff > element.fi && nuevaReserva.ff < element.ff)) {
                disponible = false;
                alert('fecha no disponible');
            }
        });
        if (disponible == true) {
            reservas.push(nuevaReserva);
            let lista = '';
            reservas.sort((a, b) => a.fi - b.fi);
            reservas.forEach((element) => {
                lista += `
                <div class='col'>
                    <div class="card">
                        <div class="card-body">
                            <p class="card-title">Inicio: ${element.fi.toLocaleString() } <br>Fin: ${element.ff.toLocaleString()}</p>
                        </div>
                        <div class="card-footer">
                            <p class="card-text">Duracion: ${(element.ff - element.fi)/3600000} h</p>
                        </div>
                    </div>
                </div>`
            });
            document.querySelector('#verReservas').innerHTML = lista;
        }
    }
    fechaInicio.value = '';
    fechaFin.value = '';
    disponible = true;
});