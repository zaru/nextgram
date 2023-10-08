import Frame from '../../../../../components/frame/Frame'
import Modal from '../../../../../components/modal/Modal'
import { photos } from '../../../../../photos'

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
  const photo = photos.find((p) => p.id === photoId)!

  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  )
}
