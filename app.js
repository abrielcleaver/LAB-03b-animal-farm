const catImg =document.getElementById('cat-image');

const catAudio = document.getElementById('cat-audio');

catImg.addEventListener('click', () => {
  catAudio.play();
})

const horseImg =document.getElementById('horse-image');

const horseAudio = document.getElementById('horse-audio');

horseImg.addEventListener('click', () => {
  horseAudio.play();
})

const dogImg =document.getElementById('dog-image');

const dogAudio = document.getElementById('dog-audio');

dogImg.addEventListener('click', () => {
  dogAudio.play();
})

document.addEventListener('keydown', function(event){
  if (event.code == 'KeyC') { catAudio.play();
  }
})

document.addEventListener('keydown', function(event){
  if (event.code == 'KeyH') { horseAudio.play();
  }
})

document.addEventListener('keydown', function(event){
  if (event.code == 'KeyD') { dogAudio.play();
  }
})