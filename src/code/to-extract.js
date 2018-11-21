constructor(props) {
  super(props);
  ...
  dispatchInitAction({
    sort: initialSort,
    filter: initialFilter,
    hydrated,
  });
}
         
componentWillUnmount() {
  const { dispatchDeleteAction, shouldPersist } = this.props;
  if (!shouldPersist) {
    dispatchDeleteAction();
  }
}
