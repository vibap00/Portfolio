import { motion } from 'framer-motion';
import Button from './reusable/Button';

function HireMeModal({ onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 transition-all duration-300"
        >
            {/* Modal Backdrop */}
            <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

            {/* Modal Content */}
            <main className="flex flex-col items-center justify-center md:justify-start lg:justify-center mt-0 md:mt-60 lg:mt-0 h-full w-full">
                <div className="z-30">
                <div className="modal max-w-full md:max-w-sm lg:max-w-sm mx-2 bg-secondary-light dark:bg-primary-dark shadow-lg flex-row rounded-lg relative">
                        <div className="flex justify-center gap-5 p-5 border-b border-ternary-light dark:border-ternary-dark">
                            <h5 className=" text-primary-dark dark:text-primary-light text-xl">전화번호</h5>
                        </div>
                        <div className="p-5 w-full h-full">
                            <form onSubmit={(e) => e.preventDefault()} className="m-4 text-left">
                                <div className="text-2xl mt-6 mb-8">010-5752-7191</div>
                            </form>
                        </div>
                        <div className="mt-0 sm:mt-0 py-5 px-8 border0-t text-center">
                            <span
                                onClick={onClose}
                                type="button"
                                className="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-600 duration-300"
                                aria-label="Close Modal"
                            >
                                <Button title="Close" />
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </motion.div>
    );
}

export default HireMeModal;
