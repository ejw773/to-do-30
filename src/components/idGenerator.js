const generateId = (arr) => {
    const allIds = arr.map((item) => item.id);
    let newId = Math.max(...allIds) + 1;
    return newId;
}

export default generateId;