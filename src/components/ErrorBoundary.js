import React from 'react';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next
    // render will show the fallback UI.
    console.log('getDerivedStateFromError!');
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error
    // to an error reporting service
    console.log('componentDidCatch!');
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h3>💥💥💥 Something went wrong. 💥💥💥</h3>
      );
    }

    return (
      <React.Fragment>
        <div>Start of Error Boundary</div>
          {this.props.children}
        <div>End of Error Boundary</div>
      </React.Fragment>
    )
  }
}

export default ErrorBoundary;
