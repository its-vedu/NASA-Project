import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { div } from "three/webgpu";


function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [IsChatOpen, setIsChatOpen]=useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n wait few seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  const [showComponent, setShowComponent] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setButtonClicked(true);
        setShowComponent(true);
        setIsChatOpen(true);
    };


    //cancel button
    const cancelbutton=()=>{
      setIsChatOpen(false);
    } 


  return (
    <>{IsChatOpen ?<div className="bg-black from-blue-50 to-blue-100  p-3  justify-center items-center flex  ">
      <form
        onSubmit={generateAnswer}
        className="bg-black flex-1 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-lg bg-black py-6 px-4 transition-all duration-500 transform hover:scale-105"
      > <div className="flex">
          <button onClick={cancelbutton} className="flex-1 px-4 border-2 border-red-500 rounded margin-4" >Cancel</button>
          <span className="flex-1 bg-black text-4xl font-bold text-blue-500 mb-4 animate-bounce ">Chat AI</span>
        </div>

        <textarea
          required
          className="bg-black border border-gray-100 rounded w-full my-2 min-h-fit p-3 transition-all duration-300 focus:border-blue-400 focus:shadow-lg"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything"
        ></textarea>
        <button
          type="submit"
          className={`bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 ${
            generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={generatingAnswer}
        >
          Generate answer
        </button>
        
      </form>
      <div className=" flex-1 w-full h-16 rounded-lg border-2 border-gray-100">
        <p>{answer}</p>
      </div>
      
    </div>:
    <div className="flex justify-center ">
    <div className="bg-green-900 text-white w-64 justify-cent mx-96  rounded-full text-center  px-12 hover:border-yellow-700 border-2 transition ease-in duration-700">
            
                <button className="circle-button text-center h-10   animate-pulse" onClick={handleClick}>
                    Ask Me !
                </button>

        </div></div>}
    
    </>
  );
}

export default Chat;
