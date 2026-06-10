export const experiences = [
  {
    id: 'pixis-intern',
    title: 'Data Engineer Intern',
    company: 'Pixis.ai',
    location: 'New York, NY',
    period: 'May 2025 – Aug 2025',
    problem: 'Analytics workflows were largely manual, data quality was inconsistent, and teams were making decisions based on week-old data.',
    whatIDid: [
      'Architected batch ETL pipelines in Python to ingest lead data from external REST APIs, standardize schemas, and load into Redshift, cutting manual data processing by 75%',
      'Built dimensional data models and optimized SQL query patterns in Redshift, improving analytical query performance by 40% for marketing analytics workloads',
      'Implemented an automated data quality framework covering null validation, format checks, deduplication, and anomaly detection, improving data accuracy by 20% and saving 15 hours per week of manual reconciliation'
    ],
    impact: 'Product and growth teams went from working with stale, unreliable data to having fresh, validated data they could act on. Analytics stopped being the bottleneck for decision-making.',
    teamSize: '2-person data engineering team, collaborating with product and growth',
    tools: ['Python', 'SQL', 'AWS S3', 'AWS Redshift', 'Apache Airflow', 'dbt']
  },
  {
    id: 'trewinia-engineer',
    title: 'Software Engineer',
    company: 'Trewinia Infotech',
    location: 'India',
    period: 'Nov 2022 – Jul 2024',
    problem: 'A growing startup needed reliable data infrastructure to support business intelligence across sales, marketing, and operations.',
    whatIDid: [
      'Engineered production ETL pipelines using AWS Glue and Lambda to ingest operational data into PostgreSQL, processing over 1 million records daily with automated retries and error handling',
      'Designed star schema warehouse tables and tuned SQL queries and indexes, reducing report generation time by 50% for recurring analytical workloads',
      'Built Python-based transformation workflows to aggregate, clean, and model raw data into analysis-ready tables powering 15+ dashboards in Power BI and Tableau'
    ],
    impact: 'Teams could spot bottlenecks in real time instead of waiting on weekly reports. Leadership had a consistent, reliable view of performance across departments.',
    teamSize: '4-person data team',
    tools: ['AWS Glue', 'AWS Lambda', 'PostgreSQL', 'Python', 'SQL', 'Power BI', 'Tableau']
  },
  {
    id: 'tcs-engineer',
    title: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    location: 'India',
    period: 'Feb 2021 – Oct 2022',
    problem: 'Enterprise clients needed production data services that could handle high transaction volumes reliably.',
    whatIDid: [
      'Built data processing services in Java and SQL supporting 50,000+ monthly transactions, with efficient data access patterns and consistent service reliability',
      'Optimized database schemas, SQL queries, and indexing strategies, improving data retrieval performance by 35% for high-traffic application endpoints',
      'Automated CI/CD pipelines using Git, Jenkins, and Python for build, test, and deployment workflows, reducing release cycle time by 10 hours per week'
    ],
    impact: 'Systems handled production load without degradation. Query optimizations directly reduced infrastructure costs and shortened response times for end users.',
    teamSize: '8-person engineering team',
    tools: ['Java', 'SQL', 'PostgreSQL', 'Git', 'Jenkins', 'Python']
  }
]
