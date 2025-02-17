import Topbar from '@/components/Topbar';
import StudentmanageTable from '@/components/studentmanagement/studentmanageTable';
import React, { useEffect, useState } from 'react';
import Popup from "reactjs-popup";

const StudentManager = () => {
  const [hocsinh, setHocSinh] = useState([]);

  useEffect(() => {
    fetch('api/dbhocsinh').then(async (res) => {
      let data = await res.json();

      console.log(data);
      setHocSinh(data);
    });
    console.log(hocsinh);
  }, []);

  return (
    <div>
      <Topbar NamePage="Student Management" />
      <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Danh sách học sinh</p>
      <div className="flex justify-center items-center mt-10 px-20">
        <StudentmanageTable />
      </div>
    </div>
  );
};

export default StudentManager;
