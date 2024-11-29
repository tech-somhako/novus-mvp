/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/chat/',
          destination: 'http://172.207.42.36/chat', // Directly target the /chat endpoint on the backend server
        },
      ];
    },
  };
  
  export default nextConfig;