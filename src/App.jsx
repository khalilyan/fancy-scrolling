import './App.css';
import TextSVG from './assets/TextSVG';
import FancyScrolling from './components/Fancy-Scrolling/Fancy-Scrolling';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './components/Model/Mode3D';
import { Suspense } from 'react';
import { useState } from 'react';

function App() {
  const [view, setView] = useState(false);
  const handleView = () =>{
    setView(true)
  }
  window.addEventListener('keydown',()=>{
    setView(false)
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

      <section id='5' className='section5'>
        
        <label>{view===false ? 'Click to view' : 'Press Esc to exit view' }</label>
       <Canvas onClick={handleView}  camera={{position: [1.1,1.1,3]}} >
      
       {view && <OrbitControls/>}

        <color attach={'background'} args={['#030303']}  />
        <hemisphereLight intensity={1}/>
        <directionalLight color={'white'} position={[15, 50, 20]} castShadow shadow-mapSize={1024} />
        <directionalLight color={'silver'} position={[0, 50, 4.3]} castShadow shadow-mapSize={1024} />
        <spotLight
          position={[0,10,10]}
          angle={1.3}
          penumbra={2}
          intensity={5}
          castShadow
        />
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
       </Canvas>
      </section>

    </div>
  );
}

export default App;
