import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function DataFetch() {
  const [quotes, setQuotes] = useState([]);
  const [random, setRandom] = useState("");

  const baseURL = "https://dummyjson.com/quotes";

  useEffect(() => {
    callAPI();
  }, [baseURL]);

  const callAPI = async () => {
    const response = await axios.get(baseURL);
    console.log(response.data.quotes);
    setQuotes(response.data.quotes);
  };

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length + 1);
    console.log(quotes[randomIndex]?.quote);
    const selectQuote = quotes[randomIndex]?.quote;
    setRandom(selectQuote);
  };
  // function createPost() {
  //   axios.post(baseURL);
  // }
  return (
    <div>
      <Button
        className="btn quote"
        variant="secondary"
        onClick={getRandomQuote}
      >
        Get quote
      </Button>
      <p>{random}</p>
    </div>
  );
}

export default DataFetch;
