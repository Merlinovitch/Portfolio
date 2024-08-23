

interface ArticleProps {
    title: string;
    modal?: string;
    description: string;
    imgUrl: string;
    alt: string;
    stacks: string[];
    link?: string,
    github?: string 
}

function Article( { title, description, imgUrl, alt, stacks, link, github, modal }: ArticleProps ) {
    return (
      <div>
        <article className="projects__card">
          <img src={imgUrl} alt={alt} className="projects__img" />
          <div className="projects__modal">
            <span className="projects__subtitle">{stacks.join(' / ')}</span>
            <h2 className="projects__title">
              {modal}
            </h2>
            <a href={link} target="_blank" className="projects__button">
              {title} <i className="ri-external-link-line"></i>
            </a>
          </div>
        </article>
        <p className="projects__description" dangerouslySetInnerHTML={{ __html: description }}></p>
        {github && (
        <a
          href={github}
          className="projects__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir sur GitHub
        </a>
      )}
      </div>
    );
  }

export default Article
