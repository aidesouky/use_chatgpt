import os
import openai

# Load your API key from an environment variable or secret management service
openai.api_key = "<OpenAI-API-Key>"
vcontents = "send http get request using XMLHttpRequest javascript and print out result full code"
vmodel="text-davinci-003"
response = openai.Completion.create(model=vmodel, prompt=vcontents, temperature=0.5, max_tokens=1000)

print(response["choices"][0]["text"])
