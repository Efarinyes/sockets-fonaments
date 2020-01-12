const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuari conectat');

    client.emit('enviarMissatge', {
        Usuari: 'Administrador',
        missatge: 'Benvingut al programa'
    });

    client.on('disconnect', () => {
        console.log('Usuari desconectat');
    });
    client.on('enviarMissatge', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMissatge', data);

        // if (missatge.Usuari) {
        //     callback({
        //         resp: 'Tot ha sortit correcte'
        //     });
        // } else {
        //     callback({
        //         resp: 'To ha sortit fatal!!!'
        //     });

        // }

    });
});