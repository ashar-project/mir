import { StrictModeProvider } from "./StrictModeProvider";
import { ReduxToolkitProvider } from "./ReduxToolkitProvider";

export const CombinedProviders = ({ children }) => {
	return (
		<StrictModeProvider>
			<ReduxToolkitProvider>{children}</ReduxToolkitProvider>
		</StrictModeProvider>
	);
};
