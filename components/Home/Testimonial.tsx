import React from 'react'

export default function Testimonial() {
		const CeoData = [
			{
				img: '',
				name: 'Alex Bern',
				title: 'CEO by PixelPerfect',
				subtitle: `Ut enim ad minima veniam, quis nostrum exercitationem ullam
							corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
							consequatur? Quis autem vel eum iure reprehenderit qui in ea
							voluptate velit esse quam nihil molestiae consequatur, vel illum.`,
			},
			{
				img: '',
				name: 'Dele Ben',
				title: 'CEO by Blaze',
				subtitle: `Ut enim ad minima veniam, quis nostrum exercitationem ullam
							corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
							consequatur? Quis autem vel eum iure reprehenderit qui in ea
							voluptate velit esse quam nihil molestiae consequatur, vel illum.`,
			},
			// {
			// 	img: '',
			// 	name: 'Ade Dan',
			// 	title: 'CEO by PixelPay',
			// 	subtitle: `Ut enim ad minima veniam, quis nostrum exercitationem ullam
			// 				corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
			// 				consequatur? Quis autem vel eum iure reprehenderit qui in ea
			// 				voluptate velit esse quam nihil molestiae consequatur, vel illum.`,
			// },
		];
  return (
		<section className='bg-[#F1F6FA] h-full py-12 px-8 md:px-44 lg:px-32'>
			<div>
				<h1 className='text-black text-2xl font-bold'>
					What our customers say{' '}
				</h1>
				<hr className='border-2 border-blue-700 w-16 mt-2' />
			</div>
			<div className='flex flex-col md:flex-row md:space-x-4'>
				{CeoData.map((data: any, index: any) => (
					<div
						className='h-full w-full md:max-w-md  mt-8 bg-white rounded-md p-8'
						key={index}>
						<div className='flex flex-row'>
							<span>
								<img src={data.img} />
							</span>
							<div>
								<h4 className='text-md font-bold'>{data.name}</h4>
								<p>{data.title}</p>
							</div>
						</div>
						<div>
							<p className='text-gray-500 max-w-md'>“{data.subtitle} ”</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
