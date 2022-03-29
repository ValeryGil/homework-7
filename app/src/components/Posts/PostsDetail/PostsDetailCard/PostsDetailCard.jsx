import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { usePostsDetailContext } from '../PostsDetail'

const PostsDetailCard = () => {
  const navigate = useNavigate()

  const cardVariants = {
    start: {
      opacity: 0,
      y: 100,
    },
    end: {
      opacity: 1,
      y: 0,
    },
  }

  const { post, openModal } = usePostsDetailContext()

  return (
    <motion.section variants={cardVariants} initial="start" animate="end" className="d-flex flex-column align-items-center">
      <div className="card border-dark" style={{ width: '20rem' }}>
        <img src={post.photo} className="card-img-top img-thumbnail" alt="..." />
        <div className="card-body text-dark bg-light">
          <h5 className="card-title">{post.user}</h5>
          <p className="card-text">{post.post}</p>
        </div>
        <div className="card-body text-dark bg-light">
          <button type="button" onClick={() => navigate(-1)} className="btn btn-primary mx-2">Go back</button>
          <button type="button" onClick={openModal} className="btn btn-success">Edit</button>
        </div>
      </div>
    </motion.section>
  )
}

export default PostsDetailCard
