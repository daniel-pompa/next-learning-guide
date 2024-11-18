import { SimpleWidget } from '@/components';
import { Metadata } from 'next';
import { FaCog, FaDatabase, FaServer, FaSyncAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'The Admin Dashboard provides an overview of key features and technologies used in the application, including server-side rendering, dynamic generation, static page optimization, and global state management with Redux Toolkit. Explore the core components designed to enhance performance, scalability, and maintainability.',
};

export default function Dashboard() {
  return (
    <div className='container-page'>
      <h1>Dashboard Overview</h1>
      <p className='text-slate-600 text-center -mt-5'>
        Explore the core features and technologies used in the application.
      </p>
      {/* Widgets */}
      <div className='flex flex-wrap items-center justify-center mt-10'>
        <SimpleWidget />
      </div>
      {/* Dashboard Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 leading-relaxed'>
        {/* Card 1: Server-Side and Client-Side Rendering */}
        <div className='relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all'>
          <div className='absolute top-[-20px] right-[20px] bg-blue-500 rounded-md p-4 shadow-lg shadow-blue-500'>
            <FaServer className='text-slate-50' size={24} />
          </div>
          <h3 className='mt-4 md:mt-0'>
            Server-Side Rendering (SSR) and Client-Side Rendering (CSR)
          </h3>
          <p className='text-slate-600 mt-2 border-b-2 border-slate-200 pb-2'>
            Understand the core principles of server-side rendering for SEO and
            performance optimization, paired with efficient client-side state management.
          </p>
          <div className='mt-6'>
            <ul className='list-disc pl-5'>
              <li>Enhances SEO by delivering server-rendered HTML.</li>
              <li>Dynamically processes content on the server.</li>
              <li>Improves initial load times with optimized delivery.</li>
            </ul>
          </div>
        </div>
        {/* Card 2: Dynamic Generation - SSR */}
        <div className='relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all'>
          <div className='absolute top-[-20px] right-[20px] bg-indigo-500 rounded-md p-4 shadow-lg shadow-indigo-500'>
            <FaSyncAlt className='text-slate-50' size={24} />
          </div>
          <h3 className='mt-4 md:mt-0'>Dynamic Generation (SSR)</h3>
          <p className='text-slate-600 mt-2 border-b-2 border-slate-200 pb-2'>
            Leverage server-side rendering to dynamically generate pages on each request,
            ensuring up-to-date content and optimal SEO performance.
          </p>
          <div className='mt-6'>
            <ul className='list-disc pl-5'>
              <li>Dynamically generates pages at request time.</li>
              <li>Maximizes SEO with server-generated content.</li>
              <li>Ensures up-to-date content on each page load.</li>
            </ul>
          </div>
        </div>
        {/* Card 3: Incremental and Static Generation */}
        <div className='relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all'>
          <div className='absolute top-[-20px] right-[20px] bg-orange-500 rounded-md p-4 shadow-lg shadow-orange-500'>
            <FaCog className='text-slate-50' size={24} />
          </div>
          <h3 className='mt-4 md:mt-0'>
            Incremental and Static Generation (ISR and SSG)
          </h3>
          <p className='text-slate-600 mt-2 border-b-2 border-slate-200 pb-2'>
            Pre-generate static pages to ensure rapid load times for frequently accessed
            content while using incremental updates for scalability and efficiency.
          </p>
          <div className='mt-6'>
            <ul className='list-disc pl-5'>
              <li>Pre-generated static pages for faster user experiences.</li>
              <li>Advanced caching mechanisms for improved performance.</li>
              <li>
                Instantly deliver static content while supporting updates on demand.
              </li>
            </ul>
          </div>
        </div>
        {/* Card 4: Global State - Redux and LocalStorage */}
        <div className='relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all'>
          <div className='absolute top-[-20px] right-[20px] bg-teal-500 rounded-md p-4 shadow-lg shadow-teal-500'>
            <FaDatabase className='text-slate-50' size={24} />
          </div>
          <h3 className='mt-4 md:mt-0'>Global State Management with Redux Toolkit</h3>
          <p className='text-slate-600 mt-2 border-b-2 border-slate-200 pb-2'>
            Effectively manage and centralize application state with Redux Toolkit,
            enabling seamless data flow and improved scalability for modern web
            applications.
          </p>
          <div className='mt-6'>
            <ul className='list-disc pl-5'>
              <li>
                Simplifies state management with Redux Toolkit&#39;s powerful tools.
              </li>
              <li>Enhances application scalability and maintainability.</li>
              <li>Supports efficient debugging and state persistence.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
