import React from 'react';
import bgimg from '../assets/swimming/1667464134_1-sportishka-com-p-samii-bistrii-tip-plavaniya-krasivo-1.jpg' 
import img1 from '../assets/swimming/0b340f_22a322e5f5ef4cfd898b6677e2af7660~mv2.webp'
import img2 from '../assets/swimming/shutterstock_316450181-edit copy.webp'
import img3 from '../assets/swimming/shutterstock_146263598-edit.webp'
import '../App.css'
import {HiOutlineMail, HiPhone} from 'react-icons/hi'
import {FaInstagram, FaTelegramPlane} from 'react-icons/fa'

const About = () => {
    return (
        <div className='mainCss-about'>
            <div className='banner-cover'>
                <div className='text'>
                    <p className='letter'>Swimming</p>
                    <p className='letter'>Season Is On</p>
                </div>
            </div>
            <div className='blog-1'>
                <div className='picture'>
                    <img src={img1} className='img1'/>
                </div>
                <div className='desc-for'>
                    <p className='text-2xl text-blue-950'>What's New</p>
                    <p className='text-5xl text-blue-950'>We Care About</p>
                    <p className='text-5xl text-blue-950'>Your Safety</p>
                    <span className='w-[120px] h-[1px] bg-slate-900 mt-6 mb-7'></span>
                    <p className='mb-8 text-blue-950'>
                        I'm a paragraph. Click here to add your own text and edit me. 
                        It's easy. Just click “Edit Text” or double click me to add your own content and make 
                        changes to the font.
                    </p>
                    <button className='px-6 py-3 text-white transition-all duration-100 bg-blue-950 hover:bg-slate-900'>Discover More</button>
                </div>
            </div>
            <div className='blog-2'>
                <div className='title'>
                    <h1 className='text-2xl text-slate-950'>Aquatic Activities</h1>
                    <h1 className='text-5xl text-center text-blue-950'>Book Your Slot Today</h1>
                </div>
                <div className='top'>
                <div className='box'>
                    <div className='pic1'>
                        <img src={img2} className="img-blog-2"/>
                    </div>
                    <div className='content'>
                        <h1 className='text-4xl text-center text-blue-950'>Recreational Swims</h1>
                        <p className='text-[16px] text-blue-950 text-center mt-4'>
                            I'm a paragraph. Click here to add your own text and edit me. 
                            Let your users get to know you.
                        </p>
                    </div>
                </div>
                <div className='box'>
                    <div className='pic1'>
                        <img src={img3} className="img-blog-2"/>
                    </div>
                    <div className='content'>
                        <h1 className='text-4xl text-center text-blue-950'>Classes & Lap Swims</h1>
                        <p className='text-[16px] text-blue-950 text-center mt-4'>
                            I'm a paragraph. Click here to add your own text and edit me. 
                            Let your users get to know you.
                        </p>
                    </div>
                </div>
                </div>
                <div className='mt-7'>
                    <button className='px-5 py-3 text-white transition bg-blue-950 hover:bg-slate-950'>Discover More</button>
                </div>
            </div>
            <div className='contact-form'>
                <div className='mt-10 mb-9'>
                    <h1 className='text-5xl text-blue-950'>Contacts</h1>
                </div>
                <div className='contact'>
                    <div className='flex flex-row items-center justify-center'><span className='icon'><HiOutlineMail/></span><span className='text-for'>islomvaliyev30@gmail.com</span></div>
                    <div className='flex flex-row items-center justify-center'><span className='icon'><HiPhone/></span><span className='text-for'>+998936688113</span></div>
                    <span className='span'></span>
                    <div className='icons'>
                        <span className='mx-2 text-3xl'><FaInstagram/></span>
                        <span className='mx-2 text-3xl'><FaTelegramPlane/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
