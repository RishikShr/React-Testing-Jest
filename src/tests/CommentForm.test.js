// import {render,screen, fireEvent} from '@testing-library/react'
// import CommentForm from '../components/CommentForm';
// import userEvent  from '@testing-library/user-event'

import { fireEvent, render } from "@testing-library/react"
import CommentForm from "../components/CommentForm"

// test('Initial Conditions',()=>{
//     render(<CommentForm />)
//     const commentInput = screen.getByRole("textbox")
//     expect(commentInput).toBeInTheDocument()
//     const checkbox = screen.getByLabelText('i agree to terms and conditions',{exact:false})
//     expect(checkbox).toBeInTheDocument()
//     const submitButton = screen.getByRole("button",{name:'comment',exact:false})
//     expect(submitButton).toBeDisabled()
// })

// test('Enable submit button on type and checkbox click',async ()=>{
//     render(<CommentForm />)
//     const checkbox = screen.getByLabelText('i agree to terms and conditions',{exact:false})
//     const submitButton = screen.getByRole("button",{name:'comment',exact:false})
//     const commentInput = screen.getByPlaceholderText('write your comment here',{exact:false})

//     //fireEvent.change(commentInput,{target:{value:"something"}})
//     await userEvent.type(commentInput,"something")
//     await userEvent.click(checkbox)

//     expect(submitButton).toBeEnabled()

//     await userEvent.click(checkbox)
//     expect(submitButton).toBeDisabled()
// })


test('Intial State Comment',()=>{
    render(<CommentForm/>)
    const commentInput = screen.getByRole("textbox")
    expect(commentInput).toBeInTheDocument()
    const checkbox = screen.getByLabelText(' i agree to terms and conditions',{exact:false})
    expect(checkbox).toBeInTheDocument()
    const submitButton = screen.getByRole("button",{name:'comment',exact:false})
    expect(submitButton).toBeDisabled()
})

test("Enable submit button on type and checkbox click",()=>{
    render(<CommentForm/>)
    const checkbox = screen.getByLabelText(' i agree to terms and conditions',{exact:false});
    const submitButton = screen.getByRole("button",{name:'comment',exact:false});
    const commentInput = screen.getByPlaceholderText('write your comment here',{exact:false});
    
    fireEvent.change(commentInput,{target:{value:'write something'}});
    fireEvent.click(checkbox)
    
    expect(submitButton).toBeEnabled()
    
        
    fireEvent.click(checkbox)
    expect(submitButton).toBeDisabled()
})