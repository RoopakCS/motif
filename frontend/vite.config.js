import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["/logo-192x192.png", "/logo-512x512.png"],
			devOptions: {
				enabled: true,
				type: "module",
			},
			manifest: {
				name: "Motif",
				short_name: "Motif",
				description: "Your Personal Progression Lab",
				theme_color: "#121212",
				background_color: "#121212",
				display: "standalone",
				start_url: "/",
				scope: "/",
				icons: [
					{
						src: "/logo-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/logo-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
});
