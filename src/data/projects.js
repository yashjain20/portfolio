export const projects = [
  {
    id: 'audio-accessible',
    title: 'Digital Audio Archive Processing System',
    subtitle: 'NYU Capstone Project | New York Public Library',
    logoText: 'DE',
    challenge: 'The New York Public Library held thousands of hours of historical audio recordings with no transcripts, no metadata, and no way to search them. Finding anything meant manually listening through hours of audio, which was not feasible at scale.',
    role: 'Technical lead on a 3-person team. I designed the pipeline architecture, selected the processing stack, and built the end-to-end workflow from ingestion through storage.',
    whatIBuilt: [
      'Multi-stage ETL pipeline in Python and Apache Spark to ingest and process large-scale digital audio archives',
      'Apache Airflow orchestration with intermediate staging in MongoDB for audit, recovery, and reproducibility',
      'Containerized deployment with Docker and infrastructure provisioned through Terraform'
    ],
    impact: 'Processed 500+ hours of audio with a 5x speedup over the baseline approach and reduced manual effort by 95%. Researchers can now search and discover content in minutes instead of hours.',
    timeline: '4 months (Sep 2025 to Dec 2025)',
    technologies: ['Python', 'Apache Spark', 'Apache Airflow', 'MongoDB', 'Docker', 'Terraform'],
    whatILearned: 'Working with a real institutional partner taught me how to scope technical work around what actually needs to ship. The library needed something reliable and maintainable, not the latest tooling for its own sake. I got better at making architectural trade-offs and explaining them to non-technical stakeholders.'
  },
  {
    id: 'startup-analytics-pipeline',
    title: 'Startup Analytics Data Pipeline',
    subtitle: 'NYU Stern School of Business',
    logoText: 'DE',
    challenge: 'Raw Crunchbase data on startup funding outcomes was messy, inconsistent, and not ready for analysis. The goal was to build a pipeline that could reliably prepare this data for downstream analytics and modeling.',
    role: 'Solo project. I designed the ingestion and transformation workflow, handled data quality, and set up the analytical layer from the ground up.',
    whatIBuilt: [
      'SQL and Python transformation workflows to normalize schemas, handle missing data, and prepare 54,000+ records for analytics, with curated datasets staged in Snowflake',
      'Event-driven ingestion using Apache Kafka and modular transformations with dbt, enforcing data quality checks and schema consistency for analytical consumers'
    ],
    impact: 'Produced clean, analytics-ready datasets with consistent schemas and validated quality. The pipeline could be rerun reliably as new data arrived, making the downstream analysis fully reproducible.',
    timeline: '12 weeks',
    technologies: ['Python', 'SQL', 'Apache Kafka', 'dbt', 'Snowflake', 'Pandas'],
    whatILearned: 'Building for analytical consumers changed how I think about data contracts and schema design. Enforcing quality upstream is what keeps downstream models and dashboards from inheriting bad data.'
  }
]
