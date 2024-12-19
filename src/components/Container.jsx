import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`container mx-auto pl-2 ${className}`}>{children}</div>
  )
}

export default Container