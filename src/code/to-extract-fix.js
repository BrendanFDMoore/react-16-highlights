
constructor(props) {
  super(props);
  ...
  this.instanceId = uuid();
  dispatchInitAction({
    instanceId: this.instanceId,
    sort: initialSort,
    filter: initialFilter,
    hydrated,
  });
}

componentWillUnmount() {
  const {
    dispatchDeleteAction,
    shouldPersist
  } = this.props;
  if (!shouldPersist) {
    dispatchDeleteAction({
      instanceId: this.instanceId,
    });
  }
}

// Reducer
function onInit(
  state: State,
  { payload: { facetMeta } }
) {
  const {
    tableId,
    instanceId, sort, filter, hydrated,
  } = facetMeta;
  return {
    ...state,
    [tableId]: {
      ...initFacetState,
      instanceId,
      sort, filter,
      hydrated,
      initialized: true
    },
  };
}
function onDelete(
  state: State,
  { payload: { facetMeta } }
) {
  const { tableId, instanceId } = facetMeta;
  return state[tableId] 
    && state[tableId].instanceId === instanceId
    ? _.omit(state, tableId)
    : state;
}
