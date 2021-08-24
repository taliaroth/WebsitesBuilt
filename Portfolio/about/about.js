document.addEventListener('load', function() {
    var scale = 1 / (window.devicePixelRatio || 1);
    var content = 'width=device-width, initial-scale=' + scale;

    document.querySelector('meta[name="viewport"]').setAttribute('content', content)
}, false)