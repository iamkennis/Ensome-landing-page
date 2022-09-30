import React from 'react'
import {motion} from 'framer-motion'
import { BiPlayCircle } from 'react-icons/bi';

	
export default function Hero() {
  return (
		<header className='bg-[#002B4E] h-full px-8 py-12 md:px-44 lg:px-32'>
			<section className='flex flex-col gap-4 md:px-8 lg:flex-row lg:justify-between '>
				<div>
					<h1 className='text-white text-2xl lg:text-3xl font-bold lg:max-w-sm'>
						Find true power in your data with Ensome
					</h1>
				</div>
				<div className='space-y-8'>
					<p className='text-md text-white max-w-xl lg:max-w-md'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo.
					</p>
					<div className='flex flex-col gap-4 md:flex md:gap-4 lg:flex lg:flex-row lg:gap-4'>
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='bg-white font-bold w-full md:max-w-md lg:w-[186px] h-[54px] rounded-md'>
							Learn more
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='bg-transparent border-2 md:max-w-md lg:w-[186px] border-white font-bold w-full h-[54px] rounded-md text-white'>
							<span className='flex flex-row justify-center items-center lg:items-center gap-4 px-2'>
								<BiPlayCircle />
								Watch the demo
							</span>
						</motion.button>
					</div>
				</div>
			</section>
		</header>
	);
}
