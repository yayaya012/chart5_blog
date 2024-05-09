import styled from "styled-components";
import BlogPage from "./BlogPage";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeContainer = styled.div``;

export default function Home() {
    const [message, setMessage] = useState("ロード中...");

    useEffect(() => {
        const fetchData = async () => {
            // const response = await fetch("/hello");
            // const textResponse = await response.text();

            const response = await axios.get(`/hello`);
            setMessage(response.data);
        };

        fetchData();
    }, []); 

    return (
        <HomeContainer>
            <BlogPage articleId="1" />
            <p>{message}</p>
        </HomeContainer>
    );
}
