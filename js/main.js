
var form = document.getElementById("myForm")

form.addEventListener('submit',function(e){
  e.preventDefault()

  var search = document.getElementById("search").value

  var originalName = search.split(' ').join('')

  fetch("https://api.github.com/users/sriv0024/repos")
  .then((result) => result.json())
  .then((data) => {
    console.log(data)
  })

  document.getElementById("result").innerHTML = `
  <a target="_blank" href="https://www.github.com/${originalName}" <img src ="${data.avatar_url}"/></a>
  `
})