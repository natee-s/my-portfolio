import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero'; // Import เพิ่มตรงนี้

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <Navbar />
      <main>
        {/* เปลี่ยนจาก h1 ตรงๆ เป็น Component Hero */}
        <Hero />
      </main>
    </div>
  );
};

export default App;