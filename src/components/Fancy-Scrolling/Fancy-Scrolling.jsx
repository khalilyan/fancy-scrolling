import React, { useEffect, useRef, useState } from 'react';
import './Fancy-Scrolling.css'
import Loading from '../Loading/Loading';

const FancyScrolling = ({frameLength,frameStart,sectionNum}) => {
  const [isLoading, setIsLoading] = useState(true);
  const html = document.documentElement;
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const frameUrls = Array.from({ length: frameLength }, (_, i) => {
    return require(`./frames/frame${(i+frameStart).toString().padStart(4, '0')}.png`);
  });
  const preloadImages = () => {
    const imagePromises = frameUrls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
      });
    });
  
    return Promise.all(imagePromises);
  };

  preloadImages().then(() => {
    setIsLoading(false);
  });

  useEffect(() => {
    const ParEl = document.getElementById(`${sectionNum}`);
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;
    
    const img = new Image();
    img.src = frameUrls[0]; //
    canvas.width = 1440;
    canvas.height = 745;

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    let lastFrameIndex = 0;

    const handleScroll = () => {
      if(window.scrollY>=ParEl.offsetTop){
      const scrollTop = html.scrollTop-ParEl.offsetTop
      const maxScrollTop = canvas.offsetHeight
      const scrollFraction = scrollTop / maxScrollTop;


      const frameIndex = Math.min(
        frameUrls.length - 1,
        Math.ceil(scrollFraction * frameUrls.length)
      );

        

      if (frameIndex !== lastFrameIndex) {
        img.src = frameUrls[frameIndex];
        context.drawImage(img, 0, 0);

        lastFrameIndex = frameIndex;
      } 

      if(frameIndex<=frameLength-3){
        canvas.style.position = 'fixed'
        canvas.style.top = `${ParEl.scrollTop}px`
      } else{
        const position = ParEl.offsetTop+ParEl.offsetHeight-canvas.offsetHeight
        canvas.style.position = 'absolute'
        canvas.style.top = `${position}px`
      }

    } else {
      canvas.style.position = 'relative'
      canvas.style.height = `${ParEl.offsetHeight}px`
    }
        
};

  preloadImages();


  window.addEventListener('scroll',handleScroll)


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [frameUrls]);


  return (
    <div className='fancy-Container'>
      {isLoading && <Loading />}
          <canvas ref={canvasRef} id={`canvas-${sectionNum}`} />
    </div>
  )
};

export default FancyScrolling;
