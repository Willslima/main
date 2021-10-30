import './Article.css'


function Article (props){
  return (
    <p className='Content'>
      {props.article}
    </p>
  )
}

export default Article;