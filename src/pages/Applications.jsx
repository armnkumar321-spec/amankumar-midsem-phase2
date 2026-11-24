import CompanyCard from "../components/CompanyCard";

function Applications({ companies, checkEligible, toggleApply }) {
  const appliedCompanies = companies.filter((company) => company.isApplied);

  return (
    <div>
      <h1>My Applications</h1>

      {appliedCompanies.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        <div className="grid">
          {appliedCompanies.map((company) => (
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

export default Applications;
