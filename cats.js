document.addEventListener('DOMContentLoaded', function() {

  var summonButton = document.querySelector(".summon-cats");
  var cat1 = document.getElementById('cat1');
  var cat2 = document.getElementById('cat2');
  var cat3 = document.getElementById('cat3');
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

      //Cat1
      // var catImage = document.createElement('img')
      // var catPhoto = catList[0]['photo']
      // cat1.innerHTML = ""
      // catImage.src = catPhoto
      // cat1.append(catImage)
      //
      // //cat2
      // var catImage2 = document.createElement('img')
      // var catPhoto2 = catList[1]['photo']
      // cat2.innerHTML = ""
      // catImage2.src = catPhoto2
      // cat2.append(catImage2)
      //
      // //cat3
      // var catImage3 = document.createElement('img')
      // var catPhoto3 = catList[2]['photo']
      // cat3.innerHTML = ""
      // catImage3.src = catPhoto3
      // cat3.append(catImage3)

    })
  })


});
