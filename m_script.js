console.log("Vc esta usando a versão mobile")
// m_script.js

document.addEventListener('click', function() {
    var audio = document.querySelector('audio');
    audio.play().catch(error => {
      console.error("Error playing audio:", error);
    }); 
  }, { once: true });