const sortTasks = (arr) => {
    let sortedTasks = [...arr]
    if (arr.length > 0) {
        sortedTasks.sort((a, b) => a.complete - b.complete)
    }
    return sortedTasks;
}

export default sortTasks;