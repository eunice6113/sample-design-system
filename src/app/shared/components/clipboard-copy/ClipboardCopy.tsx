import * as React from 'react';
import './clipboard-copy.css';

interface IProps {
    copyText: string;
}

const ClipboardCopy: React.FC<IProps> = ({copyText}) => {

    const [isCopied, setIsCopied] = React.useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text:any) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='copyCodeBox'>
      {/* <input type="text" value={copyText} readOnly /> */}
      <textarea value={copyText} readOnly className='copyTextarea' />
      <button onClick={handleCopyClick} className='copyBtn'>
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
}
export default ClipboardCopy

