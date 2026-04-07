import { useEffect, useState } from 'react'
import 'aframe'

function ARScene({ color }) {
  return (
    <a-scene
      xr-mode="ar"
      renderer="colorManagement: true"
      embedded
      style={{ width: '100%', height: '80vh' }}
    >
      <a-box id="box" position="0 0 -0.8" color={color} scale="0.3 0.3 0.3"></a-box>
      <a-entity camera look-controls></a-entity>
    </a-scene>
  )
}

function VRScene({ color }) {
  // classroom placeholder can be replaced with src/assets/classroom.jpg
  return (
    <a-scene vr-mode-ui="enabled: true" style={{ width: '100%', height: '80vh' }}>
      <a-assets>
        <img id="classroom" src="https://cdn.aframe.io/a-painter/images/roundsky.jpg" alt="classroom background" crossOrigin="anonymous" />
      </a-assets>
      <a-sky src="#classroom"></a-sky>
      <a-box id="box" position="0 1.2 -1.5" color={color} scale="0.4 0.4 0.4"></a-box>
      <a-entity camera position="0 1.6 0" look-controls></a-entity>
    </a-scene>
  )
}

export default function App() {
  const [clr, setClr] = useState('#4CC3D9')
  const [mode, setMode] = useState('ar')

  const toggleColor = () => setClr(c => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))
  const switchMode = () => setMode(m => (m === 'ar' ? 'vr' : 'ar'))

  useEffect(() => {
    const box = document.querySelector('#box')
    if (box) {
      box.setAttribute('color', clr)
    }
  }, [clr, mode])

  return (
    <main id="scene-wrap">
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <button onClick={toggleColor}>Toggle color</button>
        <button onClick={switchMode}>Switch to {mode === 'ar' ? 'VR' : 'AR'} mode</button>
      </div>
      {mode === 'ar' ? <ARScene color={clr} /> : <VRScene color={clr} />}
    </main>
  )
}
