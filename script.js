//send messages to the background

chrome.runtime.sendMessage({name: "FetchWord"}, (response))
{
    //wait for response
   
    console.log(response)
    document.querySelector('h1').innerHTML = response.word;
        document.querySelector('h1').innerHTML = response.word;
    //update display on content script


   
}
