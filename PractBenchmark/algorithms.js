function busquedaLineal(aRecords, elementSearch) {
    const length
}

function busquedaBinaria(aRecords, elementSearch) {
    let initialPosition = 0;
    let centralPosition;
    let finalPosition = arraySize - 1;
 
    while (initialPosition <= finalPosition) {
        centralPosition = (finalPosition + initialPosition) / 2 | 0;
 
        if (elementSearch == centralPosition) {
            return aRecords[centralPosition];
        } else if(elementSearch < centralPosition) {
            finalPosition = centralPosition - 1;
        } else {
            initialPosition = centralPosition + 1;   
        }
    return -1;
}

function busquedaHash(aObject, id) {
    return aObject[id];
}
