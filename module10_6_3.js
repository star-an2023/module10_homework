
const wsUri = "wss://echo-ws-service.herokuapp.com";
const btnSend=document.querySelector("#myButton");
const myInput=document.querySelector("#myInput");
const myGeo=document.querySelector("#myGeo");
let chat=document.querySelector("#myChat");

let websocket;
let codHtml;


document.addEventListener('DOMContentLoaded',()=>{
  websocket = new WebSocket(wsUri);
  websocket.onmessage = function(evt) {
      newMessage=document.createElement("div");
      newMessage.className="chat-answer";
      let myEvent=""+evt.data; 
      if (!myEvent.includes(`https://www.openstreetmap.org/#map=`,0)){
        newMessage.textContent=evt.data;
        chat.append(newMessage);
        }
      }
  websocket.onerror = function(evt) {
    newMessage=document.createElement("div");
    newMessage.className="chat-answerERR";
    newMessage.textContent="ERROR"+evt.data;
    chat.append(newMessage);
    }; 
});

//геолокация
const error = () => {
  newMessage=document.createElement("div");
  newMessage.className="chat-answerERR";
  newMessage.textContent='Невозможно получить ваше местоположение';
  chat.append(newMessage);
}


const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  const newMessage=document.createElement("div");

  newMessage.className="chat-message";
  newMessage.textContent= `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  chat.append(newMessage);
  websocket.send(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);

  
}

btnSend.addEventListener('click', () => {
    const newMessage=document.createElement("div");
    const message=myInput.value;
    newMessage.className="chat-message";
    newMessage.textContent=message;
    chat.append(newMessage);
    websocket.send(message);
  });

myGeo.addEventListener('click',() => {
  let messageGeo="";
  
  if (!navigator.geolocation) {
    messageGeo = 'Geolocation не поддерживается вашим браузером';
    newMessage=document.createElement("div");
    newMessage.className="chat-answerERR";
    newMessage.textContent="ERROR"+messageGeo;
    chat.append(newMessage);

  } else {
       navigator.geolocation.getCurrentPosition(success, error);
  }

});




