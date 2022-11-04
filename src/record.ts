type TableColumns = 'date' | 'name' | 'age' | 'position';

type TableColumnData = {
    label: string,
    action: (...args: unknown[]) => void;
    style: string;
}

type TableColumnsData = Record<TableColumns, TableColumnData>;

const tableData: TableColumnsData = {
    date: {
        label: 'Date',
        style: 'someStyle',
        action: (id) => console.log(id),
    },
    name: {
        label: "Name",
        action: (id) => console.log(id),
        style: 'someStyle'
    },
    age: {
        label: "Age",
        action: (id) => console.log(id),
        style: 'someStyle'
    },
    position: {
        label: 'Position',
        action: (id) => console.log(id),
        style: 'someStyle'
    },
    // differentProp: {} // waring for not existed prop
}

console.log(tableData);
