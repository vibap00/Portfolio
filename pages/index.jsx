import PagesMetaHead from '../components/PagesMetaHead';
import AppBanner from '../components/shared/AppBanner';

export default function Home() {
	return (
		<div className="container mx-auto">
			<PagesMetaHead title="윤동호 - 재해보상 / 소청심사 전문" />

			<AppBanner />

		</div>
	);
}
