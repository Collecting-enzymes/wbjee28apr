function updateTimer() {
    const now = new Date();
    const targetDate = new Date("2024-04-27T21:59:59"); // Set your target date and time

    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function updateDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById("date").innerHTML = `TARGET DATE - 28Apr , TODAY- ${formattedDate}`;
}

function update() {
    updateTimer();
    updateDate();
}

// Update every second
setInterval(update, 1000);

// Initial update
update();
 // JavaScript for controlling video
document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('video');
    video.volume = 0.5; // Adjust the volume as needed

    var audio = document.querySelector('audio');
    audio.volume = 5; // Adjust the volume as needed

 

    // You can add more logic here for controlling other aspects of the video and audio
});

// JavaScript for controlling video and audio
document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('bg-audio');
    var isAudioControlsHidden = false;

    audio.addEventListener('play', function() {
        if (!isAudioControlsHidden) {
            hideAudioControls();
            isAudioControlsHidden = true;
        }
    });

    function hideAudioControls() {
        audio.removeAttribute('controls');
    }

    // You can add more logic here for controlling other aspects of the video and audio
});
