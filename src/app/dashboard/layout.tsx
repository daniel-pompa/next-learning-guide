import { Sidebar } from '@/components';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-slate-100 w-screen h-screen text-slate-300 selection:bg-blue-600 selection:text-white'>
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex flex-col w-full h-full text-slate-800 overflow-y-auto pt-20'>
          {children}
        </div>
      </div>
    </div>
  );
}
