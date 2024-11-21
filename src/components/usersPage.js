import { useState, useEffect } from "react";
import { getUsers } from "../api/usersApi";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
        setErrors([]);
      } catch (err) {
        setErrors(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {/*Display Errors if Present*/}
      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li className="error-message" key={index}>
              {error.message}
            </li>
          ))}
        </ul>
      )}
      {/*Display Users if Found*/}
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => {
            <li key={index}>{user.name}</li>;
          })}
        </ul>
      ) : (
        <p className="error-message">No users found</p>
      )}
    </div>
  );
}

export default usersPage;
