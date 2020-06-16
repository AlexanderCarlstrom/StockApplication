import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";

const Portfolio = () => {
  const createCompanyObjects = () => {
    let arrayOfObjects = [];
    for (let i = 0; i < 350; i++) {
      let object = {
        name: "Company "+i.toString(),
        typeOfTrade:"Industry 1",
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
  const [numberOfCompaniestoDisplay, updateNumberOfcompaniesToDisplay] = useState(10);
  const [currentPageIndex, updateCurrentPageIndex] = useState(0);
  const [displayedCompanies, updateDisplayedCompanies] = useState(ownedCompanies.slice(currentPageIndex,numberOfCompaniestoDisplay));
  return (
    <div>
    {displayedCompanies.map(elem=><p>{elem.name}</p>)}
      <Pagination count={10} />
    </div>
  );
};

export default Portfolio;
