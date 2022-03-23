// getting elements 

var button = document.getElementById("submit-button");
var questionSpace = document.getElementById("question-space");

// function that run when submit button clicks

button.onclick = function (e) {

    // consoling question

    console.log(questionSpace.value);

    // sending question to the server

    axios.post("http://localhost:3000/form_submission", questionSpace.value).then((responce) => {

        // consoling the responce from the server

        console.log(responce.data);

        // clearing questionSpace 

        questionSpace.value = "";

    }).catch((error)=>{
        
        // consoling error that gets from server 

        console.log("ERROR");
        console.log(error);

        // clearing questionSpace

        questionSpace.value = "";
    });
}