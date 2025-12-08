const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <h1 className="mb-5">User Details</h1>

      <p>Showing details for user #{id}</p>
    </div>
  );
};

export default UserDetails;
