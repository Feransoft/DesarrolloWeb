describe('#diffDates', function () {
    const date1 = moment('2017-10-31');
    const date2 = moment('2017-10-20');
    it('should return a positive number which is the days between the two dates, being the first one higher', () => {
        expect(diffDates(date1, date2)).toBe(11);
    });
    it('should return a negative number which is the days between the two dates, being the second one higher', () => {
        expect(diffDates(date2, date1)).toBe(-11);
    });
    describe("should return a false/EXCEPTION", () => {
        it("when the first parameter is a string", () => {
            expect(diffDates("", date1)).toBe(false);
        });
        it("when the second parameter is a string", () => {
            expect(diffDates(date1, "")).toBe(false);
        });
        it("when the parameters are string type", () => {
            expect(diffDates("", "")).toBe(false);
        });
    });
});

describe('#sumDates', function () {
    const date = moment('2017-10-31');
    const date2 = moment('1996-09-01');
    const array = ['1w', '2y', '3d', '2M'];
    const array2 = [];

    it('should return an array with the new dates', () => {
        expect(sumDates(date, array)).toEqual([moment('2017-11-07').format('DD/MM/YYYY'), moment('2019-10-31').format('DD/MM/YYYY'), moment('2017-11-03').format('DD/MM/YYYY'), moment('2017-12-31').format('DD/MM/YYYY')]);
        expect(sumDates(date2, array)).toEqual([moment('1996-09-08').format('DD/MM/YYYY'), moment('1998-09-01').format('DD/MM/YYYY'), moment('1996-09-04').format('DD/MM/YYYY'), moment('1996-11-01').format('DD/MM/YYYY')]);
    });
    it("should return an empty array when the date's array is empty", () => {
        expect(sumDates(date, array2)).toEqual([]);
    })
});

describe('#sumDate2', function () {
    const date1 = moment('31-10-2017', "DD/MM/YYYY");
    const array1 = ['1w', '2y', '3d', '2M'];
    const array2 = [];
    it('should return an array with the new dates', () => {
        expect(sumDates2(date1, array1)).toEqual(moment("11/12/2019", "DD/MM/YYYY").format('DD/MM/YYYY'));
    });
    it("should return an empty array when the date's array is empty", () => {
        expect(sumDates2(date1, array2)).toEqual(moment(date1));
    })
});
describe('#modifyDates', function () {
    it('should return true if the employee exists', () => {
        const params = {
            name: "Sara",
        };
        const expectResult = {
            now: moment().format('DD/MM/YYYY HH:mm:ss'),
        }
        expect(setDateEmployee(params.name).date).toEqual(expectResult.now);
        //  expect(setDateEmployee('Pepe')).toEqual({name : 'Pepe', money : 1000, date : moment().format('DD/MM/YYYY'), timezone: "Europe/Madrid"});

    });
    it('should return false if the employee does not exist', () => {

        expect(setDateEmployee('Benito')).toBeFalsy();
        expect(setDateEmployee('Noelia')).toBeFalsy();
    });
});

/* describe("#setDateLocation", () => {
    it("should return an object with updated date depending the timezone", () => {
        expect(setDateLocation('Sara', "America/New_York").toEqual({name : 'Sara', money : 1500, date : moment().format('MM/DD/YYYY'), timezone: "America/New_York"}));
    });
}); */

describe("#setTimezoneEmployee", () => {
    it("should return an object with updated date depending the timezone", () => {
        const employee = {
            name: 'Sara',
            money : 1500,
            date : moment().format("DD/MM/YYYY"),
        }
        expect(setTimezoneEmployee('America/New_York', employee)).toEqual({name : 'Sara', money : 1500, date : moment().format('DD/MM/YYYY'), timezone: "America/New_York", updated_at: moment().tz("America/New_York").format('DD/MM/YYYY HH:mm:ss')});
    });
});

describe("#setTimezoneEmployees", () => {
    it("should return an array of objects with updated dates depending the timezone", () => {
        const expectResult = [
            {
                name : 'Pepe',
                money : 1000,
                timezone: "America/New_York",
                date: "10/01/2017 -- 10:30:00",
                updated_at: moment().tz("America/New_York").format('DD/MM/YYYY HH:mm:ss')
            },
            {
                name : 'Paco',
                money : 500,
                timezone: "America/New_York",
                date: "10/01/2017 -- 12:30:00",
                updated_at: moment().tz("America/New_York").format('DD/MM/YYYY HH:mm:ss')                    
                
            },
            {
                name : 'Sara',
                money : 1500,
                timezone: "America/New_York",
                date: "10/01/2017 -- 00:30:00",
                updated_at: moment().tz("America/New_York").format('DD/MM/YYYY HH:mm:ss')                   
            }
            ];
        expect(setTimezoneEmployees('America/New_York')).toEqual(expectResult);
    });
});