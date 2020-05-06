function attachEventsListeners() {
    const convertFrom = {
        days: (input) => {
            const hours = input * 24;
            const mins = hours * 60;
            const seconds = mins * 60;

            return [hours, mins, seconds];
        },
        hours: (input) => {
            const days = input / 24;
            const mins = input * 60;
            const seconds = mins * 60;

            return [days, mins, seconds];
        },
        mins: (input) => {
            const hours = input / 60;
            const days = hours / 24;
            const seconds = input * 60;

            return [hours, days, seconds];
        },
        seconds: (input) => {
            const mins = input / 60;
            const hours = mins / 60;
            const days = hours / 24;

            return [mins, hours, days]
        }
    }

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minsInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    function inputHandler(input, unit, first, second, third) {
        const value = +input.value;
        const [fUnit, sUnit, tUnit] = convertFrom[unit](value);
        first.value = fUnit;
        second.value = sUnit;
        third.value = tUnit;
    }

    document.getElementById('daysBtn').addEventListener('click', () =>
        inputHandler(daysInput, 'days', hoursInput, minsInput, secondsInput));
    document.getElementById('hoursBtn').addEventListener('click', () =>
        inputHandler(hoursInput, 'hours', daysInput, minsInput, secondsInput));
    document.getElementById('minutesBtn').addEventListener('click', () =>
        inputHandler(minsInput, 'mins', hoursInput, daysInput, secondsInput));
    document.getElementById('secondsBtn').addEventListener('click', () =>
        inputHandler(secondsInput, 'seconds', minsInput, hoursInput, daysInput));
}