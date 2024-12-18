const audio1 = document.getElementById('audio1');
          const audio2 = document.getElementById('audio2');
          const trackInfo = document.getElementById('track-info');
          const ellipse = document.getElementById('ellipse');
          const trackList = document.getElementById('track-list');
          let currentTrack = 1;

 
      function updateTrackInfo() {
        const tracks = trackList.querySelectorAll('li');
        tracks.forEach(track => {
            track.classList.remove('active'); 
        });
        const currentTrackElement = trackList.querySelector(`li[data-track="${currentTrack}"]`);
        if (currentTrackElement) {
            currentTrackElement.classList.add('active'); 
        }

        if (currentTrack === 1) {
            trackInfo.textContent = "Трек: Джиган feat. Artik & Asti & Niletto - Худи";
            ellipse.style.backgroundImage = "url('./худи.jpg')"; 
        } else {
            trackInfo.textContent = "Трек: DOSHIK - Лиса";
            ellipse.style.backgroundImage = "url('./лиса.jpg')"; 
        }
    }

          

          
          document.getElementById('back-button').addEventListener('click', () => {
              if (currentTrack === 1) {
                  currentTrack = 2;
                  audio2.play();
                  audio1.pause();
                  console.log('Воспроизведение трека 2');
              } else {
                  currentTrack = 1;
                  audio1.play();
                  audio2.pause();
                  console.log('Воспроизведение трека 1');
              }
              updateTrackInfo();
          });

        
          document.getElementById('forward-button').addEventListener('click', () => {
              if (currentTrack === 1) {
                  currentTrack = 2;
                  audio2.play();
                  audio1.pause();
                  console.log('Воспроизведение трека 2');
              } else {
                  currentTrack = 1;
                  audio1.play();
                  audio2.pause();
                  console.log('Воспроизведение трека 1');
              }
              updateTrackInfo();
          });

         
          document.getElementById('pause-button').addEventListener('click', () => {
              if (currentTrack === 1) {
                  if (audio1.paused) {
                      audio1.play();
                      console.log('Воспроизведение трека 1');
                  } else {
                      audio1.pause();
                      console.log('Пауза трека 1');
                  }
              } else {
                  if (audio2.paused) {
                      audio2.play();
                      console.log('Воспроизведение трека 2');
                  } else {
                      audio2.pause();
                      console.log('Пауза трека 2');
                  }
              }
          });

        
          updateTrackInfo();