import React, { useState } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";
import PagePagination from "./PagePagination";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  return (
    <Container className="my-4">
      <h1 className="mb-4">Job Search</h1>
      <PagePagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading</h1>}
      {error && <h1>Error. Try refreshing.</h1>}
      {jobs.map((job) => {
        return <Job key={jobs.id} job={job}></Job>;
      })}
      <PagePagination hasNextPage={true} page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
