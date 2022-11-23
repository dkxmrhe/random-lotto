function lotto() {
    let numBall = document.querySelectorAll(".ball");
    let base = [];
    let deleteNum = [];
    let lot = [];
    let delNum = document.querySelectorAll(".lotNumber").length;
  
    for (let i = 1; i < 46; i++) {
      base.push(i);
    }
  
    for (let i = 0; i < delNum; i++) {
      if (document.querySelectorAll(".lotNumber")[i].checked == true) {
        deleteNum.push(
          parseInt(document.querySelectorAll(".lotNumber")[i].value)
        );
      }
    }
  
    for (let i = 0; i < deleteNum.length; i++) {
      if (base.some((v) => v == deleteNum[i])) {
        base.splice(base.indexOf(deleteNum[i]), 1);
      }
    }
  
    while (lot.length < 6) {
      let ran = base[parseInt(Math.random() * base.length)];
      if (lot.indexOf(ran) == -1) {
        lot.push(ran);
      }
    }
  
    lot.sort((a, b) => a - b);
  
    for (let i = 0; i < lot.length; i++) {
      numBall[i].innerHTML = lot[i];
      if (lot[i] <= 10) {
        numBall[i].style.backgroundColor = "#FBC400";
        numBall[i].style.border = "1px solid #FBC400";
      } else if (lot[i] <= 20) {
        numBall[i].style.backgroundColor = "#69C8F2";
        numBall[i].style.border = "1px solid #69C8F2";
      } else if (lot[i] <= 30) {
        numBall[i].style.backgroundColor = "#FF7272";
        numBall[i].style.border = "1px solid #FF7272";
      } else if (lot[i] <= 40) {
        numBall[i].style.backgroundColor = "#AAAAAA";
        numBall[i].style.border = "1px solid #AAAAAA";
      } else {
        numBall[i].style.backgroundColor = "#B0D840";
        numBall[i].style.border = "1px solid #B0D840";
      }
    }
  }