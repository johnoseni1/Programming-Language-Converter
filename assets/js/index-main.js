

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
    
}