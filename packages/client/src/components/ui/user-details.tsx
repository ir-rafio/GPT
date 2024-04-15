function UserDetails({ id }: { id: string | undefined }) {
  console.log("Fetching details for user", id);
  return (
    <>
      <div className="m-2">
        User Details
        <div>
          name <br />
          {id} <br />
          note
        </div>
      </div>
    </>
  );
}

export default UserDetails;
