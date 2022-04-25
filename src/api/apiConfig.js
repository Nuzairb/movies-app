const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '184792dceb0eb96a0680ddff7329c877',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;