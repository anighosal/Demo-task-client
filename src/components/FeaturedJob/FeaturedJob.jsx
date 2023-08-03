import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import "./FeaturedJob.css";
import Job from "../Job/Job";

const FeaturedJob = () => {
  const jobList = useLoaderData();
  console.log(jobList);
  return (
    <Container className="bg-secondary">
      <h2 className="text-center mt-5 text-white">Featured Job Listings</h2>
      <div className="d-flex mt-5 job-listing">
        {jobList.map((job) => (
          <Job key={Job.id} job={job}></Job>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedJob;
