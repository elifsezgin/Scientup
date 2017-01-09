## Component Hierarchy


**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Header
  - Demo
  - Signup
  - Login
 - Home
 - Footer

**GroupsContainer**
 - GroupsHeader
  * GroupIndex
    - GroupIndexItem
     + GroupNavbar
     + GroupDetail
       * EventContainer
       * TagContainer

**EventContainer**
 - EventHeader
  + EventIndex
    - EventIndexItem
      - EventDetail

**GroupSearchContainer**
 - Search
 - GroupIndex

**EventSearchContainer**
 - Search
 - EventIndex

**NewGroupContainer**
 - NewGroup

**NewEventContainer**
 - NewEvent



## Routes

|Path                                       | Component   |
|----------------------                     |-------------|
| "/sign-up"                                | "AuthFormContainer" |
| "/sign-in"                                | "AuthFormContainer" |
| "/home"                                   | "HomeContainer" |
| "/home/groups"                            | "GroupsContainer" |
| "/home/groups/:groupId"                   | "GroupsDetail" |
| "/home/groups/:groupId/events"            | "EventsContainer" |
| "/home/groups/:groupId/events/:eventId"   | "EventDetail" |
| "/home/group-search-results"              | "SearchResultsContainer"
| "/new-group"                              | "NewGroupContainer" |
| "/new-event"                              | "NewNotebook" |
| "/search/groups"                          | "GroupSearchContainer" |
| "/search/events"                          | "EventSearchContainer" |
