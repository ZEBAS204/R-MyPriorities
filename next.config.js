/** @type {import('next').NextConfig} */
module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		})

		return config
	},
	i18n: {
		locales: ['en', 'es', 'fr'],
		defaultLocale: 'en',
		localeDetection: false,
	},
	typescript: {
		// ! Dangerous, allow production builds to successfully
		// ! complete even if your project has type errors.
		ignoreBuildErrors: true,
	},
}
