// CRA => CSR

// NEXTJs => SSR, Pre-rendering the source code 
// => 상호 작용이 일어나면 react js 가 화면을 렌더링하지만 
// js를 멈춘다면 아무것도 일어나지 않을떄 next js는 무언가를 해줄 수 있다.
// (Ex : javascript를 허용해 달라는 메세지를 날린다.)

import { useState } from "react";
import NavBar from "../components/navBar";

const HoneComponent = () => { 
    const [count, setCount] = useState(0)

    const handlingCount = () => { 
        setCount(count + 1)
    }

    return (<>
        <div>
            <NavBar />
            Hello, {count}

            <button onClick={() => { 
                handlingCount()
            }}>+</button>
        </div>
    </>)
};

export default HoneComponent;