```js
{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy"
    },
    errors: []
  }
  forms: {
    createGroup: {errors: ["location can't be blank"]},
    createEvent: {errors: []}
  },
  groups: {
    1: {
      id: 1,
      title: "Ruby Developers",
      image_url: '',
      member_count: 145234
    }
    2: {
      id: 2,
      title: "Genetics Lovers",
      image_url: '',
      member_count: 1452
    },
    ...
  }
  group_detail: {
    title: "Ruby Developers",
    description: 'Cool people'
    city_name: "San Francisco",
    image_url: '',
    organizers: [
      1: {
        id: 1,
        username: "app-academy"
      }
    ],
    members: {
      1: {
        id: 1,
        username: "app-academy"
      },
      2: {
        id: 2,
        username: "elif"
      }
    }
    tags: {
      1: {
        id: 1
        name: "Coding"
      }
    }
  },

  events: {
    1: {
      title: "Let's code!",
      group_id: 1,
      description: "Event for coding as a group",
      date: 19:01:2017,
      time: 19:00
    },
    2: {
      title: "Code challenge",
      group_id: 2,
      description: "is fun",
      date: 19:02:2017,
      time: 19:00
    }
  }
  tagFilters: [1, 7, 14]
```
