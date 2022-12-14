import React, { useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
// # CSS
import '../styles/Home.module.css'

// -----------------------------------------------------------------------------------------------------
function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`scale-in-hor-center ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}

        </div>
    );
}
// -----------------------------------------------------------------------------------------------------
function FadeInLeft(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`kenburns-topt ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}

        </div>
    );

}
// -----------------------------------------------------------------------------------------------------
const test = () => {
    useEffect(() => {
        const sliders = document.querySelectorAll(".slide-in")
        const appearOption = {
            // threshold: 1,
            rootMargin: "0px 0px -100px 0px"
        };
        const appearOnScroll = new IntersectionObserver
            (function (
                entries,
                appearOnScroll
            ) {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) {
                        return;
                    } else {
                        entry.target.classList.add("appear");
                        appearOnScroll.unobserve(entry.target);
                    }
                })
            }, appearOption)
        sliders.forEach(slider => {
            appearOnScroll.observe(slider)
        });
    }, [])
    // -----------------------------------------------------------------------------------------------------
    // Header titles
    const titleHeader = [
        { lable: '????????', path: '/' },
        { lable: '???????????? ????', path: '/Part/Parttwo' },
        { lable: '???????? ???? ????', path: '/Part/Partthree' },
        { lable: '?????????? ?????? ????', path: '/Part/Partfour' },
    ]
    // -----------------------------------------------------------------------------------------------------

    return (
        <div className=''>

            {/* ----------------------------------------------------------------------------------------------------- */}
            {/* ?????????? */}
            <div className='snap-y snap-mandatory overflow-scroll h-screen w-full scrollbar-hide'>
                <div dir='rtl' className="snap-start w-full h-screen  items-center justify-center bg-yellow-400">
                    <h2 className='h-1/2  items-start w-full bg-red-600'>
                        <header className="h-10 w-full bg-green-400 grid grid-cols-2 p-1" >
                            <div>
                                <ul className='w-full flex justify-between '>
                                    {titleHeader.map(nav => (
                                        <Link href={nav.path}><a className=" text-sm font-bold">{nav.lable}</a></Link>
                                    ))}
                                </ul>
                            </div>
                            <div className='flex justify-end'>
                                Logo
                                Toggle button
                            </div>
                        </header>
                        {/* ------------------------------------------------------------------------------------------------- */}
                        {/*Welocome  */}
                        <h33 className='flex justify-around w-full pt-4'>
                            welcome to IO team
                        </h33>
                    </h2>
                </div>
                {/* ----------------------------------------------------------------------------------------------------- */}
                {/* ???????? ???????????? */}

                <div className="h-full lg:h-screen ">
                    <div className=' grid grid-cols-3 snap-start w-full h-full pr-4 pt-2 bg-green-500 '>
                        {/* ------------------------------------------ */}
                        {/* Next js */}
                        <div className='flex justify-center items-center w-full h-full bg-red-100 relative'>
                            <img src='1.jpg' className='form-left slide-in flex items-center h-full w-16  absolute py-5 ' />
                        </div>
                        <div className='col-span-2'>
                            <p dir='rtl' className='form-right slide-in '>
                                <i className='font-bold'>Next.js</i> <br />
                                ?????????? ????????????
                            </p>
                        </div>
                        {/* ------------------------------------------ */}
                        {/* Flutter */}
                        <div className='flex justify-center items-center w-full h-full bg-red-100 relative'>
                            <img src='1.jpg' className='form-left slide-in flex items-center h-full w-16  absolute py-5 ' />
                        </div>
                        <div className='col-span-2'>
                            <p dir='rtl' className='form-right slide-in '>
                                <i className='font-bold'>FLutter</i> <br />
                                ?????????? ????????????????
                            </p>
                        </div>
                        {/* ------------------------------------------ */}
                        {/* .NET */}
                        <div className='flex justify-center items-center w-full h-full bg-red-100 relative'>
                            <img src='1.jpg' className='form-left slide-in flex items-center h-full w-16  absolute py-5 ' />
                        </div>
                        <div className='col-span-2'>
                            <p dir='rtl' className='form-right slide-in '>
                                <i className='font-bold'>.NET</i> <br />
                                ????????
                            </p>
                        </div>
                        {/* ------------------------------------------ */}
                        {/* Django */}
                        <div className='flex justify-center items-center w-full h-full bg-red-100 relative'>
                            <img src='1.jpg' className='form-left slide-in flex items-center h-full w-16  absolute py-5 ' />
                        </div>
                        <div className='col-span-2'>
                            <p dir='rtl' className='form-right slide-in '>
                                <i className='font-bold'>Django</i> <br />
                                ????????
                            </p>
                        </div>
                        {/* ------------------------------------------ */}
                        {/* Tailwind */}
                        <div className='flex justify-center items-center w-full h-full bg-red-100 relative'>
                            <img src='1.jpg' className='form-left slide-in flex items-center h-full w-16  absolute py-5 ' />
                        </div>
                        <div className='col-span-2'>
                            <p dir='rtl' className='form-right slide-in '>
                                <i className='font-bold'>Tailwind</i> <br />
                                ?????????? ???????? UI ????????????
                            </p>
                        </div>
                        {/* ------------------------------------------ */}
                        {/* UI/UX */}
                        <div className='flex justify-center items-center w-full h-full bg-red-100 relative'>
                            <img src='1.jpg' className='form-left slide-in flex items-center h-full w-16  absolute py-5 ' />
                        </div>
                        <div className='col-span-2'>
                            <p dir='rtl' className='form-right slide-in '>
                                <i className='font-bold'>UI/UX</i> <br />
                                ?????????? UI , UX
                            </p>
                        </div>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------------------------------------- */}
                {/* ?????????????? ?? ?????????? */}
                {/* <FadeInSection> */}
                <div className="snap-start w-full h-screen flex items-center justify-center pr-4 pt-2 bg-red-600 ">
                    <FadeInLeft>
                        <div className='flex'>

                            <p className='form-left slide-in'>soheib</p>
                            <p className='form-right slide-in'>jahgdhjsagdsahdfafdnbaclkanckjacac;ljajcgacja
                                acbkjackjsachavcjhvacvsachvacka
                                ackjsahckjsagcasjchakcac
                                acsjkabckjlabclb
                            </p>
                        </div>
                    </FadeInLeft>

                </div>
                {/* ----------------------------------------------------------------------------------------------------- */}
                <div className="snap-start w-full h-screen  items-center justify-center text-3xl bg-gray-600">
                    <div className='h-1/2'>??????????????</div>
                    {/* ------------------------------------------------------------------------------------------ */}
                    {/* ??# Footer */}
                    <div className='h-1/2 flex  items-end ' >
                        <footer className="bg-gray-900 flex flex-col items-center justify-center gap-y-2 py-2  w-full">
                            <div className="flex gap-x-3">
                                <div className="bg-white rounded-full flex items-center justify-center p-2">
                                    <Image width={20} height={20} src={"/imgh.png"}></Image>
                                </div>
                                <div className="bg-white rounded-full flex items-center justify-center p-2">
                                    <Image width={20} height={20} src={"/imgh.png"}></Image>
                                </div>
                                <div className="bg-white rounded-full flex items-center justify-center p-2">
                                    <Image width={20} height={20} src={"/imgh.png"}></Image>
                                </div>
                            </div>
                            <div className="text-xs text-white">info - support - Marketing</div>
                            <div className="text-xs text-white">terms of - IO Company - Privacy Policy</div>
                            <div className="text-white opacity-25">IO Company</div>
                        </footer>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------------------------------------- */}
            </div>
        </div>
    );
}

export default test;