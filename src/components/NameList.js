import React, { Component } from 'react';
import NameItem from './NameItem.js';

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
        return Object.entries(this.state.names).map(([key, value]) => <NameItem key={key} country={key} names={value}/>);
    }
    
    render() {

        return (
            <>
                <p>Name list</p>
                {/* <NameItem {...this.state.names} /> */}
                {this.nameTags()}
            </>
        )
    }

}

export default NameList;