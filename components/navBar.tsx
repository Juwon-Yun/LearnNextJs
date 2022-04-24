import Link from "next/link";
import { useRouter } from "next/router";

// don't Ancher tag
// instead Link tag

const NavBar = () => {
    const router = useRouter()
    console.log(router)

    return (<>
        <nav>
            {/* Link tag에 필요한 속성들을 ancher 태그에 넣어서 보낸다. href 속성만 link태그에 담아서 사용한다. */}
            {/* ex) 라우터 속성으로 훅을 걸었다. */}
            <Link href={"/"}>
                <a style={{color : router.pathname === "/" ?  "red" : "yellow"}}>
                    Home
                </a>
            </Link>
            <Link  href={"/about"}>
                <a style={{ color : router.pathname === "/about" ? "red" : "yellow"}}>
                About
                </a>
            </Link>
        </nav>
    </>)
 }

export default NavBar;