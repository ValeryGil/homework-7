import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PostsContext } from '../Posts'
import PostsItem from '../PostsItem/PostsItem'

const postsListVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
}

const PostsList = () => {
  const { posts } = useContext(PostsContext)

  return (
    <div className="d-flex justify-content-center">
      {
        posts.length ? (
          <motion.div variants={postsListVariants} initial="start" animate="end" className="list-group">
            <AnimatePresence>
              {posts.map((post) => (
                <PostsItem key={post.id} {...post} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : null
      }
    </div>
  )
}

export default PostsList
