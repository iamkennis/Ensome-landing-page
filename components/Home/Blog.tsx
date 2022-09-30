import Link from 'next/link';
import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

export default function Blog() {
		const blogData = [
			{
				img: '/images/cowomen.jpg',
				date: '22 June 2022',
				subtitle: `Staffing software: key capabilities and top products`,
			},
			{
				img: '/images/cowomen.jpg',
				date: '22 June 2022',
				subtitle: `2022 software development trends explained with benefits`,
			},
			{
				img: '/images/cowomen.jpg',
				date: '22 June 2022',
				subtitle: `Business analysis helps you  in finance`,
			},
		];

  return (
		<section className=' h-full py-12 px-8 md:px-44 lg:px-32'>
			<div className=''>
				<h1 className='text-black text-2xl font-bold '>Ensome blog</h1>
				<hr className='border-2 border-blue-700 w-16 mt-2' />
			</div>
			<div className='pt-4 grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{blogData.map((data: any, index: any) => (
					<div className='space-y-4' key={index}>
						<img src={data.img} className='w-[350px] h-[200px] rounded-md' />
						<p className='text-gray-500 text-sm font-bold'>{data.date}</p>
						<p className='text-md max-w-sm'>{data.subtitle}</p>
						<span className='text-blue-500 text-sm flex flex-row items-center'>
							<Link href=''>Read more</Link>
							<BsArrowRight />
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
