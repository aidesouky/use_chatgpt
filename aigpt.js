var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var apiKey= "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";
xhr.open("POST", "https://api.openai.com/v1/completions");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer "+apiKey);
var vprompt = "write code to send http request in c++";
var body = JSON.stringify({
    "model":"text-davinci-003",
    "prompt":vprompt,
    "max_tokens": 1000,
    "temperature": 0.5
});
xhr.onload = function(){
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(JSON.parse(xhr.responseText)["choices"][0]["text"]);
  } else {
    console.log("Error: "+ xhr.status);
  }
};
xhr.send(body);