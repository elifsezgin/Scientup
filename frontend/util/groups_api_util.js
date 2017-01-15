export const allGroups = () => (
  $.ajax({
    method: 'GET',
    url: 'api/groups'
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

export const getLocation = (lat, lon) => (
  $.ajax({
    method: 'GET',
    url: `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&sensor=true`
  })
);
