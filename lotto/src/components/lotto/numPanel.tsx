import React from 'react';
import NumButton from './numButton';
import './numPanel.css';

interface pan {
    addhandle: (addNum: string[]) => void;
    deletehandle: (deleteNum: string[]) => void;
}

const NumPanel = ({addhandle, deletehandle}: pan) => {

    const addhandleCallBack = (addNum: string[]) => {
        addhandle(addNum);
    }
    const deletehandleCallBack = (deleteNum: string[]) => {
        deletehandle(deleteNum);
    }
    
    return (
        <>
        <div className='numPan'>
            <NumButton num={"1"} addNumCallBack={addhandleCallBack} deleteNumCallBack={deletehandleCallBack}/>
            <NumButton num={"2"} addNumCallBack={addhandleCallBack} deleteNumCallBack={deletehandleCallBack}/>
            <NumButton num={"3"} addNumCallBack={addhandleCallBack} deleteNumCallBack={deletehandleCallBack}/>
            <NumButton num={"4"} addNumCallBack={addhandleCallBack} deleteNumCallBack={deletehandleCallBack}/>
            <NumButton num={"5"} addNumCallBack={addhandleCallBack} deleteNumCallBack={deletehandleCallBack}/>
        </div>
        </>
    );
}

export default NumPanel;