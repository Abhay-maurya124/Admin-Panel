import { CheckCheckIcon } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const header = [
  { key: "image", label: "Contact" },      // ✅ New column for image + name/email
  { key: "name", label: "Name" },
  { key: "project", label: "Project" },
  { key: "status", label: "Status" },
  { key: "Weeks", label: "Weeks" },
  { key: "budget", label: "Budget" },
  { key: "location", label: "Location" },
]

const statuses = ["Pending", "In Progress", "Completed", "denied"]

const Customer = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Customer${i + 1} `,
  email: `abhay@${i + 1}Gmail.com`,
  status: statuses[Math.floor(Math.random() * statuses.length)],
  project: `Project ${i + 1}`,
  location: `City ${i + 1}`,
  Weeks: `${Math.floor(Math.random() * 10) + 1} weeks`,
  image: `https://i.pravatar.cc/1500?img=${i + 1}`,
  budget: `$${Math.floor(Math.random() * 230) + 30}k`,
}))

const Customers = () => {

  const [search, setsearch] = useState('')

  const filtered = Customer.filter((row) => [
    row.name, row.location, row.project, row.status,row.Weeks,row.email].some((feild) =>
      feild.toLowerCase().includes(search.toLowerCase())
    )
  )
  // Add mapping at top
  const STATUS_TEXT_CLASSES = {
    "Pending": "text-orange-800",
    "In Progress": "text-yellow-800",
    "Completed": "text-green-800",
    "denied": "text-red-800",
  };

  const setstatus = (status) => STATUS_TEXT_CLASSES[status] || "";



  return (
    <div>
      <div className="text-2xl p-5">
        page/
        <NavLink to="/customer" className="cursor-pointer text-4xl">
          Customer
        </NavLink>
      </div>

      <div className="mb-4 px-4">
        <input
          id="search"
          type="text"
          placeholder="Search…"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>

      <table className="w-full">
        <thead className="min-w-full">
          <tr>
            {header.map((column) => (
              <td
                key={column.key}
                className="px-4 py-2 text-lg font-semibold border text-center"
              >
                {column.label}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {filtered.map((row) => (
            <tr
              key={row.id}
              className={``} >
              {header.map((column) => (
                <td
                  key={column.key}
                  className={`px-4 py‑2 text-sm font-semibold border 
                  text-center ${column.key === 'status' ? setstatus(row.status) : ''}`}
                >
                  {column.key === "image" ? (
                    <div className="text-center flex gap-2 p-1 justify-center items-center text-sm">
                      <img
                        src={row.image}
                        alt={row.name}
                        className="h-15 w-15 rounded-full"
                      />
                      <div>
                        <p>{row.name}</p>
                        <p>{row.email}</p>
                      </div>
                    </div>
                  ) : (
                    row[column.key] ?? "—"
                  )}
                </td>
              ))

              }
            </tr>
          )
          )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Customers
