const users = [
  {

    dp: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    story: "https://plus.unsplash.com/premium_photo-1670161434750-d2798af413d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    username: "@stylish_dude_88"
  },
  {

    dp: "https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1732677114541-a4ccaa0a8528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    username: "@the_desi_dude"
  },
  {

    dp: "https://images.unsplash.com/photo-1712847333437-f9386beb83e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bWFufGVufDB8fDB8fHww",
    story: "https://images.unsplash.com/photo-1731432247068-8f7a97773aee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    username: "@boy_with_swag"
  },
  {

    dp: "https://plus.unsplash.com/premium_photo-1671718111036-0a4b73625a4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGh1bWFufGVufDB8fDB8fHww",
    story: "https://images.unsplash.com/photo-1734507382924-cd7b52ab7eef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    username: "@the_urban_dude"
  },
  {

    dp: "https://plus.unsplash.com/premium_photo-1682089804117-cea5d901647f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGh1bWFufGVufDB8fDB8fHww",
    story: "https://images.unsplash.com/photo-1734276221099-ba7f256b15e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
    username: "@the_boy_in_black"
  },
  {

    dp: "https://images.unsplash.com/photo-1610737249253-1405407a33ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGh1bWFufGVufDB8fDB8fHww",
    story: "https://images.unsplash.com/photo-1704791079652-f4e9043b20f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    username: "@the_funky_boy"
  },
  {

    dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGh1bWFufGVufDB8fDB8fHww",
    story: "https://images.unsplash.com/photo-1732823130947-ac30acee3e39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    username: "@mr_cool_king"
  },

];

var sum = ""
users.forEach(function (val, idx) {
  sum = sum + `<div class="story">
                <img id="${idx}" src="${val.dp}">
            </div>`

})
var body = document.querySelector("#storys")
body.innerHTML = sum


var full = document.querySelector(".full")
var growth = document.querySelector(".growth")
var username = document.querySelector(".full h1")



storys.addEventListener("click", function (dets) {
  var gold = users[dets.target.id]

  var grow = 0
  var int = setInterval(function () {
    grow++
    growth.style.width = grow + '%'
  }, 30)

  full.style.display = "block"
  full.style.backgroundImage = `url(${gold.story})`
  username.innerHTML = gold.username 


  setTimeout(function () {
    full.style.display = 'none'
    clearInterval(int)
  }, 3000)
   
  
})






