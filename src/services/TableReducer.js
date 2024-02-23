
export const TableReducer = (tableDataList, action) => {
    
    const updateTableDataList = ((id, field, newValue) => {
        let row = tableDataList.find(item => item.id === id);
        row[field] = newValue;
        return [...tableDataList];
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
    
        return ([...tableDataList, tableData]);
    
    }
    
    const deleteTableDataList = ((id) => {
        return tableDataList.filter(item => item.id !== id)
    });
    
    switch (action.type) {
        case "SaveRow":
            return updateTableDataList(action.payload.id, action.payload.field, action.payload.newValue)
        case "DeleteRow":
            return deleteTableDataList(action.payload)
        case "AddRow":
            return createTableRow(action.payload)

    }

    
}



