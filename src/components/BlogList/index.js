import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  const {id} = blogsList
  return <BlogItem key={id} blogItems={blogsList} />
}
export default BlogList
