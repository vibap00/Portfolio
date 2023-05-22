import { motion } from 'framer-motion';
import PagesMetaHead from '../../components/PagesMetaHead';



const expertiseSubfieldData = [
  {
    id: 1,
    name: '재해보상',
    description: '(차후 내용 추가)',
  },
  {
    id: 2,
    name: '소청심사',
    description: '(차후 내용 추가)',
  },
 
];


const expertiseSubfieldData2 = [
	{
	  id: 2,
	  name: '일반 상담',
	  description: '익명 상담 가능. 상담 후 사안에 따른 담당 전문가 및 변호사 연결',
	},
	{
		id: 1,
		name: '일반행정사 업무',
		description: '출입국관리, 행정서류 작성, (차후 내용 추가)',
	},
	// Add more subfields as needed...
  ];




function Index() {
	return (
		<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{
			ease: 'easeInOut',
			duration: 0.5,
			delay: 0.1,
		}}
		className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
	>
	  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

		<PagesMetaHead title="윤동호 - 업무분야" />
  
		<div className="mt-5 max-w-2xl mx-auto">
		  <h2 className="text-5xl text-center">전문 분야 </h2>
		
		  {expertiseSubfieldData.map((subfield) => (
			<div key={subfield.id} className="text-center">
			  <h3 className="text-3xl mt-20">{subfield.name}</h3>
			  <p className="mt-10 text-2xl text-gray-700 dark:text-gray-300">{subfield.description}</p>
			</div>
		  ))}

		<div className="mt-28">
		  <h2 className="text-5xl text-center"> 일반 분야 </h2>

		{expertiseSubfieldData2.map((subfield) => (
  			<div key={subfield.id} className="text-center">
			  <h3 className="text-3xl mt-20">{subfield.name}</h3>
			  <p className="mt-10 text-2xl text-gray-700 dark:text-gray-300">{subfield.description}</p>
  			</div>
		  ))}
			</div>
		</div>
  
	  </div>
	  </motion.div>
	);
  }


export default Index;
