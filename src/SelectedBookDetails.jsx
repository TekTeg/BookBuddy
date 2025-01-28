import './index.css'
const SelectedBookDetails = (props) => {
  console.log(props)
  const borrowBook =async(id)=>{
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${props.singleBookDetails.book.id}`,{
      method:"PATCH",
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body:JSON.stringify({
        available: false
      })
    }
    )
    const result = await response.json()
    console.log(result)
  }
  const returnBook =async(id)=>{
    const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${props.singleBookDetails.book.id}`,{
      method:"PATCH",
      headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${props.token}`
      },
      body:JSON.stringify({
        available: true
      })
    }
    )
    const result = await response.json()
    console.log(result)
  }

  const handleClick =()=>{

    returnBook()
  }
  
  return (<><div id = "details">
    <img src={props.singleBookDetails.book.coverimage} height = "400px" width ="Auto"/>
    <div id = "book-descr">
    <h2><span className ="book-id">Title: </span><u>{props.singleBookDetails.book.title}</u></h2>
    <h4><span className ="book-id">Author: </span> <u>{props.singleBookDetails.book.author}</u></h4>
    <p><span className ="book-id">Descreption: </span>{props.singleBookDetails.book.description} </p>
    <p><span className ="book-id">Availability: </span>{props.singleBookDetails.book.available? "Yes":'No'} </p>
    {
      props.singleBookDetails.book.available&&props.token? 
      <button onClick={()=>borrowBook()}>Borrow Book</button>:<>
      {props.token? <button onClick={()=>handleClick()}>Return Book</button>:<p>Log in to Borrow this Book</p>}
      </>
    }


    </div>

  </div>
  <h2 onClick ={()=>{props.setSingleBookDetails({})}} id ="back"> ❰❰Back To The Book List❰❰</h2>
  </>
  )

}
export default SelectedBookDetails