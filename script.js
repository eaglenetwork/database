if (localStorage.getItem("autoCloak") == true) {
    cloak()
    document.getElementById("autoCloak").checked = true
}

function replace(link) {
    location.replace(link)
}

function handleCloaker() {
    if (document.getElementById("autoCloak").checked == true) {
        localStorage.setItem("autoCloak", true)
    } else {
        localStorage.setItem("autoCloak", false)
    }
}

function cloak() {
    var url = "https://eaglenetwork.github.io/database"
    var win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
    location.replace("https://google.com")
}