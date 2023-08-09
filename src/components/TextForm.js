import React,{useState} from 'react'
 

export default function TextForm(props) {
    const[text,setText]=useState('Enter Your Text Here to Analyze');
    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);
    let countVo=0;
  //  text="new text"; //Wrong way to change the state
    //setText("new text") ;//correct way to change the state
    const handleUpClick=()=>{
        // console.log("You Clicked on Uppercase "+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.handleshowAlert("Converted to Upper case","success");
        if (text.charAt(count).match(/[aeiouAEIOU]/))
            countVo++;
        setCount(countVo);
       
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.handleshowAlert("Converted to lower case","success")
    }
    const handleClClick=()=>{
        let newtext="";
        setText(newtext);
        props.handleshowAlert("Text cleared","success");

    }
    const speak=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text=text;
        msg.pitch=1;
        ;
        window.speechSynthesis.speak(msg);
        props.handleshowAlert("speaking","success");
    }
    const handleVoClick=()=>{
        for(let count=0;count<=text.length;count++){
            if(text.charAt(count).match(/[aeiouAEIOU]/))
            countVo++;
            setCount(countVo);
          
        }

    }

    const handleCoClick=()=>{
          setCount1(text.length-count);
         
    }
    const handleRevClick=()=>{
        let newtext=text.split("").reverse().join("");
        setText(newtext);
        props.handleshowAlert("Text Reversed","success");
    }
    const handleWhiteSpaceClick = () => {
        let updated_text = text.replace(/\s+/g,'')
        setText(updated_text);
        props.handleshowAlert("Removed white spaces","success")
    }
    const handleCopyClick=()=>{
        let txt=document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.handleshowAlert("copied to Clipboard","success");

    }
    const handleExtraSpaceClick=()=>{
        let newText=text.split(/[ ]+/);
        props.handleshowAlert("Removed Extra spaces","success");
        setText(newText.join(" "));
      

    }



  return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3">
                  <textarea className="from-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(46 54 55)' : 'white', color: props.mode === 'dark' ? 'white' :'rgb(46 54 55)'}} id="myBox" value={text} onChange={handleOnChange} rows="10" cols="120"></textarea>
        </div>
        <button className={`btn btn-${props.mode} mx-1`}  onClick={handleUpClick}  >Convert to UpperCase</button>
        <button className={`btn btn-${props.mode}`} onClick={handleLoClick}>Convert to LowerCase</button>
        <button className={`btn btn-${props.mode} mx-1`} onClick={handleClClick}>Clear Text</button>
        <button type="submit" onClick={speak} className={`btn btn-${props.mode}`}>SpeakText</button>
        <button onClick={handleVoClick} className={`btn btn-${props.mode} mx-1 my-2`} > Vowel Count</button>
        <button onClick={handleCoClick} className={`btn btn-${props.mode} `} >Consonant Count</button>
        <button onClick={handleRevClick} className={`btn btn-${props.mode} mx-1  my-2`} >Reverse Text</button>
              <button onClick={handleWhiteSpaceClick} className={`btn btn-${props.mode} my-2`} >_Space_</button>
        <button onClick={handleCopyClick} className={`btn btn-${props.mode} mx-1  my-2`} >Copy Text</button>
        <button onClick={handleExtraSpaceClick} className={`btn btn-${props.mode} mx-1  my-2`} >Remove Extra Space</button>



    </div>
          <div className="container my-3"  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").length>1?text.split(" ").length-1:0} words and {text.length} characters </p>
        <p> {0.008* text.split(" ").length} minutes take to read</p>
        <h2>{text.length>0?'Preview':'Enter something in the textbox to preview here'}</h2>
        <p>{text}</p>
        <div>
            <h3>You have entered:</h3>
            <p>{count}-Vowels</p>
            <p>{count1}-Consonants</p>

        </div>

    </div>
     </>
  )
}
 