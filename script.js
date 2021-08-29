const text=document.querySelector('.box2');

window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new window.SpeechRecognition();
recognition.interimResults=true;

let h5=document.createElement('h5');

recognition.addEventListener('result',(e)=>{
    let str=Array.from(e.results).map(f=>f[0]).map(f=>f.transcript).join('');
    h5.innerText=str;
    text.appendChild(h5);
    if(e.results[0].isFinal)
    {
        h5=document.createElement('h5');
    }
})
recognition.addEventListener('end',(e)=>{
    recognition.start();
})

recognition.start();