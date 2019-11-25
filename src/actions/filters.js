function setTextFilter(text = '') {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

function sortByAmount() {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

function sortByDate() {
    return {
        type: 'SORT_BY_DATE'
    }
}

function setStartDate(startDate) {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

function setEndDate(endDate) {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

export {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate}