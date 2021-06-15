import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
import PagePagination from "./PagePagination";
import Search from "./Search";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">JOB SEARCH</h1>
      <Search params={params} onParamChange={handleParamChange} />
      <PagePagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h3>Loading...</h3>}
      {error && <h3 className="text-align-center">Oops! Something went wrong, try refreshing the page.</h3>}
      {jobs.map((job) => {
        return <Job key={jobs.id} job={job}></Job>;
      })}
      <PagePagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
      />
    </Container>
  );
}

export default App;
