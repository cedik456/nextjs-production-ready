type Album = {
  id: number;
  title: string;
};

const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums: Album[] = await response.json();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols gap-4">
      {albums.map((album) => (
        <div
          key={album.id}
          className="bg-white shadow-md rounded-lg p-4 text-black "
        >
          <h3 className="text-lg font-bold mb-2">{album.title}</h3>
          <p className="text-gray-600 ">Album ID: {album.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
