import Head from "next/head";

const links = [
  { href: "mailto:dshane1902@gmail.com", label: "email" },
  { href: "https://github.com/dshane1903", label: "github" },
  { href: "https://linkedin.com/in/shaneduncan", label: "linkedin" },
];

const projects = [
  {
    name: "Raft Key-Value Store",
    tech: "Go | gRPC | bbolt | Prometheus",
    desc: "Distributed key-value store implementing the Raft consensus protocol. Supports leader election, log replication, dynamic membership changes, log compaction via snapshotting, linearizable reads, and persistent state. Includes a partition test harness for fault injection.",
    links: [
      { href: "https://github.com/dshane1903/raft-kv-store", label: "code ->" },
      { href: "https://github.com/dshane1903/raft-kv-store#demo", label: "demo ->" },
    ],
  },
  {
    name: "OMSLens",
    tech: "Python | FastAPI | React | PostgreSQL",
    desc: "Deployed RAG platform with hybrid dense-sparse retrieval and reciprocal rank fusion. Features a retrieval evaluation harness (precision@k, recall@k, MRR) and full observability via Prometheus and Grafana dashboards. Runs on AWS ECS.",
    links: [
      { href: "https://omscslens.com", label: "live ->" },
      { href: "https://github.com/dshane1903/omslens", label: "code ->" },
    ],
  },
  {
    name: "vLLM / llm-compressor",
    tech: "Python | Open Source Contribution",
    desc: "Merged PR modernizing type hints to Python 3.10+ across the llm-compressor codebase. Open architectural PR removing the IMatrixGatherer abstraction across llm-compressor and compressed-tensors repositories.",
    links: [
      {
        href: "https://github.com/vllm-project/llm-compressor/pulls?q=author%3Adshane1903",
        label: "pull requests ->",
      },
    ],
  },
];

const roles = [
  {
    title: "Associate Software Engineer",
    date: "Mar 2025 - Present",
    company: "Infosys | contracted to New York Life",
    desc: "Backend engineer on an enterprise AI platform. Own the Java Spring Boot aggregator service (BFF) between Angular frontend and Python FastAPI microservices on AWS EKS. Built JWT/LDAP authentication, SSE streaming, and Agent Registry endpoints backed by DynamoDB.",
  },
  {
    title: "Data Engineer Intern",
    date: "Jul - Aug 2024",
    company: "Open Road Integrated Media",
    desc: "Built Airflow DAGs and data pipelines using PySpark, Apache Parquet, and Hive metastore for the Data Fusion team.",
  },
];

const education = [
  {
    school: "Georgia Institute of Technology",
    detail: "M.S. Computer Science | Machine Learning Specialization | Expected 2028",
  },
  {
    school: "University of Pennsylvania",
    detail: "B.S.E. Systems Science & Engineering | 2023",
  },
];

function ExternalLink({ href, children }) {
  const external = href.startsWith("http");

  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Shane Duncan</title>
        <meta
          name="description"
          content="Shane Duncan, software engineer focused on backend and distributed systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/Cropped_Image.ico" />
        <link rel="icon" type="image/x-icon" href="/Cropped_Image.ico" />
      </Head>

      <main className="container">
        <header>
          <h1>Shane Duncan</h1>
          <p className="tagline">
            Software engineer focused on backend and distributed systems. Building on Java, Go, and Python -
            currently working on microservice architectures on AWS at scale. Pursuing an M.S. in Computer Science
            (ML) at Georgia Tech.
          </p>
          <nav className="links" aria-label="Contact links">
            {links.map((link) => (
              <ExternalLink href={link.href} key={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </nav>
        </header>

        <section>
          <div className="section-label">Projects</div>
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-header">
                <h2 className="project-name">{project.name}</h2>
                <span className="project-tech">{project.tech}</span>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-links">
                {project.links.map((link) => (
                  <ExternalLink href={link.href} key={link.href}>
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section>
          <div className="section-label">Experience</div>
          {roles.map((role) => (
            <article className="role" key={`${role.title}-${role.company}`}>
              <div className="role-header">
                <h2 className="role-title">{role.title}</h2>
                <span className="role-date">{role.date}</span>
              </div>
              <div className="role-company">{role.company}</div>
              <p className="role-desc">{role.desc}</p>
            </article>
          ))}
        </section>

        <section>
          <div className="section-label">Education</div>
          {education.map((entry) => (
            <article className="edu-entry" key={entry.school}>
              <h2 className="edu-school">{entry.school}</h2>
              <div className="edu-detail">{entry.detail}</div>
            </article>
          ))}
        </section>
      </main>

      <style jsx global>{`
        :root {
          --bg: #0b0b0f;
          --surface: #141419;
          --border: #1e1e26;
          --text: #e2e2e6;
          --text-muted: #8a8a96;
          --accent: #c4915e;
          --accent-dim: rgba(196, 145, 94, 0.12);
          --mono: "Space Mono", monospace;
          --sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          background: var(--bg);
        }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          font-size: 15px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 680px;
          margin: 0 auto;
          padding: 80px 24px 120px;
        }

        header {
          margin-bottom: 64px;
        }

        h1 {
          font-family: var(--mono);
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0;
          margin-bottom: 12px;
        }

        .tagline {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
          max-width: 520px;
          margin-bottom: 20px;
        }

        .links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .links a {
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--accent);
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0;
          padding: 5px 12px;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }

        .links a:hover,
        .links a:focus-visible {
          background: var(--accent-dim);
          border-color: var(--accent);
        }

        section {
          margin-bottom: 56px;
        }

        .section-label {
          border-bottom: 1px solid var(--border);
          color: var(--text-muted);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0;
          margin-bottom: 24px;
          padding-bottom: 8px;
          text-transform: uppercase;
        }

        .project {
          border-bottom: 1px solid var(--border);
          padding: 20px 0;
        }

        .project:last-child {
          border-bottom: none;
        }

        .project-header {
          align-items: baseline;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .project-name {
          color: var(--text);
          font-family: var(--mono);
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0;
        }

        .project-tech {
          color: var(--text-muted);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0;
        }

        .project-desc {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .project-links {
          display: flex;
          gap: 12px;
        }

        .project-links a {
          color: var(--accent);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0;
          text-decoration: none;
        }

        .project-links a:hover,
        .project-links a:focus-visible {
          text-decoration: underline;
        }

        .role {
          border-bottom: 1px solid var(--border);
          padding: 16px 0;
        }

        .role:last-child {
          border-bottom: none;
        }

        .role-header {
          align-items: baseline;
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .role-title {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0;
        }

        .role-date {
          color: var(--text-muted);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0;
        }

        .role-company {
          color: var(--text-muted);
          font-size: 13px;
          margin-bottom: 6px;
        }

        .role-desc {
          color: var(--text-muted);
          font-size: 13px;
          line-height: 1.55;
        }

        .edu-entry {
          margin-bottom: 16px;
        }

        .edu-entry:last-child {
          margin-bottom: 0;
        }

        .edu-school {
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0;
        }

        .edu-detail {
          color: var(--text-muted);
          font-size: 13px;
        }

        @media (max-width: 520px) {
          .container {
            padding: 48px 20px 80px;
          }

          h1 {
            font-size: 22px;
          }

          .project-header,
          .role-header {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
