import { values } from 'lodash';

export const selectAllGroups = ({ groups }) => {
  return (values(groups));
};

export const selectAllEvents = ({ events }) => {
  const allEvents = (values(events));
  allEvents.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  const a_datetime = (a.date + 'T' + a.time.split('T')[1]);
  const b_datetime = (b.date + 'T' + b.time.split('T')[1]);

  return new Date(a_datetime) -  new Date(b_datetime);
  });
  return allEvents;
};

export const selectUpcomingAndPastEvents = ({ events }) => {

  const allEvents = selectAllEvents({ events });
  const upcomingEvents = [];
  const pastEvents = [];
  allEvents.forEach((event)=>{
    const event_datetime = (event.date + 'T' + event.time.split('T')[1]);
    if (Date.parse(event_datetime) > Date.now()) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  });
  return [upcomingEvents, pastEvents];
};
