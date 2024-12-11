


import { useRef, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Recipe.css";
import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';

const Recipe = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('Loading...');
  const chefAnim = useRef();

  const generateAnswer = async () => {
    setAnswer('Loading...');
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAx54l2hsqsM3SxLsvRAJujejP8K0QxaxM",
        method: "post",
        data: {
          contents: [{ parts: [{ text: `recipe of ${question} ` }] }],
        },
      });
  
      let cleanAnswer = response.data.candidates[0].content.parts[0].text
        .replace(/\*/g, '')
        .replace(/#/g, '');
  
      cleanAnswer = cleanAnswer.replace(/([.!?])\s+/g, '$1\n\n');
      setAnswer(cleanAnswer.slice(0, 10000));
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("Error generating answer. Please try again later.");
    }
  };
  return (
    <div>
    <div className="background">
           <Header className='recpi_head' />
      <div className="container my-5 main_recipe mt-4">
        <h1 className="text-center mb-4 text-recipi">
        Let’s Cook Up Some Magic!
        </h1>
        <div className="mb-3">
          <textarea
            cols="30"
            rows="5"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="form-control text-area_recipe"
            placeholder="Enter the dish name..."
          />
        </div>
        
        <div className="text-center mb-3">
          <button
            onClick={generateAnswer}
            className="btn btn-primary button_recipe"
          >
            Get Recipe 😎
          </button>
        </div>

        <div className="p-3 answer_recipe bg-light border rounded">
          <pre>{answer}</pre>
        </div>
      </div>
     </div>
      <Footer/>
    </div>
  );
};

export default Recipe;