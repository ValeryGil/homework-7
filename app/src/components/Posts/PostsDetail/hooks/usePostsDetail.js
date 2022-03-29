import { useLayoutEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const usePostsDetail = (closeModal) => {
  const { postsId } = useParams()
  const [loading, setLoading] = useState(false)
  const controller = useRef(new AbortController())
  const [post, setPost] = useState({})

  useLayoutEffect(() => {
    setLoading(true)

    fetch(`http://localhost:3001/api/v1/posts/${postsId}`, { signal: controller.current.signal })
      .then((response) => response.json())
      .then((dataFromServer) => setPost(dataFromServer))
      .finally(() => setLoading(false))

    return () => {
      controller.current.abort()
    }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    const response = await fetch(`http://localhost:3001/api/v1/posts/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 200) {
      const updatedPostFromServer = await response.json()
      setPost(updatedPostFromServer)
      closeModal()
      e.target.reset()
    } else {
      alert('Wrong data')
    }
  }

  return {
    post,
    submitHandler,
    loading,
  }
}

export default usePostsDetail
