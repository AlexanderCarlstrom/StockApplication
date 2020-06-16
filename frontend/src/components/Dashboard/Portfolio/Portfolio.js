import React, { useState } from "react";
import TablePagination from "@material-ui/core/TablePagination";

const Portfolio = () => {
  const createCompanyObjects = () => {
    let arrayOfObjects = [];
    for (let i = 0; i < 350; i++) {
      let object = {
        name: "Company " + i.toString(),
        typeOfTrade: "Industry 1",
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

  const ownedCompanies = createCompanyObjects();
  const [
    numberOfCompaniesToDisplay,
    updateNumberOfCompaniesToDisplay,
  ] = useState(10);
  const [currentPageIndex, updateCurrentPageIndex] = useState(0);

  const handleChangePage = (e) => {};
  const handleChangeRowsPerPage = (e) => {
    updateNumberOfCompaniesToDisplay(e.target.value);
  };

  return (
    <div>
      {ownedCompanies
        .slice(currentPageIndex, numberOfCompaniesToDisplay)
        .map((elem, index) => (
          <p key={elem + index.toString()}>{elem.name}</p>
        ))}
      {
        <TablePagination
          component="div"
          count={ownedCompanies.length}
          page={currentPageIndex}
          onChangePage={handleChangePage}
          rowsPerPage={numberOfCompaniesToDisplay}
          rowsPerPageOptions={[10, 20, 30, 40, 50]}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      }
    </div>
  );
};

export default Portfolio;
