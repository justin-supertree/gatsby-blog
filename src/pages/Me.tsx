import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { css } from '@emotion/react';

import Common from '../components/common';
import Layout from '../components/layout/layout';
import Seo from '../components/common/seo';

const containerStyle = css`
    max-width: 700px;
    margin: 2rem auto;
    padding: 0 1rem;
    border: 1px solid;
    height: auto;
    min-height: 80vh;
`;

const MePage = () => {
    return (
        <Layout>
            <Seo title="Page Me" />
            <Common.Container css={containerStyle}>
                <h1>Hi from the My page</h1>
                <main className="main-contents">
                    <Common.Section className="intro">
                        <h2>Introduction</h2>
                        <Common.Column className="intro_text">
                            <p>I'm FrontEnd</p>
                        </Common.Column>
                    </Common.Section>

                    <Common.Section className="exp">
                        <h2>Experience</h2>
                    </Common.Section>

                    <Common.Section className="skills">
                        <h2>Skills</h2>
                    </Common.Section>
                </main>
            </Common.Container>
        </Layout>
    );
};

export const query = graphql`
    query {
        bg: file(relativePath: { eq: "about.jpg" }) {
            publicURL
        }
    }
`;

export default MePage;
