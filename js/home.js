const VIDEO = document.getElementById('video');

VIDEO.onloadeddata = function() {
    loadend();
};

function loadend() {
    document.getElementById('loading').style.display= "none";
    document.getElementById('root').style.display= "block";
}