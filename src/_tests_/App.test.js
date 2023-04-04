import App from "../App";
import { screen, render, getByRole, logRoles, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event/dist/types/setup";


//!----- Learning Purpose-------------//!
// test("tutorial", () => {
//   render(<App />);
//   logRoles(screen.getByTestId("myrootdiv")); //!To find roles
//   const buttonEle = screen.getByRole("button", {
//     name: "click on me",
//     exact: false,
//   });
//   expect(buttonEle).toBeInTheDocument();
//   const inputEle = screen.getByRole("input");
//   expect(inputEle).toBeInTheDocument();
// });


//!----------------------------INTEGRATION TESTING------------------------------------!//

test('Comments after Submiting',()=>{
  render(<App/>)
    const checkbox = screen.getByLabelText('i agree to terms and conditions',{exact:false});
    const submitButton = screen.getByRole("button",{name:'comment',exact:false});
    const commentInput = screen.getByPlaceholderText('write your comment here',{exact:false});
    
    fireEvent.change(commentInput,{target:{value:'test comment 1'}});
    // await userEvent.type(commentInput,'test comment 1') --! async in funtion

    fireEvent.click(checkbox)

    fireEvent.click(submitButton)

    //!--Commment show here

    const commentList = screen.getByText('test comment 1',{exact:false})
    expect(commentList).toBeInTheDocument()

})


test(' Two Comments after Submiting',()=>{
  render(<App/>)
    const checkbox = screen.getByLabelText('i agree to terms and conditions',{exact:false});
    const submitButton = screen.getByRole("button",{name:'comment',exact:false});
    const commentInput = screen.getByPlaceholderText('write your comment here',{exact:false});
    
    fireEvent.change(commentInput,{target:{value:'test comment 1'}});
    // await userEvent.type(commentInput,'test comment 1') --! async in funtion
    fireEvent.click(checkbox)
    fireEvent.click(submitButton)

    fireEvent.change(commentInput,{target:{value:'test comment 2'}});
    fireEvent.click(submitButton)
    //!--Commment show here


    const commentList = screen.getAllByRole('listitem')
    // const commentList = screen.getByText('test comment 2',{exact:false})
    expect(commentList.length).toBe(2)
    
})
