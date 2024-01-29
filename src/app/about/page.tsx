import React from "react";
const About = () => {

    return (
        <main className={'flex flex-col gap-8 px-5 pt-14'}>
            <span className={'font-granesta flex flex-col text-6xl text-brightOrange'}>ME</span>
            <span>
                Hi, my name is Lázaro Oliveira, and I am a
                frontend developer. Currently I work with
                Typescript, ReactJS and React Native.
                I like to write about everything that I am
                learning (including not code related).
            </span>
            <div className={'flex flex-col gap-2.5'}>
                <span className={'text-xl text-brightRed'}>My Content</span>
                <div className={'flex flex-col gap-2'}>
                    <span>Creating a farm with arduino</span>
                    <span>My work desk created via AutoCAD</span>
                    <span>How to draw?</span>
                </div>
            </div>
            <div className={'flex flex-col gap-2.5'}>
                <span className={'text-xl text-brightRed'}>XP</span>
                <div className={'flex flex-col gap-2'}>
                    <span>Creating a farm with arduino</span>
                    <span>My work desk created via AutoCAD</span>
                    <span>How to draw?</span>
                </div>
            </div>
            <div className={'flex flex-col gap-2.5'}>
                <span className={'text-xl text-brightRed'}>Coding Tools</span>
                <div className={'flex flex-col gap-2'}>
                    <span>Creating a farm with arduino</span>
                    <span>My work desk created via AutoCAD</span>
                    <span>How to draw?</span>
                </div>
            </div>
            <div className={'flex flex-col gap-2.5'}>
                <span className={'text-xl text-brightRed'}>What I'm learning</span>
                <div className={'flex flex-col gap-2'}>
                    <span>Creating a farm with arduino</span>
                    <span>My work desk created via AutoCAD</span>
                    <span>How to draw?</span>
                </div>
            </div>
        </main>
    )
}

export default About