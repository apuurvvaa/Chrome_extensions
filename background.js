//listen for messages

chrome.runtime.onMessage.addListener(msg, sender, response) 
{
    if(msg.name == "FetchWord"){

        const apiKey = '99b3ow8205dp464m7b6ypj59s1x1712zcoaro5877bffy4cxk'
        const dateToday = new Date().toISOString().slice(0, 10); //to only use first ten characters of the string 
        const apiCall = 'http://api.wordnik.com/v4/words.json/Word_of_the_day?date'+dateToday+'&api_key='+apiKey;
        


//send respond
        response({api: apiCall, date: dateToday})
    

        
    }
};
