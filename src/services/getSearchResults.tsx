import { useEffect, useState } from "react";

const axios = require('axios').default;

const getSearchResults = (searchText: string) => {
  var url = `http://localhost:8080/search?searchString=${searchText}`
  const [val, setVal] = useState();

  const searchCall = async (url: string) => {
    await axios.get(url)
      .then((response: any) => {
        setVal(response.data);
        return JSON.stringify(response.data);
      })
      .catch((error: any) => {
        console.log(error.response);
      })
  };

  useEffect(() => {
    searchCall(url)
  }, []);

  return (
    <div>
      {val}
    </div>
  )

}
const getSuggestedWords = (suggestString : string) => {
  var url = `http://localhost:8080/search?${suggestString}`;

  axios.get(url)
    .then((response : any) => {
      console.log(JSON.stringify(response.data))
    })
    .catch((error: any) => {
      console.log(error.response);
    }) 
}

export default getSearchResults