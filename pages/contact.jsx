import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactLink from '../components/contact/ContactLink';
import PagesMetaHead from '../components/PagesMetaHead';

function contact() {
	return (
		<div>
			<PagesMetaHead title="윤동호 - 상담" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 justify-center lg:mt-5"
			>
			
				<ContactLink />
				<ContactDetails />				
			</motion.div>
		</div>
	);
}

export default contact;
