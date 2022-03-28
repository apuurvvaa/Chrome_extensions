//send message to background

chrome.runtime.sendMessage({name: "fetchWords"}, (response) => {
    //wait for response 

    const apiKey = 'OUR-API-KEY';
    const dateStr = new Date().toISOString().slice(0, 10);//
    const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey;
    //call api..
    //wait for response
    //send the response

    //update display on content script
    document.querySelector('body').innerHTML=response.text;

});
