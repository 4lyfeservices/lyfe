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

function requestfullscreen() {
    document.getElementById("mrframe").requestFullscreen();
}

//main function
document.addEventListener('DOMContentLoaded', function() {
    const session_data_storage = sessionStorage.getItem("targetdata");
    const main_session_data = JSON.parse(session_data_storage);

    if (main_session_data.proxy = 'uv_classic') {
        RegisterUV_SW();
        loadiniframe(return_uvclassic_url(main_session_data.url));
        console.log('%c[lyfe] %c Succesfully Started iframe!', 'color: gray; font-weight: bold;', 'color: white;');
    }
});

function return_uvclassic_url(url) {
    const custom_url = `${__cv$config.prefix}${__cv$config.encodeUrl(url)}`;
    return custom_url
  }

  function return_nu_url(url) {
    const custom_url = `/webinstance/${url}`
    return custom_url;
  }

function RegisterUV_SW() {
    navigator.serviceWorker.register('../serviceworker.js', {
        scope: __cv$config.prefix,
      }),
      console.log('%c[lyfe] %cUltraviolet Registered', 'color: gray; font-weight: bold;', 'color: white;');
    }


//todo make the uv register
//make iframe go

