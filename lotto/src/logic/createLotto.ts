const createLotto = ( addNum: string[], deleteNum: string[]) => {
    let totalNum: string[] = []; //1~45 로또 번호 배열
    let totLen: number = totalNum.length; //삭제된 배열 길이

    for(let i = 1; i < 46; i++) {
        totalNum.push(`${i}`);
    }

    for(let i = 0; i < deleteNum.length; i++) {
        if(totalNum.some((v) => v == deleteNum[i])) {
            totalNum.splice(totalNum.indexOf(deleteNum[i]), 1);
        }
    }

    while(addNum.length < 6) {
        let ran: string = totalNum[parseInt((Math.random()*totLen).toString())];
        if(addNum.indexOf(ran) == -1) {
            addNum.push(ran);
        }
    }

    return addNum;
}

export default createLotto;