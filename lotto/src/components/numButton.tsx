import React, {useState} from 'react';

interface but {
    num: string;
    parentCallBack: (num: string) => void;
}

const NumButton = ({num, parentCallBack}: but) => {
    return (
        <>
        <div className='numBut'>
        {num}<br/>
            <button className='numAdd'>추가</button>
            <button className='numDelete'>제외</button>
        </div>
        </>
    );
}

export default NumButton;