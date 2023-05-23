function AppFooterCopyright() {
	return (
		<div className="flex justify-center items-center text-center pb-8">
			<div className="text-sm md:text-base lg:text-base text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a className="ml-1 duration-500">			
					Yun Dong Ho. All Rights Reserved
				</a>
				.{' '}
			</div>
		</div>
	);
}

export default AppFooterCopyright;
