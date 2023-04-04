import CommentForm from "./components/CommentForm";
import CommetList from "./components/CommentList";
import { useState } from "react";

function App() {
  const  [comments,setComments] = useState([])
  return (
    <div data-testid="myrootdiv">
        <h1>Testingg Basic</h1>
        <CommentForm setComments={setComments}/>
        <CommetList allcomments={comments}/>
    </div>
  );
}

export default App;
