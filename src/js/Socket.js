Ext.define('Tualo.util.Socket', {
    extend: 'Ext.util.Observable',
    constructor: function (options) {
        let me = this;
        options = options || {};
        console.log('Tualo.util.Socket',options);
        this.callParent(options);
        this.socket = new io.Socket(options);
        this.socket.on('connect', function () {
            console.log('Tualo.util.Socket','connect',arguments);
            me.onConnect();
        });
        this.socket.on('message', function (data) {
            console.log('Tualo.util.Socket','message',arguments);
            me.onMessage(data);
        });
        this.socket.on('close', function () {
            console.log('Tualo.util.Socket','close',arguments);
            me.onClose();
        });
        this.socket.on('disconnect', function () {
            console.log('Tualo.util.Socket','disconnect',arguments);
            me.onDisconnect();
        });
    },

    connect: function () {
        this.socket.connect();
    },
    disconnect: function () {
        this.socket.disconnect();
    },
    emit: function (message) {
        this.socket.emit(message);
    },
    onConnect: function () {
        this.fireEvent('connect');
    },
    onDisconnect: function () {
        this.fireEvent('disconnect');
    },
    onClose: function () {
        this.fireEvent('close');
    },
    onMessage: function (message) {
        this.fireEvent('message', message);
    }
})