import React, { Component } from 'react';

class NameList extends Component {

    componentDidMount() {

        constructor() {
            super()
        
            this.state = {
              names: []
            }
          }

        fetch('https://api.abalin.net/today')
          .then(res => res.json())
          .then((nameData) => {
            const names = nameData.data.namedays;
            this.setState({names});
          })
          .catch(err => console.log(err));
      }
    
    render() {

        return (
            <>
                <p>Name list</p>
                {this.props.names}
            </>
        )
    }

}

export default NameList;