import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from "../App";
import background from "../assets/blur-background.svg";

const InstructCoach = () => {

    const navigate = useNavigate();
    const {data, addData} = useContext(DataContext);

    const [sliderValue, setSliderValue] = useState(null);
    const [q2, setQ2] = useState("");

    const handleChange = (event) => {
        setSliderValue(event.target.value);
      };

    const handleClick = () => {
        if (checked && !(q2 === "") && !(sliderValue === null)) {
            addData({
                "How Creative?": sliderValue,
                "Increased AI use makes you feel": q2
              });
            navigate('/convergent/coach')
        } 
        else if (checked && !(q2 === "") && sliderValue === null) {
            alert("Please select a value for Question 1 (Slider)");
        }
        else {
            alert("Please read the instructions & answer all questions to proceed");
        }
    }

    const [checked, setChecked] = React.useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };

    return (
        <div style={{ backgroundImage: `url(${background})` }} className="text-white h-auto w-screen items-center justify-center space-y-8 p-14 bg-cover">
            <div className="flex flex-col items-center justify-center outline outline-2 outline-white rounded-[60px] px-10 py-8 bg-slate-500" style={{ backgroundColor: 'rgba(64, 64, 64, 0.17)' }}>    
            <h1 className="text-3xl font-bold mb-4">Introduction</h1>

            <p className="text-2xl mb-2">In this HIT, you will be shown three words and try to come up with a fourth word which connects all three. You will be given 6 practice tasks, then a short break, then 3 test tasks, all with 20 seconds to solve the problem.</p>

            <p className="text-2xl mb-8">For example, if shown the words <b>street, head, dark</b> the connecting word would be <b>light</b>. These are called remote associates tasks.</p>

            <p className="text-2xl mb-8">In the Practice round, to spark your imagination, you will receive guidance from AI (i.e., ChatGPT) to help you come up with the idea. This will be shown at the bottom of the screen.</p>

            <b><p className="text-2xl mb-8">Please answer the following questions:</p></b>

            <div className='text-2xl flex items-center justify-center space-x-8 mb-4'>
            <label>
                1. Adjust the slider: <i>I am more creative than <b><span>{sliderValue}%</span></b> of humans</i>
            </label>
            <input
                type="range"
                id="creative-slider"
                name="creative-slider"
                min="0"
                max="100"
                // Conditionally render the value only if sliderValue is not null
                value={sliderValue ?? ''}
                onChange={handleChange}
            />
            </div>
            
            <h2 className='text-2xl'>2. Artificial intelligence computer programs are designed to learn tasks that humans typically do. 
            Would you say the increased use of artificial intelligence computer programs in daily life makes you feel:</h2>
            <div className="flex flex-col text-2xl">
                    <label>
                        <input 
                            type="radio" 
                            name="q1"
                            value="More concerned than excited"
                            checked={q2 === "More concerned than excited"}
                            className="mr-2"
                            onChange={(e) => setQ2(e.target.value)} 
                        />
                        More concerned than excited
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="q1"
                            value="More excited than concerned"
                            checked={q2 === "More excited than concerned"}
                            className="mr-2"
                            onChange={(e) => setQ2(e.target.value)} 
                        />
                        More excited than concerned
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="q1"
                            value="Equally excited and concerned"
                            checked={q2 === "Equally excited and concerned"}
                            className="mr-2"
                            onChange={(e) => setQ2(e.target.value)} 
                        />
                        Equally excited and concerned
                    </label>
            </div>
            
            <hr style={{ marginTop: '20px', marginBottom: '20px' }} />
            
            <label className="text-2xl mt-2">
                <input type="checkbox" checked={checked} onChange={handleCheck}/>
                <b>{`  `}I understand the instructions above and am ready to continue*</b>
            </label>
            <button onClick={handleClick} className="mt-6 text-2xl outline outline-offset-2 outline-2 rounded-md font-semibold px-4 py-1 hover:bg-orange-600">SUBMIT</button>
            
            </div>
        </div>
    )
}

export default InstructCoach;