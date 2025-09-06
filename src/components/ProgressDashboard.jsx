import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  ArcElement,
  BarElement,
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
  BarElement
);

function ProgressDashboard({ courses }) {
  const { t } = useTranslation();
  const [weeklyProgress, setWeeklyProgress] = useState([]);
  const [timeSpentData, setTimeSpentData] = useState([]);
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    // Calculate overall progress
    const totalProgress = courses.reduce((sum, course) => sum + course.progress, 0);
    const averageProgress = Math.round(totalProgress / courses.length);
    setOverallProgress(averageProgress);

    // Generate weekly progress data (last 7 days)
    const weekDays = t('dashboard.weekDays');
    const weeklyData = weekDays.map((day, index) => ({
      day,
      progress: Math.max(0, Math.min(100, averageProgress + (index * 3) + Math.floor(Math.random() * 10) - 5))
    }));
    setWeeklyProgress(weeklyData);

    // Generate time spent data
    const timeData = courses.map(course => ({
      name: course.title.split(' ').slice(-1)[0], // Get last word of title
      time: parseInt(course.timeSpent.split('h')[0]) * 60 + parseInt(course.timeSpent.split(' ')[1]?.split('m')[0] || 0)
    }));
    setTimeSpentData(timeData);
  }, [courses]);

  const weeklyChartData = {
    labels: weeklyProgress.map(d => d.day),
    datasets: [{
      label: t('dashboard.weeklyProgress'),
      data: weeklyProgress.map(d => d.progress),
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: 'rgb(99, 102, 241)',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
    }]
  };

  const timeSpentChartData = {
    labels: timeSpentData.map(d => d.name),
    datasets: [{
      label: t('dashboard.timeSpentMinutes'),
      data: timeSpentData.map(d => d.time),
      backgroundColor: [
        'rgba(99, 102, 241, 0.8)',
        'rgba(34, 197, 94, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(168, 85, 247, 0.8)',
      ],
      borderColor: [
        'rgb(99, 102, 241)',
        'rgb(34, 197, 94)',
        'rgb(245, 158, 11)',
        'rgb(239, 68, 68)',
        'rgb(168, 85, 247)',
      ],
      borderWidth: 2,
      borderRadius: 8,
    }]
  };

  const overallProgressData = {
    labels: ['Completed', 'Remaining'],
    datasets: [{
      data: [overallProgress, 100 - overallProgress],
      backgroundColor: [
        overallProgress >= 80 ? 'rgb(34, 197, 94)' : 
        overallProgress >= 60 ? 'rgb(59, 130, 246)' : 
        overallProgress >= 40 ? 'rgb(245, 158, 11)' : 'rgb(239, 68, 68)',
        '#f3f4f6'
      ],
      borderWidth: 0,
      cutout: '70%',
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        color: '#374151',
        font: { size: 16, weight: 'bold' }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderWidth: 1,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: {
          color: '#6b7280',
          callback: function(value) { return value + '%'; }
        }
      },
      x: {
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: { color: '#6b7280' }
      }
    },
    interaction: { intersect: false, mode: 'index' }
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: t('dashboard.timeSpentPerCourse'),
        color: '#374151',
        font: { size: 16, weight: 'bold' }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            const minutes = context.parsed.y;
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return t('dashboard.timeLabel', { h: hours, m: mins });
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: {
          color: '#6b7280',
          callback: function(value) {
            const hours = Math.floor(value / 60);
            const mins = value % 60;
            return `${hours}h ${mins}m`;
          }
        }
      },
      x: {
        grid: { color: 'rgba(0, 0, 0, 0.1)' },
        ticks: { color: '#6b7280' }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
      }
    },
    elements: {
      arc: {
        borderWidth: 0,
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Progress Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="h-64">
            <Line 
              data={weeklyChartData} 
              options={{...chartOptions, plugins: {...chartOptions.plugins, title: {...chartOptions.plugins.title, text: t('dashboard.weeklyProgressTrend')}}}} 
            />
          </div>
        </div>

        {/* Time Spent Chart */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="h-64">
            <Bar data={timeSpentChartData} options={barChartOptions} />
          </div>
        </div>

        {/* Overall Progress Doughnut */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">{t('dashboard.progressOverview')}</h3>
          <div className="relative h-64 flex items-center justify-center">
            <Doughnut data={overallProgressData} options={doughnutOptions} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">{overallProgress}%</div>
                <div className="text-sm text-gray-500">{t('dashboard.complete')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Progress Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('dashboard.courseProgressSummary')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div key={course.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800 truncate">{course.title}</h4>
                <span className="text-sm font-bold text-indigo-700">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${course.progress}%`,
                    background: course.progress >= 80 ? 'linear-gradient(90deg, #22c55e 0%, #34d399 100%)' :
                               course.progress >= 60 ? 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)' :
                               course.progress >= 40 ? 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)' :
                               'linear-gradient(90deg, #ef4444 0%, #f87171 100%)'
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{course.completedModules}/{course.totalModules} {t('dashboard.modulesShort')}</span>
                <span>{course.timeSpent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressDashboard; 