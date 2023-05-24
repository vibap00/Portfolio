import { FiPhone, FiMapPin, FiMail, FiFacebook, FiLink } from 'react-icons/fi';
import {RiKakaoTalkFill,RiTelegramFill} from 'react-icons/ri';


const contacts = [
	{
		id: 1,
		name: '서울특별시 서초구 서초중앙로 138, 6층(서초동, 우림빌딩)',
		icon: <FiMapPin />,
	},
	//{
	//	id: 2,
	//	name: '화면 상단의 직통전화 클릭',
	//	icon: <FiPhone />,
	//},
	{
		id: 3,
		name: 'dh3yun@naver.com',
		icon: <FiMail />,
	},
	{
		id: 4,
		name: '카카오톡 ID: dh3yun',
		icon: <RiKakaoTalkFill />,
	},
	{
		id: 5,
		name: '텔레그램 ID: dh3yun',
		icon: <RiTelegramFill />,
	},
	{
		id: 6,
		name: '법무법인 YK 형사센터 (링크)',
		url: 'http://www.yklaw.net/dete/introduction/?&type=전문위원&v=459',
		icon: <FiLink />,
	},
	{
		id: 7,
		name: '페이스북 (링크)',
		url: 'https://ko-kr.facebook.com/people/%EC%9C%A4%EB%8F%99%ED%98%B8/pfbid02mEVy7KtsweZqxVRyiXvZa2s2soMNPP4NbdwngVSEUzuZ2qnn6BGmnpQDKo9LraQcl/',
		icon: <FiFacebook />,
	},
];


function ContactDetails() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8 justify-center">
					연락처
				</h2>
				<ul>
				{contacts.map((contact) => (
    <li className="flex" key={contact.id}>
        <a href={contact.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-2 mb-4">
                {contact.icon}
            </i>
            <span className="text-lg mb-2 text-ternary-dark dark:text-ternary-light">
                {contact.name}
            </span>
        </a>
    </li>
))}


					{/*{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))} */}
				</ul>
			</div>
		</div>
	);
}

export default ContactDetails;
