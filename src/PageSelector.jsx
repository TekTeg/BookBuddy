import SelectedBookDetails from "./selectedBookDetails"
import BookList from "./BookList"
import { useState } from "react"
const PageSelector =(props)=>{
  const [singleBookDetails, setSingleBookDetails] = useState({})
  console.log(props)
  
  
return(<>

{
      singleBookDetails.book? <SelectedBookDetails token={props.token} singleBookDetails ={singleBookDetails} setSingleBookDetails = {setSingleBookDetails}/>:
      <BookList setSingleBookDetails = {setSingleBookDetails} token={props.token}/>
  
    }


</>

)
}
export default PageSelector