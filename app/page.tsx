import Navbar from "@/components/nav";
import MyStack from "@/components/stack-description";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto max-w-3xl py-4 px-7 md:px-12 flex justify-between items-center mt-10">
        <MyStack />
      </div>
    </div>
  );
}
