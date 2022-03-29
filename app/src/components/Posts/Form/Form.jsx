import { useEffect, useRef } from 'react'

const Form = ({
  onSubmit, user = '', post = '', photo = '',
}) => {
  const formRef = useRef(null)

  useEffect(() => {
    formRef.current.elements.user.value = user
    formRef.current.elements.post.value = post
    formRef.current.elements.photo.value = photo
  }, [])

  return (
    <form ref={formRef} className="d-flex flex-column align-items-center" onSubmit={onSubmit}>
      <div className="mb-3">
        <input type="text" name="user" placeholder="Text Name..." className="form-control my-2" />
        <input type="text" name="post" placeholder="Text Post..." className="form-control my-2" />
        <input type="text" name="photo" placeholder="Add Photo..." className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Add Post</button>
    </form>
  )
}

export default Form
