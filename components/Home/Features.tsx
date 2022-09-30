import React from 'react'
import { FaBrain } from 'react-icons/fa'
import { GoKey } from 'react-icons/go';
import { RiLineChartFill } from 'react-icons/ri';


export default function Features() {

		const featuresData = [
			{
				icon: <FaBrain />,
				title: 'Machine learning',
				subtitle: `At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores.`,
			},
			{
				icon: <RiLineChartFill />,
				title: 'Embed analytics',
				subtitle: `At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores.`,
			},
			{
				icon: <GoKey />,
				title: 'Access control',
				subtitle: `At vero eos et accusamus et iusto odio dignissimos ducimus qui
							blanditiis praesentium voluptatum deleniti atque corrupti quos
							dolores.`,
			},
		];
    return (
			<section className='h-full py-24'>
				<div className='px-8 md:px-44 lg:px-32'>
					<div className='py-8'>
						<h1 className='text-black text-2xl font-bold'>Ensome in numbers</h1>
						<hr className='border-2 border-blue-700 w-16 mt-2' />
					</div>
					<div className='grid grid-cols-2 gap-8 lg:grid lg:grid-cols-4'>
						<div>
							<p className='text-gray-500 text-md'>
								Data management by <br />
								 Ensome's{' '}
							</p>
							<small className='text-blue-700 text-4xl font-normal'>390</small>
						</div>
						<div>
							<p className='text-gray-500 text-md'>
								Projects implemented <br /> by Ensome{' '}
							</p>
							<small className='text-blue-700 text-4xl font-normal'>
								1830+
							</small>
						</div>
						<div>
							<p className='text-gray-500 text-md'>
								Сustomers are satisfied <br /> with Ensome's work{' '}
							</p>
							<small className='text-blue-700 text-4xl font-normal'>834+</small>
						</div>
						<div>
							<p className='text-gray-500 text-md'>
								Data analytics by <br />
								 Ensome's{' '}
							</p>
							<small className='text-blue-700 text-4xl font-normal'>220</small>
						</div>
					</div>
				</div>
				<div className='space-y-8 mt-14 lg:grid lg:grid-cols-2 lg:items-center  gap-12'>
					<div className=''>
						<img
							src='/images/cowomen.jpg'
							className='object-cover w-[929px] h-[450px]'
						/>
					</div>
					<div className='px-8 md:px-32 lg:px-0'>
						<div className='mb-2'>
							<h1 className='text-black text-2xl font-bold '>
								The benefits of Ensome{' '}
							</h1>
							<hr className='border-2 border-blue-700 w-16 mt-2' />
						</div>
						<div className=''>
							{featuresData.map((data: any, index: number) => (
								<div key={index} className='py-4'>
									<span className='text-blue-700 text-2xl gap-4 flex flex-row items-center'>
										{data.icon}
										<h3 className='text-black text-2xl font-bold'>
											{data.title}
										</h3>
									</span>

									<p className='text-gray-500 max-w-sm'>{data.subtitle}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		);
}
