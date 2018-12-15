import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Banner from '../components/Banner'

export const query = graphql`
    query HeadingQuery {
    site {
        siteMetadata {
            title,
            description,
          }
        }
    }
`

class HomeIndex extends React.Component {
    render() {
        const { data } = this.props
        return (
            <Layout>
                <Helmet>
                    <html lang="en" />
                    <title>{data.site.siteMetadata.title}</title>
                    <meta name="description" content={data.site.siteMetadata.description} />
                    
                    <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
                        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
                        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
                        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#0a3845" />
                        <meta name="theme-color" content="#fff" />
                        <meta property="og:type" content="business.business" />
                    <meta property="og:title" content={data.site.siteMetadata.title} />
                    <meta property="og:url" content="/" />
                    <meta property="og:image" content="/img/og-image.jpg" />
                    <meta name="google-site-verification" content="a9uMwllg_n5jDSibbSi-xtEWh3rZB9x01G2GSYq56Ww" />
                </Helmet>
                <Banner />
            </Layout>
        )
    }
}

export default HomeIndex