import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Root = styled.div``;
const MenuContainer = styled.div`
    position: fixed;
    top: 30dp;
    left: 0px;
    width: 300px;
    height: 100%;
    background-color: #fff;
    transition: left 0.3s ease;
`;
const LinkList = styled.ul`
    padding: 0;
`;
const LinkListItem = styled.li`
    padding: 10px;
`;
const LogoButton = styled(Button)`
    display: flex;
    margin: 20px;
`;

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <Root>
            <LogoButton icon={<MenuOutlined />} onClick={toggleMenu} />
            {isOpen && (
                <MenuContainer>
                    <LinkList>
                        <LinkListItem>
                            <Link to="/category">Category</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link to="/profile">Profile</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link to="/contact">Contact</Link>
                        </LinkListItem>
                    </LinkList>
                </MenuContainer>
            )}
        </Root>
    );
}
