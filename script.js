setTimeout(function(){
    if (localStorage.getItem("autoCloak") == true) {
        document.getElementById("autoCloak").value = "AutoCloak (On)"
        document.getElementById("autoCloak").style.color = "blue"
        if (window.location == window.parent.location) {
            cloak()
        }
    } else {
        document.getElementById("autoCloak").value = "AutoCloak (Off)"
        document.getElementById("autoCloak").style.color = "red"
    }
    
    function replace(link) {
        location.replace(link)
    }
    
    function handleCloaker() {
        if (localStorage.getItem("autoCloak") != true) {
            localStorage.setItem("autoCloak", true)
            alert("Enabled AutoCloaker. Press OK.")
            cloak()
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
},2000)