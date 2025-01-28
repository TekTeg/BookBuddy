import SelectedBookDetails from "./selectedBookDetails"
import BookList from "./BookList"
import { useState } from "react"
const PageSelector =()=>{
  const [singleBookDetails, setSingleBookDetails] = useState({})
return(<>

{
      singleBookDetails.book? <SelectedBookDetails singleBookDetails ={singleBookDetails} setSingleBookDetails = {setSingleBookDetails}/>:
      <BookList setSingleBookDetails = {setSingleBookDetails}/>
  
    }


</>

)
}
export default PageSelector