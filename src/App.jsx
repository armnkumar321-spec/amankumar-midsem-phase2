import { useState } from "react";
import { Routes, Route } from "react-router";
import { companies as companyData, myProfile } from "./data/companies";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import Applications from "./pages/Applications";

function App() {
  
  const [companies, setCompanies] = useState(companyData);

  function checkEligible(company) {
    return (
      myProfile.cgpa >= company.minCGPA &&
      company.eligibleBranches.includes(myProfile.branch)
    );
  }

 
  function toggleApply(id) {
    const updated = companies.map((company) => {
      if (company.id === id) {
        return { ...company, isApplied: !company.isApplied };
      }
      return company;
    });
    setCompanies(updated);
  }

  const appliedCount = companies.filter((company) => company.isApplied).length;

  return (
    <div>
      <Navbar appliedCount={appliedCount} />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                companies={companies}
                myProfile={myProfile}
                checkEligible={checkEligible}
                appliedCount={appliedCount}
              />
            }
          />
          <Route
            path="/companies"
            element={
              <Companies
                companies={companies}
                checkEligible={checkEligible}
                toggleApply={toggleApply}
              />
            }
          />
          <Route
            path="/companies/:id"
            element={
              <CompanyDetails
                companies={companies}
                checkEligible={checkEligible}
                toggleApply={toggleApply}
              />
            }
          />
          <Route
            path="/applications"
            element={
              <Applications
                companies={companies}
                checkEligible={checkEligible}
                toggleApply={toggleApply}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
