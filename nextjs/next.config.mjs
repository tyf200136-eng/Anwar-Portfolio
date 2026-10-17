/** @type {import('next').NextConfig} */
const nextConfig = {
  // الصفحة الرئيسية / تفتح النسخة العربية. غيّرها إلى "/en" لجعل الإنجليزية الافتراضية.
  async redirects() {
    return [{ source: "/", destination: "/ar", permanent: false }];
  }
};
export default nextConfig;
