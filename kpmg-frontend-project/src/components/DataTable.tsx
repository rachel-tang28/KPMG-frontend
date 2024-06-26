import React from "react";
import { data } from "../data";

const DataTable = ({ data }: { data: any }) => {
  return (
    <>
      <table className="table table-bordered table-striped-columns">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Role</th>
            <th>Division</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => {
            return (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.role}</td>
                <td>{item.division}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
