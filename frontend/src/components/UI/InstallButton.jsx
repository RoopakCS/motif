import { useInstallPrompt } from "../../hooks/useInstallPrompt";

function InstallButton() {
	const { isInstallable, promptInstall } = useInstallPrompt();

	if(!isInstallable) return null;

	return (
		<button
			onClick={promptInstall}
			className="text-sm opacity-70 hover:opacity-100 cursor-pointer"
		>
			Install Motif
		</button>
	);
}

export default InstallButton;
