const defaultFlights = [
    {
        id: 1,
        aircraft: 1,
        instructor: 1,
        student: 1,
        start: 1568908800000,
        end: 1568912400000
    },
    {
        id: 2,
        aircraft: 3,
        instructor: 2,
        student: 2,
        start: 1568919600000,
        end: 1568925000000
    },
    {
        id: 4,
        aircraft: 1,
        instructor: 1,
        student: 3,
        start: 1568916000000,
        end: 1568921400000
    },
    {
        id: 5,
        aircraft: 2,
        instructor: 3,
        student: 4,
        start: 1568916000000,
        end: 1568921400000
    },
    {
        id: 3,
        aircraft: 1,
        instructor: 1,
        student: 5,
        start: 1569171600000,
        end: 1569177000000
    }
];
const defaultAircraft = [
    {
        id: 1,
        name: "N123AB",
        color: "white"
    },
    {
        id: 2,
        name: "N987MN",
        color: "blue"
    },
    {
        id: 3,
        name: "N345YZ",
        color: "green"
    }
];
const defaultInstructors = [
    {
        id: 1,
        name: "Mike F"
    },
    {
        id: 2,
        name: "Joe W"
    },
    {
        id: 3,
        name: "Fred F"
    }
];
const defaultStudents = [
    {
        id: 1,
        firstName: "Eric",
        lastName: "Rinehart"
    },
    {
        id: 2,
        firstName: "Jack",
        lastName: "Dack"
    },
    {
        id: 3,
        firstName: "Todd",
        lastName: "Bobb"
    },
    {
        id: 4,
        firstName: "Foo",
        lastName: "Baz"
    },
    {
        id: 5,
        firstName: "Jim",
        lastName: "Smith"
    },
];
export { defaultFlights, defaultAircraft, defaultInstructors, defaultStudents }
