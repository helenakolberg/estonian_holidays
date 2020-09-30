import React, { Component } from "react"
import { Link } from "gatsby"



class IndexPage extends Component {

  constructor() {
    super()

    this.state = {
      names: []
    }
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

  render() {
    return (
      <>
        <h1>Today's Name Days</h1>
      </>
    )
  }
}

export default IndexPage
