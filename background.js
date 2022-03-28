//listen for messages

chrome.runtime.onMessgae.addListener((msg, sender, responder) =>{
    if(msg.name=="messgae"){

        //send response
        Response({text: "This is a response..."});
    

    }



});
