
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
function App() {

  const qoute=[
    {text:'" Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',author:'- Jamie Paolinetti',color:'green'},
    {text:"kaaaaaaa",author:'Ncib',color:'red'},
    {text:"houssem",author:'houssem',color:'black'}
  ];
  let rand=Math.floor((Math.random() * qoute.length));;
  
  const [incr,setIncr]=useState(rand);
  
  const handleChange=()=>{
    if(incr===qoute.length-1){
       setIncr(0);
    }else{
       setIncr(incr+1);
    }
  };
  let tweetLink="twitter.com/intent/tweet?text="+qoute[incr].text+"&author="+qoute[incr].author;
  return (
      <main className='container-fluid vh-100 d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:qoute[incr].color,color:qoute[incr].color}}>
        <section id='quote-box' className="bg-light p-4 w-50">
          <p id="text">{qoute[incr].text}</p>
          <h3 id="author" className="text-end">{qoute[incr].author}</h3>
          <div className="row ">
            <div className="col">
              <a href={tweetLink} target="_blank" rel="noreferrer" id="tweet-quote" className="btn text-white" style={{backgroundColor:qoute[incr].color}}>twitter</a>
              <a href="https://www.tumblr.com/explore/trending?source=homepage_explore" className="btn text-white" style={{backgroundColor:qoute[incr].color}}>tumblr</a>
            </div>
            <div className="col text-end" >
              <button id="new-quote" className="btn text-white" onClick={handleChange} style={{backgroundColor:qoute[incr].color}}>New quote</button>
            </div>
          </div>
        </section>
      </main>
  );
}

export default App;
