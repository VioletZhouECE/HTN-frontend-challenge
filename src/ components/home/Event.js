import React from "react";

class Event extends React.Component{
    constructor(props){
        super(props);
    }

    //display name, event time, speakers
    render(){
        return (
            <div className="event-container center d-flex flex-column flex-nowrap mb-3">
                <div className="d-flex">
                    <div className="col-sm-6 col-md-6 col-lg-6">{this.props.name}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6">{this.props.startTime} - {this.props.endTime}</div>
                </div>
                <div className="d-flex mt-3">
                    <div className="col-sm-6 col-md-6 col-lg-6">{this.props.speakers.toString()}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <a href="/">View Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event;