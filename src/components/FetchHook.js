import useFetch from 'react-fetch-hook';

const UseFetch = () => {
  const api = 'https://random-word-api.herokuapp.com/word?number=10';
  const { data: words, isLoading, error } = useFetch(api);

  if (error) {
    return <div className='error'>Error: UseFetch error fetching</div>;
  }

  return (
    <div>
      {isLoading ? <h1>Fetch Loading...</h1> : <h1>UseFetch Hook</h1>}
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

export default UseFetch;
/* 

Use the useFetch custom hook from react-fetch-hook

A custom hook in React is a JavaScript function. It is reusable and leverages React's built-in hooks. The purpose is to encapsulate and share logic across multiple components. This promotes code modularity and maintainability.

A custom hook allows us to reuse the fetching logic in various components of our app.

In React, custom hooks are often named with a convention, such as useFetch. Typically, any custom hook follows a naming pattern that starts with the keyword use.

*/
