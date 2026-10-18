export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div>
        <h3>VibeCheck</h3>
        <p>
          A VS Code extension that scans AI-generated apps for security flaws and suggests fixes.
          I'm fine-tuning the model that writes the fixes, using DPO and QLoRA.
        </p>
        <p>Tech: Python, PyTorch, HuggingFace, Opengrep, TruffleHog</p>
        <a href="https://github.com/aisutd/vibecheck" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>

      <div>
        <h3>Closet Sensei</h3>
        <p>
          A mobile app that builds outfits using computer vision clothing classification and live
          weather data. I designed the DynamoDB schemas for a team of 7.
        </p>
        <p>Tech: React Native, AWS Lambda, DynamoDB, ResNet50</p>
      </div>

      <div>
        <h3>Movie Recommendation System</h3>
        <p>
          Collaborative filtering across 1M+ ratings, deployed as a Streamlit app with filters
          and a watchlist.
        </p>
        <p>Tech: Python, Pandas, NumPy, Streamlit, OMDb API</p>
      </div>

      <div>
        <h3>Customer Behavior Analyzer</h3>
        <p>
          Retail analytics pipeline over 1.07M transactions, using K-Means to segment customers
          (silhouette score 0.58).
        </p>
        <p>Tech: Python, scikit-learn, PCA, Matplotlib</p>
      </div>

      <div>
        <h3>Climate Risk Intelligence Platform</h3>
        <p>
          A Climate Credit Score index built for FinHack UTD, with Gemini AI generating
          portfolio hedging recommendations.
        </p>
        <p>Tech: Python, Gemini API</p>
      </div>
    </section>
  );
}