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
