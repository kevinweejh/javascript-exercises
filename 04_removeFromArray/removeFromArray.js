const removeFromArray = function(inputArray, ...itemsToRemove) {
    // Iterate through itemsToRemove
    let itemIndex;
    let outputArray = inputArray.slice();
    for (item of itemsToRemove) {
        // Check if itemToRemove is in inputArray
        itemIndex = outputArray.indexOf(item);
        if (itemIndex == -1) {
            continue; // If no, move on
        } 
        // If yes, remove it using .splice(start, 1)
        outputArray.splice(itemIndex,1);
    }
        
        
        
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
