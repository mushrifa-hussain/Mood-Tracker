import { useState } from "react";

function App(){
const[message, setmessage] = useState("");

const handleClick = (e) => {
  const clickedButton = e.target.id;
  switch (clickedButton) {
    case "happy":
      setmessage("You are feeling happy today. Keep spreading positivity and enjoy the moment!");
      break;
  
    case "sad":
      setmessage("It's okay to feel sad sometimes. Take a deep breath and remember that better moments are coming.");
      break;
    
    case "excited":
      setmessage("You are feeling excited! Use this energy to do something amazing today.");
      break;
  
    case "angry":
      setmessage("You seem a bit angry. Try to relax, take a break, and calm your mind.");
      break;
  
    case "calm":
      setmessage("You are feeling calm and peaceful. This is a perfect time to focus and think clearly.");
      break;
  
    default:
      setmessage("Click any button!");
      break;
  }
}

  return(
    <div>
      <h1>Mood Tracker</h1>
      <h2>Choose your current mood:</h2>
      <button id="happy" onClick={handleClick}> Happy 😊</button>
      <button id="sad" onClick={handleClick}>Sad 😢</button>
      <button id="excited" onClick={handleClick}>Excited 😃</button>
      <button id="angry" onClick={handleClick}>Angry 😠</button>
      <button id="calm" onClick={handleClick}>Calm 😌</button>
      <p id="message">{message}</p>
    </div>
  )
}

export default App;