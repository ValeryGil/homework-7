import { useSearchParams } from 'react-router-dom'
import PostForm from './PostForm/PostForm'
import PostsList from './PostsList/PostsList'
import SearchPostForm from './SearchPostForm/SearchPostForm'

const {
  createContext, useState, useEffect, useContext,
} = require('react')

const PostsContext = createContext()

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const filterQuery = searchParams.get('filter')
    const query = filterQuery ?? ''

    fetch(`http://localhost:3001/api/v1/posts/?filter=${query}`)
      .then((response) => response.json())
      .then(setPosts)
  }, [])

  const addPost = (newPost) => {
    setPosts((prev) => [...prev, newPost])
  }

  const updatePosts = (newPostsList) => setPosts(newPostsList)

  const deletePost = (id) => {
    fetch(`http://localhost:3001/api/v1/posts/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          setPosts((prev) => prev.filter((post) => post.id !== id))
        }
      })
  }

  return (
    <PostsContext.Provider value={{
      posts, addPost, deletePost, updatePosts,
    }}
    >
      <PostForm />
      <hr className="mb-2" />
      <SearchPostForm />
      <PostsList />
    </PostsContext.Provider>
  )
}

export default Posts

const usePostsContext = () => useContext(PostsContext)

export {
  PostsContext,
  usePostsContext,
}
