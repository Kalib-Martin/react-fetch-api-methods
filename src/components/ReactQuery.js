import { useQuery } from '@tanstack/react-query';

const Query = () => {
  const api = 'https://random-word-api.herokuapp.com/word?number=10';

  const {
    data: words,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => fetch(api).then((res) => res.json()),
    queryKey: ['words']
  });

  // Show a loading message while data is fetching
  if (isLoading) {
    return <h1>React Query Loading...</h1>;
  }

  // to handle error
  if (error) {
    return (
      <div className='error'>
        <h1>Error: error fetching with React Query</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>React Query </h1>
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
export default Query;

/* 

Use the React Query library

React Query, also known as TanStack Query, is useful for managing data in React applications. The difference between the two names is  the version.

Using React Query is easy and makes handling data in your app feel almost automatic, like it's taking care of things for you. For instance, fetching, caching, synchronizing, and updating server states in your applications.

Note:Addtional set up needed in root index file.

*/
