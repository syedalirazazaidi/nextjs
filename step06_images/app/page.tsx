import Image from "next/image";
import img from "../images/myimg.jpg";
export default function Home() {
  // "alt" is now required for improved accessibility
  // optional: image files can be colocated inside the app/ directory
  return <Image alt="img" src={img} />;
}
