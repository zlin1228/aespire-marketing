const copyToClipboard = (text: string): Promise<void> => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);

      if (successful) {
        resolve();
      } else {
        reject(new Error('Unable to copy text'));
      }
    } catch (err) {
      document.body.removeChild(textarea);
      reject(err);
    }
  });
};

export default copyToClipboard;
