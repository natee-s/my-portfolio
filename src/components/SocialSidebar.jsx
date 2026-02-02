import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTiktok } from 'react-icons/si';

const SocialSidebar = () => {    //เราจะสร้างตัวแปรเพื่อเก็บข้อมูลลิ้งก์ไว้ที่เดียวกัน เพื่อง่ายต่อการแก้ไข
    const socials = [
        { 
            id:1,
            icon: <FaLinkedin size={24}/>,
            link: 'https://www.linkedin.com/in/natee-siriudom/',
            color: 'hover:text-[#0077B5]',
            lable: 'LinkIn',
        },
        {
            id:2,
            icon: <FaGithub size={24}/>,
            link: 'https://github.com/natee-s',
            color: 'hover:text-[#ffff]',
            lable: 'Github',
        },
        {
            id:3,
            icon: <SiTiktok size={24}/>,
            link: 'https://www.tiktok.com/@man_share',
            color: 'hover:text-[#ff0050]',
            lable: 'TikTok',
        },
    ];
    return(
        <div className="ralative">
        {/* ชุดที่โชว์บน Desktop (แนวตั้งด้านขวา) */}
            <div className="hidden md:flex fixed bottom-0 right-10 flex-col items-center gap-6 z-50">
                <ul className="flex flex-col gap-6">
                    {socials.map(({id,icon,link,color,lable}) => (
                        <li key={id} className="transition-all duration-300 transform hover:-translate-y-1">
                            <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className={`text-gray-500 ${color} transition-coloes duration-300`}
                                aria-lable={lable}
                            >
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* 🪄 เส้นตรงแนวตั้งที่ลากลงไปที่ขอบจอ */}
                <div className="w-px h-32 bg-gray-400"></div>
            </div>
            
            {/* 📱 Mobile Version: แสดงเฉพาะจอขนาดเล็ก และจะหายไปเมื่อจอใหญ่ขึ้น */}
            <div className="md:hidden flex justify-center items-center py-8 border-t border-gray-200 mt-10">
                <ul className="flex gap-8">
                    {socials.map(({id,icon,link,color}) => (
                        <li key={id}>
                            <a 
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className={`text-gray-500 ${color} text-2xl`}
                            >
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SocialSidebar;