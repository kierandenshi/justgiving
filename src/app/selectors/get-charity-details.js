export default (state, props) => {
  return state.entities.details[props.charityId] || null;
};
