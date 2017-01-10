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

**GroupDetailContainer**
  + GroupNavbar
  * EventContainer
  * TagContainer

**EventContainer**
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
<!-- | "/home/groups"                            | "GroupsContainer" | -->
| "/home/groups/:groupId"                   | "GroupsDetail" |
| "/home/groups/:groupId/events"            | "EventsContainer" |
| "/home/groups/:groupId/events/:eventId"   | "EventDetail" |
| "/new-group"                              | "NewGroupContainer" |
| "/new-event"                              | "NewNotebook" |
| "/search/groups"                          | "GroupSearchContainer" |
| "/search/events"                          | "EventSearchContainer" |
