if (typeof window.parent.alertify === "object")
    window.parent.alertify.defaults = {
        autoReset: true,
        basic: false,
        closable: false,
        closableByDimmer: true,
        frameless: false,
        maintainFocus: true,
        maximizable: true,
        modal: true,
        movable: true,
        moveBounded: false,
        overflow: true,
        padding: true,
        pinnable: true,
        pinned: true,
        preventBodyShift: false,
        resizable: true,
        startMaximized: false,
        transition: 'pulse',
        notifier: {delay: 5, position: 'bottom-right'},
        glossary: {title: window.parent.document.title, ok: 'Aceptar', cancel: 'Cancelar'},
        theme: {input: 'ajs-input', ok: 'ajs-btn ajs-btn_ok', cancel: 'ajs-btn ajs-btn_cancel'},
        style: {margin: "-16px -16px -16px 0", paddingBottom: "24px"}
    };

if (typeof window.parent.alertify === "object" && !window.parent.alertify.wsAlert)
    alertify.dialog('wsAlert', function factory() {
        return {main: function (message, redirect) {
                this.message = message;
                this.redirect = redirect;
            }, setup: function () {
                return {buttons: [{text: "OK!", key: 27/*Esc*/}], focus: {element: 0}, options: {maximizable: false}
                };
            }, prepare: function () {
                this.setContent(this.message);
            }, callback: function () {
                if (typeof this.redirect === "string")
                    document.location = this.redirect;
            }
        };
    });
