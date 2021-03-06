# Overview
Hack the North organizer application frontend coding challenge.

# How to run the app
1. npm install
2. npm start
3. go to localhost:3000. The site is up and running there!

# Login credentials
The login credentials are hard-coded. You can find them in config/userinfo.js. You can use the following credentials to login (the login button is at the top right corner:)
```
Violet: 123456
testuser1: 112233
testuser2: 654321
```

# Tech stack
* HTML/CSS/bootstrap
* React, React-Router
* Webpack, babel 

# The design process
The first thing I did was to understand the logic of the application, as having a good understanding of the frontend logic helps me plan out the development process and choose the right tech stack. The website is dynamic (as it involves login, logout, and dynamic rendering of events), 
but is not very complex and does not have a lot of shared data (except for user's login status), so I decided to use React and React-Router. I did not use Redux since 
there isn't much shared data between components.

Next I looked into the data flow of the website and design how to manage the data flow among different components. There are two data sources for the website: user's login status and events data.
User's login status needs to be shared with the entire app since a logged-in user has different permission. As sharing user's login status involves data sharing between the different pages/components 
(more specifically, Login component and Home component), this requires us to "lift state up" and create a parent component App which manages the user's login status (global data) and pass data to different components.
On the other hand, events data should be local to Events component who is responsible for rendering the events and hidden from the rest of the app.

After designing the data flow and the key components: App, Home, Events, Event, I felt ready to start coding, so I started implementing the app from the higher-level components (big picture first:). 

# Did I encounter any issue?
Yes! I encountered a very interesting bug while linking an event to its related events. I found that some of the events are linked to an event that does not exist on the page (the event id does not exist).
It turns out that this was because when filtering the events based on user's permission, I only filtered the events themselves, but not the related events in the nested array. An additional filtering of the nested array solves the issue.

# Is there something that I am very proud of?
Yes! I am very happy about my code - my code is clean, well-structured and well-commented (I have definitely improved the code quality since my last frontend project:). Also, I am happy about implementing the functionality to scroll to the related event and collapse
the hidden menu. That looks kinda cool.

# Is there anything that I am not very happy about?
Yes! I am really interested in the project and would really want to spend more time implementing the other functionalities and add more styling to the site, 
but I had a lot of deliverables recently and only had the time to implement the basic functionalities, so here I will talk about how I plan to implement the other functionalities (maybe I will actually implement them in the future haha):
1. Search: since we don't have a lot of text to search from (yet), we can implement the search ourselves without using a plugin. We can associate the search bar text with a state in the Home component. Every time the user types in the search bar, we will update the state and pass the new state as a props to the Events component. This will trigger a function that filters the events array by search bar text. 
2. Select ordering of the events: We can associate the ordering of events with a state (so something like {"orderBy": "startTime"}) and have a switch statement that select different keys to be used in JS sort function. To persist the ordering on page refresh, we can store the key-value pair {"orderBy": "startTime"} in local storage so that we can retrieve it when the page re-renders. Note that we need to clean the local storage when the user chooses a different ordering option or when they log out.
3. Filter events based on the event type: We can associate the target event types array with a state and have a filter function in the render statement (very similar to how we implement 2).<br>
...
