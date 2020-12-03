const quoteScreen = document.querySelector('.container')
let onscreen_quote = document.getElementById('quote');
let onscreen_author = document.querySelector('#author');
let container = document.querySelector('.container')
// const color = ['wheat', 'gold', 'white']

const url ="https://type.fit/api/quotes";

const req = new XMLHttpRequest;
req.open('GET', url, true);
req.send()
req.onload = () =>{
    const json = JSON.parse(req.responseText)
    onscreen_quote.innerHTML = JSON.stringify(json[0].text)
    setInterval(()=>{
        const i = Math.floor(Math.random() * (1000))
        onscreen_quote.innerHTML = JSON.stringify(json[i].text);
    },10000)
}