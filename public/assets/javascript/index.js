
const menubar = document.getElementById("menubarico")
menubar.onclick = function () {
    document.body.style.display = 'none';
}

//check for user config 

if (localStorage.getItem("LocalSettings")) {
    console.log('%c[lyfe] %cLyfe is ready', 'color: gray; font-weight: bold;', 'color: white;');
} else {
    console.log('%c[lyfe] %cLyfe is not ready || System cannot find a localstorage configuration!!', 'color: gray; font-weight: bold;', 'color: red;');
    const jsonData = {
       proxy: "uv_epoxy",
       search_engine: "https://google.com/search?q=%s",
       ID: 1,
       force_browsermode: false,
       force_proxyoverride: false,
       theme: "reg.css",
       debug_console: false
    };
  
    localStorage.setItem("LocalSettings", JSON.stringify(jsonData));
    console.log('%c[lyfe] %cLyfe is ready', 'color: gray; font-weight: bold;', 'color: white;');
}

function GoFade() {
    const animation = document.createElement("style");
    animation.textContent = `
    @keyframes fadeOutLeft {
    0% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 0;
        transform: translateX(-100%);
    }
}

.fade-out {
    animation: fadeOutLeft 1s ease-out forwards;
}`;

    document.head.appendChild(animation);
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = `webviewer.html`; 
    }, 1000);
};


function search(input, template) {
    try {
      return new URL(input).toString();
    } catch {}
  
    try {
      const url = new URL(`http://${input}`);
      if (url.hostname.includes(".")) return url.toString();
    } catch {}
    return template.replace("%s", encodeURIComponent(input));
  }

const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");

form.addEventListener("submit", async (event) => {
	event.preventDefault();

   const storage =  localStorage.getItem("LocalSettings");
   const StorageParsed = JSON.parse(storage);

    const Engine = StorageParsed.search_engine;
    const targeturl = search(address.value, Engine);

    const sessionData = {
        proxy: StorageParsed.proxy || 'uv_epoxy',
        url: targeturl,
        browsermode: StorageParsed.force_browsermode || 'false'
     };

     sessionStorage.setItem("targetdata", JSON.stringify(sessionData));
     setTimeout(() => {
        GoFade()
     }, 50);
});