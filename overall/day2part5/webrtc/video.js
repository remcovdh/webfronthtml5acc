/* jslint browser:true,
					strict: true */

function initWebRTC() {
	navigator.getUserMedia  = navigator.getUserMedia ||
	                          navigator.webkitGetUserMedia ||
	                          navigator.mozGetUserMedia ||
	                          navigator.msGetUserMedia;

	if (navigator.getUserMedia) {
	  navigator.getUserMedia({audio: true, video: true}, function(stream) {
	    // video.src = window.URL.createObjectURL(stream);
	  }, function() { 
				window.alert("Error: Somthing is wrong!");
		});
	} else {
	  window.alert("getUseMedia not available in this browser!");
	}
}
