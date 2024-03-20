import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // check status
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  // Here, we just used empty array because we don't want it to render always, we want it for a single instance that is offline/online which takes place only once.

  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;
