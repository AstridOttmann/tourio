import Card from "../Card/Card";
import useRouter from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function CardList() {
  //const router = useRouter();
  const { data } = useSWR("/api");

  console.log("Data: ", data);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <ul>
        {data.map((place) => {
          return (
            <li key={place.id}>
              <Card place={place} />
            </li>
          );
        })}
      </ul>
      <button>
        <Link href="/">+ place</Link>
      </button>
    </>
  );
}
