import { useState, useEffect } from 'react';

const Fetch = () => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const api = 'https://random-word-api.herokuapp.com/word?number=10';

  useEffect(() => {
    setIsLoading(true);
    fetch(api)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? <h1>Loading...</h1> : <h1>Using JS Fetch</h1>}
      {words &&
        words.map((word, index) => (
          <p
            key={index}
            alt='word'
            width={100}>
            {word}
          </p>
        ))}
    </div>
  );
};
export default Fetch;

/* 

Use the JavaScript Fetch() method

The fetch() method is well-known for retrieving data from APIs. It is recognized as the simplest and most used approach. 

*/
