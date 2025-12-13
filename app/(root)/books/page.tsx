const Page = async () => {
  const response = await fetch("http://localhost:3000/api/books");

  const books = await response.json();
  return (
    <div>
      <div>{JSON.stringify(books, null, 2)}</div>
    </div>
  );
};

export default Page;
