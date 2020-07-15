import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
        twitterImage
      }
    }
  }
`

const SEO = ( {title, description}) => {
  const {site} = useStaticQuery(query);
  const {siteDesc, siteTitle, siteUrl, image, twitterUsername, twitterImage} = site.siteMetadata
  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle
  return <Helmet htmlAttributes={{lang:"es"}} title={metaTitle}>
    <meta name="description" content={description || siteDesc} />
    <meta name="image" content={image} />
    {/* facebook cards */}
    <meta property="og:url" content={siteUrl} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={metaTitle} />
    <meta property="og:description" content={description || siteDesc} />
    <meta property="og:image" content={`${siteUrl}/${image}`} />
    

    {/* twitter cards */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={twitterUsername} />
    <meta name="twitter:title" content={metaTitle} />
    <meta name="twitter:description" content={description || siteDesc} />
    <meta name="twitter:image" content={`${siteUrl}${twitterImage}`} />
  </Helmet>
}

export default SEO
