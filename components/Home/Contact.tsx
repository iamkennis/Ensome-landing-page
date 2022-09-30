import React from 'react'
import {MdLocationOn,MdEmail,MdCall} from 'react-icons/md'
import Input from '../../shared/Input';

export default function 
() {
    return (
			<div className='bg-[#F1F6FA] h-full py-12 px-8 md:px-44 lg:px-32'>
				<div className='py-2'>
					<h1 className='text-black text-2xl font-bold'>Contact information</h1>
					<hr className='border-2 border-blue-700 w-16 mt-2' />
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 justify-between py-4'>
					<div>
						<p className='text-gray-400 text-md max-w-sm'>
							Fill up the form and our Team will get back to you with 25 hours.
						</p>
						<div className='py-3 space-y-2'>
							<span className='flex flex-row items-center gap-2'>
								<MdEmail className='text-blue-500' />
								<p>ensome@info.co.us</p>
							</span>
							<span className='flex flex-row items-center gap-2'>
								<MdCall className='text-blue-500' />
								<p>+1 601-201-5580</p>
							</span>
							<span className='flex flex-row items-center gap-2'>
								<MdLocationOn className='text-blue-500' />
								<p>1642 Washington Ave, Jackson, MS</p>
							</span>
						</div>
					</div>
					<div>
						<form className='space-y-4'>
							<Input placeholder='Andrea' type='name' label='Name' />
							<Input
								placeholder='andrea@gmail.com'
								type='email'
								label='Email'
							/>
							<Input placeholder='job' type='text' label='Theme' />
							<Input placeholder='Your message' type='text' label='Message' />

							<div className='pt-4'>
								{' '}
								<button className='border-none bg-blue-700 text-white font-bold hover:bg-blue-900 px-8 rounded-lg h-[45px]'>
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
}



