import React, { useEffect, useRef } from 'react'
import './TextSVG.css'

export default function TextSVG() {
	
	const textRef = useRef(null)

	useEffect(() => {
		const section = document.getElementById('3')
		textRef.current.style.animationPlayState = 'paused';

		const handleScroll = event => {
			if(section.offsetTop<=window.scrollY+window.innerHeight/4){
				textRef.current.style.animationPlayState = 'running';
				textRef.current.style.transform=`scale(${(window.scrollY/window.innerHeight/2)})`;
				if(window.scrollY%2){
					textRef.current.style.opacity = 1
				} else {
					textRef.current.style.opacity = 0.6
				}
			}
		};
		
		window.addEventListener('scroll', handleScroll);

	
	}, [])
	

	
	

  return (
	<svg id='svg' viewBox='0 0 1650 400'>
		<text ref={textRef}  x='50%' y='50%' fill='transparent' stroke='white' textAnchor='middle'  >  
			TOYOTA SUPRA
		</text>
	</svg>
  )
}
