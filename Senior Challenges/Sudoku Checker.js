function sudokuCheck(boardStr) {
  let boardArr = boardStr.split('\n');
  let boardArrArr = [];
  for (let i = 0; i < 9; i++) {
    let column = [];
    let row = boardArr[i].split('');
    boardArrArr.push(row);

    if (!numberCheck(row)) {
      return 'invalid';
    }

    for (let j = 0; j < 9; j++) {
      column.push(boardArr[j][i]);
    }

    if (!numberCheck(column)) {
      return 'invalid';
    }
  }
  return boxCheck(boardArrArr);
}

function boxCheck(board) {
  if (board.length < 1) {
    return 'solved';
  }

  let box = [];

  for (let i = 0; i < 3; i++) {
    box = box.concat(board[i].splice(0, 3));
    if (i === 2 && board[i].length < 1) {
      board.splice(0, 3);
    }
  }
  if (!numberCheck(box)) {
    return 'invalid'
  }

  return boxCheck(board);
}

function numberCheck(numArr) {
  let numbers = [];
  for (let i = 0; i < numArr.length; i++) {
    if (numbers.indexOf(numArr[i]) < 0) {
      numbers.push(numArr[i]);
    } else {
      return false;
    }
  }
  return true;
}


let boardStr1 = '735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';
let boardStr2 = '111111111\n222222222\n333333333\n444444444\n555555555\n666666666\n777777777\n888888888\n999999999';
let boardStr3 = '895631472\n327984516\n461257398\n942813765\n183765924\n578142639\n214396857\n639578241';
let boardStr4 = '895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214398657\n639578241';


console.log(sudokuCheck(boardStr1)); //solved
console.log(sudokuCheck(boardStr2)); //invalid
console.log(sudokuCheck(boardStr3)); //solved
console.log(sudokuCheck(boardStr4)); //invalid