{/* <div id="container">
    <video id="video"></video>
    <canvas style="position: absolute; left:0; top:0" id="canvas_draw"></canvas>
</div>
// main worker create the web worker see in the examples/nft_improved_worker for details
<script src="main_worker.js"></script>
<script>
var container = document.getElementById('container');
var video = document.getElementById('video');
var canvas_draw = document.getElementById('canvas_draw');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    var hint = {};
    if (isMobile()) {
        hint = {
            facingMode: {"ideal": "environment"},
            audio: false,
            video: {
                width: {min: 240, max: 240},
                height: {min: 360, max: 360},
            },
        };
    }

    navigator.mediaDevices.getUserMedia({video: hint}).then(function (stream) {
        video.srcObject = stream;
        video.play();
        video.addEventListener("loadedmetadata", function() {
            start(container, markers["pinball"], video, video.videoWidth, video.videoHeight, canvas_draw, function() { statsMain.update() }, function() { statsWorker.update()) };
        });
    });
}
</script> */}