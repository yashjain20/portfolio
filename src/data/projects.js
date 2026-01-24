export const projects = [
  {
    id: 'audio-accessible',
    title: 'Making 10,000 Hours of Audio Accessible',
    subtitle: 'NYU Capstone Project | New York Public Library',
    logoText: 'AI',
    challenge: 'The New York Public Library held thousands of hours of historical audio: interviews, lectures, performances. But they were essentially unusable. No transcripts. No search. If you didn\'t know exactly what minute of which recording contained what you needed, you\'d never find it.',
    role: 'I was the technical lead on a 3-person team. I designed the ML pipeline architecture, integrated Faster-Whisper for transcription and Qwen2 LLM for summarization, and built the data processing workflow.',
    whatIBuilt: [
      'Processes audio files and generates accurate transcriptions',
      'Uses LLM-based summarization to create searchable content',
      'Enables keyword search across the entire archive'
    ],
    impact: 'Researchers and educators can now discover content in minutes that would have taken hours of manual listening. A historian searching for mentions of a specific event can query the system and get timestamped results instantly.',
    timeline: '4 months (Sept 2025 – Dec 2025)',
    technologies: ['Python', 'Faster-Whisper', 'Qwen2 LLM', 'Natural Language Processing'],
    whatILearned: 'Working with real institutional constraints taught me how to balance technical ambition with practical deliverables. The library needed something that worked reliably, not something that was technically perfect. I learned to prioritize robustness over sophistication and how to communicate technical trade-offs to non-technical stakeholders.'
  },
  {
    id: 'startup-success-prediction',
    title: 'Predicting Startup Success: Which Signals Actually Matter?',
    subtitle: 'NYU Stern School of Business',
    logoText: 'ML',
    challenge: 'Venture investors evaluate hundreds of startups. Which early-stage signals actually predict funding success? Is it team size? Funding velocity? Market timing?',
    role: 'This was a solo project. I sourced and cleaned Crunchbase records, engineered features, built classification models, and interpreted results for business strategy implications.',
    whatIBuilt: [
      'XGBoost and Random Forest models to predict funding outcomes',
      'Feature engineering around team composition, capital efficiency, market conditions',
      'Analysis showing which metrics had predictive power versus noise'
    ],
    impact: 'Key finding: Funding velocity and team composition were stronger predictors than market size. I identified non-obvious patterns that could inform investor screening processes.',
    timeline: '12 weeks',
    technologies: ['Python', 'XGBoost', 'Random Forest', 'Pandas', 'Scikit-learn', 'Matplotlib'],
    whatILearned: 'The technical work like model tuning and hyperparameter optimization was only half the challenge. The real value came from translating model outputs into actionable business insights. I learned how to communicate statistical findings to non-technical audiences and frame recommendations in terms of business strategy, not just model performance.',
    ifIDidThisAgain: 'I\'d incorporate survival analysis to better capture the time-to-funding dimension. I\'d also test ensemble methods combining deep learning with traditional ML to capture more complex interaction effects.'
  }
]
