var currentConfig = localStorage.getItem("LocalSettings")
var StorageParsed = JSON.parse(currentConfig);

function changeval(key, value) {
    StorageParsed[key] = value; 
    console.log(`changed ${key} with ${value}`);
}

document.getElementById("savebutton_proxy").onclick = function () {
    changeval('proxy', document.getElementById('pm').value);
    changeval('force_proxyoverride', document.getElementById('forceproxyoverride_check').value);

    localStorage.setItem('LocalSettings', JSON.stringify(StorageParsed)); 
}