import { useState, useEffect } from "react";
import { Exhibition, Service } from "../model/model";
import { EXHIBITIONS_URL } from "../environment";

const ExhibitionService = () => {
    // Set state when data is available, otherwise set status
  const [result, setResult] = useState<Service<Exhibition[]>>({
    status: "loading"
  });

  useEffect(() => {
    fetch(EXHIBITIONS_URL)
      .then((response) => response.json())
      .then((response) => {
          //Using different status indicators to load component accordingly.
          //If data isn't available, the component shouldn't load.
        setResult({ status: "loaded", payload: response.data });
      })
      .catch((error) => {
        setResult({ status: "error", error: error });
      });
  }, []);

  return result;
};

export default ExhibitionService;
