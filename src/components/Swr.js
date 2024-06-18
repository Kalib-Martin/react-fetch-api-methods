import useSWR from 'swr'; // Import useSWR from swr package

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  const api = 'https://random-word-api.herokuapp.com/word?number=10';
  const { data: words, error, isValidating } = useSWR(api, fetcher);

  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;

  return (
    <div>
      {isValidating ? <h1>Loading SWR...</h1> : <h1>Using SWR</h1>}
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

export default Swr;

/* 

Use the stale-while-revalidate (SWR) method

This method is used to fetch data from a server and is used in React. It manages any issues that may arise when obtaining the data and helps you manage its storage. SWR includes useState() and useEffect(), so  there is no need to import them.

*/
