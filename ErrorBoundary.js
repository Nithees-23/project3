import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }
    componentDidCatch(error, errorInfo) {
    
        // Catch errors in any components below and
        // re-render with error message
        this.setState({
        error: error,
        errorInfo: errorInfo
        })
     
    }
render() {
        if (this.state.errorInfo) {
    
        // Error path
        return (
            <div>
            <h2>An Error Has Occurred</h2>
            <details>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </details>
            </div>
        );
        }
        // Normally, just render children, i.e. in
        // case no error is Found
        return this.props.children;
}
    }
    export default ErrorBoundary;