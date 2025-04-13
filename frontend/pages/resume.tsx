import withAuth from '../utils/withAuth'

function ResumePage() {
  return <div className="p-6">This is the Resume Builder (protected)</div>
}

export default withAuth(ResumePage)
