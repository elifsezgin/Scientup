import { values } from 'lodash';

export const selectAllGroups = ({ groups }) => {
  return (values(groups));
};

export const selectAllEvents = ({ events }) => {
  return (values(events));
};
