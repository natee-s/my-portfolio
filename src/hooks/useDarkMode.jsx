import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  // 1. ตรวจสอบว่าเคยเซฟโหมดไว้ใน Browser หรือไม่ ถ้าไม่ให้ใช้ 'light' เป็นค่าเริ่มต้น
  const [theme, setTheme] = useState(localStorage.theme || 'light');
  
  // 2. กำหนดตัวแปรสำหรับโหมดที่ไม่ได้เลือก (เพื่อใช้ในการลบ class)
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    // 3. เข้าถึงโฟลเดอร์รากของ HTML (<html> tag)
    const root = window.document.documentElement;
    
    // 4. ลบ class ของโหมดเก่าออก และเพิ่ม class ของโหมดใหม่เข้าไป
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    
    // 5. บันทึกค่าลงใน Local Storage เพื่อให้เปิดเว็บครั้งหน้ายังจำโหมดเดิมได้
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  // ส่งค่าธีมปัจจุบัน และฟังก์ชันสำหรับเปลี่ยนธีมออกไปให้ Component อื่นใช้
  return [theme, setTheme];
};