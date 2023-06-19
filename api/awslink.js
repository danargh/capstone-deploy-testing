import { atom, useAtom } from "jotai";

const awsLinkAtom = atom(
   "https://ec2-3-27-124-243.ap-southeast-2.compute.amazonaws.com:8080"
);

const authToken = atom(
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbl9pZCI6MiwiYXV0aG9yaXplZCI6dHJ1ZSwiZXhwIjoxNjg3MzEyNzk0fQ.TvUgvWPn7mexTGGddqZ88RP-oIRhDmjsdkp3n2YjYIg"
);

export default function AWSLink() {
   const [awslink] = useAtom(awsLinkAtom);
   const [token] = useAtom(authToken);
   return { awslink, token };
}
