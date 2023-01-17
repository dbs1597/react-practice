const withPageCalling = WrappedComponent => {
  const Component = props => {
    return <WrappedComponent {...props} />;
  };
  return Component;
};

export default withPageCalling;