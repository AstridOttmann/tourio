import Image from "next/image";
import Link from "next/link";
export default function Card({ place }) {
  return (
    <>
      <h2>{place.name}</h2>
      <Image
        src={place.image}
        alt="picture of place"
        width={150}
        height={150}
      ></Image>
      <p>Location:{place.location}</p>
      <Link href={place.mapURL}>Map-URL: {place.name}</Link>
    </>
  );
}
