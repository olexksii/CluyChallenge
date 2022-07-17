import { Meta, Story } from '@storybook/react';

import { LoginView } from './LoginView';

const metadata: Meta = {
	component: LoginView,
	title: 'Views/Login View',
	argTypes: {},
};
export default metadata;

const Template: Story = (args) => <LoginView {...args} />;

export const Login_View = Template.bind({});
Login_View.args = {};
