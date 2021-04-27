import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined'
import Tooltip from '@material-ui/core/Tooltip'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='logo'>
        <Link to='/'>
          <h1>vitea</h1>
        </Link>
        <ul className='nav-menu' style={{ display: 'flex' }}>
          <Link to='/today' style={{ color: '#3f6e6e' }}>
            <li>dashboard</li>
          </Link>
          <Link to='/mytasks' style={{ color: '#3f6e6e' }}>
            <li>my tasks</li>
          </Link>
          <Link to='/achievements' style={{ color: '#3f6e6e' }}>
            <li>achievements</li>
          </Link>
          <Link style={{ color: '#3f6e6e' }}>
            <li>resources</li>
          </Link>

          <Link to='/add' className='add-goal'>
            <li>add goal</li>
          </Link>
        </ul>
      </div>
      <div>
        <Tooltip title='user profile'>
          <FaceOutlinedIcon style={{ color: '#da3c11', fontSize: 30 }} />
        </Tooltip>
      </div>
    </>
  )
}

export default Navbar
