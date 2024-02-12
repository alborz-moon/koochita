import { useRouter } from "next/router"

export default function Samadid () {
    const router = useRouter()

    const id = router.query.samadid

    return <>id : {id}</>
} 