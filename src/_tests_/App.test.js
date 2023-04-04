import App from "../App";
import { screen,render, getByRole,logRoles } from "@testing-library/react";

test('tutorial', () => {
   render(<App/>)
   logRoles(screen.getByTestId("myrootdiv"))  //!To find roles 
   // const buttonEle = screen.getByRole('button',{name:'click on me',exact:false})
   // expect(buttonEle).toBeInTheDocument()
//    const inputEle = screen.getByRole('input')
//    expect(inputEle).toBeInTheDocument()  
})
