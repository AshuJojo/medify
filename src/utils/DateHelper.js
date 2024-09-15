
export const getNextDateFromDateString = (date) => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);
    return nextDate;
}

export const getNextSevenDatesFromToday = () => {
    const dates = [];

    const todayDate = new Date();

    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    dates.push(todayDate.toLocaleDateString('en-IN', dateOptions));

    for (let i = 0; i < 7; i++) {
        const nextDate = getNextDateFromDateString(dates[i]);
        dates.push(nextDate.toLocaleDateString('en-IN', dateOptions));
    }

    return dates;
}

export const getDateFromDateObj = (date) => {
    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    return date.toLocaleDateString('en-IN', dateOptions);
}

export const getTimeFromDateObj = (date) => {
    const timeOption = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    return date.toLocaleTimeString('en-IN', timeOption).toUpperCase();
}

export const getDateFromDateObjWithoutWeekday = (date) => {
    const dateOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };

    return date.toLocaleDateString('en-IN', dateOptions);
}