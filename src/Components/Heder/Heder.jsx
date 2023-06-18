import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Heder = () => {
  const cartLength = useSelector((store) => store.cart)

  return (
    <div className='flex pt-3'>
        <div className='ml-3 '>
            <Link to='/'>Shops</Link>
        </div>
        <div className='ml-3'>
        <Link to='/cart'>Shopping cart ({cartLength.length})</Link>
        </div>
        <div className='ml-3'>
        <Link to='/pay'>Pay now</Link>
        </div>
    </div>
  )
}

export default Heder