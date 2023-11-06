import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/container";

// no cach!
export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("0e276fd3-527a-4a9c-98af-8ad30a81acdb");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
