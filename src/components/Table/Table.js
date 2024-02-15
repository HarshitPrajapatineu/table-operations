import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';
import CheckBox from './../CheckBox/CheckBox'
import Button from './../Button/Button'
import RadioButton from './../RadioButton/RadioButton'
import TextBox from './../TextBox/TextBox'
import TextArea from './../TextArea/TextArea'
import Dropdown from './../Dropdown/Dropdown'
import { TableContext } from '../../services/TableContext';



let idCounter = 0;


const Table = () => {

  const headerList = ['#', '', 'Name', 'Email', 'Phone', 'Experience', 'Description', 'Language', 'Is Active', 'Actions'];
  const languageList = ['Python', 'C++', 'Java', 'C#', 'JavaScript', 'Ruby'];
  const valueList = ['true', 'false'];

  let [editRowId, setEditRowId] = React.useState(null);
  let [tableDataList, createTableRow, updateTableDataList, deleteTableDataList] = useContext(TableContext);
  let [selectedRowList, setSelectedRowList] = useState([]);
  

  const addNewRow = () => {
    const newId = idCounter++;
    createTableRow(newId);
    setEditRowId(newId);
  }

  const handleEditClick = (e) => {
    const id = parseInt(e.target.id.substring(7, e.target.id.length));
    setEditRowId(id);
  };

  const handleSaveClick = (rowId, updatedRowData) => {
    // if (Object.keys(errors).length === 0) {
    setEditRowId(null);

    // } else {
    // }
  };

  const handleDeleteClick = (rowId) => {
    deleteTableDataList(rowId);
    setEditRowId(null);

  };

  const handleRowSelect = (id, isChecked) => {
    setSelectedRowList(isChecked ? [...selectedRowList, id] : selectedRowList.filter(item => item !== id));
  };

  const deleteSelectedRow = (e) => {
    selectedRowList.forEach((val) => {
      console.log(selectedRowList);
      handleDeleteClick(val);
      // setSelectedRowList((arr) => arr.filter(item => item !== val));
    })
    setSelectedRowList([])
    setEditRowId(null);
  };

  return (
    <div className={styles.Table}>
      <table>

        {/* {create header} */}
        <thead>
          <tr>
            {
              headerList.map(header => (
                <th>
                  {header}
                </th>
              ))
            }
          </tr>
        </thead>

        {/* create body */}
        <tbody>

          {/* loop */}
          {
            tableDataList.map(row => {
              return (
                <tr>
                  <td className={styles.width30}>
                    {row.id + 1}
                  </td>

                  {/* {Checkbox} */}
                  <td className={styles.width30}>
                    <CheckBox
                      isChecked={row.isChecked}
                      id={row.id}
                      onSelectChange={(isChecked) => {
                        handleRowSelect(row.id, isChecked);
                        row.isChecked = isChecked;
                      }} />
                  </td>

                  {/* {TextBox} */}
                  <td>
                    {
                      row.id === editRowId ?
                        (<TextBox value={row.name}
                          onChange={(newValue) =>  updateTableDataList(row.id, 'name', newValue) } />) :
                        (<span className='input'>{row.name}</span>)
                    }  </td>

                  {/* {TextBox} */}
                  <td>
                    {
                      row.id === editRowId ?
                        (<TextBox value={row.email}
                          onChange={(newValue) => { row.email = newValue }} />) :
                        (<span className='input'>{row.email}</span>)
                    }  </td>

                  {/* {TextBox} */}
                  <td>
                    {
                      row.id === editRowId ?
                        (<TextBox value={row.phonenumber}
                          onChange={(newValue) => { row.phonenumber = newValue }} />) :
                        (<span className='input'>{row.phonenumber}</span>)
                    }  </td>

                  {/* {TextBox} */}
                  <td>
                    {
                      row.id === editRowId ?
                        (<TextBox value={row.experience}
                          onChange={(newValue) => { row.experience = newValue }} />) :
                        (<span className='input'>{row.experience}</span>)
                    }  </td>

                  {/* {TextArea} */}
                  <td>
                    {
                      row.id === editRowId ?
                        (<TextArea value={row.description}
                          onChange={(newValue) => { row.description = newValue }} />) :
                        (<span>{row.description}</span>)
                    }
                  </td>

                  {/* {Dropdown} */}
                  <td className={styles.width100}>
                    {
                      <Dropdown id={"dd-" + row.id}
                        name={'dd'}
                        dropDownList={languageList}
                        isDisabled={!(row.id === editRowId)}
                        value={row.language}
                      />
                    }
                  </td>

                  {/* {RadioButton} */}
                  <td>
                    {
                      row.id === editRowId ?
                        (<RadioButton
                          name={'radio'}
                          valueList={valueList}
                          value={row.isActive.toString()}
                          isDisabled={!(row.id === editRowId)}
                          onSelectionChange={(newValue) => { row.isActive = newValue; console.log(row) }}
                        />
                        ) :
                        (<span>{row.isActive.toUpperCase()}</span>)
                    }

                  </td>

                  {/* {Action} */}
                  <td>

                    {/* Edit/Save Button */}
                    <Button
                      id={row.id}
                      border="none"
                      color="rgb(40 44 52)"
                      radius="8px"
                      height="28px"
                      onClick={(e) => { row.id === editRowId ? handleSaveClick(e) : handleEditClick(e) }}
                      width="60px"
                      textColor="white"
                      text={row.id === editRowId ? "Save" : "Edit"} />

                    {/* Delete Button */}
                    <Button
                      id={row.id}
                      border="none"
                      color="rgb(40 44 52)"
                      radius="8px"
                      height="28px"
                      onClick={(e) => { handleDeleteClick(row.id) }}
                      width="60px"
                      textColor="rgb(245 51 51)"
                      text="Delete" />
                  </td>
                </tr>
              )
            })
          }
          <tr>
            <td colSpan={headerList.length} className='flex'>

              {/* Add Button */}
              <Button
                border="none"
                color="rgb(40 44 52)"
                radius="8px"
                height="28px"
                onClick={(e) => { addNewRow(e, tableDataList) }}
                width="200px"
                textColor="white"
                text="Add New Data" />

              {/* Delete Button */}
              <Button
                border="none"
                color={!selectedRowList.length > 0 ? "rgb(59 66 78)" : "rgb(40 44 52)"}
                radius="8px"
                height="28px"
                onClick={(e) => { if (selectedRowList.length > 0) deleteSelectedRow(e) }}
                width="200px"
                textColor={!selectedRowList.length > 0 ? "rgb(163 152 152)" : "rgb(245 51 51)"}
                text="Delete Data"
                isDisabled={!selectedRowList.length > 0} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
