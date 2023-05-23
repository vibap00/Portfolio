import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import UseScrollToTop from '../hooks/useScrollToTop';


function MyApp({ Component, pageProps }) {
	return (
		
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 17 }}
			exit={{ opacity: 0 }}
			className="container mx-auto"
		>
			<AnimatePresence>

				<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
					<UseScrollToTop />
				</div>

			</AnimatePresence>
		</motion.div>
	);
}

export default MyApp;
