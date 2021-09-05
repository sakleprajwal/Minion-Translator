var outputArea = document.querySelector("#output")

function generateUrl(text){
    return "https://api.funtranslations.com/translate/minion.json?text=" + text.value
}

function clickHandler(){
    var inputText = document.getElementById("input");

    fetch(generateUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText =  json.contents.translated;
            outputArea.innerText = translatedText;
        })
        .catch(error => {
            alert("Too Many Requests: Rate limit of 5 requests per hour exceeded.")
        })   
}

