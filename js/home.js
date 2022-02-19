const VIDEO = document.getElementById('video');

VIDEO.onloadeddata = function() {
    setTimeout(() => {
        loadend();
    }, 2000);
};

function loadend() {
    document.getElementById('loading').style.display= "none";
    document.getElementById('root').style.display= "block";
}