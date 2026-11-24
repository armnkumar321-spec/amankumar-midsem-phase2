import { Link } from "react-router";

function CompanyCard({ company, checkEligible, toggleApply }) {
  const eligible = checkEligible(company);

  return (
    <div className="card">
      <h3>{company.name}</h3>

      {/* Badges */}
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

      <div className="card-actions">
        <Link to={`/companies/${company.id}`} className="btn btn-light">
          View Details
        </Link>

        {/* Button only for eligible companies */}
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

export default CompanyCard;
