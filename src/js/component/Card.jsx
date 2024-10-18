import React from "react";

const Card = props => {
    return (
        <div className="card mt-3 m-auto" style={{width:"18rem"}}>
            <img src={props.url} className="card-img-top" alt="The Weeknd"/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.content}</p>
                <a href="#" className="btn btn-success">{props.btn}</a>
            </div>
        </div>
    )
}

export default Card