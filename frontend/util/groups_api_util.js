export const allGroups = () => (
  $.ajax({
    method: 'GET',
    url: '/groups'
  })
);
