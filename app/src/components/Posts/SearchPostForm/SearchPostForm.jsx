import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePostsContext } from '../Posts'

const SearchPostForm = () => {
  const [searchInput, setSearchInput] = useState('')
  const isMount = useRef(false)
  const { updatePosts } = usePostsContext()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (isMount.current) {
      const filter = {
        search: searchInput,
      }
      const prepareFilterFromURL = encodeURIComponent(JSON.stringify(filter))
      const query = `${prepareFilterFromURL}`
      setSearchParams(query)

      fetch(`http://localhost:3001/api/v1/posts/?filter=${query}`)
        .then((response) => response.json())
        .then((data) => {
          updatePosts(data)
        })
    } else {
      isMount.current = true
      const parsedQuery = JSON.parse(searchParams.get('filter'))
      if (parsedQuery && parsedQuery.search) {
        setSearchInput(parsedQuery.search)
      }
    }
  }, [searchInput])

  const changeHandler = (e) => setSearchInput(e.target.value)

  return (
    <form className="d-flex flex-column align-items-center">
      <div className="mb-2">
        <input
          type="text"
          name="user"
          placeholder="Text Name..."
          className="form-control my-2"
          onChange={changeHandler}
          value={searchInput}
        />
      </div>
    </form>
  )
}

export default SearchPostForm
