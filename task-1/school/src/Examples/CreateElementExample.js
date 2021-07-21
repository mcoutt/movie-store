import React from 'react';

class CreateElementExample extends React.Component {
    render() {
        return React.createElement('p', null, 'Test info from CreateElementExample')
    }
}

export default CreateElementExample;