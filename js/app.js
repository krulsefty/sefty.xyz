// s
// e
// f
// t
// y

function openDiscord(url) {
  window.open(url, '_blank');
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function sefty() {
  const response = await fetch('https://api.lanyard.rest/v1/users/783956289101365249')
  const data = await response.json()

  const avatar = data.data.discord_user.avatar
  document.getElementById("sefty").src = `https://cdn.discordapp.com/avatars/783956289101365249/${avatar}.png`
  document.getElementById("logo").src = `https://cdn.discordapp.com/avatars/783956289101365249/${avatar}.png`
  document.getElementById("logo").style.borderRadius = "100px"

  let name = data.data.discord_user.display_name
  if (!data.data.discord_user.display_name) {
    name = data.data.discord_user.username
  }
  const truncatedName = name.length > 10 ? `${name.substring(0, 10)}...` : name;
  document.getElementById("displayname").innerHTML = `${truncatedName}`

  const status = data.data.discord_status;

  if (status === "online") {
    document.getElementById("sefty").style.borderColor = "#23a55a"
    document.getElementById("status-text").innerHTML = "online"
    document.getElementById("status-text").style.color = "#23a55a"
  } else if (status === "idle") {
    document.getElementById("sefty").style.borderColor = "#f0b232"
    document.getElementById("status-text").innerHTML = "online"
    document.getElementById("status-text").style.color = "#23a55a"
  } else if (status === "dnd") {
    document.getElementById("sefty").style.borderColor = "#f23f43"
    document.getElementById("status-text").innerHTML = "online"
    document.getElementById("status-text").style.color = "#23a55a"
  } else if (status === "offline") {
    document.getElementById("sefty").style.borderColor = "#80848e"
    document.getElementById("status-text").innerHTML = "offline"
    document.getElementById("status-text").style.color = "#80848e"
  }

  function displaySpotify() {
    if (data.data.spotify) {
      const title = data.data.spotify.song
      const truncatedTitle = title.length > 30 ? `${title.substring(0, 30)}...` : title
      const artist = data.data.spotify.artist
      let truncatedArtist = artist.length > 43 ? `${artist.substring(0, 43)}...` : artist
      truncatedArtist = truncatedArtist.replace(/;/g, ',');
      const album = data.data.spotify.album
      let truncatedAlbum = album.length > 50 ? `${album.substring(0, 50)}...` : album
      const cover = data.data.spotify.album_art_url

      document.getElementById("cover").src = `${cover}`
      document.getElementById("title").innerHTML = `${truncatedTitle}`
      document.getElementById("details").innerHTML = `By ${truncatedArtist}`
      document.getElementById("state").innerHTML = `On ${truncatedAlbum}`

      document.getElementById("activity").style.opacity = "1"
    } else {
      document.getElementById("activity").style.opacity = "0"
    }
  }

  var activities = data.data.activities

  var activity = activities.find(function (activity) {
    return activity.name !== "Spotify"
  })

  function displayOther() {
    if (activity) {
      let title = activity.name
      const truncatedTitle = title.length > 30 ? `${title.substring(0, 30)}...` : title
      let details
      let state
      let cover

      let startTime

      if (!activity.timestamps) {
        startTime = ""
      } else if (activity.timestamps.start) {
        startTime = activity.timestamps.start
      }

      let dateObj = new Date(Date.now() - startTime)
      let hour = dateObj.getHours() - 1
      let minutes = dateObj.getMinutes()
      let seconds = dateObj.getSeconds()

      const formattedHours = hour < 10 ? "0" + hour : hour
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes
      const formattedSeconds = seconds < 10 ? "0" + seconds : seconds

      const readyTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`

      if (activity.details && activity.state && activity.timestamps) {
        details = activity.details
        state = activity.state
      } else if (activity.details && activity.state && !activity.timestamps) {
        details = activity.details
        state = activity.state
      } else if (!activity.details && activity.state && activity.timestamps) {
        details = activity.state
        state = `${readyTime} elapsed`
      } else if (activity.details && !activity.state && activity.timestamps) {
        details = activity.details
        state = `${readyTime} elapsed`
      } else if (activity.details && !activity.state && !activity.timestamps) {
        details = activity.details
        state = ""
      } else if (!activity.details && activity.state && !activity.timestamps) {
        details = activity.name
        state = activity.state
      } else if (!activity.details && !activity.state && activity.timestamps) {
        details = activity.name
        state = `${readyTime} elapsed`
      } else if (!activity.details && !activity.state && !activity.timestamps) {
        details = activity.name
        state = ""
      }

      let assetImg

      if (activity.assets && activity.assets.large_image && activity.assets.small_image) {
        assetImg = activity.assets.large_image
      } else if (activity.assets && !activity.assets.small_image && activity.assets.large_image) {
        assetImg = activity.assets.large_image
      } else if (activity.assets && activity.assets.small_image && !activity.assets.large_image) {
        assetImg = activity.assets.small_image
      }

      if (assetImg) {
        if (assetImg.startsWith("mp:external")) {
          cover = `https://media.discordapp.net/${assetImg.replace("mp:", "")}`
        } else if (!assetImg.startsWith("https://")) {
          cover = `https://cdn.discordapp.com/app-assets/${activity.application_id}/${assetImg}.png`
        } else if (assetImg.startsWith("https://")) {
          cover = assetImg
        }
      } else if (!assetImg || !activity.assets && !activity.assets.large_image && !activity.assets.small_image) {
        cover = "https://cdn.discordapp.com/attachments/1133297723634880562/1231540597484158986/Untitled-1.png?ex=6637548f&is=6624df8f&hm=d92d9c4e648016fda6b264a16795e9f34baaf2dc465df56baa5783234dd73688&";
      }

      let truncatedDetails = details.length > 43 ? `${details.substring(0, 43)}...` : details
      let truncatedState = state.length > 50 ? `${state.substring(0, 50)}...` : state

      document.getElementById("cover").src = `${cover}`
      document.getElementById("title").innerHTML = `${truncatedTitle}`
      document.getElementById("details").innerHTML = `${truncatedDetails}`
      document.getElementById("state").innerHTML = `${truncatedState}`

      document.getElementById("activity").style.opacity = "1"
    } else {
      document.getElementById("activity").style.opacity = "0"
    }
  }

  var spotifyActivity = activities.find(function (activity) {
    return activity.name === "Spotify"
  })

  if (activity && !spotifyActivity) {
    displayOther()
    // document.getElementById("grid").style.flexDirection = "column"
  }

  if (activity && spotifyActivity) {
    displayOther()
    // document.getElementById("grid").style.flexDirection = "column"
  }

  if (spotifyActivity && !activity) {
    displaySpotify()
    // document.getElementById("grid").style.flexDirection = "column"
  }

  if (!spotifyActivity && !activity) {
    document.getElementById("activity").style.opacity = "0"
    // document.getElementById("grid").style.flexDirection = "column"
  }
}

sefty()
setInterval(sefty, 1000)

function getTimeInTimeZone(timezone) {
  const now = new Date();
  const options = {
      timeZone: timezone,
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
  };
  return now.toLocaleString('en-US', options)
}

setInterval(() => {
  const currentTime = getTimeInTimeZone('Europe/Warsaw')
  document.getElementById('time').textContent = currentTime
}, 1000)