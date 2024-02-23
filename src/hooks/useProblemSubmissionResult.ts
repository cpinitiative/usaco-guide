import { useEffect, useRef, useState } from 'react';
import { ProblemSubmissionResult } from '../models/groups/problem';

export default function useProblemSubmissionResult(
  submissionID: string | null
) {
  const [result, setResult] = useState<ProblemSubmissionResult | null>(null);
  const currentSubmission = useRef(0);

  useEffect(() => {
    if (!submissionID) return;
    const queryResult = async (curSubmission, submissionID) => {
      const res = await fetch(
        `https://ggzk2rm2ad.execute-api.us-west-1.amazonaws.com/Prod/submissions/${submissionID}`
      );
      const data = await res.json();

      if (currentSubmission.current !== curSubmission) return;

      setResult(data);

      if (res.ok && data.status !== 'done') {
        setTimeout(() => queryResult(curSubmission, submissionID), 1000);
      }
    };
    setResult(null);
    queryResult(++currentSubmission.current, submissionID);
  }, [submissionID]);

  useEffect(() => {
    return () => {
      if (submissionID) currentSubmission.current = -1;
    };
  }, [submissionID]);
  if (!submissionID) return null;
  return result;
}
