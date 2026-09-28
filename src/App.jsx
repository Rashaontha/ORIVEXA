import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [stage, setStage] = useState("idle");

  const startScan = () => {
    setStage("scanning");
  };

  useEffect(() => {
    if (stage !== "scanning") return;

    const timer = setTimeout(() => {
      setStage("analysis");
    }, 2500);

    return () => clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (stage !== "analysis") return;

    const timer = setTimeout(() => {
      setStage("result");
    }, 2500);

    return () => clearTimeout(timer);
  }, [stage]);

  const reset = () => {
    setStage("idle");
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">O</div>
          <span>ORIVEXA</span>
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          Verification Engine Online
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="main">

        {/* ================= IDLE / HOME ================= */}
        {stage === "idle" && (
          <section className="hero">

            <div className="badge">
              <span>⚡</span>
              Zero-Install Device Verification
            </div>

            <h1>
              Know What You're
              <span> Really Buying.</span>
            </h1>

            <p className="subtitle">
              Verify used phones, vehicles and devices in seconds.
              Detect hardware risks, validate identifiers and generate
              a trusted digital passport.
            </p>

            <div className="actions">
              <button
                className="primary-button"
                onClick={startScan}
              >
                Start Verification →
              </button>

              <button
                className="secondary-button"
                onClick={() => setStage("how")}
              >
                See How It Works
              </button>
            </div>

            <div className="trust-row">
              <div>
                <strong>3 sec</strong>
                <span>Verification</span>
              </div>

              <div>
                <strong>0</strong>
                <span>App Installs</span>
              </div>

              <div>
                <strong>1</strong>
                <span>Digital Passport</span>
              </div>
            </div>

          </section>
        )}

        {/* ================= HOW IT WORKS ================= */}
        {stage === "how" && (
          <section className="page-section">

            <div className="badge">
              <span>⚡</span>
              HOW ORIVEXA WORKS
            </div>

            <h1>
              Verification in
              <span> three simple steps.</span>
            </h1>

            <p className="subtitle">
              ORIVEXA uses available browser and device signals to
              demonstrate a zero-install verification workflow.
            </p>

            <div className="steps">

              <div className="step-card">
                <div className="step-number">01</div>
                <div className="step-icon">⌁</div>
                <h3>Scan Device</h3>
                <p>
                  ORIVEXA checks available device and browser
                  capabilities without requiring an app installation.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">02</div>
                <div className="step-icon">◈</div>
                <h3>Analyze Signals</h3>
                <p>
                  Collected signals are organized into hardware,
                  identifier and risk verification checks.
                </p>
              </div>

              <div className="step-card">
                <div className="step-number">03</div>
                <div className="step-icon">✓</div>
                <h3>Generate Passport</h3>
                <p>
                  A digital verification record summarizes the
                  verification outcome and device trust profile.
                </p>
              </div>

            </div>

            <div className="actions">
              <button
                className="primary-button"
                onClick={startScan}
              >
                Start Verification →
              </button>

              <button
                className="secondary-button"
                onClick={reset}
              >
                ← Back Home
              </button>
            </div>

          </section>
        )}

        {/* ================= SCANNING ================= */}
        {stage === "scanning" && (
          <section className="page-section scan-screen">

            <div className="scan-orb">
              ◉
            </div>

            <div className="badge">
              LIVE DEVICE SCAN
            </div>

            <h1>
              Scanning
              <span> your device...</span>
            </h1>

            <p className="subtitle">
              ORIVEXA is collecting available device signals
              and running verification checks.
            </p>

            <div className="scan-progress">
              <div className="scan-progress-bar"></div>
            </div>

            <div className="check-list">

              <div className="check-item">
                <span className="check-active">✓</span>
                Browser capabilities
              </div>

              <div className="check-item">
                <span className="check-active">✓</span>
                Display characteristics
              </div>

              <div className="check-item">
                <span className="check-loading">◌</span>
                Hardware signals
              </div>

              <div className="check-item">
                <span className="check-loading">◌</span>
                Risk analysis
              </div>

            </div>

          </section>
        )}

        {/* ================= ANALYSIS ================= */}
        {stage === "analysis" && (
          <section className="page-section scan-screen">

            <div className="scan-orb analysis-orb">
              ◈
            </div>

            <div className="badge">
              ANALYZING
            </div>

            <h1>
              Building your
              <span> device profile.</span>
            </h1>

            <p className="subtitle">
              Comparing collected signals against ORIVEXA's
              verification rules.
            </p>

            <div className="check-list">

              <div className="check-item">
                <span className="check-active">✓</span>
                Device fingerprint created
              </div>

              <div className="check-item">
                <span className="check-active">✓</span>
                Hardware signals normalized
              </div>

              <div className="check-item">
                <span className="check-active">✓</span>
                Risk indicators evaluated
              </div>

              <div className="check-item">
                <span className="check-loading">◌</span>
                Generating verification passport
              </div>

            </div>

          </section>
        )}

        {/* ================= RESULT ================= */}
        {stage === "result" && (
          <section className="page-section result-screen">

            <div className="badge success-badge">
              ✓ VERIFICATION COMPLETE
            </div>

            <h1>
              Device
              <span> Verified.</span>
            </h1>

            <p className="subtitle">
              ORIVEXA completed the verification process and
              generated a device trust profile.
            </p>

            <div className="result-card">

              <div className="score">
                <div className="score-number">87</div>
                <div className="score-label">
                  TRUST SCORE
                </div>
              </div>

              <div className="result-details">

                <div className="result-row">
                  <span>Device status</span>
                  <strong className="good">
                    VERIFIED
                  </strong>
                </div>

                <div className="result-row">
                  <span>Hardware checks</span>
                  <strong>
                    6 / 6
                  </strong>
                </div>

                <div className="result-row">
                  <span>Risk indicators</span>
                  <strong className="good">
                    LOW
                  </strong>
                </div>

                <div className="result-row">
                  <span>Passport ID</span>
                  <strong>
                    OX-7F29-A31
                  </strong>
                </div>

              </div>

            </div>

            <div className="actions">

              <button
                className="primary-button"
                onClick={reset}
              >
                Verify Another Device
              </button>

              <button
                className="secondary-button"
                onClick={() => setStage("passport")}
              >
                View Digital Passport
              </button>

            </div>

          </section>
        )}

        {/* ================= DIGITAL PASSPORT ================= */}
        {stage === "passport" && (
          <section className="page-section passport-screen">

            <div className="badge success-badge">
              ✓ DIGITAL PASSPORT
            </div>

            <h1>
              Device
              <span> Trust Passport.</span>
            </h1>

            <p className="subtitle">
              A shareable verification record generated by
              the ORIVEXA Verification Engine.
            </p>

            <div className="passport-card">

              <div className="passport-header">
                <div>
                  <div className="passport-label">
                    ORIVEXA
                  </div>

                  <h2>
                    Device Trust Passport
                  </h2>
                </div>

                <div className="passport-status">
                  VERIFIED
                </div>
              </div>

              <div className="passport-id">
                <span>Passport ID</span>
                <strong>OX-7F29-A31</strong>
              </div>

              <div className="passport-grid">

                <div className="passport-item">
                  <span>Trust Score</span>
                  <strong>87 / 100</strong>
                </div>

                <div className="passport-item">
                  <span>Risk Level</span>
                  <strong className="good">
                    LOW
                  </strong>
                </div>

                <div className="passport-item">
                  <span>Hardware Checks</span>
                  <strong>6 / 6</strong>
                </div>

                <div className="passport-item">
                  <span>Identifier Status</span>
                  <strong className="good">
                    VALID
                  </strong>
                </div>

                <div className="passport-item">
                  <span>Verification Status</span>
                  <strong className="good">
                    COMPLETE
                  </strong>
                </div>

                <div className="passport-item">
                  <span>Verification Method</span>
                  <strong>
                    ZERO-INSTALL
                  </strong>
                </div>

              </div>

              <div className="passport-divider"></div>

              <h3 className="passport-check-title">
                Verification Checks
              </h3>

              <div className="passport-checks">

                <div>✓ Browser capabilities</div>
                <div>✓ Display characteristics</div>
                <div>✓ Hardware signals</div>
                <div>✓ Identifier validation</div>
                <div>✓ Risk analysis</div>
                <div>✓ Device trust profile</div>

              </div>

              <div className="passport-footer">
                <span>
                  Generated by ORIVEXA Verification Engine
                </span>

                <strong>
                  VERIFIED
                </strong>
              </div>

            </div>

            <div className="actions">

              <button
                className="primary-button"
                onClick={reset}
              >
                Verify Another Device
              </button>

              <button
                className="secondary-button"
                onClick={() => setStage("result")}
              >
                ← Back to Results
              </button>

            </div>

          </section>
        )}

      </main>

      {/* FEATURES */}
      <section className="features">

        <div className="feature">
          <div className="feature-icon">⌁</div>
          <h3>Hardware Scan</h3>
          <p>
            Check available device and display capabilities.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">✓</div>
          <h3>Identifier Validation</h3>
          <p>
            Validate available device identifiers.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">◈</div>
          <h3>Risk Prediction</h3>
          <p>
            Analyze signals for potential hardware risk.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">▣</div>
          <h3>Digital Passport</h3>
          <p>
            Generate a shareable verification record.
          </p>
        </div>

      </section>

    </div>
  );
}

export default App;