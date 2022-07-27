import React from 'react'; // , { useState, useEffect }
import '../../index.css';

const EntryImage = (props) => {
  // const [currSlide, setCurrSlide] = useState(0);
  // const numSlides = slides.length;

  // useEffect(() => {
  //   console.log('got to useEffect: ');
  // }, [currSlide]);

  // baseImagePath = 'http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/';

  const onSlimClose = event => {
    event.preventDefault();
    // console.log('close')
    props.closeSlim();
  }

  // const onSlideNext = event => {
  //   event.preventDefault();
  //   if (currSlide < (slides.length - 1)) {
  //     setCurrSlide(currSlide + 1);
  //   }
  // }

  // const onSlidePrev = event => {
  //   event.preventDefault();
  //   if (currSlide > 0) {
  //     setCurrSlide(currSlide -1);
  //   }
  // }

  return (
    <div className="lightbox"> 
      <div className="slimpop-wrapper entry-pop">
        <div className="pop-nav">
          <p>
            {/* {currSlide + 1} of {numSlides} |
            <a href="/" onClick={ event => onSlidePrev(event) }>Prev</a> | 
            <a href="/" onClick={ (event) => onSlideNext(event) }>Next</a> |  */}
            <a href="/" onClick={ event => onSlimClose(event) }>Close</a>
          </p>
        </div>

        <header>
          <h1>{props.title}</h1> {/*props.title*/}
          <p>{props.entry}</p>
          {/* <p>{slides[currSlide].caption}</p> */}
        </header>
        <div className='image-container'>
          {/* <div className='top-shade'></div> */}
          <img className='source-image'
            // src= {`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${slides[currSlide].imgName}.jpg`}
            src= {`https://img.americancenturies.org/iiif/3/aane|${props.imgName}.jp2/full/,1000/0/default.jpg`}
            alt='meaningful alt text'/>
        </div>
      </div>
    </div>
  );
} // end class

EntryImage.defaultProps = {
  title: 'Title sent from PersonalStory'
};

export default EntryImage;
















