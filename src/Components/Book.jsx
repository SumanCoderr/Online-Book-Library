import { Link } from "react-router-dom";


function Book(props){
    return(
        <div className="border-1 w-52 flex items-center flex-col p-3 bg-green-100 ">
        <img className="w-30 h-40" src={props.bookDetails.coverImage} alt="coverImage" />
        <div >
            <h2 className="p-1 font-semibold">Title : {props.bookDetails.title}</h2>
            <h2>Author: {props.bookDetails.author}</h2>
        </div>
        <button className="border-2 m-2 rounded-3xl p-2 bg-blue-400 hover:bg-blue-300 cursor-pointer"><Link to={`/bookdetails/${props.bookDetails.id}`}>View Details</Link></button>
        </div>
    )
}

export default Book;