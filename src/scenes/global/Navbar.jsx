import {
  CalendarRange,
  KanbanSquare,
  LineChart,
  ShoppingCart,
  Users,
  User,
  LayoutTemplate,
  AreaChart,
  X,
  GitGraphIcon,
  PieChart,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Dashboard = [
  {
    head: "Dashboard",
    items: [
      {
        icon: <CalendarRange size={18} />,
        label: "Home",
        path: "/",
      },
    ],
  },
  {
    head: "Pages",
    items: [
      {
        icon: <ShoppingCart size={18} />,
        label: "Orders",
        path: "/orders",
      },
      {
        icon: <Users size={18} />,
        label: "Employees",
        path: "/employees",
      },
      {
        icon: <User size={18} />,
        label: "Customers",
        path: "/customers",
      },
    ],
  },
  {
    head: "Apps",
    items: [
      {
        icon: <CalendarRange size={18} />,
        label: "Calendar",
        path: "/calendar",
      },
      {
        icon: <KanbanSquare size={18} />,
        label: "Kanban",
        path: "/kanban",
      },
      {
        icon: <LayoutTemplate size={18} />,
        label: "Editor",
        path: "/editor",
      },
    ],
  },
  {
    head: "Charts",
    items: [
      {
        icon: <LineChart size={18} />,
        label: "Line Chart",
        path: "/line",
      },
      {
        icon: <GitGraphIcon size={18} />,
        label: "Graph",
        path: "/graph",
      },
      {
        icon: <AreaChart size={18} />,
        label: "Area Chart",
        path: "/area",
      },
      {
        icon: <PieChart size={18} />,
        label: "Pi Chart",
        path: "/piechart",
      },
    ],
  },
];

const Navbar = () => { 
  return (
    <div className="w-64 sticky top-0 overflow-y h-screen border-r bg-amber-50 ">
      <div className="flex justify-between p-5 items-center">
        <h3 className="text-2xl font-bold">Admin Panel</h3>
        <button className="p-1 rounded hover:bg-amber-100">
          <X size={20} />
        </button>
      </div>

      <nav className="p-4">
        {Dashboard.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h2 className="text-xs uppercase font-semibold mb-2 text-gray-500">
              {section.head}
            </h2>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-amber-100 text-amber-700"
                          : "text-gray-700 hover:bg-amber-50"
                      }`
                    }
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
