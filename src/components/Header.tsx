import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
`;
const LogoLink = styled.div`
    text-decoration: none;
    color: #333;
`;
const NavigationLinkContent = styled.div`
    display: flex;
`;
const NavigationLink = styled(Link)`
    margin-left: 20px;
    text-decoration: none;
    color: #333;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <LogoLink>
                <Link to="/">
                    日常の
                    <br />
                    思ったことを
                    <br />
                    ダラダラ書いていく
                    <br />
                    備忘録
                </Link>
            </LogoLink>
            <NavigationLinkContent>
                <NavigationLink to="/category">Category</NavigationLink>
                <NavigationLink to="/profile">Profile</NavigationLink>
                <NavigationLink to="/contact">Contact</NavigationLink>
            </NavigationLinkContent>
        </HeaderContainer>
    );
}
