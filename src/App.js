import CommentForm from "./components/CommentForm";
import CommetList from "./components/CommentList";
import { useState } from "react";

function App() {
  const comments = [
    {id:'1',text:'test comment 1'},
    {id:'2',text:'test comment 2'}
]
  return (
    <div data-testid="myrootdiv">
        <h1>Testingg Basic</h1>
        <CommentForm/>
        <CommetList allcomments={comments}/>
    </div>
  );
}

export default App;
