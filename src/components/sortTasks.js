const sortTasks = (taskList) => {
    let sortedList = [...taskList]
    function compare(arr) {
        if (!arr.complete) {
            return -1;
        }
        if (arr.complete) {
            return 1;
        }
        return 0;
    }
    sortedList.sort(compare);
    return sortedList;
}

export default sortTasks;