// getting elements 

var button = document.getElementById("submit-button");
var questionSpace = document.getElementById("question-space");

// function that run when submit button clicks

button.onclick = function (e) {

    // printing question

    console.log(questionSpace.value);

    // sending questian to the server

    axios.post("http://localhost:3000/form_submission", questionSpace.value).then((responce) => {

        // printing the responce from the server

        console.log(responce.data);

        // clearing questionSpace 

        questionSpace.value = "";

    }).catch((error)=>{
        
        // printin error that gets from server 

        console.log("ERROR");
        console.log(error);

        // clearing error gets from server 

        questionSpace.value = "";
    });
}