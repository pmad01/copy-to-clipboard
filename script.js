const copyToClipboard = function (text) {
	return new Promise(async (resolve, reject) => {
		try {
			const cleanedText = text.textContent.replace(/\s+/g, ' ').trim()
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(cleanedText);
				resolve();
			} else {
				const textArea = document.createElement('textarea');
				textArea.value = cleanedText;
				textArea.style.position = 'fixed';
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand('copy');
				document.body.removeChild(textArea);
				resolve();
			}
		} catch (err) {
			reject(err);
		}
	});
}

const copyText = document.getElementById('copyText');
const copyBtn = document.getElementById('copyButton');
copyBtn.addEventListener('click', async () => {
	const copiedText = await copyToClipboard(copyText);
	return copiedText;
});

