import React from 'react'

export default ({data}) => {
  console.log("Article.render data", data)
  const {title, link, picture} = data

  const url = `http://localhost:1337${picture[0].url}`
  console.log("Article.render url", url)
  return(
    <a href={link} target="_blank">
      <div className="Article" style={{backgroundImage: `url(${url})`}}>
        <div className="V_center">
          <h1>{title}</h1>
        </div>
      </div>
    </a>
  )
}
