import React from 'react';

const fakeOrder = (count) => {
  const items = ['t-shirt', 'jeans', 'shirt', 'trouser', 'mountains', 'river'];
  const statuses = ['pending', 'successfull', 'rejected', 'on-way'];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/50/50?random=${i}`,
    item: items[Math.floor(Math.random() * items.length)],
    amount: `$${(Math.random() * 100).toFixed(2)} `,
    status: statuses[Math.floor(Math.random() * statuses.length)],
    Orderid: `ORD-${1000 + i}`,
  }));
};

const Header = [{
  head: [
    { key: "id", label: "Id" },
    { key: "image", label: "Image" },
    { key: "item", label: "Item" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "Orderid", label: "Order ID" }
  ]
}];


const Order = () => {
  const data = fakeOrder(50);

  return (
    <div style={{ padding: '20px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            {Header[0].head.map((data, index) => (
              <th key={index} style={{ padding: '12px', textAlign: 'left', borderBottom: '1px solid #ddd' }}>
                {data.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className='border-b-2 border-gray-200'>
              {Header[0].head.map((column) => (
                <td key={column.key} style={{ padding: '12px' }}>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
