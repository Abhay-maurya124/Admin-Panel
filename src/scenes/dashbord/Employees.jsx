import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const header = [
  { key: "Employee", label: "Employee" },
  { key: "Designation", label: "Designation" },
  { key: "Country", label: "Country" },
  { key: "avatar", label: "Avatar" },
  { key: "hireDate", label: "Hire Date" },
  { key: "ReportTo", label: "Reports To" },
];

const data = [
  { Employee: "John Smith", Designation: "Software Engineer", Country: "USA", hireDate: "2020-01-15", ReportTo: "Sarah Johnson" },
  { Employee: "Sarah Johnson", Designation: "Finance Manager", Country: "USA", hireDate: "2019-08-10", ReportTo: "Michael Williams" },
  { Employee: "Michael Williams", Designation: "Engineering Lead", Country: "USA", hireDate: "2021-03-22", ReportTo: "Emily Brown" },
  { Employee: "Emily Brown", Designation: "Sales Executive", Country: "USA", hireDate: "2022-05-18", ReportTo: "David Jones" },
  { Employee: "David Jones", Designation: "Marketing Specialist", Country: "USA", hireDate: "2018-12-01", ReportTo: "Olivia Davis" },
  { Employee: "Olivia Davis", Designation: "HR Coordinator", Country: "USA", hireDate: "2023-02-10", ReportTo: "James Wilson" },
  { Employee: "James Wilson", Designation: "IT Manager", Country: "USA", hireDate: "2017-07-15", ReportTo: "Sophia Anderson" },
  { Employee: "Sophia Anderson", Designation: "Customer Service Rep", Country: "USA", hireDate: "2019-10-30", ReportTo: "Liam Miller" },
  { Employee: "Liam Miller", Designation: "Product Manager", Country: "USA", hireDate: "2020-11-05", ReportTo: "Emma Taylor" },
  { Employee: "Emma Taylor", Designation: "Quality Analyst", Country: "USA", hireDate: "2022-04-02", ReportTo: "Robert Johnson" },
  { Employee: "Robert Johnson", Designation: "Sales Analyst", Country: "USA", hireDate: "2020-06-15", ReportTo: "Mia Moore" },
  { Employee: "Mia Moore", Designation: "Operations Coordinator", Country: "USA", hireDate: "2019-05-10", ReportTo: "William Clark" },
  { Employee: "William Clark", Designation: "Finance Executive", Country: "USA", hireDate: "2022-09-12", ReportTo: "Charlotte Anderson" },
  { Employee: "Charlotte Anderson", Designation: "HR Specialist", Country: "USA", hireDate: "2019-11-28", ReportTo: "Daniel Davis" },
  { Employee: "Daniel Davis", Designation: "Project Manager", Country: "USA", hireDate: "2020-08-03", ReportTo: "Sophia Turner" },
  { Employee: "Sophia Turner", Designation: "Business Analyst", Country: "USA", hireDate: "2018-10-15", ReportTo: "Matthew Parker" },
  { Employee: "Matthew Parker", Designation: "IT Analyst", Country: "USA", hireDate: "2022-02-20", ReportTo: "Ava Williams" },
  { Employee: "Ava Williams", Designation: "Project Coordinator", Country: "USA", hireDate: "2021-04-10", ReportTo: "John Smith" },
  { Employee: "Ethan Clark", Designation: "Data Scientist", Country: "UK", hireDate: "2021-07-01", ReportTo: "Olivia Davis" },
  { Employee: "Priya Singh", Designation: "UX Designer", Country: "India", hireDate: "2022-11-10", ReportTo: "Sarah Johnson" }
];


const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = data.filter((row) =>
    [row.Employee, row.Designation, row.Country]
      .some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="overflow-x-auto">
      <div className="text-2xl p-5">
        page/
        <NavLink to="/employees" className="cursor-pointer text-4xl">
          Employees
        </NavLink>
      </div>

      <div className="mb-4 px-4">
        <input
          id="search"
          type="text"
          placeholder="Search…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>

      <table className="min-w-full">
        <thead>
          <tr className="bg-amber-400">
            {header.map((col) => (
              <td
                key={col.key}
                className="px-4 py-2 text-left font-semibold border"
              >
                {col.label}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {filtered.map((row, rowIndex) => {
            const image = `https://i.pravatar.cc/150?img=${rowIndex}`

            return (
              <tr
                key={row.Employee ?? rowIndex}
                className="hover:bg-gray-300"
              >
                {header.map((col) => (
                  <td
                    key={col.key}
                    className="px-4 py-2 border-gray-300 border"
                  >
                    {col.key === "avatar" ? (
                      <img
                        src={image}
                        alt={`Avatar of ${row.Employee}`}
                        className="w-18 h-18 rounded-full"
                      />
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            );
          })}

          {filtered.length === 0 && (
            <tr>
              <td colSpan={header.length} className="text-center py-4">
                No employees found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
