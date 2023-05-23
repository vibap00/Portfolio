import {
	RiKakaoTalkFill,
	RiTelegramFill,
} from 'react-icons/ri';


const socialLinks = [
	{
		id: 1,
		icon: <RiKakaoTalkFill />,
		url: '',
	},
	{
		id: 2,
		icon: <RiTelegramFill />,
		url: '',
	},
];

function AppFooter() {
	return (
		<div className="container mx-auto">
			<div className="pt-12 md:pt-12 lg:pt-16 border-t-2 border-gray-200 border-primary-light dark:border-secondary-dark">
				<div className="flex flex-col justify-center items-center mb-12 md:mb-14 lg:mb-16">
					<p className="text-3xl md:text-3xl lg:text-4xl text-primary-dark dark:text-primary-light mb-5">
						카카오톡 / 텔래그램 
					</p>
					<p className="text-3xl md:text-3xl lg:text-4xl text-primary-dark dark:text-primary-light mb-5">
						오픈채팅 상담 
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-2xl sm:text-3xl md:text-4xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				
			</div>
		</div>
	);
}

export default AppFooter;