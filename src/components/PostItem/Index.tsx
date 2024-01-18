import React from "react";

const PostItem = (): JSX.Element => {
    return (
        <div className={'flex flex-col gap-0'}>
            <span>Quando utilizar rem, em ou pixel</span>
            <span className={'text-sm text-grayLight'}>Published - 14/11/2019</span>
        </div>
    )
}

export default PostItem