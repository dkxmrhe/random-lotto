import React, {useEffect, useState} from 'react';
import './numButton.css';

interface but {
    num: string;
    addNumCallBack: (addNum: string[]) => void;
    deleteNumCallBack: (deleteNum: string[]) => void;
}

const NumButton = ({num, addNumCallBack, deleteNumCallBack}: but) => {
    const [addNum, setaddNum] = useState([]);
    const [deleteNum, setdeleteNum] = useState([]);

    const addNumber = () => {
        setaddNum(addNum);
    }

    const deleteNumber = () => {
        setdeleteNum(deleteNum);
    }

    useEffect(() => {
        addNumCallBack(addNum);
        deleteNumCallBack(deleteNum);
    })
    return (
        <>
        <div className='numBut'>
        {num}<br/>
            <button className='numAdd' onClick={addNumber}>추가</button>
            <button className='numDelete' onClick={deleteNumber}>제외</button>
        </div>
        </>
    );
}

export default NumButton;