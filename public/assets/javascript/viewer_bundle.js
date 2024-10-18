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
        window.location.href = `index.html`; 
    }, 1000);
}


setTimeout(() => {
    const elements = document.getElementsByClassName("toolong");
    for (let element of elements) {
        element.style.display = "block";
    }
}, 6000);


function loadiniframe(url) {
  const loadingcontainer = document.createElement("div");
  const iframe = document.getElementById("mrframe")
  loadingcontainer.className = 'loadingscreen';
  document.getElementById("loadingscreen").style.display = 'none';
  iframe.style.display = 'flex';
 iframe.src = url;
}

function requestreload() {
 document.getElementById("mrframe").contentWindow.location.reload()
}