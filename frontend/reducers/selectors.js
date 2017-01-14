import { values } from 'lodash';

export const selectAllGroups = ({ groups }) => {
  return (values(groups));
};
