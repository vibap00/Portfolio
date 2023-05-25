import Image from 'next/image';
import { motion } from 'framer-motion';

function AppBanner() {


	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-12 lg:mt-12 mb-20"
		>
			<div className="w-full md:w-2/3 items-center text-center">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.7,
						delay: 0.2,
					}}
					className="ml-0 md:ml-0 lg:ml-4 w-full md:w-1/2 lg:w-1/2 text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
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
					className="ml-0 md:ml-0 lg:ml-4 mt-4 text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
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
					className="ml-0 md:ml-0 lg:ml-4 mt-6 text-xl md:text-2xl lg:text-2xl xl:text-3xl sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					재해보상 / 소청심사 전문
				</motion.p>

			</div>
			<div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 1.7, delay: 3.5 }}
				className="w-full md:w-2/3 lg:w-2/3 text-right float-right mt-8 sm:mt-0 flex justify-center md:justfiy-end lg:justify-end mr-0 md:mr-0 lg:mr-20"
			>
				<Image
					src="/images/profile_main.jpg"
					width={500}  // actual image width in pixels
					height={500} // actual image height in pixels
					alt="재해보상 상담 / 소청심사 상담"
				/>
			</div>
		</motion.section>
	);
}

export default AppBanner;
