<img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1484891473/logo_jxknxl.png' width='100%'/>

[ScientUp Live] : (https://scientup.com)

ScientUp is a full-stack web application that serves a purpuse of creating a scientific community for people where they can create and join science related groups and events to meet with like-minded people, inspired by Meetup. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a redux architectural framework on the frontend.

Feel free to browse at [ScientUp Live]

<img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1484840979/Screen_Shot_2017-01-19_at_7.48.12_AM_nfsk5e.png' width='100%'/>

## Features & Implementation

* [ScientUps](#scientups)
 - Join groups
 - Create, Update, Delete (admin only)
 - See events of the group
 - See member counts of groups
* [Events](#events)
- Geocoding -reverse geocoding in the event creation page
 - Create, join (members only)
 - Add a rating
* [HomePage](#homepage)
 - Realtime search groups or events on index page
* [Authentication](#user-profiles)
 - Secure custom authentication system that hashes/salts passwords using BCrypt
 - Single-page sign up and login
 - Guest user login for exploration

### ScientUps - The core of ScientUp

ScientUps are groups created by users to bring together like-minded individuals who want to organize events related to the interests of the ScientUp group. The groups are stored as a single table in the database, containing `id`, `title`, `description`, `created_at`, `updated_at`. Groups have many users through a memberships association table, has many events, has many admins through an administrators association table.

The react components created for groups include ; GroupList, GroupListItem, GroupDetail, GroupInfo, NewGroup.

<img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1484841927/Screen_Shot_2017-01-19_at_8.04.04_AM_rcxxns.png' width='100%'/>

### Events

Events are nested under a group, so that there are no events that stand-alone. Only the members of a group are able to create an event for their group.

The events are stored as a single table in the database, containing `id`, `name`, `description`, `date`, `time`, `address`, `lat`, `lng`, `created_at`, `updated_at`, and `category`.

The location is the backbone of the events. In the event creation page, Google Maps API is used for geocoding and reverse geocoding. Users can enter location by either marking a pin on the map or typing to the address field, easily with the autocomplete feature.

<img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1484928548/Screen_Shot_2017-01-20_at_8.08.23_AM_ax5d4j.png' width='100%'/>

Event components are nested underneath the group page, and replace the GroupDetail component of the group page. The Group page contains a list of events, and if one is clicked on, then it takes you to the event detail page. The event page contains a map that shows the event location.

The react components created for groups include ; EventList, EventListItem, EventDetail, NewEvent.

<img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1484845440/Screen_Shot_2017-01-19_at_9.03.13_AM_ncx14m.png' width='100%'/>

### Homepage

The front/home page of the app is where everything comes together. While Groups and Events are the purpose of ScientUp, the front page is where you utilize the application.

The home page renders all the ScienUps as default, the features on the front-page are as follows: Search and Group list that holds all ScientUps.

If you toggle the 'events' button, then it renders a container which holds all of the events, sorted by date and time and a map where all the events are pinpointed.

The Search field dynamically renders the items of groups or events according to which page you are at.

On the header, you have a link to create a new Scientup, a button to log out or view your profile page, a home button and a logo link that takes you back to the home page, which are present in every page on the website once you are logged in.

#### Groups Home Page:
<img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1484954244/Screen_Shot_2017-01-20_at_3.16.05_PM_ni4zis.png' width='100%'/>


#### Events Home Page:
<img src='http://res.cloudinary.com/datsbxfvs/image/upload/v1484928691/Screen_Shot_2017-01-20_at_8.11.06_AM_b0tvqb.png' width='100%'/>


## Future Directions for the Project

In addition to the present features, I plan to continue to developing this app. The Next steps for ScientUp are listed below.

### Categories

Adding a feature that allows users to pick categories for their group. Modifying the search feature to look both for group names and the categories that the group related to.

### Location based search

In addition to events being location-based, I am planning to also make the groups location based, using the city name data I already obtain from user in the event creation page. I will use reverse-geocoding to get the location from the city name attribute of groups. Search will also look for the groups & events in the close proximity.

### Calendar

I will add a calendar to the events listings page, so that it will be easier for users to select for the events.

### Event Comments

Leaving comments for events for those that are joined

### Ratings

Allowing users to rate events that they attended
