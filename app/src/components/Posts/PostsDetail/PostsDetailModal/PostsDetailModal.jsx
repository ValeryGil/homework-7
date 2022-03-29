import Modal from '../../../Modal/Modal'
import Form from '../../Form/Form'
import { usePostsDetailContext } from '../PostsDetail'

const PostsDetailModal = () => {
  const {
    viewModal, closeModal, post, submitHandler,
  } = usePostsDetailContext()
  return (
    <Modal
      state={viewModal}
      onClose={closeModal}
    >
      <Form
        onSubmit={submitHandler}
        {...post}
      />
    </Modal>
  )
}

export default PostsDetailModal
