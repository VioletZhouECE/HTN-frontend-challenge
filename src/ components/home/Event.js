import React from "react";

class Event extends React.Component{
    constructor(props){
        super(props);

        this.scrollToRelatedEvent = this.scrollToRelatedEvent.bind(this);
    }

    scrollToRelatedEvent(eventId){
        //scroll to the related event
        document.getElementById("event"+eventId).scrollIntoView({behavior: 'smooth'});
        //collapse the event details
    }

    //display name, event time, speakers
    render(){
        const relatedEvents = [];
        for (let i = 0; i < this.props.event.relatedEventIds.length; i++){
            let event;
            if (i>0){
                //split hyperlinks by comma
                event = <a href="javascript:void(0)" onClick={()=>this.scrollToRelatedEvent(this.props.event.relatedEventIds[i])}>, {this.props.event.relatedEventNames[i]}</a>
            } else {
                event = <a href="javascript:void(0)" onClick={()=>this.scrollToRelatedEvent(this.props.event.relatedEventIds[i])}>{this.props.event.relatedEventNames[i]}</a>
            }
            relatedEvents.push(event);
        }

        return (
            <div id={`event${this.props.event.id}`} className="event-container center d-flex flex-column flex-nowrap mb-3">
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
                <div className="collapse" id={`collapse${this.props.event.id}`} data-parent="#accordion">
                    <div className="card card-body">
                        <p>{this.props.event.description}</p>
                        <p style={{display: this.props.event.url?"inline":"none"}}>Event link: <a href={`${this.props.event.url}`}>{this.props.event.url}</a></p>
                        <p style={{display: relatedEvents.length!=0 ? "inline":"none"}}>Related events: {relatedEvents}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Event;