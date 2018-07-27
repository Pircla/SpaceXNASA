let z=10;
console.log(z);
let test = document.querySelector(".test")

test.addEventListener(
  'click',
    function() {
      console.log("OOOOhhhh tu va te calmer la ?");
    }
)

let phrase = document.querySelector(".phrase")
let decompte = document.querySelector('.decompte')
let fuze = document.querySelector('.fuze')
let number = 10

phrase.addEventListener(
  'click',
  function () {
    setInterval(decollage,1000);
  }, false);

  function  decollage() {
    if(number > 0){
      decompte.innerHTML = (number  -= 1)
    } else {
      decompte.innerHTML = 0
      fuze.style.transform = "translateY(-15000px)"
      fuze.style.transition= "all 15s"
      interrogation.style.transform = "translateY(-15000px)"
      interrogation.style.transition = "all 15s"
    }
  }
//slider
let bigIMG = document.querySelector('.fuze')
let title  = document.querySelector('.sat img')
let thumbnail = document.querySelectorAll('.test img')

for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener(
      'click',
      function(){
        console.log('test')
        let altTxt = this.getAttribute('alt')
        let srcBigImg = this.getAttribute('data-src-image')
        bigIMG.setAttribute('src', srcBigImg)
      }
    )
}
