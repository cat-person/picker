var App = {
    getContactBtn: null,
    init() {
        console.log("App started");
        // this.initEvents();
        
        msg = "output";

        if (this.isContactSelectApiAvailable()) {
            msg = "Contact select api is available";
        } else {
            msg = "!!! Contact select api is not available";
        }
        console.log(msg)
        

        document.getElementById("output").textContent = msg;
        document.getElementById("btn_get_contact").onclick = function() {
            document.getElementById("output").textContent = "get contacts clicked";
            // Check if the device supports the contacts API
            if (navigator.contacts) {
                // Create a new contact picker instance
                var contactPicker = new ContactPicker();
            
                // Set the callback function to handle the selected contacts
                contactPicker.show(function(contacts) {
                    // Do something with the selected contacts
                    document.getElementById("output").textContent = contacts;
                });
            } else {
                // Handle the case where the device does not support the contacts API
                console.log("Device does not support contacts API");
            }

        };
    },
    isContactSelectApiAvailable() {
        return ('contacts' in navigator && 'ContactsManager' in window);
    },
};

window.onload = App.init.bind(App);