import { Link } from "react-router-dom";


function Book(props){
    return(
        <div className="border-1 w-52 flex items-center flex-col ">
        <img className="w-30 h-40" src={props.bookDetails.coverImage} alt="coverImage" />
        <div>
            <h2>Title : {props.bookDetails.title}</h2>
            <h2>Author: {props.bookDetails.author}</h2>
        </div>
        <button><Link to={`/bookdetails/${props.bookDetails.id}`}>View Details</Link></button>
        </div>
    )
}

export default Book;