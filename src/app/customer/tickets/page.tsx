"use client";

import Header from "@/components/Title/Header";
import React, { useState } from "react";
import { Table, Select, Button } from "antd";
import type { ColumnsType } from "antd/es/table";

// Define the data type for the table
interface Ticket {
  id: number;
  RequestCode: string;
  title: string;
  status: "Pending" | "Approved" | "Rejected";
  updateAt: string;
  category: {
    name: string;
    color?: string;
  };
  full: string;
}

// Updated mock data with unique RequestCode
const mockData: Ticket[] = [
  {
    id: 1,
    RequestCode: "REQ-001",
    title: "Login Failure Issue",
    status: "Pending",
    updateAt: "2025-02-20 14:30",
    category: { name: "Technical Issue", color: "#FF5733" },
    full: "User unable to log in due to server timeout.",
  },
  {
    id: 2,
    RequestCode: "REQ-002",
    title: "Account Information Update",
    status: "Approved",
    updateAt: "2025-02-21 09:15",
    category: { name: "Account Management", color: "#4287f5" },
    full: "Request to update email and phone number.",
  },
  {
    id: 3,
    RequestCode: "REQ-003",
    title: "Homepage Display Bug",
    status: "Rejected",
    updateAt: "2025-02-22 11:45",
    category: { name: "UI Bug", color: "#28A745" },
    full: "Header misalignment reported on homepage.",
  },
  {
    id: 4,
    RequestCode: "REQ-004",
    title: "Payment Gateway Error",
    status: "Pending",
    updateAt: "2025-02-22 15:00",
    category: { name: "Payment Issue", color: "#FFAA33" },
    full: "Users cannot complete transactions.",
  },
];

const Page: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const columns: ColumnsType<Ticket> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 60,
    },
    {
      title: "Request Code",
      dataIndex: "RequestCode",
      key: "RequestCode",
      width: 100,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 300,
    },

    {
      title: "Services",
      dataIndex: "category",
      key: "category",
      width: 150,
      render: (category) => (
        <div
          style={{
            backgroundColor: category.color || "#142857",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "4px",
          }}
        >
          {category.name}
        </div>
      ),
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 150,
      render: (status) => (
        <div
          style={{
            backgroundColor:
              status === "Pending"
                ? "#FFD700"
                : status === "Approved"
                ? "#28A745"
                : "#FF3333",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          {status}
        </div>
      ),
    },
    {
      title: "Last Updated",
      dataIndex: "updateAt",
      key: "updateAt",
      width: 150,
    },
  ];

  // Filter data based on status
  const filteredData = filterStatus
    ? mockData.filter((ticket) => ticket.status === filterStatus)
    : mockData;

  return (
    <div>
      <Header title="Support List Request" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
          padding: "0 16px",
        }}
      >
        {/* Status Filter */}
        <Select
          placeholder="Filter by Status"
          style={{ width: 200 }}
          onChange={(value) => setFilterStatus(value)}
          allowClear
          options={[
            { value: null, label: "All" },
            { value: "Pending", label: "Pending" },
            { value: "Approved", label: "Approved" },
            { value: "Rejected", label: "Rejected" },
          ]}
        />
        {/* Create Ticket Button */}
        <Button type="primary" onClick={() => alert("Create Ticket clicked!")}>
          Create Ticket
        </Button>
      </div>
      <div className="overflow-auto" style={{ maxHeight: "800px" }}>
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={false}
          scroll={{ y: 500 }}
        />
      </div>
    </div>
  );
};

export default Page;
