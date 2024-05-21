import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import axios from "axios";

const Article = styled.div``;

interface Props {
  articleId: string;
}

export default function BlogPage(props: Props) {
  const { articleId } = props;

  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/article/${articleId}`);
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching file:", error);
        setContent("ファイルの読み込みに失敗しました");
      }
    };

    fetchData();
  }, [articleId]);

  return (
    <Article>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Article>
  );
}
