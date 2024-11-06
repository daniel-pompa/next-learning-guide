import { Navbar, Sidebar } from '../components';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-slate-100 overflow-y-hidden w-screen h-screen antialiased text-slate-300'>
      {/* Navbar */}
      <Navbar />
      <div className='flex'>
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <div className='flex flex-col items-center w-full text-slate-800 p-4'>
          {children}
        </div>
      </div>
    </div>
  );
}
