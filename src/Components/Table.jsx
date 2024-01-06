import React, { useState } from "react";
import styled from "@emotion/styled";
import { pageSize } from "../data/constants";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../utils/theme";
import appData from "../data/appData";

const Table = ({ data = appData, heading = "Apps Info" }) => {
  const isCurrentThemeDark = useSelector((state) => state.darkTheme);
  const [currentPageSize, setCurrentPageSize] = useState({ id: 1, label: 10 });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [renderData, setRenderData] = useState(data);
  const [filteredData, setFilteredData] = useState(data.slice(0, 10));
  //const startIndex=((currentPage-1)*currentPageSize.label)
  //const endIndex=(startIndex + currentPageSize.label)
  // const totalDataSize=data?.length
  // const totalPages=Math.ceil(totalDataSize/currentPageSize.label)
  //const [totalDataSize, setTotalDataSize]=useState(data?.length)
  const [totalPages, setTotalPages] = useState(
    Math.ceil(data?.length / currentPageSize.label)
  );
  const headers = Object.keys(data[0]);

  //Functions
  const handlePageSizeChange = (e) => {
    const currentPageSize = pageSize.find(
      (size) => size.id === parseInt(e.target.value)
    );
    setCurrentPageSize(currentPageSize);
    setCurrentPage(1);
    modifyData(0, currentPageSize.label);
    let dataSize = renderData.length;
    setTotalPages(Math.ceil(dataSize / currentPageSize.label))
  };

  const handlePageChange = (currentPageNumber) => {
    setCurrentPage(currentPageNumber);
    let startIndex = (currentPageNumber - 1) * currentPageSize.label;
    modifyData(startIndex, startIndex + currentPageSize.label);
  };

  const modifyData = (startIndex, endIndex, displayData = renderData) => {
    setFilteredData(displayData.slice(startIndex, endIndex + 1));
  };

  const generateDate = (epochTime) => {
    let date = new Date(epochTime);
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };

  const handleSearchTextChange = (e) => {
    let searchTerm = e.target.value;
    setSearchText(searchTerm);
    setCurrentPage(1);
    let newDataSize = 0;

    if (searchTerm.length) {
      let newRenderData = data.filter((row) =>
        Object.values(row).some(
          (value) =>
            (typeof value === "string" &&
              value.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (Array.isArray(value) &&
              value.join(";").toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
      newDataSize = newRenderData.length;
      //setTotalDataSize(newDataSize)
      setTotalPages(Math.ceil(newDataSize / currentPageSize.label));
      setRenderData(newRenderData);
      modifyData(0, currentPageSize.label, newRenderData);
    } else {
      setRenderData(data);
      modifyData(0, currentPageSize.label, data);
    }
  };

  return (
    <Container isCurrentThemeDark={isCurrentThemeDark}>
      <div className="headingAndSearch">
        <h2 className="heading">{heading}</h2>
        <input
          className="inputField"
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="Type to search"
        />
      </div>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              {headers.map((label) => (
                <th>{label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data) => (
              <tr>
                {headers.map((label) => {
                  if (label === "Last Updated") {
                    return <td>{generateDate(data[label])}</td>;
                  } else if (label === "Genres") {
                    return <td>{data[label].join(";")}</td>;
                  } else {
                    return <td>{data[label]}</td>;
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="pageSizeSelector">
          <label htmlFor="pageSize" className="label">
            Page size:{" "}
          </label>
          <select
            id="pageSize"
            className="inputField"
            value={currentPageSize.value}
            defaultValue={1}
            onChange={handlePageSizeChange}
          >
            {pageSize.map((size) => (
              <option value={size.id} key={size.id}>
                {size.label}
              </option>
            ))}
          </select>
        </div>
        <ul className="allPages">
          {Array(totalPages)
            .fill("")
            .map((page, index) => (
              <li
                key={index + 1}
                className={index + 1 === currentPage ? "active" : ""}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </li>
            ))}
        </ul>
      </div>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  .headingAndSearch {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    margin-top: 25px;

    h2 {
      margin: 0 !important;
      color: ${(props) =>
        props.isCurrentThemeDark ? lightTheme.heading : darkTheme.heading};
    }
  }

  .inputField {
    background: transparent;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    height: 30px;
    border-color: ${(props) =>
      props.isCurrentThemeDark
        ? lightTheme.secondary.background
        : darkTheme.secondary};
    color: ${(props) =>
      props.isCurrentThemeDark ? lightTheme.text : darkTheme.text};

    ::placeholder {
      color: ${(props) =>
        props.isCurrentThemeDark
          ? lightTheme.secondary.background
          : darkTheme.secondary};
    }
  }

  .tableContainer {
    padding: 0.5rem 1rem 1rem 1rem;
    box-sizing: border-box;
  }

  table {
    text-align: left;
    width: 100%;
  }

  tr,
  td,
  th {
    border: 1px solid black;
    border-collapse: collapse;
  }

  tbody {
    display: block;
    height: 500px;
    overflow: auto;
    overflow-x: hidden;
  }

  thead {
    width: calc(100% - 1em) !important;

    @media (max-width: 1024px) {
      width: 100% !important;
    }
    background-color: black;
    color: white;
  }

  th {
    border-color: white !important;
  }

  thead,
  tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  td,
  th {
    word-break: break-word;
    padding: 5px;
    box-sizing: border-box;
  }

  tbody tr:nth-child(odd) {
    background-color: #e2e2e2;
  }
  tbody tr:nth-child(even) {
    background-color: #9da29d;
  }

  .allPages {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    list-style-type: none;
    cursor: pointer;
    text-decoration: underline;
    max-height: 100px;
    overflow: auto;
    padding: 10px !important;
    margin: 0 !important;
    justify-content: center;

    li:hover {
      scale: 1.2;
    }
  }

  .active {
    min-width: 20px;
    border-radius: 4px;
    padding:2px;
    color: ${(props) =>
      props.isCurrentThemeDark ? darkTheme.text : lightTheme.text};
    background-color: ${(props) =>
      props.isCurrentThemeDark ? darkTheme.background : lightTheme.background};
    font-weight: 700;
  }

  .label {
    color: ${(props) =>
      props.isCurrentThemeDark ? lightTheme.text : darkTheme.text};
  }
`;
