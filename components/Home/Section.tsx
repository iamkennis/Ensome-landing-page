import React from 'react'
import { motion } from 'framer-motion';

export default function Section() {




  return (
		<main className='bg-[#F1F6FA] h-full w-full py-24 px-8 md:px-44 lg:px-32'>
			<div>
				<div className='grid grid-row-2 items-center gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
					<div>
						<h1 className='text-black text-2xl font-bold'>
							The newest business analytics platform
						</h1>
						<hr className='border-2 border-blue-700 w-16 mt-2' />
						<p className='text-md text-gray-500 max-w-xl py-8'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='bg-[#185CFF] md:max-w-xs text-white font-bold w-full h-[54px] lg:w-[186px] rounded-md'>
							Learn more
						</motion.button>
					</div>
					<div>
						<img
							src='/images/cowomen.jpg'
							className=' w-[540px] h-[358px] py-8'
						/>
					</div>
				</div>
				<div className='grid grid-row-2 items-center gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
					<div>
						<img
							src='/images/jason.jpg'
							className=' w-[540px] h-[358px] py-8'
						/>
					</div>
					<div>
						<h1 className='text-black text-2xl font-bold'>
							Radically new solutions for data
						</h1>
						<hr className='border-2 border-blue-700 w-16 mt-2' />
						<p className='text-md text-gray-500 max-w-xl py-8'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo.
						</p>
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='bg-[#185CFF] md:max-w-xs text-white font-bold w-full h-[54px] lg:w-[186px] rounded-md'>
							Learn more
						</motion.button>
					</div>
				</div>
			</div>
		</main>
	);
}
