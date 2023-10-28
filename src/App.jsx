import './App.css';
import TextSVG from './assets/TextSVG';
import FancyScrolling from './components/Fancy-Scrolling/Fancy-Scrolling';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './components/Model/Mode3D';
import { Suspense } from 'react';
import { useState } from 'react';
import { Garage } from './components/Model/Garage';

function App() {
  const [view, setView] = useState(false);
  const handleView = () =>{
    setView(true)
  }
  window.addEventListener('keydown',(e)=>{
    if(e.keyCode===27){
      setView(false)
    }
  })
  return (
    <div className="App">
      <section id='1' className='section1'>
        <FancyScrolling  frameLength={110} sectionNum={1} frameStart={52} />
      </section>

      <section className='section2 garageDoor'>

      </section>

      <section id='3' className='section3'>
        <TextSVG/>
      </section>

      <section id='4' className='section4'>
        <FancyScrolling frameLength={149} sectionNum={4} frameStart={876}/>
      </section>

      {/* <section id='5' className='section5'>
        
        <label>{view===false ? 'Click to view' : 'Press Esc to exit view' }</label>
       <Canvas onClick={handleView} camera={{position: [-2.4,0.6,2.3]}} >
      
       {view && <OrbitControls/>}

        <color attach={'background'} args={['black']}  />
        <spotLight
          position={[1.480,8.607,0.281]}
          angle={0.2}
          
          penumbra={1}
          intensity={1}
          castShadow
        />

    
        <directionalLight position={[-0.5,3.2,2.5]} lookAt={[0,1,0]} color={'white'}/>
        <directionalLight position={[-1,3.2,-2.5]}  lookAt={[0,1,0]} color={'white'}/>

        <directionalLight position={[1.5,3.2,2.5]} lookAt={[0,1,0]} color={'white'}/>
        <directionalLight position={[1,3.2,-2.5]}  lookAt={[0,1,0]} color={'white'}/>

        
        
        <Suspense fallback={null}>
          <Model/>
          <Garage/>
        </Suspense>
       </Canvas>
      </section> */}

    </div>
  );
}

export default App;
