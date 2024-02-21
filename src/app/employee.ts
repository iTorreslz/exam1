export interface Employee {
    name: string;
    position: string;
    salary: Number;
}

export const EMPLOYEE_LIST = [
    // residence, is the new property
    {
        name: 'Ivan',
        position: 'CEO',
        salary: 37000,
        residence: "Malaga, Andalucia"
    },
    {

        name: 'Adrian',
        position: 'Developer',
        salary: 24000,
        residence: "Malaga, Andalucia"
    },
    {
        name: 'Yago',
        position: 'Developer',
        salary: 24000,
        residence: "Lugo, Galicia"
    },
    {
        name: 'Emiliano',
        position: 'UX Designer',
        salary: 22000,
        residence: "Girona, Catalonia"
    }
]