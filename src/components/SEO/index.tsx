import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  image: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, children }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta name="image" content={image} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO;