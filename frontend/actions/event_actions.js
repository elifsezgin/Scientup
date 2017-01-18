import * as EventsAPIUtil from "../util/events_api_util";

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const requestAllEvents = () => dispatch => (
  EventsAPIUtil.eventsSearch().then(events => dispatch(receiveEvents(events)))
);

export const requestEvent = (id) => dispatch => (
  EventsAPIUtil.requestEvent(id).then(event => dispatch(receiveEvent(event)))
);

export const createEvent = (event) => dispatch => (
  EventsAPIUtil.createEvent(event).then(data => dispatch(receiveEvent(data)))
);
