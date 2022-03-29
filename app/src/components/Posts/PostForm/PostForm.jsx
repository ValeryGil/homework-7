import Form from '../Form/Form'
import { usePostsContext } from '../Posts'

const PostForm = () => {
  const { addPost } = usePostsContext()

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    const response = await fetch('http://localhost:3001/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 201) {
      const postFromServer = await response.json()
      addPost(postFromServer)
      e.target.reset()
    } else {
      alert('Wrong data')
    }
  }

  return (
    <Form
      onSubmit={submitHandler}
    />
  )
}

export default PostForm
