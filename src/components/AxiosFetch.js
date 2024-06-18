import { useEffect, useState } from 'react';
import axios from 'axios';

const Axios = () => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = 'https://random-word-api.herokuapp.com/word?number=10';

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(api)
      .then((res) => {
        setWords(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  }, []);

  if (error) {
    return <h1>Error: Axios Error</h1>;
  }

  return (
    <div>
      {isLoading ? <h1>Axios Loading...</h1> : <h1>Using Axios</h1>}
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

export default Axios;

/* 
Use the Axios Library

Axios is a third library package that we can add to our program to retrieve information from an API. Because Axios is used in both web browsers and server-side JavaScript, it is useful for a wide range of tasks.
*/
