import React, { useState } from 'react';

const fakeOrder = (count) => {
  const items = ['t-shirt', 'jeans', 'shirt', 'trouser', 'mountains', 'river'];
  const statuses = ['pending', 'successfull', 'rejected', 'on-way'];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/50/50?random=${i}`,
    item: items[Math.floor(Math.random() * items.length)],
    amount: `$${(Math.random() * 100).toFixed(2)}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    Orderid: `ORD-${1000 + i}`,
  }));
};

const Header = [
  {
    head: [
      { key: 'id', label: 'Id' },
      { key: 'image', label: 'Image' },
      { key: 'item', label: 'Item' },
      { key: 'amount', label: 'Amount' },
      { key: 'status', label: 'Status' },
      { key: 'Orderid', label: 'Order ID' },
    ],
  },
];

const Order = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const data = fakeOrder(50);

  // Filter based on search
  const filtered = data.filter((row) =>
    [row.item, row.Orderid, row.status].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination calculations
  const totalPages = Math.ceil(filtered.length / pageSize);
  const pagedData = filtered.slice(
    pageIndex * pageSize,
    pageIndex * pageSize + pageSize
  );

  // Colorization logic
  const getRowClass = (status) => {
    if (status === 'rejected') return 'text-red-500';
    if (status === 'successfull') return 'text-green-500';
    if (status === 'pending') return 'text-orange-500';
    if (status === 'on-way') return 'font-bold';
    return 'text-black';
  };

  return (
    <div style={{ padding: '20px' }}>
      <div className="flex gap-4 mb-4 text-xl">
        <input
          type="text"
          placeholder="Search by item, Order ID, or status"
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setPageIndex(0); }}
          className="border rounded-xl text-lg p-1 flex-grow"
        />
      </div>

      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-gray-100">
            {Header[0].head.map((col) => (
              <th key={col.key} className="p-2 text-left border-b border-gray-300">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pagedData.length > 0 ? (
            pagedData.map((row) => (
              <tr
                key={row.id}
                className={`border-b-2 border-gray-200   text-xl hover:bg-gray-200 ${getRowClass(
                  row.status
                )}`}
              >
                {Header[0].head.map((column) => (
                  <td key={column.key} className="p-3">
                    {column.key === 'image' ? (
                      <img
                        src={row[column.key]}
                        alt={row.item}
                        style={{ width: '50px', borderRadius: '4px' }}
                      />
                    ) : (
                      row[column.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={Header[0].head.length} className="text-center p-2 text-lg">
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <button onClick={() => setPageIndex(0)} disabled={pageIndex === 0}>
            {'<<'}
          </button>
          <button onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex === 0}>
            {'<'}
          </button>
          <span>
            Page {pageIndex + 1} of {totalPages}
          </span>
          <button
            onClick={() => setPageIndex(pageIndex + 1)}
            disabled={pageIndex + 1 >= totalPages}
          >
            {'>'}
          </button>
          <button
            onClick={() => setPageIndex(totalPages - 1)}
            disabled={pageIndex + 1 >= totalPages}
          >
            {'>>'}
          </button>
        </div>

        <div>
          <label>
            Show{' '}
            <select
              value={pageSize}
              onChange={(e) => { setPageSize(+e.target.value); setPageIndex(0); }}
              className="border rounded p-1"
            >
              {[5, 10, 20].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>{' '}
            per page
          </label>
        </div>
      </div>
    </div>
  );
};

export default Order;
