const DATE_FORMAT = 'DD/MM/YYYY';
const DATE_FORMAT_COMPLETE = 'DD/MM/YYYY HH:mm:ss';

let employees = [
                {
                    name : 'Pepe',
                    money : 1000,
                    timezone: "America/New_York",
                    date: "10/01/2017 -- 10:30:00",
                    updated_at: ""
                },
                {
                    name : 'Paco',
                    money : 500,
                    timezone: "Europe/Cataluya",
                    date: "10/01/2017 -- 12:30:00",
                    updated_at: ""                    
                    
                },
                {
                    name : 'Sara',
                    money : 1500,
                    timezone: "Europe/Madrid",
                    date: "10/01/2017 -- 00:30:00",
                    updated_at: ""                    
                }
                ];

function diffDates(date1, date2) {
    if(!moment.isMoment(date1) || !moment.isMoment(date2)){
        return false;
    }
    return date1.clone().diff(date2, "days");
}

function sumDates(date, unitTimes) {
    return unitTimes.map(unitTime => moment(date, DATE_FORMAT)
                                    .add(unitTime.slice(0,-1), unitTime.slice(-1))
                                    .format(DATE_FORMAT));
}
function sumDates2(date, unitTimes){
    return unitTimes
                    .reduce( (momentAcc, unitTime) => moment(momentAcc)
                                                      .add(unitTime.slice(0,-1), unitTime.slice(-1))
                                                      .format(DATE_FORMAT), date);
}

function setDateEmployee(name) {
    const employee = employees.find(employee => employee.name === name);
    if(!employee){
        return false;
    }
    return setModificatedDateEmployee(employee);
}

function setDateLocation(name, timezone) {
    let i = employees.length - 1;
    let found = false;
    while (i >= 0 && !found) {
        (employees[i].name === name) ? setLocationEmployee(timezone, employees[i]) : i = i - 1;
    }
    return employee[i];
}

const setModificatedDateEmployee = employee => {
    const employeeModified = /* {...employee}; */Object.assign({}, employee);
    employeeModified.date = moment().format(DATE_FORMAT_COMPLETE);
    return employeeModified;    
}

function setTimezoneEmployee(timezone, employee){
    let employeeModified = Object.assign({}, employee);
    employeeModified.timezone = timezone;
    employeeModified = setUpdateAtEmployee(employeeModified);
    return employeeModified;
}
function setUpdateAtEmployee(employee){
    const employeeModified = Object.assign({}, employee);
    employeeModified.updated_at = new moment().tz(employeeModified.timezone).format(DATE_FORMAT_COMPLETE);
    return employeeModified;
}

function setTimezoneEmployees(timezone) {
    return employees.map(employee => setTimezoneEmployee(timezone, employee));
}