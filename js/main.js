var App = {
    propertiesBtn: null,
    selectBtn: null,
    msg: "output",
    init() {
        console.log("App started");
        // this.initEvents();
        
        if (this.isContactSelectApiAvailable()) {
            msg = "Contact select api is available";
        } else {
            msg = "!!! Contact select api is not available";
        }

        document.getElementById("output").textContent = msg;
        console.log(msg)
    },
    isContactSelectApiAvailable() {
        return ('contacts' in navigator && 'ContactsManager' in window);
    },
};

window.onload = App.init.bind(App);