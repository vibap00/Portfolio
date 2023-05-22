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
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: '윤동호 - 재해보상 / 소청심사 전문',
	keywords: '재해보상, 소청심사, 출입국, 행정사, 법무법인yk',
	keywords: 'Korean Licensed Administrative Agent, Korean immigration Control Law, Korean Immigration Bureau, Korean immigration form, Korean law firm',
};

export default PagesMetaHead;
