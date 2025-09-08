import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ManageClasses() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [classes, setClasses] = useState(() => {
    const savedClasses = localStorage.getItem('teacherClasses');
    return savedClasses ? JSON.parse(savedClasses) : [
      {
        id: 'classA',
        name: 'Computer Science 101',
        description: 'Introduction to programming concepts',
        students: [
          { id: 'alice', name: 'Alice Johnson', email: 'alice@student.com', status: 'active' },
          { id: 'bob', name: 'Bob Smith', email: 'bob@student.com', status: 'active' },
          { id: 'charlie', name: 'Charlie Brown', email: 'charlie@student.com', status: 'active' },
          { id: 'diana', name: 'Diana Prince', email: 'diana@student.com', status: 'active' },
          { id: 'edward', name: 'Edward Norton', email: 'edward@student.com', status: 'active' },
          { id: 'fiona', name: 'Fiona Gallagher', email: 'fiona@student.com', status: 'active' },
          { id: 'george', name: 'George Washington', email: 'george@student.com', status: 'inactive' },
          { id: 'hannah', name: 'Hannah Montana', email: 'hannah@student.com', status: 'active' },
          { id: 'ian', name: 'Ian McKellen', email: 'ian@student.com', status: 'inactive' },
          { id: 'julia', name: 'Julia Roberts', email: 'julia@student.com', status: 'active' },
          { id: 'kevin', name: 'Kevin Hart', email: 'kevin@student.com', status: 'active' },
          { id: 'lisa', name: 'Lisa Simpson', email: 'lisa@student.com', status: 'inactive' }
        ]
      },
      {
        id: 'classB',
        name: 'Advanced Programming',
        description: 'Advanced programming techniques and algorithms',
        students: [
          { id: 'alice', name: 'Alice Johnson', email: 'alice@student.com', status: 'active' },
          { id: 'bob', name: 'Bob Smith', email: 'bob@student.com', status: 'active' },
          { id: 'charlie', name: 'Charlie Brown', email: 'charlie@student.com', status: 'active' },
          { id: 'diana', name: 'Diana Prince', email: 'diana@student.com', status: 'active' },
          { id: 'edward', name: 'Edward Norton', email: 'edward@student.com', status: 'active' },
          { id: 'fiona', name: 'Fiona Gallagher', email: 'fiona@student.com', status: 'active' },
          { id: 'george', name: 'George Washington', email: 'george@student.com', status: 'inactive' },
          { id: 'hannah', name: 'Hannah Montana', email: 'hannah@student.com', status: 'active' },
          { id: 'ian', name: 'Ian McKellen', email: 'ian@student.com', status: 'inactive' },
          { id: 'julia', name: 'Julia Roberts', email: 'julia@student.com', status: 'active' },
          { id: 'kevin', name: 'Kevin Hart', email: 'kevin@student.com', status: 'active' },
          { id: 'lisa', name: 'Lisa Simpson', email: 'lisa@student.com', status: 'inactive' }
        ]
      }
    ];
  });

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showEditClassForm, setShowEditClassForm] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [newClass, setNewClass] = useState({ name: '', description: '' });
  const [newStudent, setNewStudent] = useState({ name: '', email: '' });
  const [editClassData, setEditClassData] = useState({ name: '', description: '' });

  // Save classes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('teacherClasses', JSON.stringify(classes));
  }, [classes]);

  // Auto-open edit modal if editClassId is provided via URL
  useEffect(() => {
    const editId = searchParams.get('editClassId');
    if (editId) {
      const cls = classes.find(c => c.id === editId);
      if (cls) {
        setSelectedClass(cls);
        setEditClassData({ name: cls.name, description: cls.description });
        setShowEditClassForm(true);
      }
    }
  }, [searchParams, classes]);

  const handleCreateClass = (e) => {
    e.preventDefault();
    const classId = 'class' + Date.now();
    const newClassData = {
      id: classId,
      name: newClass.name,
      description: newClass.description,
      students: []
    };
    setClasses([...classes, newClassData]);
    setNewClass({ name: '', description: '' });
    setShowCreateForm(false);
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const studentId = 'student' + Date.now();
    const studentData = {
      id: studentId,
      name: newStudent.name,
      email: newStudent.email,
      status: 'active'
    };
    
    const updatedClasses = classes.map(cls => {
      if (cls.id === selectedClass.id) {
        return {
          ...cls,
          students: [...cls.students, studentData]
        };
      }
      return cls;
    });
    
    setClasses(updatedClasses);
    setNewStudent({ name: '', email: '' });
    setShowAddStudentForm(false);
    setSelectedClass(null);
  };

  const handleEditClass = (e) => {
    e.preventDefault();
    const updatedClasses = classes.map(cls => {
      if (cls.id === selectedClass.id) {
        return {
          ...cls,
          name: editClassData.name,
          description: editClassData.description
        };
      }
      return cls;
    });
    
    setClasses(updatedClasses);
    setShowEditClassForm(false);
    setSelectedClass(null);
    setEditClassData({ name: '', description: '' });
  };

  const openEditClass = (cls) => {
    setSelectedClass(cls);
    setEditClassData({ name: cls.name, description: cls.description });
    setShowEditClassForm(true);
  };

  const removeStudent = (classId, studentId) => {
    const updatedClasses = classes.map(cls => {
      if (cls.id === classId) {
        return {
          ...cls,
          students: cls.students.filter(student => student.id !== studentId)
        };
      }
      return cls;
    });
    setClasses(updatedClasses);
  };

  const toggleStudentStatus = (classId, studentId) => {
    const updatedClasses = classes.map(cls => {
      if (cls.id === classId) {
        return {
          ...cls,
          students: cls.students.map(student => {
            if (student.id === studentId) {
              return {
                ...student,
                status: student.status === 'active' ? 'inactive' : 'active'
              };
            }
            return student;
          })
        };
      }
      return cls;
    });
    setClasses(updatedClasses);
  };

  const getStudentAvatar = (studentId) => {
    return `https://randomuser.me/api/portraits/${studentId.length % 2 === 0 ? 'women' : 'men'}/${(studentId.charCodeAt(0) % 50) + 1}.jpg`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('manage.header')}</h1>
          <p className="text-gray-600 mt-2">{t('manage.subheader')}</p>
        </div>

        {/* Create Class Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            + {t('manage.createNewClass')}
          </button>
        </div>

        {/* Create Class Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">{t('manage.createNewClass')}</h2>
              <form onSubmit={handleCreateClass}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('manage.className')}
                  </label>
                  <input
                    type="text"
                    value={newClass.name}
                    onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('manage.description')}
                  </label>
                  <textarea
                    value={newClass.description}
                    onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="3"
                    required
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    {t('manage.createClass')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    {t('lessons.cancel')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-white rounded-lg shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{cls.name}</h3>
                    <p className="text-gray-600 mt-1">{cls.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {cls.students.length} {t('reports.studentsCount')}
                  </span>
                </div>

                {/* Students List */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium text-gray-900">{t('reports.students')}</h4>
                    <button
                      onClick={() => {
                        setSelectedClass(cls);
                        setShowAddStudentForm(true);
                      }}
                      className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                    >
                      + {t('manage.addStudent')}
                    </button>
                  </div>
                  
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {cls.students.map((student) => (
                      <div key={student.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${student.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{student.name}</p>
                            <p className="text-xs text-gray-500">{student.email}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => toggleStudentStatus(cls.id, student.id)}
                            className={`text-xs px-2 py-1 rounded ${
                              student.status === 'active' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {student.status === 'active' ? t('reports.active') : t('reports.inactive')}
                          </button>
                          <button
                            onClick={() => removeStudent(cls.id, student.id)}
                            className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200"
                          >
                            {t('manage.remove')}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Class Actions */}
                <div className="flex space-x-3">
                  <button 
                    onClick={() => navigate(`/reports?classId=${cls.id}`)}
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-sm"
                  >
                    {t('manage.viewReports')}
                  </button>
                  <button 
                    onClick={() => openEditClass(cls)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors text-sm"
                  >
                    {t('manage.editClass')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Student Modal */}
        {showAddStudentForm && selectedClass && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">
                {t('manage.addStudentTo', { name: selectedClass.name })}
              </h2>
              <form onSubmit={handleAddStudent}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('manage.studentName')}
                  </label>
                  <input
                    type="text"
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('manage.email')}
                  </label>
                  <input
                    type="email"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    {t('manage.addStudent')}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddStudentForm(false);
                      setSelectedClass(null);
                    }}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    {t('lessons.cancel')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Class Modal */}
        {showEditClassForm && selectedClass && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">{t('manage.editClassWithName', { name: selectedClass.name })}</h2>
              
              {/* Class Details Form */}
              <form onSubmit={handleEditClass} className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('manage.className')}
                    </label>
                    <input
                      type="text"
                      value={editClassData.name}
                      onChange={(e) => setEditClassData({ ...editClassData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('manage.description')}
                    </label>
                    <textarea
                      value={editClassData.description}
                      onChange={(e) => setEditClassData({ ...editClassData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      rows="3"
                      required
                    />
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    {t('manage.saveChanges')}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowEditClassForm(false);
                      setSelectedClass(null);
                      setEditClassData({ name: '', description: '' });
                    }}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    {t('lessons.cancel')}
                  </button>
                </div>
              </form>

              {/* Students Management */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{t('manage.manageStudents')}</h3>
                  <button
                    onClick={() => {
                      setShowEditClassForm(false);
                      setShowAddStudentForm(true);
                    }}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm"
                  >
                    + {t('manage.addNewStudent')}
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedClass.students.map((student) => (
                    <div key={student.id} className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
                      <img 
                        src={getStudentAvatar(student.id)} 
                        alt={student.name} 
                        className="w-12 h-12 rounded-full border-2 border-indigo-100"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{student.name}</h4>
                        <p className="text-sm text-gray-500">{student.email}</p>
                        <div className="flex items-center mt-1">
                          <span className={`w-2 h-2 rounded-full mr-2 ${student.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                          <span className="text-xs text-gray-600">{student.status}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <button
                          onClick={() => toggleStudentStatus(selectedClass.id, student.id)}
                          className={`text-xs px-2 py-1 rounded ${
                            student.status === 'active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {student.status === 'active' ? t('reports.active') : t('reports.inactive')}
                        </button>
                        <button
                          onClick={() => removeStudent(selectedClass.id, student.id)}
                          className="text-xs px-2 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200"
                        >
                          {t('manage.delete')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageClasses; 