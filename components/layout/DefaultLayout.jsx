import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import AppFooterCopyright from '../shared/AppFooterCopyright';
import PagesMetaHead from '../PagesMetaHead';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<PagesMetaHead />
			<AppHeader />
			<div>{children}</div>
			<AppFooter />
			<AppFooterCopyright />
		</>
	);
};

export default DefaultLayout;
