import { useEffect, useState } from "react";

export function useInstallPrompt() {
	const [deferred, setDeferred] = useState(null);
	const [isInstallable, setIsInstallable] = useState(false);

	useEffect(() => {
		const handler = (e) => {
			e.preventDefault();
			console.log(e)
			setDeferred(e);
			setIsInstallable(true);
		};

		window.addEventListener("beforeinstallprompt", handler);

		return () => {
			window.removeEventListener("beforeinstallprompt", handler);
		};
	}, []);

	const promptInstall = async () => {
		if (!deferred) return;

		deferred.prompt();
		await deferred.userChoice;
		setDeferred(null);
		setIsInstallable(false);
	};

	return {isInstallable, promptInstall};
}
