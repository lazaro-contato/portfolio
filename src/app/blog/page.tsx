import React from "react";
import PostItem from "@/components/PostItem";

const Blog = () => {

    return (
        <main className={'flex flex-col gap-8 px-5 pt-14'}>
           <span className={'font-granesta flex flex-col text-6xl text-brightOrange'}>THE BLOG</span>
            <span>
                This section is not related just about code.
                I like learning about many things, from bees to electricity. I decided to create a personal
                library to put all my projects and work, so if
                you like a little bit of interdisciplinarity feel
                free to see <a className={'text-brightRed underline italic'}>my personal barsa.</a>
            </span>
            <div className={'flex flex-row gap-1'}>
                <div className={'w-4 h-auto bg-brightRed'}/>
                <div className={'p-3 bg-transparentGray/20 text-justify'}>
                <span className={'italic text-grayLight'}>
                    Barsa it is a refferecent to the first Brazilian encyclopedia, distinguished for providing comprehensive knowledge that spanned from sciences to humanities. It became a significant reference for the dissemination of knowledge in Brazil.
                </span>
                </div>
            </div>
            <div className={'flex flex-col gap-2.5'}>
                <span className={'text-xl text-brightRed'}>Code Posts</span>
                <div className={'flex flex-col gap-2'}>
                    <span>Creating a farm with arduino</span>
                    <span>My work desk created via AutoCAD</span>
                    <span>How to draw?</span>
                </div>
            </div>
            <div className={'flex flex-col gap-2.5'}>
                <span className={'text-xl text-brightRed'}>Personal Mind Chapters</span>
                <div className={'flex flex-col gap-2'}>
                    <span>Creating a farm with arduino</span>
                    <span>My work desk created via AutoCAD</span>
                    <span>How to draw?</span>
                </div>
            </div>
        </main>
    )
}

export default Blog