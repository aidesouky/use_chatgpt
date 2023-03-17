async function func(){
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "<OpenAI-API-Key>",
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model:"text-davinci-003",
  prompt: "write code to send http post request in js",
  temperature: 0.5,
  max_tokens: 500,
});
console.log(response.data["choices"][0]["text"]);
}
func();
//test