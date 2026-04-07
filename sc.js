function shortPath(){

const needToAdd = [[+2, +1],
                    [+1, +2],
                    [-1, +2],
                    [-2, +1],
                    [-2, -1],
                    [-1, -2],
                    [+1, -2],
                    [+2, -1]
                ];
let paths = [];

  function twoArrAdd(arr1, arr2){
        const sum = [(arr1[0]+arr2[0]), (arr1[1]+arr2[1])];
        if( (sum[0] >= 0 && sum[0] <= 7) && (sum[1] >= 0 && sum[1] <= 7)){
            return sum;
        }
    }

    function calValidPositions(curPos){
        let pos=[];
       
        for(let i=0; i < needToAdd.length; ++i){
            let j = twoArrAdd(curPos, needToAdd[i]);
            if(j){
                pos.push(j);
            }
        }
        return pos;
    }

    function knightMoves(current, destination, index= 0){
        let positionsQueue = [];
        if(paths.length === 0){
            paths.push([current]);
            positionsQueue.push(current);
        }
        
        while(paths.length >= 1){
            let removed = positionsQueue.shift();
            console.log(`removed: `, removed)
            let positions = calValidPositions(removed);
            console.log(`positions: `, positions[0])
            if(positions === null)
                return 'Unable to calculate!!!';

            paths[index+1]= [];
            let temp0;
console.log('paths: ', paths.length)
            if(paths.length === 1){
                console.log('if statement executes..')
                temp0 = paths[index];
            }else{
                console.log('else block statement executes...')
                let bol = false;
                for(let arr of paths){
                    for(let item of arr){
                        let tem = item[item.length-1];
                        if(tem[0] === removed[0] && tem[1] === removed[1]){
                            temp0 = item;
                            console.log('temp0: ', temp0)
                            bol = true;
                            break;
                        }
                    }
                    if(bol === true)
                        break;
                }
            }

            for(let i=0; i<positions.length; ++i){
                let temp = temp0;
                console.log('temp: ', temp)
                console.log('positions[i]: ', positions[i])
                temp.push(positions[i]);
                paths[index+1].push(temp);
                if(positions[i][0] === destination[0] && positions[i][1] === destination[1]){
                    console.log(`returning value: `, temp); 
                    return temp;
                }
            }
            positions.forEach(item => {
                positionsQueue.push(item);
            })
            positions = [];
            ++index;
      }
    }

return {knightMoves, twoArrAdd, calValidPositions};
}

const needToAdd = [[+2, +1],
                    [+1, +2],
                    [-1, +2],
                    [-2, +1],
                    [-2, -1],
                    [-1, -2],
                    [+1, -2],
                    [+2, -1]
                ];

console.log(shortPath().knightMoves([0, 0], [1, 2]));
