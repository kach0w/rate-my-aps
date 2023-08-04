import React, { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_CHATGPT,
});
const openai = new OpenAIApi(configuration);

const questions = () => {
  const [textInput, setTextInput] = useState("")
  const model = "text-davinci-003"
  const prompt = "hello there how do you work"

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      max_tokens: 7,
      temperature: 0,
    });

    console.log(response)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            className='rounded-md p-2 text-[black] shadow-none'
            type="text"
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
            id="text-input"
            placeholder="Question..." />
        <br></br>
        <br></br>
        <button className='bg-[#3b82f6] py-2 px-8 rounded-lg hover:shadow-lg text-[white] hover:text-slate-200'>Submit</button>
      </form>

    </div>
  )
}

export default questions