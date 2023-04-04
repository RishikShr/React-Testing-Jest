// import {render,screen, fireEvent} from '@testing-library/react'
// import CommetList from '../components/CommetList';

import { screen , render } from "@testing-library/react"
import CommentList from "../components/CommentList"


// test('commnets are not available',()=>{
//     render(<CommetList allcomments={[]} />)
//     const h2Element = screen.getByText('no comments',{exact:false})
//     expect(h2Element).toBeInTheDocument()
// })

// test('List all comments',()=>{
//     const comments =  [
//             {id:1,text:"Comment 1"},
//             {id:2,text:"Comment 2"},
//         ]
//     render(<CommetList allcomments={comments} />)
//     const h2Element = screen.queryByText('no comments',{exact:false})
//     expect(h2Element).not.toBeInTheDocument()

//     const commentLi = screen.getAllByRole('listitem')
//     expect(commentLi.length).toBe(comments.length)

// })

test('comments are not available',()=>{
    render(<CommentList allcomments={[]}/>)
    const h2Element = screen.getByText("comments are not available",{exact:false})
    expect(h2Element).toBeInTheDocument()
})
const comments = [
    {id:'1',text:'Comment 1'},
    {id:'2',text:'Comment 2'}
]
test('comments are available',()=>{
    
    render(<CommentList allcomments={comments}/>)
    const h2Element = screen.queryByText("comments are not available",{exact:false})
    expect(h2Element).not.toBeInTheDocument()

    const commentsList = screen.getAllByRole('listitem')
    expect(commentsList.length).toBe(comments.length)  //Primitive value
    // expect( commentsList.length).toEqual(2)  // for object,array
})