/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    NEXT_MAGICBELL_API_KEY:"$MAGICBELL_API_KEY",
    NEXT_MAGICBELL_USER_EMAIL:"$MAGICBELL_USER_EMAIL",
    NEXT_PUBLIC_TRANSPORT_SOCKET_URL:"wss://comms-playground.samagra.io",
  }
}
