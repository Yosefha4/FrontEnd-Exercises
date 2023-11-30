import { useState } from "react";
import CusInput from "../components/CusInput/CusInput";
import "./Grades.css";

const Grades = () => {
  const [name, setName] = useState("");
  const [algoGrade, setAlgoGrade] = useState(0);
  const [frontGrade, setFrontGrade] = useState(0);
  const [allDocs, setAllDocs] = useState([]);

  const sortTable = (column) => {
    console.log("Sorted click");
    // Create a shallow copy of the candidates array using the spread operator
    const sortedCandidates = [...allDocs].sort((a, b) => b[column] - a[column]);

    // Update the state with the sorted array of candidates
    setAllDocs(sortedCandidates);
  };

  const handleClear = () => {
    setName("");
    setAlgoGrade(0);
    setFrontGrade(0);
  };

  const addRow = () => {
    // const totalScore = parseInt(algoGrade) + parseInt(frontGrade);
    console.log(
      "The details :  -name:" +
        name +
        "  the algoG: +" +
        algoGrade +
        "The frontG : " +
        frontGrade
    );
    const newCandidate = {
      name,
      algoGrade: parseInt(algoGrade),
      frontGrade: parseInt(frontGrade),
    };

    setAllDocs([...allDocs, newCandidate]);

    handleClear();
  };

  return (
    <div className="grades">
      <h2>Table & Input Challenge</h2>
      <div className="top">
        <div className="inputs">
          <CusInput
            type="text"
            label="Name: "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <CusInput
            type="number"
            label="Algo grade: "
            onChange={(e) => setAlgoGrade(e.target.value)}
            value={algoGrade}
          />
          <CusInput
            type="number"
            label="Front grade: "
            onChange={(e) => setFrontGrade(e.target.value)}
            value={frontGrade}
          />
        </div>
        <div className="buttons">
          <button onClick={addRow}>Confirm</button>
          <button onClick={handleClear}>Clear All</button>
        </div>
      </div>
      <div className="main">
     
        <div className="tableContainer">
            <h2 >Grades</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th onClick={() => sortTable("algoGrade")}>
                  Algo Grade &#x2191;
                </th>
                <th onClick={() => sortTable("frontGrade")}>Front Grade &#x2191;</th>
                <th onClick={() => sortTable("Total Avg")}>Total Avg</th>
              </tr>
            </thead>
            <tbody>
              {allDocs.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.algoGrade}</td>
                  <td>{item.frontGrade}</td>
                  <td>{(item.algoGrade + item.frontGrade) / 2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Grades;
