function playSong(songNumber){
    //pause all audio elements and hide controls
    for(let i=1;i<=6;i++){
        const audio=document.getElementById("audio"+i);
        audio.pause();
        audio.removeAttribute("controls");
        audio.style.display="none";
        //play the selected song
        const selectedAudio=document.getElementById("audio"+songNumber);
        selectedAudio.setAttribute("controls","controls");
        selectedAudio.style.display="block";
        selectedAudio.play();
    }}
    function playSongs(section, songNumber) {
        // Pause all audio elements and hide controls for the specified section
        const sectionPrefix = section + '-audio';
        for (let i = 1; i <= 6; i++) {
            const audio = document.getElementById(sectionPrefix + i);
            audio.pause();
            audio.removeAttribute("controls");
            audio.style.display = "none"; // Hide controls
        }

        // Play the selected song and show controls
        const selectedAudio = document.getElementById(sectionPrefix + songNumber);
        selectedAudio.setAttribute("controls", "controls");
        selectedAudio.style.display = "block"; // Show controls
        selectedAudio.play();
}