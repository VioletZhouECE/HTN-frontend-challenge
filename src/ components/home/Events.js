import React from "react";
import displayErrorMessage from "../../scripts/displayMessages";

const eventUrl = "https://api.hackthenorth.com/v3/graphql?query={%20events%20{%20id%20name%20event_type%20permission%20start_time%20end_time%20description%20speakers%20{%20name%20profile_pic%20}%20public_url%20private_url%20related_events%20}%20}"

//Events component is responsible for managing events (which event to display and in what order etc.)
class Events extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        //fetch all events
        fetch(eventUrl, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res=>res.json())
          .then(({data})=>{
              const events = data.events;

              let displayedEvents = [];
              //filter private events if the user is not logged in
              if (!this.props.isLoggedin){
                displayedEvents = events.filter((event)=>event.permission=="public");
              } else {
                displayedEvents = events;
              }

              this.setState({events: displayedEvents});
          })
          .catch((err)=>{
              displayErrorMessage("Oops, cannot fetch events info. Please try again later");
              console.log(err);
          })
    }

    render(){
        const events = this.state.events.map(event=>{
            return <div key={event.id}>{event.description}</div>
        });

        return(
            <div>
                {events}
            </div>
        )
    }
}

export default Events;