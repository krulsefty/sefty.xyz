(async () => {

	let ipxdxdxd = await (
		await fetch(`https://ifconfig.me/ip`)
	).text();

	var headersToAnimate = ["welcome on my website! all socials and stuff like that are down below", `go kys ${ipxdxdxd} xd`];
	var startReversAnimationAfter = 2500;

	function reverseAnimation(headerIndex) {
		var i = headersToAnimate[headerIndex].length - 1, delay = 0;
		for (; i >= 0; i--, delay++) {
			let string = headersToAnimate[headerIndex].substr(0, i);
			setTimeout('document.getElementById("sub").innerHTML = \'' + string + '\';', 100 * delay);
		}

		setTimeout(function () { animateHeaders(headerIndex + 1) }, 100 * delay + startReversAnimationAfter);
	}
	function animateHeaders(headerIndex) {
		var i = 0;
		if (headerIndex == headersToAnimate.length) {
			headerIndex = 0;
		}
		for (; i < headersToAnimate[headerIndex].length; i++) {
			let string = headersToAnimate[headerIndex][i]
			setTimeout('document.getElementById("sub").innerHTML += \'' + string + '\';', 100 * i);
		}

		setTimeout(function () { reverseAnimation(headerIndex) }, 100 * i + startReversAnimationAfter);
	}

	animateHeaders(0)

})();