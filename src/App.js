import logo from './logo.svg';
import './App.css';

var startTime, endTime, elapsed;

function calculate() {
  var timeDiff = endTime - startTime; //in ms 
  // strip the ms 
  timeDiff /= 1000; 
  
  // get seconds 
  var seconds = Math.round(timeDiff);
  elapsed = seconds;
}

function App() {
  return (
    <div className="App">
      <br />
      <label>
          Start Time: <input name="startTime" value={startTime} />
     </label>
      <br />
      <br />
      <label>
          End Time: <input name="endTime" value={endTime} />
     </label>
     <br />
     <br />
     <button onClick={calculate}>Calculate</button>
     <br />
     <br />
     Elapsed Time = {elapsed} seconds
    </div>
  );
}

export default App;
