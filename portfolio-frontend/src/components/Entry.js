import React from 'react'

export default ({data}) => {
  console.log("Entry.render data", data)
  const {title, subtitle, link, color} = data
  return (
    <a href={link} target="_blank">
      <div className="Entry" style={{backgroundColor: color}}>
        <div className="Entry__content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </a>
  )
}
