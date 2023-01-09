Ext.define('Tualo.util.Socket', {
    extend: 'Ext.util.Observable',
    constructor: function (options) {
        let me = this;
        options = options || {};
        this.callParent(options);
        this.socket = new io.Socket(options);
        this.socket.on('connect', function () {
            me.onConnect();
        });
        this.socket.on('message', function (data) {
            me.onMessage(data);
        });
        this.socket.on('close', function () {
            me.onClose();
        });
        this.socket.on('disconnect', function () {
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