const generateId = (arr) => {
    let newId = 0;
    if (arr.length > 0) {
        newId = Math.max(...arr) + 1;
    }
    return newId;
}

export default generateId;