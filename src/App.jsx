import { useState} from "react"
import SelectedBookDetails from "./selectedBookDetails"
import BookDetails from "./BookDetails"
import './index.css'
function App() {
  const [singleBookDetails, setSingleBookDetails] = useState({})
  return (

    <>{
      singleBookDetails.book? <SelectedBookDetails singleBookDetails ={singleBookDetails} setSingleBookDetails = {setSingleBookDetails}/>:
      <BookDetails setSingleBookDetails = {setSingleBookDetails}/>
  
    }
    </>
  )
}

export default App
