module.exports = ({ env }) => ({
	upload: {
		provider: 'imagekit',
		providerOptions: {
			publicKey: env('IMAGEKIT_PUBLIC_KEY'), // put your publicKey here
			privateKey: env('IMAGEKIT_PRIVATE_KEY'), // put your privateKey here
			urlEndpoint: env('IMAGEKIT_ENDPOINT'), // put your urlEndpoint
			params: {
				folder: '/iyansr-content',
			},
		},
	},
})
