let audio = new Audio('./song.mp3');

let ltr = document.querySelectorAll('.ltr');

ltr.forEach(i => {
   i.addEventListener('mouseover', function() {
      console.log("coño");
   });
});