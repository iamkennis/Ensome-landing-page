import React from 'react'

export default function Footer() {
    return (
				<div className='bg-[#002B4E] h-full py-12 px-8 md:px-44 lg:px-32'>
					<div className='flex flex-col md:flex-col gap-4 lg:flex-row items-center lg:justify-between'>
						<div className='space-y-8'>
							<h1 className='text-white text-2xl font-bold'>
								Subscribe to our newsletter
							</h1>
							<p className='text-white text-md font-normal max-w-sm md:max-w-xs lg:max-w-sm'>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium.
							</p>
						</div>
						<form className='flex flex-col'>
							<span className='md:flex-col md:gap-4 lg:max-w-md lg:h-[54px] lg:rounded-md lg:bg-[#C9DCEC]'>
								<input
									className='lg:w-[245px] w-full bg-transparent border-2 border-white h-[54px] lg:border-none outline-none px-4 rounded-md lg:bg-[#C9DCEC]'
									placeholder='Your email'
								/>
								<button className='bg-white mt-4 lg:mt-0 w-full lg:w-[186px] px-8 h-[54px] rounded-md font-bold'>
									Send
								</button>
							</span>
						</form>
					</div>
				</div>
		);
}
