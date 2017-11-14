import React from "react";
import ReactDOM from "react-dom";

class Mainpanel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <p>hellow word!</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Mainpanel/>,
    document.getElementById("mainpanel")
)