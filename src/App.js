import "./App.css";
import Question from "./question";
import data from "./data";

function App() {
  return(
    <>
    <h2>FAQs</h2>
    <section>
   {data.map((info) => {
    return <Question key={info.id} {...info} />;
  })};
  </section>
  </>
  )
}

export default App;
