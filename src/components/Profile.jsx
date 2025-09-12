import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t } = useTranslation();

  const data = useMemo(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    const role = user?.role;
    const username = user?.username || '';

    const classes = JSON.parse(localStorage.getItem('teacherClasses') || '[]');
    const studentClassMap = JSON.parse(localStorage.getItem('studentClass') || '{}');
    const classId = studentClassMap[username];
    const currentClass = classes.find((c) => c.id === classId);

    const enrollmentsAll = JSON.parse(localStorage.getItem('nv_enrollments') || '{}');
    const enrollments = enrollmentsAll[username] || {};
    const enrolledCourseIds = Object.keys(enrollments).filter((k) => enrollments[k]);

    const progress = JSON.parse(localStorage.getItem('nv_progress') || '{}');
    const myProgress = progress || {};
    const finishedCourses = enrolledCourseIds.filter((cid) => {
      const cm = myProgress[cid]?.completedModules || {};
      const moduleKeys = Object.keys(cm);
      if (!moduleKeys.length) return false;
      return moduleKeys.every((k) => {
        const m = cm[k] || {};
        return m.text && m.quiz && m.video;
      });
    });

    // compute percent per enrolled course (rough estimate)
    const courseSummaries = enrolledCourseIds.map((cid) => {
      const cm = myProgress[cid]?.completedModules || {};
      const moduleKeys = Object.keys(cm);
      const total = Math.max(moduleKeys.length, 1);
      const completed = moduleKeys.filter((k) => {
        const m = cm[k] || {};
        return m.text && m.quiz && m.video;
      }).length;
      const pct = Math.round((completed / total) * 100);
      return { id: cid, percent: isFinite(pct) ? pct : 0 };
    });

    // teacher stats
    const teacherStats = role === 'teacher' ? {
      classCount: classes.length,
      studentCount: classes.reduce((s, c) => s + (c.students?.length || 0), 0)
    } : null;

    return {
      user, role, username,
      classId, className: currentClass?.name || null,
      enrolledCount: enrolledCourseIds.length,
      finishedCount: finishedCourses.length,
      courseSummaries,
      teacherStats
    };
  }, []);

  if (!data?.user) {
    return (
      <div className="min-h-screen flex items-center justify-center">{t('profile.noSession')}</div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-14 w-14 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
            {data.username.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-indigo-800">{data.username}</h1>
            <div className="text-sm text-gray-600">{t('profile.roleLabel')}: {data.role}</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {data.role === 'student' && (
            <div className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100">
              <div className="text-xs text-gray-500 mb-1">{t('profile.classLabel')}</div>
              <div className="text-gray-900 font-semibold">{data.className || '—'}</div>
            </div>
          )}
          <div className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100">
            <div className="text-xs text-gray-500 mb-1">{t('profile.totalEnrolled')}</div>
            <div className="text-indigo-700 text-2xl font-bold">{data.enrolledCount}</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100">
            <div className="text-xs text-gray-500 mb-1">{t('profile.totalFinished')}</div>
            <div className="text-indigo-700 text-2xl font-bold">{data.finishedCount}</div>
          </div>
          {data.teacherStats && (
            <>
              <div className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100">
                <div className="text-xs text-gray-500 mb-1">{t('profile.classCount')}</div>
                <div className="text-indigo-700 text-2xl font-bold">{data.teacherStats.classCount}</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow ring-1 ring-indigo-100">
                <div className="text-xs text-gray-500 mb-1">{t('profile.studentCount')}</div>
                <div className="text-indigo-700 text-2xl font-bold">{data.teacherStats.studentCount}</div>
              </div>
            </>
          )}
        </div>

        {/* Role-specific content */}
        {data.role === 'student' ? (
          /* Student Enrollments list */
          <div className="bg-white rounded-2xl p-6 shadow ring-1 ring-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{t('profile.myLessons')}</h2>
              <Link to="/lessons" className="text-indigo-700 text-sm hover:underline">{t('profile.goToLessons')} →</Link>
            </div>
            {data.courseSummaries.length === 0 ? (
              <div className="text-sm text-gray-600">{t('profile.noneEnrolled')}</div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {data.courseSummaries.map((c) => (
                  <div key={c.id} className="border rounded-xl p-4">
                    <div className="font-medium text-gray-900 mb-2">{c.id.toUpperCase()}</div>
                    <div className="w-full bg-gray-100 rounded h-2 overflow-hidden">
                      <div className="h-2 bg-indigo-600" style={{ width: `${c.percent}%` }}></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">{t('profile.percentComplete', { percent: c.percent })}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Teacher Classes Overview */
          <div className="space-y-6">
            {/* Classes Management */}
            <div className="bg-white rounded-2xl p-6 shadow ring-1 ring-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">{t('profile.myClasses')}</h2>
                <Link to="/manage-classes" className="text-indigo-700 text-sm hover:underline">{t('profile.manageClasses')} →</Link>
              </div>
              {(() => {
                const classes = JSON.parse(localStorage.getItem('teacherClasses') || '[]');
                const teacherClasses = classes.filter(c => c.teacherId === data.username);
                return teacherClasses.length === 0 ? (
                  <div className="text-sm text-gray-600">{t('profile.noClasses')}</div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {teacherClasses.map((cls) => (
                      <div key={cls.id} className="border rounded-xl p-4">
                        <div className="font-medium text-gray-900 mb-2">{cls.name}</div>
                        <div className="text-sm text-gray-600 mb-2">Code: {cls.code}</div>
                        <div className="text-sm text-indigo-700">{cls.students?.length || 0} students</div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow ring-1 ring-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('profile.recentActivity')}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">{t('profile.pendingRequests')}</span>
                  <span className="text-sm font-medium text-indigo-700">
                    {(() => {
                      const requests = JSON.parse(localStorage.getItem('classJoinRequests') || '{}');
                      return Object.values(requests).flat().filter(r => r.status === 'pending').length;
                    })()}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">{t('profile.totalStudents')}</span>
                  <span className="text-sm font-medium text-indigo-700">{data.teacherStats?.studentCount || 0}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-600">{t('profile.activeClasses')}</span>
                  <span className="text-sm font-medium text-indigo-700">{data.teacherStats?.classCount || 0}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


