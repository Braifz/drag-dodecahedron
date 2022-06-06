import ThreeScene from './components/ThreeScene'
import DraggableDodecahedron from './components/DraggableDodecahedron'
import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <ThreeScene>
        <DraggableDodecahedron/>
        <ambientLight />
        <pointLight position={[10,20,10]} color={"white"} intensity={1}/>
      </ThreeScene>
    </div>
  )
}

export default App
