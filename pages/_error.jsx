// pages/_error.jsx

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error UI or redirect to an error page here
      return (
        <div>
          <h1>An error occurred: {this.state.error?.message}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
