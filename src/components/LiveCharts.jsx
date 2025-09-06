import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

function LiveCharts({ studentId, isActive = true, eeg, setEEG }) {
  const [eegData, setEegData] = React.useState([]);
  const [timeLabels, setTimeLabels] = React.useState([]);

  // Generate random EEG data (20-100)
  const getRandomEEG = () => Math.max(20, Math.floor(Math.random() * 100));

  // Initialize data
  React.useEffect(() => {
    // Generate initial time labels (last 10 minutes)
    const labels = [];
    for (let i = 9; i >= 0; i--) {
      const time = new Date();
      time.setMinutes(time.getMinutes() - i);
      labels.push(time.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    }
    setTimeLabels(labels);
    // Generate initial data points
    const initialEegData = Array(10).fill(0).map(() => getRandomEEG());
    setEegData(initialEegData);
  }, [studentId]);

  // Update data every 5 seconds if student is active
  React.useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      const newEEG = getRandomEEG();
      setEEG(newEEG);
      setTimeLabels(prev => [...prev.slice(1), new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })]);
      setEegData(prev => [...prev.slice(1), newEEG]);
    }, 5000);
    return () => clearInterval(interval);
  }, [isActive, setEEG]);

  // Keep chart in sync with prop eeg
  React.useEffect(() => {
    setEegData(prev => {
      if (prev.length === 0) return [eeg];
      return [...prev.slice(1), eeg];
    });
  }, [eeg]);

  const eegChartData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'EEG Attention Level',
        data: eegData,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'rgb(99, 102, 241)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      }
    ]
  };

  const eegChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Live EEG Attention Monitoring',
        color: '#374151',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgb(99, 102, 241)',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return `Attention: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#6b7280',
          callback: function(value) {
            return value + '%';
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#6b7280',
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    elements: {
      point: {
        hoverBackgroundColor: 'rgb(99, 102, 241)',
      }
    }
  };

  const getAttentionStatus = (eeg) => {
    if (eeg >= 80) return { text: 'Excellent', color: 'text-green-600', bg: 'bg-green-100' };
    if (eeg >= 60) return { text: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (eeg >= 40) return { text: 'Fair', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { text: 'Low', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const attentionStatus = getAttentionStatus(eeg);

  return (
    <div className="space-y-6">
      {/* Current Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* EEG Status */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">EEG Attention</h3>
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${attentionStatus.bg} ${attentionStatus.color}`}>
              {attentionStatus.text}
            </div>
          </div>
          <div className="text-3xl font-bold text-indigo-700 mb-2">{eeg}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-500"
              style={{
                width: `${eeg}%`,
                background: eeg >= 80 ? 'linear-gradient(90deg, #22c55e 0%, #4ade80 100%)' :
                           eeg >= 60 ? 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)' :
                           eeg >= 40 ? 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)' :
                           'linear-gradient(90deg, #ef4444 0%, #f87171 100%)'
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* EEG Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="h-80">
          <Line data={eegChartData} options={eegChartOptions} />
        </div>
      </div>
      {/* Status Indicator */}
      {!isActive && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Student Inactive
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <p>
                  Charts are showing historical data. Real-time updates will resume when the student becomes active.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveCharts; 