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
            let positions = calValidPositions(removed);
            if(positions === null)
                return '"Unable to calculate!!!"';

            paths[index+1]= [];
            let temp0;
            if(paths.length === 2 && paths[1].length === 0){
                temp0 = structuredClone(paths[index]);
            }else{
                let bol = false;
                for(let arr of paths){
                    for(let item of arr){
                        let tem = item[item.length-1];
                        if(tem[0] === removed[0] && tem[1] === removed[1]){
                            temp0 = item;
                            bol = true;
                            break;
                        }
                    }
                    if(bol === true)
                        break;
                }
            }

            for(let i=0; i<positions.length; ++i){
                let temp = structuredClone(temp0);
                temp.push(positions[i]);
                paths[index+1].push(temp);
                if(positions[i][0] === destination[0] && positions[i][1] === destination[1]){
                    let te = `You made it in ${(temp.length === 2)? temp.length:temp.length-1} moves! Here's your path:\n` + JSON.stringify(temp);
                    return te;
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

console.log(shortPath().knightMoves([0, 0], [7, 7]));
