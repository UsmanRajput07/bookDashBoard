import { DataTable } from "./tableLayut/data-table";
import { columns, Payment } from "./tableLayut/column";
import { useState, useEffect } from "react";

const getData = async (): Promise<Payment[]> => {
  return new Array(50).fill(null).map(() => ({
    id: Math.random() * 10000,
    amount: Math.random() * 1000,
    status: "pending",
    email: "jhon@gmail.com",
  }));
};

export default function Books() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}