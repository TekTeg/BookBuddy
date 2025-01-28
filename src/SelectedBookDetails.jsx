import './index.css'
const SelectedBookDetails = (props) => {
  console.log(props.singleBookDetails.book)
  
  return (<><div id = "details">
    <img src={props.singleBookDetails.book.coverimage} height = "400px" width ="Auto"/>
    <div id = "book-descr">
    <h2><span className ="book-id">Title: </span><u>{props.singleBookDetails.book.title}</u></h2>
    <h4><span className ="book-id">Author: </span> <u>{props.singleBookDetails.book.author}</u></h4>
    <p><span className ="book-id">Descreption: </span>{props.singleBookDetails.book.description} </p>
    <p><span className ="book-id">Availability: </span>{props.singleBookDetails.book.available? "Yes":'No'} </p>
    </div>

  </div>
  <h2 onClick ={()=>{props.setSingleBookDetails({})}} id ="back"> ❰❰Back To The Book List❰❰</h2>
  </>
  )

}
export default SelectedBookDetails