import React from 'react'

export default function Input({label, placeholder,type}) {
  return (
		<div className='flex flex-col'>
			<label className='text-gray-400 text-md py-2'>{label}</label>
			<input
				placeholder={placeholder}
				type={type}
				className='border-b-2 border-gray-400 max-w-md placeholder-black outline-none bg-transparent'
			/>
		</div>
	);
}
