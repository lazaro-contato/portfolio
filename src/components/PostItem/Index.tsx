import React from "react";

const PostItem = (): JSX.Element => {
    return (
        <div className={'p-3 flex flex-row gap-1 border border-transparentGray rounded-lg'}>
            <div className={'text-justify flex flex-col w-full gap-2'}>
                <div className={'text-justify flex flex-row w-full justify-between items-center'}>
                    <span className={'font-bold text-sm'}>
                    Quando utilizar rem, em ou pixel
                    </span>
                    <span className={'text-grayLight text-sm'}>
                    10/12/2024
                    </span>
                </div>
                <span>Lorem markdownum nunc adfuit fecisse, quae pectus</span>
            </div>
        </div>
    )
}

export default PostItem