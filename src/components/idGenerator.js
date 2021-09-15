const generateId = (arr) => {
    let newId = 0;
    if (arr.length > 0) {
        const allIds = arr.map((item) => item.id);
        newId = Math.max(...allIds) + 1;
    }
    return newId;
}

export default generateId;