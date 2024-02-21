import { createContext, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {

    let [tableDataList, setTableDataList] = useState([]);

    const updateTableDataList = ((id, field, newValue) => {
        console.log(id, field, newValue)
        setTableDataList((arr) => {
            let row = arr.find(item => item.id === id);
            console.log(row)
            row[field] = newValue;
            return [...arr];

        })
    });

    const createTableRow = (newId) => {

        const tableData = {
            id: newId,
            name: '',
            email: '',
            phonenumber: '',
            experience: '',
            description: '',
            language: '',
            isChecked: false,
            isActive: 'false'
        };

        setTableDataList([...tableDataList, tableData]);
    }

    const deleteTableDataList = ((id) => {
        setTableDataList((arr) => {
            return arr.filter(item => item.id !== id)
        })
    });





    return (
        <TableContext.Provider value={[tableDataList, createTableRow, updateTableDataList, deleteTableDataList]}>
            {children}
        </TableContext.Provider>
    );
};

