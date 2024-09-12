var App = {
propertiesBtn: null,
selectBtn: null,
    init() {
        console.log("App started");
        // this.initEvents();
        if (this.isContactSelectApiAvailable()) {
            console.log("Contact select api is available");
        } else {
            console.log("!!! Contact select api is not available");
        }
    },
    isContactSelectApiAvailable() {
        return ('contacts' in navigator && 'ContactsManager' in window);
    },
};
  
  window.onload = App.init.bind(App);