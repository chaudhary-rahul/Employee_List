import React, { useState } from "react";
import './crud.css'
export default function Crud() {
  const [myname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);
  const [search,setSearch] = useState('')

  const addEmp = (e) => {
    e.preventDefault();
    const user = {
        myname,
      email,
    };
    if (edit) {
      let copy = users;
      Object.assign(copy[active], user);
      setUsers([...copy]);
      setEdit(false);
      setActive(null);
    } else {
      setUsers([...users, user]);
    }
    setName("");
    setEmail("");
  };

  const handleDelete = (index) => {
    const newusers = [...users];
    newusers.splice(index, 1);
    setUsers(newusers);
  };
  const handleEdit = (index) => {
    const user = users[index];
    setName(user.myname);
    setEmail(user.email);
    setEdit(true);
    setActive(index);
  };
  

  return (
    <div className="container">
      <form onSubmit={addEmp}>
        <div
          className="container mt-5"
          
        >
          <h2>list Of Employees</h2>
          <input
            className="form form-control mt-4 "
            placeholder="name"
            name="names"
            value={myname}
            onChange={(e) => setName(e.target.value)}
          
          />
          <input
            className="form form-control mt-4 "
            placeholder="email"
            
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary mt-3 ">
            {edit ? "Update" : "Add"}
          </button>
        </div>
      </form>

      <div >
        <table className="table table-bordered mt-5">
          <thead className="m-auto">
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr>
                  <td>{item.myname}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="btn bg-warning "
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn bg-danger text-white"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}
