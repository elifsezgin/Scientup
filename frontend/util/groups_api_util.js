export const groupsSearch = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/groups',
    data
  })
);

export const requestGroup = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  })
);

export const createGroup = (group) => (
  $.ajax({
    method: 'POST',
    url: `api/groups`,
    data: group
  })
);

export const deleteGroup = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/groups/${id}`
  })
);

export const addMember = (data) => (
  $.ajax({
    method: 'POST',
    url: `api/memberships/`,
    data: data
  })
);

export const deleteMember = (id, data) => (
  $.ajax({
    method: 'DELETE',
    url: `api/memberships/${id}`,
    data
  })
);

export const getLocation = (lat, lon) => (
  $.ajax({
    method: 'GET',
    url: `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true`
  })
);
