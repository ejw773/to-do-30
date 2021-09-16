const organizeTasks = (tasks) => {
    let organizedTasks = [...tasks]
    organizedTasks.sort((a, b) => a.complete - b.complete);
    return organizedTasks;
}

export default organizeTasks;
