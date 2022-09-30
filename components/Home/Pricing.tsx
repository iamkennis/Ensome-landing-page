import React from 'react'
import {IoMdCheckmark} from 'react-icons/io'

export default function Pricing() {


    return (
			<div className=' h-full py-12 px-8 md:px-44 lg:px-32'>
				<div>
					<h1 className='text-black text-2xl font-bold'>Our pricing</h1>
					<hr className='border-2 border-blue-700 w-16 mt-2' />
				</div>
				<div className='grid grid-cols-1 gap-4 lg:grid-cols-3  md:grid-cols-2 md:gap-4 lg:gap-8'>
					<div className='h-full lg:h-full max-w-md md:max-w-sm lg:max-w-xs shadow-md mt-8  bg-white rounded-md py-14 px-4'>
						<div className='flex flex-col space-y-4 px-4'>
							<p className='text-black font-bold text-2xl'>Starter</p>
							<p className='text-black font-bold text-3xl'>Free</p>
							<p className='text-black font-bold text-md'>
								Trial plan for starters
							</p>
							<button className='border-2  border-blue-700 hover:text-white font-bold hover:bg-blue-700 max-w-sm rounded-lg h-[50px]'>
								Get Started
							</button>
							<div className='flex flex-col'>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									For small teams – 5 users
								</p>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									Community support
								</p>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									Individual support
								</p>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									Individual data – 20GB
								</p>
							</div>
						</div>
					</div>
					<div className='h-full lg:h-full max-w-md md:max-w-sm lg:max-w-xs shadow-md mt-8  bg-white rounded-md py-14 px-4'>
						<div className='flex flex-col space-y-4 px-2'>
							<p className='text-black font-bold text-2xl'>Professional</p>
							<p className='text-black text-md'>
								<strong className='text-3xl'>$20</strong>per editor/month
							</p>
							<p className='text-black font-bold text-md'>
								For users who want more
							</p>
							<button className='border-none bg-blue-700 text-white font-bold hover:bg-blue-900 max-w-sm rounded-lg h-[50px]'>
								Get Started
							</button>
							<div className='flex flex-col'>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									For small teams – 15 users
								</p>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									Individual data – 60GB
								</p>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									Individual data – unlimited
								</p>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									Data history
								</p>
							</div>
						</div>
					</div>
					<div className='h-full lg:h-full max-w-md md:max-w-sm lg:max-w-xs shadow-md mt-8  bg-white rounded-md py-14 px-4'>
						<div className='flex flex-col space-y-4 px-2'>
							<p className='text-black font-bold text-2xl'>Organization</p>
							<p className='text-black text-md'>
								<strong className='text-3xl'>$50</strong>per editor/month
							</p>
							<p className='text-black font-bold text-md'>
								The best solution for Pro
							</p>
							<button className='border-none bg-blue-700 text-white font-bold hover:bg-blue-900 max-w-sm rounded-lg h-[50px]'>
								Get Started
							</button>
							<div className='flex flex-col'>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									For big teams – unlimited
								</p>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									Individual support
								</p>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									Individual data – unlimited
								</p>
								<p className='text-black text-md flex flex-row items-center gap-2'>
									<strong className='text-blue-700 text-xl'>
										<IoMdCheckmark />
									</strong>
									Data history
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}
