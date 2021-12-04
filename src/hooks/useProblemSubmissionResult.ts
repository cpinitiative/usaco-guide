import { useEffect, useRef, useState } from 'react';

export default function useProblemSubmissionResult() {
  const [submissionID, setSubmissionID] = useState(null);
  const [result, setResult] = useState(null);
  const currentSubmission = useRef(0);

  useEffect(() => {
    const queryResult = async (curSubmission, submissionID) => {
      const res = await fetch(
        `https://oh2kjsg6kh.execute-api.us-west-1.amazonaws.com/Prod/submissions/${submissionID}`
      );
      const data = await res.json();

      if (currentSubmission.current !== curSubmission) return;

      setResult(data);

      if (res.ok && data.status === 'executing') {
        setTimeout(() => queryResult(curSubmission, submissionID), 1000);
      }
    };

    if (submissionID) {
      queryResult(++currentSubmission.current, submissionID);
    }
  }, [submissionID]);

  useEffect(() => {
    return () => {
      currentSubmission.current = -1;
    };
  }, []);

  return [result, setSubmissionID];
}
