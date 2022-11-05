import React, {useState} from 'react';
import NumPanel from './numPanel';
import createLotto from '../../logic/createLotto';

const Lotto = () => {
    const [addNum, setaddNum] :[string[],any] = useState([]);
    const [deleteNum, setdeleteNum] :[string[], any] = useState([]);
    const [randomNum, setrandomNum] :[string[], any] = useState([]);


    const addhandler = (addNum: string[]) => {
        return setaddNum(addNum);
    }

    const deletehandler = (deleteNum: string[]) => {
        return setdeleteNum(deleteNum);
    }

    const out = () => {
        return setrandomNum(createLotto(addNum, deleteNum));
    }
    return (
        <>
        <div>
            <NumPanel addhandle={addhandler} deletehandle={deletehandler}/>
            <button onClick={out}>번호 추첨</button>
        </div>
        <div>
            {randomNum}
        </div>
        </>
    );
}

export default Lotto;