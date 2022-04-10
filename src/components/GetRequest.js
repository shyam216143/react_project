import axios from "axios";
import React from 'react';
class GetRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            totalReactPackages: null
        }
    }
    componentDidMount() {
        // Simple GET request using fetch
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }
    render() {

        const { totalReactPackages } = this.state;
        return (
            <div className="text-center">
                <h1 className="p-3"> React Http Get Requests with fetch</h1>
                <div>Total react Package:{totalReactPackages}</div>

            </div>
        );
    }
}

export default GetRequest;
