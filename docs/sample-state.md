{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createGroup: {errors: ["location can't be blank"]},
    createEvent: {errors: []}
  },
  groups: {
    1: {
      name: "Ruby Developers",
      location: "San Francisco",
      organizer_id: 1,
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
    }
  },
  events: {
    1: {
      title: "Let's code!",
      group_id: 1,
      description: "Event for coding as a group",
      date: 19th Jan 2017,
      time: 19:00
    },
    2: {
      title: "Code challenge",
      group_id: 2,
      description: "is fun",
      date: 19th Feb 2017,
      time: 19:00
    }
  }
  tagFilters: [1, 7, 14] // Used to track selected Tags for filtering of groups
}
