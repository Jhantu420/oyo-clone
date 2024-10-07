/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "th.bing.com",
      "images.oyoroomscdn.com",
      "i.pinimg.com",
      "img.freepik.com",
      "thumbs.dreamstime.com",
      "www.creativefabrica.com",
      "static.vecteezy.com",  // Add this domain
    ],
  },
};

export default nextConfig;
