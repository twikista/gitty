import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className='flex items-center justify-center h-screen'>
          <span className='text-xl font-semibold'>Something went wrong</span>
        </div>
      )
    }
    return this.props.children
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.any,
}
