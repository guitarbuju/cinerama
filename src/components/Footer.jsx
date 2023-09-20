import { Link } from 'react-router-dom'
import camera from '../assets/icons8-video-64.png'

const Footer = () => {
  return (
    <div><footer className="px-4 py-8 dark:bg-gray-800 text-gray-200">
	<div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
			<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
          
    
			</div>
			<ul className="flex flex-wrap items-center space-x-4 sm:space-x-8 ml-96">
            <li className='flex'>
            <img src={camera} className="w-10 ml-5 mb-2" />
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            cinerama
          </Link>
       
            </li>
            <li>
					<Link to='/about' rel="noopener noreferrer" >About</Link>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Terms of Use</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#">Privacy</a>
				</li>
			</ul>
		</div>
		<ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Twitter</a>
			</li>
		</ul>
	</div>
</footer></div>
  )
}

export default Footer