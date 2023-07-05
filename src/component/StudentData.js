import styles from './StudentData.module.css';
import { useState } from "react";



export default function StudentData() {

  const intialState = {
        studentName: "",
        email: "",
        mobileNumber: "",
        gender: ""
    };

  const studentDataFromLS = JSON.parse(localStorage.getItem("studentDetails")) || [];
  const [studentInfo, setstudentInfo] = useState(intialState);

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setstudentInfo({ ...studentInfo, [name]: value });
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "studentDetails",
      JSON.stringify([...studentDataFromLS, studentInfo])
    );
    setstudentInfo(intialState);
  };
  return (
    <div className={styles.studentData}>
     <h1>Student's Detail</h1>
      <form onSubmit={handelFormSubmit}>
        <input
          type="text"
          name="studentName"
          placeholder="Enter Your Name"
          value={studentInfo.studentName}
          onChange={handelInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter Your Email"
          value={studentInfo.email}
          onChange={handelInputChange}
        />
        <input
          type="text"
          name="mobileNumber"
          placeholder="Enter Your Mobile Number"
          value={studentInfo.mobileNumber}
          onChange={handelInputChange}
        />
        <select
          name="gender"
          onChange={handelInputChange}
          value={studentInfo.gender}
        >
          <option>Select Your Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        
        <input type="submit" value="Register" />
      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {studentDataFromLS.map((studentDetails, index) => (
              <tr key={index}>
                <td>{studentDetails.studentName}</td>
                <td>{studentDetails.email}</td>
                <td>{studentDetails.gender}</td>
                <td>{studentDetails.mobileNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
