import React, { useState } from "react";
import data from "./data";
import "./App.css";

export default function Question({id, title, info}) {
  const [answer, setAnswer] = useState(true);
  return (
    <div>
          <li>
            <ul key={id}>
              <div className="btn">
                <h3>{title}</h3>
                {answer ? (
                  <button onClick={() => setAnswer(false)}> Show Answer</button>
                ) : (
                  <button onClick={() => setAnswer(true)}> Hide Answer</button>
                )}
              </div>
              {answer ? <p></p> : <p>{info}</p>}
            </ul>
          </li>
          </div>
        )}
    
