let video = document.querySelector("video");

let slider = document.getElementById("slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
    video.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume;

});

slider.addEventListener("click",function(){
	video.volume = slider.value / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + '%';
	console.log("The current value is", video.volume);
	console.log(document.getElementById("volume"));
	

});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

document.querySelector('#slower').addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Slow down video");
	console.log(video.playbackRate);
})

document.querySelector('#faster').addEventListener("click", function(){
	video.playbackRate = video.playbackRate * (1 / 0.9);
	console.log("Speed up video");
	console.log(video.playbackRate);
})



// add an event listener to the video's timeupdate event to track its progress


document.querySelector('#skip').addEventListener('click', function(){
	let newTime = video.currentTime + 10;
	if (newTime > video.duration) {
	  newTime = 0;
	}
	video.currentTime = newTime;
	console.log("Skip ahead");
	console.log("Video current time is", video.currentTime);
});

document.querySelector('#mute').addEventListener('click', function() {
	video.muted = !video.muted;
	if (video.muted) {
	  console.log("Mute");
	  document.querySelector('#mute').innerHTML = "Unmute";
	} else {
	  console.log("Unmute");
	  document.querySelector('#mute').innerHTML = "Mute";
	}
  });

  document.querySelector('#vintage').addEventListener('click',function(){
	video.classList.add('oldSchool');

  });

  document.querySelector('#orig').addEventListener('click',function(){
	video.classList.remove('oldSchool');


  });











