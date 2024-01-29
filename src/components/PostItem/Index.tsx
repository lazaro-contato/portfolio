import React from "react";

const PostItem = (): JSX.Element => {
    return (
        <a className={'cursor-pointer py-2 px-3 rounded-lg hover:scale-105 transition duration-300 ease-in-out transform hover:bg-brightOrange/10'}>
            <li className={'hover:text-black'}>
                <div className={'flex justify-between'}>
                    <div className={'flex flex-col gap-0.5'}>
                  <span>
                       Creating a farm with arduino
                  </span>
                        <span className={'text-sm text-grayLight'}>
                                        3,324 views
                  </span>
                    </div>
                    <span className={'text-sm text-grayLight'}>
            24/06/2024
        </span>
                </div>
            </li>
        </a>
    )
}

export default PostItem