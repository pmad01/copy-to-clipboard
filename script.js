const copyToClipboard = async function (text) {
	try {
		if (navigator.clipboard) {
			await navigator.clipboard.writeText(text);
			console.log('Content copied to clipboard');
		} else {
			const textArea = document.createElement('textarea');
			textArea.value = text;
			textArea.style.position = 'fixed';
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
			console.log('Content copied to clipboard (older browser compatible)');
		}
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
}

const copyText = document.getElementById('copyText');
const copyBtn = document.getElementById('copyButton');

copyBtn.addEventListener('click', () => {
	return copyToClipboard(copyText.innerHTML);
});