import styled from "styled-components";

interface NavAncherProps { 
    active ? :boolean
}

export const NavAncher = styled.a<NavAncherProps>`
    background-color : ${props => props.active ? "aqua" : ""};
`;

// .active {
//     background-color: tomato;
// }

// .link {
//     text-decoration: none;
// }