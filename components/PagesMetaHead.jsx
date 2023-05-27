import Head from 'next/head';


function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/" />
			<title>{title}</title>
			<script type="application/ld+json">
				{`
                    {
                        "@context": "http://schema.org",
                        "@type": "person",
                        "name": "윤동호",
						"jobTitle": ["법무법인 YK 전문위원", "행정사"],
                        "url": "http://www.yundongho.com",
						"image": "https://www.yundongho.com/images/profile_main.jpg",
                        "sameAs": [
                            "http://www.yklaw.net/dete/introduction/?&type=전문위원&v=459",
                            "https://ko-kr.facebook.com/people/%EC%9C%A4%EB%8F%99%ED%98%B8/pfbid0hWhmu1znGm1JFy2XP6wAAGzj1TbQiRUQB4rs5wfFbVkX6g7MiudByJdH8FpNdvUul/",
                            "https://blog.naver.com/dh3yun"
                        ],
						"worksFor": {
        					"@type": "Organization",
        					"name": "법무법인 YK"
      					}
                    }
                `}
			</script>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: '윤동호 - 재해보상 / 소청심사 전문',
	keywords: '재해보상, 소청심사, 재해보상 상담, 소청심사 상담, 재해보상 전문 상담, 소청심사 전문 상담, 출입국, 행정사, 일반행정사, 법무법인yk',
	keywords: 'Korean Licensed Administrative Agent, Korean immigration Control Law, Korean Immigration Bureau, Korean immigration form, Korean law firm',
};

export default PagesMetaHead;
