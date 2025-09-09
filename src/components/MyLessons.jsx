import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProgressDashboard from './ProgressDashboard.jsx';

function MyLessons() {
  const { t } = useTranslation();
  const [enrolledCourses, setEnrolledCourses] = useState([
    {
      id: 'python',
      title: t('topics.python'),
      progress: 45,
      lastAccessed: '2024-01-14',
      totalModules: 6,
      completedModules: 2,
      timeSpent: '1h 45m',
      nextModule: 'Veri Yapıları',
      status: 'active'
    },
    {
      id: 'web',
      title: t('topics.web'),
      progress: 30,
      lastAccessed: '2024-01-12',
      totalModules: 6,
      completedModules: 1,
      timeSpent: '1h 15m',
      nextModule: 'CSS Giriş',
      status: 'active'
    },
    {
      id: 'js',
      title: t('topics.js'),
      progress: 20,
      lastAccessed: '2024-01-10',
      totalModules: 6,
      completedModules: 1,
      timeSpent: '45m',
      nextModule: 'Değişkenler',
      status: 'active'
    }
  ]);

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, course: t('topics.python'), action: t('myLessons.activity.completion', { num: 3, name: 'Fonksiyonlar' }), time: t('myLessons.activity.timeAgoHours', { count: 2 }), type: 'completion' },
    { id: 2, course: t('topics.web'), action: t('myLessons.activity.start', { num: 3, name: 'CSS Giriş' }), time: t('myLessons.activity.timeAgoDays', { count: 1 }), type: 'start' },
    { id: 3, course: t('topics.js'), action: t('myLessons.activity.quiz', { name: 'Değişkenler ve Veri Tipleri' }), time: t('myLessons.activity.timeAgoDays', { count: 2 }), type: 'quiz' },
    { id: 4, course: t('topics.python'), action: t('myLessons.activity.video', { name: 'Veri Yapıları' }), time: t('myLessons.activity.timeAgoDays', { count: 3 }), type: 'video' }
  ]);

  const [stats, setStats] = useState({
    totalCourses: 3,
    totalTimeSpent: '3h 45m',
    averageProgress: 32,
    completedModules: 4,
    totalModules: 18
  });

  const getActivityIcon = (type) => {
    switch (type) {
      case 'completion':
        return '✅';
      case 'start':
        return '🚀';
      case 'quiz':
        return '📝';
      case 'video':
        return '🎥';
      default:
        return '📚';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'text-green-600';
    if (progress >= 60) return 'text-blue-600';
    if (progress >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('nav.myLessons')}</h1>
          <p className="text-gray-600 mt-2">{t('myLessons.headerSubtitle')}</p>
        </div>

        {/* Progress Dashboard */}
        <div className="mb-8">
          <ProgressDashboard courses={enrolledCourses} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">{t('myLessons.enrolledCourses')}</h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-600">{t('myLessons.next')}: {course.nextModule}</p>
                        </div>
                        <span className="text-sm text-gray-500">{t('myLessons.lastAccess')}: {course.lastAccessed}</span>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>{t('myLessons.progress')}</span>
                          <span className={`font-semibold ${getProgressColor(course.progress)}`}>
                            {course.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${course.progress}%`,
                              background: course.progress >= 80 ? 'linear-gradient(90deg, #10b981 0%, #34d399 100%)' :
                                         course.progress >= 60 ? 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)' :
                                         course.progress >= 40 ? 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)' :
                                         'linear-gradient(90deg, #ef4444 0%, #f87171 100%)'
                            }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <span>{t('myLessons.modulesLabel', { completed: course.completedModules, total: course.totalModules })}</span>
                        <span>{t('myLessons.timeSpent', { time: course.timeSpent })}</span>
                      </div>

                      <div className="flex space-x-3">
                        <Link
                          to={`/lessons/${course.id}`}
                          className="flex-1 bg-indigo-600 text-white text-center py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
                        >
                          {t('myLessons.continueLearning')}
                        </Link>
                        <Link to={`/lessons/${course.id}/details`} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                          {t('myLessons.viewDetails')}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">{t('myLessons.recentActivities')}</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {activity.course}
                        </p>
                        <p className="text-xs text-gray-400">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <Link
                    to="/lessons"
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                  >
                    {t('myLessons.viewAllActivities')} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLessons;
