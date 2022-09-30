import { motion } from 'framer-motion';
import Link from 'next/link'
import React,{useState} from 'react'
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import {BiPlayCircle} from 'react-icons/bi'



export const useToggle = (initialState = false) =>  {
	const [state, setState] = useState(initialState);

	const toggle = () => {
        setState((prev) => !prev)
	}
	return [state, toggle]
}




export default function Navbar(){
	const [isVisible, toggle]:any = useToggle();



	return (
		<>
			<nav className='bg-[#002B4E] w-full px-4 md:px-24 py-8 lg:px-32'>
				<div className='flex flex-row items-center px-4 lg:flex lg:flex-row justify-between lg:items-center'>
					<div>
						<img src='/images/en.svg' />
					</div>
					<div className='hidden  lg:block space-x-8 font-bold text-white'>
						<Link href='' className='hover:border-2 hover:border-b-white'>
							Home
						</Link>
						<Link href=''>Solutions</Link>
						<Link href=''>Element</Link>
						<Link href=''>Blog</Link>
						<Link href=''>Contact</Link>
					</div>
					<div className='hidden lg:block'>
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='bg-white border-0 text-md md:max-w-sm lg:w-full font-bold w-full h-[54px] rounded-md text-black'>
							<span className='flex flex-row items-center gap-4 px-4'>
								<BiPlayCircle />
								Watch the demo
							</span>
						</motion.button>
					</div>
					<button
						className='text-white text-3xl my-4 block md:block lg:hidden'
						onClick={toggle}>
						{isVisible ? <FaTimes /> : <HiMenuAlt1 />}
					</button>
				</div>
			</nav>

			{isVisible && (
				<div className='w-full h-full lg:hidden  bg-[#002b4e] absolute bottom-0 top-32'>
					<div className='flex flex-col items-center py-12 space-y-8  px-4 font-bold text-white'>
						<Link href=''>Home</Link>
						<Link href=''>Solutions</Link>
						<Link href=''>Element</Link>
						<Link href=''>Blog</Link>
						<Link href=''>Contact</Link>
					</div>
				</div>
			)}
		</>
	);
}
