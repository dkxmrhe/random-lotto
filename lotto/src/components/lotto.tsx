import React, {useState} from 'react';
import NumPanel from './numPanel';
import createLotto from '../logic/createLotto';

const Lotto = () => {
    const [deleteNum, setdeleteNum]: any = React.useState([]);
    const [addNum, setaddNum]: any = React.useState([]);

    const out = () => {

    }
    return (
        <>
        <div>
            <NumPanel/>
            <button onClick={out}>번호 추첨</button>
        </div>
        <div>
            추첨번호
        </div>
        </>
    );
}

export default Lotto;