import Link from "next/link";
import { useRouter } from "next/router";
// css module pattern , 자바스크립트 오브젝트인 프로퍼티로 작성한다. (클래스명이 아님!, 다른 컴포넌트에서 같은 클래스명을 사용해도 next가 알아서 랜덤 문자열을 붙인다)
import styles from "./navBar.module.css"

// don't Ancher tag
// instead Link tag

const NavBar = () => {
    const router = useRouter()
    console.log(router)

    return (<>
        <nav >
            {/* Link tag에 필요한 속성들을 ancher 태그에 넣어서 보낸다. href 속성만 link태그에 담아서 사용한다. */}
            {/* ex) 라우터 속성으로 훅을 걸었다. */}
            <Link href={"/"}>
                {/* 하나의 태그에 두가지 클래스명을 넣어야할 경우 백틱 혹은 배열.join()을 사용한다. */}
                <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`} >
                    Home
                </a>
            </Link>
            <Link  href={"/about"}>
                <a className={[styles.link, router.pathname === "/about" ? styles.active : ""].join(" ")}>
                About
                </a>
            </Link>
        </nav>
    </>)
 }

export default NavBar;