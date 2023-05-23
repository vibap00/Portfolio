import { motion } from 'framer-motion';
import AboutMeBio from '../components/about/AboutMeBio';
import PagesMetaHead from '../components/PagesMetaHead';

function about() {
	return (
		<div>
			<PagesMetaHead title="윤동호 - 약력" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 17 }}
				exit={{ opacity: 0 }}
				className="container mx-auto mb-12"
			>
				<AboutMeBio />
			</motion.div>

			

		</div>
	);
}

export default about;
