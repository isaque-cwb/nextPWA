/** @type {import('next').NextConfig} */
const withImages = require('next-images');

const withPWA = require('next-pwa')({
    dest: 'public'
})

module.exports = withPWA({
    // next.js config
})


// module.exports = withImages({
//     images: {
//         domains: ['localhost', 'github.com'], // Domínios para os quais você deseja permitir importações externas
//     },
// });
