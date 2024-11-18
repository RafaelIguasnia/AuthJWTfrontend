import React, { useState, useEffect } from 'react';
import axios from '../api';

const EmployeeList = ({ token }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/empleados', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployees(response.data);
      } catch (err) {
        console.error('Error al obtener empleados:', err);
      }
    };

    fetchEmployees();
  }, [token]);

  return (
    <div>
      <h1>Lista de Empleados</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
