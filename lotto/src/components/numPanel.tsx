import React from 'react';
import NumButton from './numButton';

const NumPanel = () => {

    const handleCallBack = (num: string) => {

    }
    return (
        <>
        <NumButton num={"1"} parentCallBack={handleCallBack} />
        <NumButton num={"2"} parentCallBack={handleCallBack} />
        <NumButton num={"3"} parentCallBack={handleCallBack} />
        <NumButton num={"4"} parentCallBack={handleCallBack} />
        <NumButton num={"5"} parentCallBack={handleCallBack} />
        </>
    );
}

export default NumPanel;