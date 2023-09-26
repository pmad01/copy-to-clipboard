// to test what happens if something goes wrong with the clipboard api
// navigator.clipboard.writeText = async () => {
// 	throw new Error('Clipboard API not available or not working.');
// }
const copyToClipboard = async function (text) {
	const cleanedText = typeof text === 'string'
		? text.replace(/\s+/g, ' ').trim()
		: text.textContent.replace(/\s+/g, ' ').trim();
	if (navigator.clipboard) {
		await navigator.clipboard.writeText(cleanedText);
	} else {
		const textArea = document.createElement('textarea');
		textArea.value = cleanedText;
		textArea.style.position = 'fixed';
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand('copy');
		document.body.removeChild(textArea);
	}
}

const stringToCopy = 'Chaos in the first half, chaos in the second half. Chaos in the Liverpool defence and chaos in the Newcastle defence. Chaos in Trent Alexander-Arnold’s mind, in Virgil van Dijk’s mind, perhaps in the referee’s mind. Chaos so thoroughly chaotic that it rendered the most chaotic Premier League player of all into a clanking totem of clinically icy finishing. Football is a sport we try to rationalise. We try to explain it with data and diagrams.';

copyToClipboard(stringToCopy)
	.then(() => alert('success'))
	.catch(() => alert('failed'));

//comparing the text to be copied with what is in the clipboard after the copy
// setTimeout(async () => {
// 	await copyToClipboard(stringToCopy);
// 	const text = await navigator.clipboard.readText();
// 	console.log(stringToCopy === text);
// }, 3000);

