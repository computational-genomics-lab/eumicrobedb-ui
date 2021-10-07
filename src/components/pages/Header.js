
import PropTypes from 'prop-types'
import React from 'react'

const Header = function(props) {
    return (
     <header>
         <h1 style={headingstyle}> 
         {props.title} </h1>
     </header>
    )
}
Header.defaultProps = {
    title: 'EumicrobeDB',
}
Header.propTypes = {
    title: PropTypes.string,
}
//adding css elements in the JS
//declaring variable containing CSS elements
const headingstyle = {
    padding: 30,
    color:"white",
backgroundColor:"rgb(127, 192, 127)",
}
export default Header
