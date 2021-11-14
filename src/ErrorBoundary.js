import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Component Did Catch is triggered', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // return (
      //   <h1>Something went wrong</h1>
      // );
      window.location.href = '/error';
      return null;
    }

    return (this.props.children);
  };
}

export default ErrorBoundary;