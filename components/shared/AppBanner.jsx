import { motion } from 'framer-motion';

function AppBanner() {


	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
		>
			<div className="w-full md:w-1/3 items-center text-center">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.7,
						delay: 0.2,
					}}
					className="text-2xl lg:text-3xl xl:text-5xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					윤동호
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.7,
						delay: 0.3,
					}}
					className="mt-4 text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					법무법인YK 전문위원
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.7,
						delay: 0.4,
					}}
					className="mt-6 text-lg md:text-xl lg:text-2xl xl:text-3xl text-between sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					재해보상 / 소청심사 전문
				</motion.p>

			</div>
			<div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 1.7, delay: 3.5 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0 flex justify-end mr-16"
			>
				<img
					layout="responsive"
					src={
						'/images/profile_main.jpg'
					}
					width="80%" height="80%"
					alt="profile_main.jpg"
				/>
			</div>
		</motion.section>
	);
}

export default AppBanner;
