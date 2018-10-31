document.addEventListener('DOMContentLoaded', function() {

  var summonButton = document.querySelector(".summon-cats");
  var catDiv = document.querySelectorAll('.cat-box');

  summonButton.addEventListener('click',function(){
    axios.get('http://bitkittens.herokuapp.com/cats.json')
    .then(function(response){
      var catList = response.data['cats']

      catDiv.forEach(function(div){
          var catImage = document.createElement('img')
          var catPhoto = catList[Math.floor(Math.random() * 3)]['photo']
          div.innerHTML = ""
          catImage.src = catPhoto
          div.append(catImage)
      })
    })
  })


});
