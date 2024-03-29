

// MIT License

// Copyright (c) 2022 John Oseni

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

const recordingProgress = document.querySelector('.recordingProgress');
const microPhone = document.querySelector('.microPhone');
const diamond = window.speechSynthesis.getVoices().filter(voice => voice.name === 'Diamond')[0]

// Checking the If statement here

if (typeof(String.prototype.localeCompare) === "undefined") {
    String.prototype.localeCompare = function(str, locale, options) {
        return((this === str) ? 0 : ((this> str) ? 1 : -1));
    };
}

// Adding eventlistener here

var logus = 1;
let recordingNow = false;
microPhone.addEventListener('click', listenToSpeech)

// clear the input

function clearInput () {
    chatInput.value = ''
}

// Pass a message accross

function passMessage() {
    let passedMessage = chatInput.value
    showMessage(passedMessage);
}

// function to display the message

function showMessage (response) {
    console.log('Message passed to the frontend'); 
    // Response answer
    response_answer = document.getElementById("messageResponse") // the word in the tag should be the text as the id in the html frontend tag
    var compare = response.toString().localeCompare('C plus plus folder')
    if (compare == 0 ) {rl
        response = 'C plus plus folder'
    } 
    // To display the response parsed by the codes to the user
    element_value = `
    User: ${response}
    `
    response_answer.innerHTML = element_value;

    var res_in_json = {"text": response}
    $.ajax({
        type: "POST",
        contentType: "application/json;charset=utf-8",
        url: "http://127.0.0.1:5000/print/name", //localhostURL
        traditional: "true",
        data: JSON.stringify(res_in_json),
        dataType: "json",
        success:function(response){
          //speakResponse(response.response);
          var p=response.response.toString().localeCompare("python running!")
          var c=response.response.toString().localeCompare("running c++")
          var ph=response.response.toString().localeCompare("running php")
          var sw=response.response.toString().localeCompare("running swift")
          if(p==0){
            flag=1
            console.log(flag)
          }
          else if(p==-1 || p==1){
            flag=flag
            console.log(flag)
          }
          if(c==0){
            flag=0
            console.log(flag)
          }
          else if(c==-1 || c==1) {
            flag=flag
            console.log(flag)
          }
          if(ph==0){
            flag=2
            console.log(flag)
          }
          else if(ph==-1 || ph==1) {
            flag=flag
            console.log(flag)
          }
          if(sw==0){
            flag=3
            console.log(flag)
          }
          else if(sw==-1 || sw==1){
            flag=flag
            console.log(flag)
          }
          if(flag==1){
           outputResponse(response.response);
          }
          else if(flag==0){
            outputResponseC(response.response);
          }
          else if(flag==2){
            outputResponsePhp(response.response);
          }
          else if(flag==3){
            outputResponseSwift(response.response);
          }
        }
        });
}

function outputResponse (response) {
    let newChat = document.createElement('p')
    newChat.innerHTML = `${response}`
      chatMessages = document.getElementById("chat-input");
      chatMessages.append(newChat)
      EnlighterJS.Util.Init('p', null, {
        indent: 4,
        language: 'python',
        theme: 'Beyond'
    });
}

function outputResponsePhp (response) {
    let newChat = document.createElement('p')
    newChat.innerHTML = `${response}`
      chatMessages = document.getElementById("chat-input");
      chatMessages.append(newChat)
      EnlighterJS.Util.Init('p', null, {
        indent: 4,
        language: 'php',
        theme: 'Beyond'
    });
}

function outputResponseC (response) {
    let newChat = document.createElement('p')
    newChat.innerHTML = `${response}`
      chatMessages = document.getElementById("chat-input");
      chatMessages.append(newChat)
      EnlighterJS.Util.Init('p', null, {
        indent: 4,
        language: 'cpp',
        theme: 'MooTwo'
    });
  }


  function outputResponseSwift (response) {
    let newChat = document.createElement('p')
    newChat.innerHTML = `${response}`
      chatMessages = document.getElementById("chat-input");
      chatMessages.append(newChat)
      EnlighterJS.Util.Init('p', null, {
        indent: 4,
        language: 'swift',
        theme: 'MooTwo'
    });
  }

  function sayResponse (response) {
    let utterance = new SpeechSynthesisUtterance(response);
    utterance.voice = samantha
    window.speechSynthesis.speak(utterance)
    displayResponse(response)
  }

  function speakResponse (response) {
    let utterance = new SpeechSynthesisUtterance(response);
    utterance.voice = samantha
    window.speechSynthesis.speak(utterance)
    displayResponse(response)
  }
  
  function listenToSpeech () {
          console.log(isRecording)
          if (isRecording){
            isRecording = false
            recordingStatus.innerText = 'Say your querry :)'
            return 0;
          }
          isRecording = true
          recordingStatus.innerText = 'Listening..........'
          var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
          var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
          var recognition = new SpeechRecognition()
  
          recognition.lang = 'en-US';
          recognition.interimResults = false;
          recognition.maxAlternatives = 1;
          recognition.start()
  
          recognition.onspeechstart = function() {
              console.log('Speech has been detected');
          }
  
          recognition.onresult = function(event) {
              let last = event.results.length - 1;
              let speech = event.results[last][0].transcript;
       
              postChatMessage(speech)
            
              console.log('Result received: ' + speech + '.');
              console.log('Confidence: ' + event.results[0][0].confidence);
          }
  
          recognition.onspeechend = function() {
              recordingStatus.innerText = 'speak your querry :)'
              console.log('Speech has stopped being detected');
          }
  
          recognition.onerror = function(event) {
              console.log('Error occurred in recognition: ' + event.error);
          }
}

document.querySelector('.botButton').addEventListener('click', function (){
    console.log('clicked')
    document.querySelector('.botModal').classList.toggle('open')
  })
  console.log(flag)