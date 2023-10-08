import { useEffect } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { useNavigate } from "react-router-dom";

export const GuestAuth = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const { getSession } = useSessionStorage();
    const session = getSession(import.meta.env.VITE_SESSION_KEY);

    if (session) {
      const referrer = document.referrer;
      const isInternalReferrer = referrer.includes(document.location.origin);

      //redirect user to the prev page
      if (isInternalReferrer) {
        return navigate(-1, { replace: true });
      }

      //redirect user to the default page for user coz came from foreign place
      navigate("/movie_library");
    }
  });

  return <>{children}</>;
};
