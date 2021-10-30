import React from 'react'
import Title from './article/Title'
import Content from './article/Content'

function Article (props){
  return (
    <>
    
    <Title title={props.title}/>
    <Content article={props.article}/>
    {props.children}
    
    </>
  )
}

export default Article