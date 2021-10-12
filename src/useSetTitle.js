import { useEffect } from "react";

const useSetTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useSetTitle;
