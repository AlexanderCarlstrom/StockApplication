import React, { useState } from "react";
import './Portfolio.css';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Portfolio = () => {
  const createCompanyObjects = () => {
    let arrayOfObjects = [];
    for (let i = 0; i < 350; i++) {
      let object = {
        name: "Company " + i.toString(),
        typeOfTrade: "Industry " + i.toString(),
        ownedValue: 20000,
        type: "A",
        amount: 3000,
        shareNumber: "0000-0000",
        ownerPercentage: "1,00",
        votingPercentage: "1,00",
      };
      arrayOfObjects.push(object);
    }
    return arrayOfObjects;
  };

  const columns = [
    { id: "name", label: "Name", minWidth: 70 },
    { id: "industryType", label: "Industry Type", minWidth: 70 },
    { id: "ownedvalue", label: "Total Value", minWidth: 70 },
    { id: "shareType", label: "Type", minWidth: 70 },
    { id: "ownedAmount", label: "Amount", minWidth: 70 },
    { id: "shareNumber", label: "Share Number", minWidth: 70 },
    { id: "ownerPercentage", label: "Percentage Owned", minWidth: 70 },
    { id: "votingPercentage", label: "Voting Percentage", minWidth: 70 },
  ];

  const ownedCompanies = createCompanyObjects();
  const [
    numberOfCompaniesToDisplay,
    updateNumberOfCompaniesToDisplay,
  ] = useState(10);
  const [currentPageIndex, updateCurrentPageIndex] = useState(0);

  const handleChangePage = (e, newPage) => {
    updateCurrentPageIndex(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    updateNumberOfCompaniesToDisplay(e.target.value);
    updateCurrentPageIndex(0);
  };

  return (
    <div id="tableWrapper">
    <h1>My Portfolio</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ownedCompanies
              .slice(
                currentPageIndex * numberOfCompaniesToDisplay,
                currentPageIndex * numberOfCompaniesToDisplay +
                  numberOfCompaniesToDisplay
              )
              .map((elem) => (
                <TableRow key={elem.name}>
                  <TableCell>{elem.name}</TableCell>
                  <TableCell>{elem.typeOfTrade}</TableCell>
                  <TableCell>{elem.ownedValue} SEK</TableCell>
                  <TableCell>{elem.type}</TableCell>
                  <TableCell>{elem.amount} st</TableCell>
                  <TableCell>{elem.shareNumber}</TableCell>
                  <TableCell>{elem.ownerPercentage}%</TableCell>
                  <TableCell>{elem.votingPercentage}%</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={ownedCompanies.length}
                page={currentPageIndex}
                onChangePage={handleChangePage}
                rowsPerPage={numberOfCompaniesToDisplay}
                rowsPerPageOptions={[10, 20, 30, 40, 50]}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Portfolio;
