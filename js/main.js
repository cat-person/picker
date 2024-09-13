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


        // document.getElementById("output").textContent = msg;
        document.getElementById("btn_get_contact").onclick = async function() {
            document.getElementById("output").textContent = "get contacts clicked";

            const props = ['name', 'email', 'tel', 'address', 'icon'];
            const opts = {multiple: true};



            try {
                // const contacts = await navigator.contacts.select(props, opts);
                const url = 'tel://contact?bundleID=com.example.contactapp';
                const a = document.createElement('a');
                a.href = url;
                a.click();
                // document.getElementById("output").textContent = JSON.stringify(contacts)
            } catch (ex) {
                document.getElementById("output").textContent = "~~" + ex
            }

        };
    },
    isContactSelectApiAvailable() {
        return ('contacts' in navigator && 'ContactsManager' in window);
    },
};

window.onload = App.init.bind(App);