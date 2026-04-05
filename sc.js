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


    function knightMoves(current, destination, index= 0){
        if(paths.length === 0)
            paths.push([current])
        
        const positions = calValidPositions(current);

        paths[index+1]= [];
        for(let i=0; i<positions.length; ++i){
            let temp = paths[index];
            temp.push(positions[i]);
            paths[index+1].push(temp);
            if(positions[i][0] === destination[0] && positions[i][1] === destination[1]){
                console.log(`returning value: `, temp); 
                return temp;
            }
        }
    }

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

console.log(shortPath().calValidPositions([0, 0]));
