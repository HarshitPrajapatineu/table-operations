import { createContext, useState, useReducer } from "react";
import {TableReducer} from "./TableReducer";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {

    const [tableDataList, dispatch] = useReducer(TableReducer, []);

   





    return (
        <TableContext.Provider value={[tableDataList, dispatch]}>
            {children}
        </TableContext.Provider>
    );
};

