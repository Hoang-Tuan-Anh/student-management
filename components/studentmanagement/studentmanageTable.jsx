import React, { useState } from 'react';
import { useTable } from 'react-table';
import Table from '../Table';
import Popup from 'reactjs-popup';
import { useMemo, useEffect } from 'react';
import { studentmanageColumns } from './studentmanageColumns';

export default function StudentmanageTable() {
  const [studentData, setHSData] = useState([]);

  useEffect(() => {
    fetch('api/dbhocsinh').then(async (res) => {
      let data = await res.json();
      data.map((item, index) => {
        item.index = index + 1;
      });
      console.log(data);
      setHSData(data);
    });

    console.log(studentData);
  }, []);

  const data = useMemo(() => studentData);
  const columns = useMemo(() => studentmanageColumns);

  const tableInstance = useTable({ data, columns });

  return <Table tableInstance={tableInstance} />;
}

{
  /* <Modal data={row.original} updateData={setData} />  */
}
