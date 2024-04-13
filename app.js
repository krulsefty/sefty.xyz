const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
})

const hiddenElements = document.querySelectorAll(".socials-list")
hiddenElements.forEach((el) => observer.observe(el))

document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
  })
  
  document.onkeydown = function (e) {
    if (event.keyCode == 123) {
      return false
    }
  
    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
      return false
    }
  
    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
      return false
    }
  
    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
      return false
    }
  
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
      return false
    }
  }