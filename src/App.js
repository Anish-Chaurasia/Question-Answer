import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import projectData from './projectData';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";


function App() {
  const [data, setData] = useState(projectData);



  function showing(x) {
    const newdata = data.map((obj, ind) => {
      if (ind === x) {
        if (obj.id === true) {
          return { ...obj, id: false }
        }
        else {
          return { ...obj, id: true }
        }
      }
      return obj;
    });

    setData(newdata);
  }




  return (<div className="outercontainer">
    <div className="oitem" id='oitem1'><h3>Questions And Answer About React js</h3></div>
    <div className="oitem" id='oitem2'>




      {
        data.map((item, index) => {
          return (
            <div className='innerItem'>
              <div className="inneritems">
                <h5 id='paraqstn'>{item.question}</h5>
                {item.id === false && <button key={index} type='button' onClick={() => showing(index)}><IoIosArrowDropdown /></button>}
                {item.id === true && <button key={index} type='button' id='afterclk' onClick={() => showing(index)}><IoIosArrowDropup /></button>}
                {item.id && <p>{item.answer}</p>}
              </div>

            </div>
          )
        })
      }
    </div>
  </div>


  )
}

export default App;
