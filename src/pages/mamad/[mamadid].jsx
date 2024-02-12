import { useRouter } from "next/router";

export default function Samadid() {
  const router = useRouter();

  const id = router.query.mamadid;

  return <span>id : {id}</span>;
}
