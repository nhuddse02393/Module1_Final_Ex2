function tryRemoveFromArray(array, number) {
    if(isNullArray(array))
        return "Array is null!";
    else
        if (isValidIndex(array, number))
            return array;
        else {
            for(let i = number; i< array.length; i++)
                array[i] = array[i+1];
            array.pop();
            return array;
    }
}

function isNullArray(array) {
    return array.length === 0;
}

function isValidIndex(array, number) {
    return number < 0 || number > array.length;
}

let array = [12,6,3,7,21,5,7];
alert(tryRemoveFromArray(array, 2));