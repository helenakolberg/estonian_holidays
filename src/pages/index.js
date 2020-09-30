import React, { Component } from "react"
import { Link } from "gatsby"
import NameList from '../components/NameList.js';



function IndexPage() {

  return (
    <>
      <h1>Today's Name Days</h1>
      <NameList />
    </>
  )
  
}

export default IndexPage
