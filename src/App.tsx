import currentCalendarLogo from './assets/currentCalendarLogo.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="flex items-center justify-center min-h-[30vh]"> 
        <img 
          src={currentCalendarLogo} 
          className="h-[20vh] w-[20vh] object-cover rounded-full shadow-lg" 
          alt="Current Calendar logo" 
        />
      </div>
      <h1>Current Calendar</h1>
      
    </>
  )
}

export default App
