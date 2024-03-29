import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Toy Thriver`;
  }, [title]);
};

export default useTitle;
