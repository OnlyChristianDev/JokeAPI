import Jokes from "@/app/components/Jokes";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Jokes />
    </div>
  );
}
