var socket = io();

// on - escoltar peticions
socket.on('connect', function() {
    console.log('Conectat al servidor');
});

socket.on('disconnect', function() {
    console.log('Perduda la conexió amb el servidor');
});
// Enviar informacio client - servidor
socket.emit('enviarMissatge', {
    Usuari: 'Eduard',
    missatge: 'Hola mon'
}, function(resp) {
    console.log('El servidor diu: ', resp);
});

// Escoltar al servidor
socket.on('enviarMissatge', function(missatge) {
    console.log(missatge);
});