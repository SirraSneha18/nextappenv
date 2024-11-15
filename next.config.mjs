// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      MY_ENV_VARIABLE: process.env.MY_ENV_VARIABLE,
      MY_ENV_VAR: process.env.MY_ENV_VAR,
    },
  };
  
  export default nextConfig;
  