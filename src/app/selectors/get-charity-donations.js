export default (state, props) => {
  return state.entities.donations[props.charityId] ?
    state.entities.donations[props.charityId].donations : null;
};
