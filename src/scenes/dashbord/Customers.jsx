import React, { useState } from "react";
import Pagination from "../global/Pagination";
import { NavLink } from "react-router-dom";

const headers = [
  { key: "image", label: "Contact" },
  { key: "name", label: "Name" },
  { key: "project", label: "Project" },
  { key: "status", label: "Status" },
  { key: "weeks", label: "Weeks" },
  { key: "budget", label: "Budget" },
  { key: "location", label: "Location" },
];

const statuses = ["Pending", "In Progress", "Completed", "Denied"];

const Customer = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Customer${i + 1}`,
  email: `abhay${i + 1}@gmail.com`,
  status: statuses[Math.floor(Math.random() * statuses.length)],
  project: `Project ${i + 1}`,
  location: `City ${i + 1}`,
  weeks: `${Math.floor(Math.random() * 10) + 1} weeks`,
  image: `https://i.pravatar.cc/150?img=${i + 1}`,
  budget: `$${Math.floor(Math.random() * 230) + 30}k`,
}));

export default function Customers() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [search, setSearch] = useState("");

  const filtered = Customer.filter((row) =>
    headers.some((col) =>
      (row[col.key] ?? "")
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase())
    )
  );
  const firstIndex = (page - 1) * perPage;
  const current = filtered.slice(firstIndex, firstIndex + perPage);

  const STATUS_CLASSES = {
    Pending: "text-orange-800",
    "In Progress": "text-yellow-800",
    Completed: "text-green-800",
    Denied: "text-red-800",
  };

  return (
    <div className="p-2">
      <div className="flex flex-col items-center mb-4">
        <p className="text-gray-400">Page</p>
        <NavLink to="/customer" className="text-2xl font-semibold">
          Customers
        </NavLink>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded w-full max-w-xs p-2"
        />
      </div>

      <table className="min-w-full bg-white">
        <thead className="hidden sm:table-header-group bg-gray-100">
          <tr>
            {headers.map((col) => (
              <th
                key={col.key}
                className="px-2 py-3 text-left text-sm font-semibold"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block sm:table-row-group">
          {current.map((row) => (
            <tr
              key={row.id}
              className="block sm:table-row mb-4 sm:mb-0 bg-gray-50 sm:bg-transparent"
            >
              {headers.map((col) => (
                <td
                  key={col.key}
                  data-label={col.label}
                  className={`block sm:table-cell px-2 py-2 text-sm truncate ${
                    col.key === "status" ? STATUS_CLASSES[row.status] : ""
                  }`}
                >
                  {col.key === "image" ? (
                    <div className="flex items-center">
                      <img
                        src={row.image}
                        alt={row.name}
                        className="h-10 w-10 rounded-full mr-2"
                      />
                      <div className="sm:hidden">
                        <p className="font-medium">{row.name}</p>
                        <p className="text-xs text-gray-500">{row.email}</p>
                      </div>
                      <div className="hidden sm:block">{row.name}</div>
                    </div>
                  ) : (
                    <span>{row[col.key]}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <Pagination
          totalItems={filtered.length}
          itemsPerPage={perPage}
          currentPage={page}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
