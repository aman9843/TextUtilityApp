import React from 'react'

function Alert(props) {
    // const capitalize =(word)=> {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() = lower.slice(1);
    // }
    return (
        props.alert &&
           
        <div className="alert alert-success" role="alert">
           <strong>{props.alert.Type}</strong>: {props.alert.Mesaage}
      </div>
           
    )
}

export default Alert

