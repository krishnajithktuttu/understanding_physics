// getting elements 

var button = document.getElementById("submit-button");

var questionSpace = document.getElementById("question-space");

// function that run when submit button clicks

button.onclick = function (e) {

    console.log(questionSpace.value);       // consoling question

    // sending question to the server

    axios.post("http://localhost:3000/form_submission", questionSpace.value).then((responce) => {

        window.alert("Question submitted");     // alerting that question has been sended to the server

        console.log(responce.data);     // consoling the responce from the server
        
        questionSpace.value = "";       // clearing questionSpace 

    }).catch((error)=>{
        
        // consoling error that gets from server 

        console.log("ERROR");
        console.log(error);

        questionSpace.value = "";       // clearing questionSpace
    });
}