document.getElementById('startBtn').addEventListener('click', function() {
    document.getElementById('initial').classList.add('hidden');
    document.getElementById('jumpscare').classList.remove('hidden');
    playSound();
});

function playSound() {
    var audio = new Audio('fbi_open_up.mp3');
    audio.play().then(() => {
        console.log('Audio is playing');
    }).catch((error) => {
        console.log('Error playing sound:', error);
    });
}

// Test audio playback immediately when page loads
window.addEventListener('load', function() {
    var testAudio = new Audio('fbi_open_up.mp3');
    testAudio.play().catch(function(error) {
        console.log('Test audio error:', error);
    });
});
