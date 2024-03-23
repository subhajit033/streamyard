const userVideo= document.getElementById(
  'user-video'
) ;

const startBtn = document.getElementById('btn');

const socket = io();

startBtn.addEventListener('click', ()=>{
  const mediaRecorder = new MediaRecorder(state.media, {
    audioBitsPerSecond: 128000,
    videoBitsPerSecond: 2500000,
    framerate: 25
  })
  mediaRecorder.ondataavailable = (ev)=>{
    console.log('correct');
    socket.emit('binaryData', ev.data)
  }
  mediaRecorder.start(25);
})

const state = {media: null}

window.addEventListener('load', async (e) => {
  const media = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  state.media = media;
  userVideo.srcObject = media;
});
