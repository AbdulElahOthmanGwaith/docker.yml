import React from 'react';
import { Header } from './Header';
import { LeftSidebar } from './LeftSidebar';
import { RightSidebar } from './RightSidebar';
import { useApp } from '../../context/AppContext';

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebars?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showSidebars = true 
}) => {
  const { language } = useApp();
  const isRTL = language === 'ar';

  return (
    <div 
      className="min-h-screen bg-gray-50 dark:bg-gray-950"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* شريط التنقل العلوي */}
      <Header />
      
      {/* محتوى الصفحة الرئيسي */}
      <div className="flex">
        {/* الشريط الجانبي الأيسر */}
        {showSidebars && <LeftSidebar />}
        
        {/* المحتوى الرئيسي */}
        <main className={`flex-1 ${showSidebars ? 'lg:ml-80 xl:mr-80' : ''} min-h-screen`}>
          <div className="p-4 lg:p-6">
            {children}
          </div>
        </main>
        
        {/* الشريط الجانبي الأيمن */}
        {showSidebars && <RightSidebar />}
      </div>
    </div>
  );
};