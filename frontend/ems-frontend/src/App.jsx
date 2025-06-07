import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

 const apiUrl = "http://localhost:8081/api/students";


  const fetchStudents = () => {
    axios.get(apiUrl)
      .then(res => setStudents(res.data))
      .catch(err => console.error("Error fetching:", err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSubmit = () => {
    if (!name.trim()) {
      setMessage(" Please enter a name.");
      return;
    }

    const newStudent = { name };

    if (editingId) {
      axios.put(`${apiUrl}/${editingId}`, newStudent).then(() => {
        setMessage(" Student updated!");
        setEditingId(null);
        setName('');
        fetchStudents();
      });
    } else {
      axios.post(apiUrl, newStudent).then(() => {
        setMessage(" Student added!");
        setName('');
        fetchStudents();
      });
    }
  };

  const handleDelete = (id) => {
    axios.delete(`${apiUrl}/${id}`).then(() => {
      setMessage(" Student deleted.");
      fetchStudents();
    });
  };

  const handleEdit = (student) => {
    setName(student.name);
    setEditingId(student.id);
    setMessage('');
  };

  return (
    <div className="page">
      <div className="container">
        <h1>🎓 Student Manager</h1>

        {message && <div className="message">{message}</div>}

        <div className="form">
          <input
            placeholder="Enter student name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button onClick={handleSubmit}>
            {editingId ? "Update" : "Add"}
          </button>
        </div>
  
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(s)}>✏️</button>
                  <button className="delete" onClick={() => handleDelete(s.id)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
