import React from 'react'

function Article({title,date,preview,minutes}) {

  return (
    <>
      <h3>{title}</h3>
      <small>{date || 'December 11, 2020 15'} {minutes} min read</small>
      <h4>{preview}</h4>


    </>
  )
}

export default Article