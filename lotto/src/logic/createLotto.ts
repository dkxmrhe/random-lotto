const createLotto = (deleteNum: string[], AddNum: string[]) => {
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

    while(AddNum.length < 6) {
        let ran: string = totalNum[parseInt((Math.random()*totLen).toString())];
        if(AddNum.indexOf(ran) == -1) {
            AddNum.push(ran);
        }
    }

    return AddNum;
}

export default createLotto;