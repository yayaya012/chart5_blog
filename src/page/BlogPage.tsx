import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Article = styled.div``;

interface Props {
    articleId: string;
}

export default function BlogPage(props: Props) {
    const { articleId } = props;
    const path = "./entry/" + articleId + ".md";
    console.log(path);
    // const data = articleId !== null ? fs.readFileSync(path, "utf-8") : "Not found";

    return (
        <>
            <Article>
                <ReactMarkdown>{"data"}</ReactMarkdown>
            </Article>
        </>
    );
}
