export const eventsSearch = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data
  })
);

export const requestEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const createEvent = (eventData, groupId) => (
  $.ajax({
    method: 'POST',
    url: `api/groups/${groupId}/events`,
    data: eventData,
  })
);

export const deleteEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);

export const updateEvent = (eventData, groupId) => (
  $.ajax({
    method: 'PATCH',
    url: `api/groups/${groupId}/events`,
    data: eventData
  })
);


export const addParticipant = (data) => (
  $.ajax({
    method: 'POST',
    url: `api/participations/`,
    data: data
  })
);

export const deleteParticipant = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/participations/${id}`
  })
);
