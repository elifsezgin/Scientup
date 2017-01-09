# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/groups/:groupId/members`
  - Members of the groups

### Session

- `POST /api/session`
- `DELETE /api/session`

### Groups

- `GET /api/groups`
  - Groups index/search
  - accepts `tag_name` query param to list groups by tag
- `POST /api/groups`
- `GET /api/groups/:id`
- `PATCH /api/groups/:id`
- `DELETE /api/groups/:id`

### Events

- `GET /api/events`
  - Groups index/search
  - accepts `tag_name` query param to list events by tag
- `GET /api/groups/:groupId/events`
  - Events belonging to the group
- `GET /api/groups/:groupId/events/:eventId`
  - Event show page
- `PATCH /api/groups/:groupId/events/:eventId`
- `DELETE /api/groups/:groupId/events/:eventId`
- `POST /api/groups/:groupId/events`

### Tags

- `GET /api/tags`
- `POST /api/groups/:groupId/tags`
  -  add tag to group by name
- `DELETE /api/groups/:groupId/tags/:tag_name`
