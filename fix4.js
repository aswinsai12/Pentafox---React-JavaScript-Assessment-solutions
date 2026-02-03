import { useEffect ,useState,useRef} from "react";

function App(){
    const[darkMode,setDarkMode]=useState(false);
    const currDarkMode=useRef(darkMode);//for stroing current state 
    useEffect(()=>{
        currDarkMode.current=darkMode.current;
    },[darkMode]);
    const handleStart=()=>{
        setTimeout(()=>{
            alert(`Dark Mode is ${darkMode.current}`);
        },5000)
    }
    return(
        <div>
            <input type="checkbox" checked={darkMode.current} onChange={e=>setDarkMode(e.target.checked)}/>
            <button onClick={handleStart}>Start Timer</button>
        </div>
    )
}
//done