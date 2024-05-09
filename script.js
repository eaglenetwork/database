function replace(link, cloake) {
    if (cloake) {
        cloak(link)
    } else {
        location.replace(link)
    }
}

function randomImage() {
    let arr = ["Assets/wallpaper.png", "Assets/nova.png"]
    choice = arr[(Math.floor(Math.random() * arr.length))]
    document.body.style.backgroundImage = arr[choice]
}

function cloak(url) {
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
