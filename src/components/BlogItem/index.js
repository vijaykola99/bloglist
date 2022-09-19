import './index.css'

const BlogItem = props => {
  const {blogItems} = props
  const {title, description, publishedDate} = blogItems
  return (
    <li className="list-style">
      <div className="title-date">
        <h1 className="title">{title}</h1>
        <p className="description">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="horizontal-line" />
    </li>
  )
}
export default BlogItem
