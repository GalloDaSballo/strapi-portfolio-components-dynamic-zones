import React from 'react'

export default ({data}) => {
  console.log("ComplexEntry.render data", data)

  const {title, subtitle, text_position, background} = data
  const url = `http://localhost:1337${background[0].url}`

  return (
    <div className="ComplextEntry" style={{backgroundImage: `url(${url})`}}>
      <div className="V_center">
        <div className={`ComplextEntry__center ComplexEntry__${text_position}`}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
