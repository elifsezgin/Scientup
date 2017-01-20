import { values } from 'lodash';

export const selectAllGroups = ({ groups }) => {
  return (values(groups));
};

export const selectAllEvents = ({ events }) => {
  const allEvents = (values(events));
  allEvents.sort(function(a,b){
  const a_datetime = (a.date + 'T' + a.time.split('T')[1]);
  const b_datetime = (b.date + 'T' + b.time.split('T')[1]);

  return new Date(a_datetime) -  new Date(b_datetime);
  });
  return allEvents;
};

export const selectUpcomingAndPastEvents = ({ events, groupDetail }) => {
  const allEvents = selectAllEvents({ events });
  const upcomingEvents = [];
  const pastEvents = [];
  allEvents.forEach((e) =>{
    const event_datetime = (e.date + 'T' + e.time.split('T')[1]);
    if (groupDetail) {
      if (e.group.id !== groupDetail.id) {
        return;
      }
    }
    if (Date.parse(event_datetime) > Date.now()) {
      upcomingEvents.push(e);
    } else {
      pastEvents.push(e);
    }
  });
  return [upcomingEvents, pastEvents];
};
