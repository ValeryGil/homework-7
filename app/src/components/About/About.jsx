import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return (
    <>
      <p>Social network for sharing posts and photos.</p>
      <button type="button" onClick={() => { navigate('/posts') }} className="btn btn-success">Go Posts</button>
    </>
  )
}
export default About
