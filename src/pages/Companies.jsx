import { useState } from "react";
import CompanyCard from "../components/CompanyCard";

function Companies({ companies, checkEligible, toggleApply }) {

  const [filter, setFilter] = useState("All");

  const filteredCompanies = companies.filter((company) => {
    if (filter === "Eligible") return checkEligible(company);
    if (filter === "Not Eligible") return !checkEligible(company);
    return true; // "All"
  });

  return (
    <div>
      <h1>Companies</h1>

      <label className="filter">
        Show:{" "}
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Eligible">Eligible</option>
          <option value="Not Eligible">Not Eligible</option>
        </select>
      </label>

      {filteredCompanies.length === 0 ? (
        <p>No companies found.</p>
      ) : (
        <div className="grid">
          {filteredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              checkEligible={checkEligible}
              toggleApply={toggleApply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Companies;
