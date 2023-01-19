const nuta = new Audio();

nuta.loop = true;
nuta.src = "music.mp3";

function odpalnute() {
	nuta.play();
}

(async () => {

	let ipxdxdxd = await (
		await fetch(`https://ifconfig.me/ip`)
	).text();

	document.getElementById("about-one-liner").innerHTML = `go kys ${ipxdxdxd}`;

})();