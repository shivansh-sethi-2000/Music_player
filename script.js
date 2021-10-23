const songs = [
    "bensound-acousticbreeze.mp3",
    "bensound-happiness.mp3",
    "bensound-jazzyfrenchy.mp3",
    "bensound-sunny.mp3",
    "bensound-tenderness.mp3",
    "bensound-thelounge.mp3",
    "bensound-ukulele.mp3"
];
const player = document.getElementById('player');

function songList() {
    const list = document.createElement('ol');
    for(let i=0 ; i<songs.length ; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }

    return list;
}

const song_list = document.getElementById("songList");
song_list.appendChild(songList());

song_list.onclick = function(e) {
    // console.log(e);
    const source = document.getElementById('source');
    source.src = "songs/"+e.target.innerHTML;

    document.querySelector('#currentSong').innerText = `Now Playing ${e.target.innerText}`
    player.load();
    player.play();
};

function playAudio() {
    if(player.readyState) {
        player.play();
    }
}

function pauseAudio() {
    player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.oninput = function(e) {
    // console.log(e);
    const volume = e.target.value;
    player.volume = volume;
};

function updateProgress() {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime/player.duration)*100;
        const time = document.getElementById('currentTime');
        time.innerText = (player.currentTime/60).toFixed(2) + '/' + (player.duration/60).toFixed(2);
    }
}

