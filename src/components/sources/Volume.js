import React,  {useState} from 'react';
import EntryImage from './EntryImage'
import '../../index.css';

const Volume = () => {
  const [isShowing, setIsShowing] = useState(false);

  const onSlideLinkClick = (event) => {
    event.preventDefault();
    setIsShowing(true);
  }

  const onSlideClose = () => {
    setIsShowing(false);
  }

  return (
    <div className='none'>
      <h1>List of volume entries here</h1>

      <h2>Source: Elijah Williams Day Book (temp)</h2>
      <h3>Volume: 3/1757 - 10/1757 (temp)</h3>

      <table>
        <tr>
          <th>detail</th>
          <th>Date</th>
          <th>AA Name</th>
          <th>Owner</th>
          <th>Image</th>
          <th>Entry</th>
        </tr>
        <tr>
          <th><a href="/" onClick={onSlideLinkClick}>View</a></th>
          <th>1757 Jul 2</th>
          <th>Abijah Prince</th>
          <th>Free</th>
          <th>√</th>
          <th>Abijah Prince Cr by 1 day mowing 2/8</th>
        </tr>
      </table>

      {isShowing && 
        <EntryImage 
        title="1757 July 2"
        imgName="L22-506-013"
        entry="Abijah Prince Cr by 1 day mowing 2/8"
        closeSlim = {onSlideClose}
      />};

    </div>
  )
}

export default Volume;