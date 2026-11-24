import { useParams, Link } from "react-router";

function CompanyDetails({ companies, checkEligible, toggleApply }) {
  const { id } = useParams(); 

  const company = companies.find((c) => c.id === Number(id));

  if (!company) {
    return (
      <div>
        <h1>Company not found</h1>
        <Link to="/companies">Back to Companies</Link>
      </div>
    );
  }

  const eligible = checkEligible(company);

  return (
    <div className="details">
      <h1>{company.name}</h1>

      <div className="badges">
        {eligible ? (
          <span className="badge eligible">Eligible</span>
        ) : (
          <span className="badge not-eligible">Not Eligible</span>
        )}
        {company.packageLPA >= 10 && (
          <span className="badge dream">Dream Company</span>
        )}
      </div>

      <p><strong>Role:</strong> {company.role}</p>
      <p><strong>Package:</strong> {company.packageLPA} LPA</p>
      <p><strong>Location:</strong> {company.location}</p>
      <p><strong>Drive Date:</strong> {company.driveDate}</p>
      <p><strong>Minimum CGPA:</strong> {company.minCGPA}</p>

      <p><strong>Eligible Branches:</strong></p>
      <ul>
        {company.eligibleBranches.map((branch) => (
          <li key={branch}>{branch}</li>
        ))}
      </ul>

      <div className="card-actions">
        <Link to="/companies" className="btn btn-light">Back</Link>
        {eligible ? (
          <button
            className={company.isApplied ? "btn btn-red" : "btn btn-blue"}
            onClick={() => toggleApply(company.id)}
          >
            {company.isApplied ? "Withdraw" : "Apply"}
          </button>
        ) : (
          <span className="not-eligible-text">Not Eligible</span>
        )}
      </div>
    </div>
  );
}

export default CompanyDetails;
