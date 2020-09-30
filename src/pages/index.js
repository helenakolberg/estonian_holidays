import React from "react"
import { Link } from "gatsby"



class IndexPage {

  constructor() {
    super()

    this.state = {
      holidays: []
    }
  }

  render() {
    return (
      <>
        <h1>Estonian Holidays</h1>
      </>
    )
  }
}

export default IndexPage
