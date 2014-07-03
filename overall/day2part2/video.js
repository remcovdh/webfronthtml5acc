/* jslint browser:true,
					strict: true */

var idx = 0;
var filters = ['grayscale', 'sepia', 'blur', 'brightness',
               'contrast', 'hue-rotate', 'hue-rotate2',
               'hue-rotate3', 'saturate', 'invert', ''];

function changeFilter(e) {
	var el = e.target       
	el.className = '';
	var effect = filters[idx++ % filters.length]; // loop through filters.
	if (effect) {
		el.classList.add(effect);
	}
}

function initVideo() {
	navigator.getUserMedia  = navigator.getUserMedia ||
	                          navigator.webkitGetUserMedia ||
	                          navigator.mozGetUserMedia ||
	                          navigator.msGetUserMedia;

	var video = document.getElementById('testvideo');
	video.addEventListener('click', changeFilter, false);

	if (navigator.getUserMedia) {
	  navigator.getUserMedia({audio: true, video: true}, function(stream) {
	    video.src = window.URL.createObjectURL(stream);
	  }, function() { 
				window.alert("Error: Somthing is wrong!");
		});
	} else {
	  window.alert("getUseMedia not available in this browser!");
	}
}
