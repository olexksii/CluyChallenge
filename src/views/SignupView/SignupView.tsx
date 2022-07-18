import Header from "../../components/Header";
import Signup from "../../components/Signup";

export const SignupView = () => {
	return (
		<>
		<Header
			heading="Login to your account"
			paragraph="Don't have an account yet? "
			linkName="Signup"
			linkUrl="/signup"
			/>
		<Signup />
		</>
	)
};
