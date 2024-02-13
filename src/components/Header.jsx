const Header = () => {
	return (
		<div className='relative bg-hvblue'>
			<div className='absolute inset-0'>
				<img
					className='h-full w-full object-cover'
					src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
					alt=''
				/>
				<div className='absolute inset-0 bg-hvblue-300 mix-blend-multiply' aria-hidden='true'></div>
			</div>
			<div className='relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
				<h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>Alabama Hands &amp; Voices</h1>
				<p className='mt-6 max-w-3xl text-xl text-indigo-100'>
					Alabama Hands & Voices is a parent led, parent driven non profit organization supporting all families with children who are deaf / hard of
					hearing regardless of communication choice. We embrace parent and professional collaboration to enable deaf / hard of hearing children to
					reach their full potential.
				</p>
			</div>
		</div>
	);
};

export default Header;
