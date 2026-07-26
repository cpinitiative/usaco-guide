import { useEffect, useRef, useState } from 'react';
import { ProblemSubmissionResult } from '../models/groups/problem';

export default function useProblemSubmissionResult(
  submissionID: string | null
) {
  const [result, setResult] = useState<ProblemSubmissionResult | null>(null);
  const currentSubmission = useRef(0);

  useEffect(() => {
    if (!submissionID) return;
    let timeoutHandle: ReturnType<typeof setTimeout>;
    const queryResult = async (curSubmission: number, submissionID: string) => {
      try {
        const res = await fetch(
          `https://ggzk2rm2ad.execute-api.us-west-1.amazonaws.com/Prod/submissions/${submissionID}`
        );
        const data = await res.json();

        if (currentSubmission.current !== curSubmission) return;

        setResult(data as ProblemSubmissionResult);

        if (res.ok && data.status !== 'done') {
          timeoutHandle = setTimeout(() => queryResult(curSubmission, submissionID), 1000);
        }
      } catch (e) {
        if (currentSubmission.current !== curSubmission) return;
        setResult(null);
      }
    };
    setResult(null);
    queryResult(++currentSubmission.current, submissionID);
    return () => {
      currentSubmission.current = -1;
      clearTimeout(timeoutHandle);
    };
  }, [submissionID]);

  if (!submissionID) return null;
  return result;
}
