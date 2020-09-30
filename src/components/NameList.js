import React, { Component } from 'react';

class NameList extends Component {

    constructor() {
        super()
    
        this.state = {
          names: []
        }

        this.nameTags = this.nameTags.bind(this);
      }

    componentDidMount() {
        fetch('https://api.abalin.net/today')
          .then(res => res.json())
          .then((nameData) => {
            const names = nameData.data.namedays;
            this.setState({names});
          })
          .catch(err => console.log(err));
      }

    nameTags() {
        return Object.entries(this.state.names).map(([key, value]) => <p key={key}>{key}: {value}</p>);
    }
    
    render() {

        return (
            <>
                <p>Name list</p>
                {this.nameTags()}
            </>
        )
    }

}

export default NameList;