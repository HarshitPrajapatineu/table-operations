import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';
import CheckBox from './../CheckBox/CheckBox'
import Button from './../Button/Button'
import RadioButton from './../RadioButton/RadioButton'
import TextBox from './../TextBox/TextBox'
import TextArea from './../TextArea/TextArea'
import Dropdown from './../Dropdown/Dropdown'





const Table = () => {
  let [tableData, setTableData] = useState({

  });
  
  
  let [tableDataList, setTableDataList] = useState([]);
  
  const languageList = ['Python', 'C++', 'Java', 'C#', 'JavaScript', 'Ruby']
  // const languageList = [{'Python'}, {'C++'}, {'Java'}, {'C#'}, {'JavaScript'}, {'Ruby'}]
  
  return (
  <div className={styles.Table}>
    <table>

      <thead>
        <tr>
          <th>
            {/* CheckBox */}
            <CheckBox></CheckBox>
          </th>
          <th>
            {/* TextBox */}
            Full Name
          </th>
          <th>
            {/* TextArea */}
            Description
          </th>
          <th>
            {/* Dropdown */}
            Language
          </th>
          <th>
            {/* RadioButton */}
            Is Active
          </th>
          <th>
            {/* Button */}
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {/* loop */}
        {
          // tableDataList.forEach(item => {
            <tr>
              <td> <CheckBox></CheckBox> </td>
              <td> <TextBox></TextBox> </td>
              <td> <TextArea></TextArea> </td>
              <td> <Dropdown id={"dd"} name={'dd'} dropDownList={languageList}></Dropdown> </td>
              <td> <RadioButton></RadioButton> </td>
              <td> <Button 
                border="none"
                color="rgb(40 44 52)"
                radius="8px"
                height = "28px"
                onClick={() => {}}
                width = "60px"
                textColor = "white"
                text = "Edit"/> </td>
            </tr>
          // })
        }
        <tr>
            <td colSpan="6">
              <Button 
                border="none"
                color="rgb(40 44 52)"
                radius="8 px"
                height = "28px"
                onClick={addNewRow(tableDataList)}
                width = "200px"
                textColor = "white"
                text = "Add New Data"/></td>
        </tr>
      </tbody>
    </table>
  </div>
)};

const addNewRow = (tableDataList) => {
  tableDataList.push({})
}

Table.propTypes = {};

Table.defaultProps = {};

export default Table;
