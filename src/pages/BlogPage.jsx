import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock, CalendarDays, PenTool, ExternalLink, UserRound } from 'lucide-react';
import { blogPosts, findPost } from '@/content/blogPosts';

const ui = {
  en: {
    title: 'Blog',
    subtitle: 'Articles on science, engineering and artificial intelligence',
    read: 'Read the article',
    minutes: (n) => `${n} min read`,
    back: 'Back to the blog',
    by: 'By',
    original: 'Originally published on',
    locale: 'en-GB',
  },
  fr: {
    title: 'Blog',
    subtitle: 'Articles sur la science, l’ingénierie et l’intelligence artificielle',
    read: 'Lire l’article',
    minutes: (n) => `${n} min de lecture`,
    back: 'Retour au blog',
    by: 'Par',
    original: 'Article publié initialement sur',
    locale: 'fr-FR',
  },
  ar: {
    title: 'المدونة',
    subtitle: 'مقالات في العلوم والهندسة والذكاء الاصطناعي',
    read: 'اقرأ المقال',
    minutes: (n) => `${n} دقائق قراءة`,
    back: 'العودة إلى المدونة',
    by: 'بقلم',
    original: 'نُشر هذا المقال أولًا على موقع',
    locale: 'ar-u-nu-latn',
  },
};

const formatDate = (iso, locale) =>
  new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${iso}T12:00:00`));

// Turns "[text](url)" into links; everything else stays plain text.
const RichText = ({ text }) =>
  text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return m ? (
      <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer">{m[1]}</a>
    ) : (
      // keep thousands groups like "10 000" on one line
      part.replace(/(\d) (?=\d{3}\b)/g, '$1\u00a0')
    );
  });

const Block = ({ text }) => {
  if (text.startsWith('### ')) return <h3><RichText text={text.slice(4)} /></h3>;
  if (text.startsWith('## ')) return <h2><RichText text={text.slice(3)} /></h2>;
  return <p><RichText text={text} /></p>;
};

const PostMeta = ({ post, t }) => (
  <div className="post-meta">
    <span><CalendarDays size={15} /> {formatDate(post.date, t.locale)}</span>
    <span><Clock size={15} /> {t.minutes(post.readingTime)}</span>
  </div>
);

export const BlogPage = ({ language = 'en' }) => {
  const t = ui[language] || ui.en;

  return (
    <div className="page-header">
      <div className="container">
        <h1 className="gradient-text">{t.title}</h1>
        <p className="hero-subtitle" style={{ marginBottom: 0 }}>{t.subtitle}</p>
      </div>
      <div className="container page-content" style={{ marginTop: '4rem', textAlign: 'start' }}>
        <div className="post-list">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass-card post-card">
              <Link to={`/blog/${post.slug}`} className="post-card-cover" tabIndex={-1} aria-hidden="true">
                <img src={post.cover} alt="" loading="lazy" />
              </Link>
              <div className="post-card-body">
                <span className="post-category"><PenTool size={14} /> {post.category[language] ?? post.category.en}</span>
                <h2><Link to={`/blog/${post.slug}`}>{post.title[language] ?? post.title.en}</Link></h2>
                <p>{post.excerpt[language] ?? post.excerpt.en}</p>
                <PostMeta post={post} t={t} />
                <Link to={`/blog/${post.slug}`} className="read-more">{t.read} <ArrowRight size={16} /></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogPostPage = ({ language = 'en' }) => {
  const { slug } = useParams();
  const post = findPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const t = ui[language] || ui.en;
  const pick = (field) => field[language] ?? field.en;

  return (
    <div className="page-header post-page">
      <div className="container post-container">
        <span className="post-category"><PenTool size={14} /> {pick(post.category)}</span>
        <h1 className="post-title">{pick(post.title)}</h1>
        <div className="post-byline">
          <span><UserRound size={15} /> {t.by} <bdi>Walid LAKAS</bdi></span>
          <PostMeta post={post} t={t} />
        </div>
      </div>

      <div className="container post-container page-content" style={{ textAlign: 'start' }}>
        <figure className="post-cover">
          <img src={post.cover} alt={pick(post.coverAlt)} width="1200" height="821" />
          <figcaption>{pick(post.coverCaption)}</figcaption>
        </figure>

        <article className="post-body">
          {pick(post.body).map((block, i) => <Block key={i} text={block} />)}
        </article>

        <p className="post-original">
          {t.original}{' '}
          <a href={post.originalUrl} target="_blank" rel="noopener noreferrer">
            <bdi>Pepro</bdi> <ExternalLink size={14} />
          </a>
        </p>

        <Link to="/blog" className="read-more back-nav"><ArrowLeft size={16} /> {t.back}</Link>
      </div>
    </div>
  );
};
