function Home({ companies, myProfile, checkEligible, appliedCount }) {
  const eligibleCount = companies.filter((company) => checkEligible(company)).length;

  return (
    <div>
      <h1>Campus Placement Drive</h1>
      <p>
        Check which companies you are eligible for and apply to them in one place.
      </p>

      <div className="profile">
        <h3>My Profile</h3>
        <p><strong>Name:</strong> {myProfile.name}</p>
        <p><strong>Branch:</strong> {myProfile.branch}</p>
        <p><strong>CGPA:</strong> {myProfile.cgpa}</p>
      </div>

      <div className="stats">
        <div className="stat-box">
          <h2>{companies.length}</h2>
          <p>Total Companies</p>
        </div>
        <div className="stat-box">
          <h2>{eligibleCount}</h2>
          <p>Eligible Companies</p>
        </div>
        <div className="stat-box">
          <h2>{appliedCount}</h2>
          <p>Applied Companies</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
