import { LoginView } from './LoginView';
import { wrapRender } from '../../util/testHelpers';

describe('<LoginView> component', () => {
	it('should render', () => {
		wrapRender(<LoginView />);
	});
});
