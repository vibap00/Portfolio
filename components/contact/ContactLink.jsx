import { AiFillDatabase } from 'react-icons/ai';
import { BsChatSquareTextFill } from 'react-icons/bs';


const expertiseAreas = [
    {
        id: 1,
        name: '재해보상 전문 상담',
        description: '다년간 재해보상정책담당관으로서 근무하였습니다. 제가 얻은 경험을 토대로 어떤 사건이든 자세하고 알기 쉽게 설명 드리겠습니다.',
        icon: <BsChatSquareTextFill />,
    },
    {
        id: 2,
        name: '소청심사 전문 상담',
        description: '공직에서 오랜기간 소청심사와 관련된 업무를 전담하였습니다. 이러한 경험을 바탕 삼아 어떤 사건이든 최선을 다해 도와드리겠습니다.',
        icon: <BsChatSquareTextFill />,
    },
    {
        id: 3,
        name: '일반 상담',
        description: '법무법인 YK는 업계에서 가장 빠르게 성장하고 있는 중견 로펌 중 하나입니다. 160여명의 변호사를 포함하여 다양한 분야에서 경험과 실력을 갖춘 360여명의 전문가가 포진해 있습니다. 부담 없이 상담 주시면 해당 사안에 맞는 최고의 전문가를 연결시켜드리겠습니다.',
        icon: <BsChatSquareTextFill />,
    },
];

function ExpertiseDetails() {
    return (
        <div className="w-full lg:w-1/2 mr-24">
            <div className="text-left max-w-xl px-6">
                <h2 className="text-2xl text-primary-dark dark:text-primary-light mt-12 mb-10">
                    상담 분야
                </h2>
                <ul>
                    {expertiseAreas.map((area) => (
                        <li className="flex flex-col mb-10" key={area.id}>
                            <div className="flex">
                                <i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4 mt-1">
                                    {area.icon}
                                </i>
                                <span className="text-lg mb-3 text-ternary-dark dark:text-ternary-light">
                                    {area.name}
                                </span>
                            </div>
                            <p className="text-between1 s20:text-between2 md:text-base lg:text-between3 ml-9 text-gray-700 dark:text-gray-300"
                                dangerouslySetInnerHTML={{ __html: area.description.replace(/\n/g, '<br/>') }}>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExpertiseDetails;
