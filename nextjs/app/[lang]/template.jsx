// template يعيد إنشاء المحتوى عند كل انتقال بين الصفحات،
// حتى تبدأ الحركات من جديد على عناصر نظيفة
export default function Template({ children }) {
  return <main id="main">{children}</main>;
}
