function taskPlanner(inputArray) {
    const tasks = inputArray.shift().split(' ').map(Number);
    let commands = inputArray.shift().split(' ');
    let completed = 0;
    let incompletedCount = 0;
    let dropped = 0;
    let incompleted = [];

    while (commands[0] !== 'End') {

        const specialCommand = commands[0] + ' ' + commands[1];

        if (commands[0] === 'Complete') {
            const taskNum = +commands[1];

            if (taskNum >= 0 && taskNum < tasks.length) {
                tasks.splice(taskNum, 1, 0)
            }
        } else if (commands[0] === 'Change') {
            const index = +commands[1];
            const time = +commands[2];

            if (index >= 0 && index < tasks.length) {
                tasks[index] = time;
            }
        } else if (commands[0] === 'Drop') {
            const index = +commands[1];
            if (index >= 0 && index < tasks.length) {
                tasks[index] = -1;
            }
        } else if (specialCommand === 'Count Completed') {
            for (const num of tasks) {
                if (num === 0) {
                    completed++;
                }
            }
            console.log(completed);
        } else if (specialCommand === 'Count Dropped') {
            for (const num of tasks) {
                if (num < 0) {
                    dropped++;
                }
            }
            console.log(dropped);
        } else if (specialCommand === 'Count Incomplete') {
            for (const num of tasks) {
                if (num > 0) {
                    incompletedCount++
                }
            }
            console.log(incompletedCount);
        }
        commands = inputArray.shift().split(' ');
    }

    for (const num of tasks) {
        if (num > 0) {
            incompleted.push(num)
        }
    }

    console.log(incompleted.join(' '));
}
taskPlanner(['1 2 3 4 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 1',
    'Count Completed',
    'End'])