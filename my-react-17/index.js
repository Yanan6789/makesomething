
function calcContinuousRanges(){
    
}

function twoSum( numbers ,  target ) {
    var result = [];
    var i = 0;
    var j = numbers.length - 1;
    while( i < j ){
        if( numbers[i] + numbers[j] == target ){
            result.push( i );
            result.push( j );
            break;
        }
        else if( numbers[i] + numbers[j] < target ){
            i++;
        }
        else{
            j--;
        }
    }
    return result;
}