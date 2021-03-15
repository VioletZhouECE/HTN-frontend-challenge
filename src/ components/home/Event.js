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
                    <div className="col-sm-6 col-md-6 col-lg-6">{this.props.event.name}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6">{this.props.event.startTime} - {this.props.endTime}</div>
                </div>
                <div className="d-flex mt-3">
                    <div className="col-sm-6 col-md-6 col-lg-6">{this.props.event.speakers.toString()}</div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <a data-toggle="collapse" href={`#collapse${this.props.event.id}`} role="button" aria-expanded="false" aria-controls={`collapse${this.props.event.id}`}>View details</a>
                    </div>
                </div>
                <div className="collapse" id={`collapse${this.props.event.id}`}>
                    <div className="card card-body">
                        {this.props.event.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default Event;