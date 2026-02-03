import { useMemo, useState } from "react";

const normalize = (value) => value.toLowerCase();

export default function SearchPanel({ articles }) {
  const [query, setQuery] = useState("");
  const [activePillar, setActivePillar] = useState("all");
  const [activeTag, setActiveTag] = useState("all");

  const pillars = useMemo(
    () => Array.from(new Set(articles.map((article) => article.pillar))),
    [articles]
  );

  const tags = useMemo(
    () => Array.from(new Set(articles.flatMap((article) => article.tags))),
    [articles]
  );

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [
          article.title,
          article.excerpt,
          article.category,
          article.author,
          article.pillar,
          article.tags.join(" "),
        ]
          .map(normalize)
          .some((value) => value.includes(normalizedQuery));

      const matchesPillar =
        activePillar === "all" || article.pillar === activePillar;
      const matchesTag = activeTag === "all" || article.tags.includes(activeTag);

      return matchesQuery && matchesPillar && matchesTag;
    });
  }, [articles, query, activePillar, activeTag]);

  return (
    <div className="search-panel">
      <div className="search-input">
        <input
          type="search"
          placeholder="Search articles, tags, and policy updates"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Search articles"
        />
        <button
          className="btn"
          type="button"
          onClick={() => setQuery("")}
          disabled={query.length === 0}
        >
          Clear
        </button>
      </div>

      <div>
        <p className="article-meta">Filter by pillar</p>
        <div className="filter-row">
          <button
            type="button"
            className={`filter-btn ${activePillar === "all" ? "active" : ""}`}
            onClick={() => setActivePillar("all")}
          >
            All pillars
          </button>
          {pillars.map((pillar) => (
            <button
              type="button"
              key={pillar}
              className={`filter-btn ${activePillar === pillar ? "active" : ""}`}
              onClick={() => setActivePillar(pillar)}
            >
              {pillar}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="article-meta">Filter by tag</p>
        <div className="filter-row">
          <button
            type="button"
            className={`filter-btn ${activeTag === "all" ? "active" : ""}`}
            onClick={() => setActiveTag("all")}
          >
            All tags
          </button>
          {tags.map((tag) => (
            <button
              type="button"
              key={tag}
              className={`filter-btn ${activeTag === tag ? "active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <p className="article-meta" aria-live="polite">
        {results.length} results
      </p>

      <div className="search-results">
        {results.length === 0 ? (
          <div className="empty-state">
            No matches yet. Try a different term or reset the filters.
          </div>
        ) : (
          results.map((article) => (
            <a key={article.slug} className="search-card" href={`/articles/${article.slug}`}>
              <div className="article-meta">
                <span className="pill">{article.pillar}</span>
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="tag-list">
                {article.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
