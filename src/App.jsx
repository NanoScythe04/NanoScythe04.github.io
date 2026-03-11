import React, { useEffect, useMemo, useState } from "react";

const weeklyData = [2, 3, 1, 4, 3, 5, 2];
const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function StatCard({ title, value, subtitle }) {
  return (
    <div className="card">
      <p className="card-label">{title}</p>
      <h3 className="card-value">{value}</h3>
      <p className="card-sub">{subtitle}</p>
    </div>
  );
}

function BarChart() {
  const max = Math.max(...weeklyData);

  return (
    <div className="chart-wrap">
      {weeklyData.map((value, index) => (
        <div key={dayLabels[index]} className="bar-column">
          <div
            className="bar"
            style={{ height: `${(value / max) * 140}px` }}
          ></div>
          <span className="bar-label">{dayLabels[index]}</span>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [showReminder, setShowReminder] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          setShowReminder(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");
  const progress = useMemo(() => ((25 * 60 - secondsLeft) / (25 * 60)) * 100, [secondsLeft]);

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(25 * 60);
  };

  return (
    <div className="page">
      <div className="app-shell">
        <aside className="sidebar">
          <h1 className="logo">Study Companion</h1>
          <button className={`nav-button ${screen === "home" ? "active" : ""}`} onClick={() => setScreen("home")}>Home Dashboard</button>
          <button className={`nav-button ${screen === "timer" ? "active" : ""}`} onClick={() => setScreen("timer")}>Study Timer</button>
          <button className={`nav-button ${screen === "pomodoro" ? "active" : ""}`} onClick={() => setScreen("pomodoro")}>Pomodoro Session</button>
          <button className={`nav-button ${screen === "stats" ? "active" : ""}`} onClick={() => setScreen("stats")}>Statistics</button>
        </aside>

        <main className="main">
          {screen === "home" && (
            <div>
              <div className="hero">
                <div>
                  <p className="small-text">Study Overview</p>
                  <h2 className="title">Welcome back</h2>
                  <p className="subtitle">Track your study time, stay focused, and build a daily streak.</p>
                </div>
                <button className="primary-button" onClick={() => setScreen("timer")}>
                  Start Studying
                </button>
              </div>

              <div className="grid">
                <StatCard title="Total study hours" value="42h" subtitle="This month" />
                <StatCard title="Sessions completed" value="18" subtitle="Great consistency" />
                <StatCard title="Daily streak" value="6 days" subtitle="Keep it going" />
                <StatCard title="Break frequency" value="Every 25 min" subtitle="Healthy pacing" />
              </div>
            </div>
          )}

          {screen === "timer" && (
            <div className="section-card">
              <p className="small-text">Study Timer Screen</p>
              <h2 className="title">Focus Timer</h2>
              <div className="timer-circle">
                <div>
                  <div className="timer-text">{minutes}:{seconds}</div>
                  <div className="timer-sub">Time left</div>
                </div>
              </div>

              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>

              <div className="row">
                <button className="primary-button" onClick={() => setIsRunning(true)}>Start</button>
                <button className="secondary-button" onClick={() => setIsRunning(false)}>Pause</button>
                <button className="secondary-button" onClick={resetTimer}>Reset</button>
              </div>
            </div>
          )}

          {screen === "pomodoro" && (
            <div className="section-card">
              <p className="small-text">Pomodoro Session Screen</p>
              <h2 className="title">Current Session</h2>
              <div className="pomodoro-box">
                <div className="phase-card">
                  <h3 className="phase-title">Study</h3>
                  <p className="phase-time">25 min</p>
                </div>
                <div className="phase-card">
                  <h3 className="phase-title">Short Break</h3>
                  <p className="phase-time">5 min</p>
                </div>
                <div className="phase-card">
                  <h3 className="phase-title">Long Break</h3>
                  <p className="phase-time">15 min</p>
                </div>
              </div>
              <button className="primary-button" onClick={() => setShowReminder(true)}>
                Show Reminder Pop-up
              </button>
            </div>
          )}

          {screen === "stats" && (
            <div>
              <div className="hero">
                <div>
                  <p className="small-text">Statistics Dashboard</p>
                  <h2 className="title">Weekly Progress</h2>
                  <p className="subtitle">A simple overview of your study performance.</p>
                </div>
              </div>

              <div className="grid">
                <StatCard title="Total study hours" value="42h" subtitle="All tracked sessions" />
                <StatCard title="Sessions completed" value="18" subtitle="Finished focus blocks" />
                <StatCard title="Daily streak" value="6 days" subtitle="Current streak" />
                <StatCard title="Break frequency" value="8" subtitle="Breaks this week" />
              </div>

              <div className="section-card mt-20">
                <h3 className="chart-title">Weekly progress chart</h3>
                <BarChart />
              </div>
            </div>
          )}
        </main>
      </div>

      {showReminder && (
        <div className="overlay">
          <div className="modal">
            <p className="small-text">Reminder Pop-up</p>
            <h3 className="modal-title">Time for a short break</h3>
            <p className="subtitle">You finished a study block. Stretch, drink water, and rest for 5 minutes.</p>
            <div className="row">
              <button className="primary-button" onClick={() => setShowReminder(false)}>
                Okay
              </button>
              <button
                className="secondary-button"
                onClick={() => {
                  setShowReminder(false);
                  resetTimer();
                  setScreen("timer");
                }}
              >
                Start Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
