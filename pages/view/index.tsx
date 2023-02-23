// "use client";

import withAuth from "@/src/HOC/withAuth";
import React, { useState } from "react";
import { Pagination, Table, Grid } from "@nextui-org/react";
import { useGetData } from "@/src/hooks/useGetData";

type RowType = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type ResType = {
  total: number;
  limit: number;
  ofsset: number;
  data: RowType[];
};

const columns = [
  {
    key: "id",
    label: "Id",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "phone",
    label: "Phone",
  },
];

const LIMIT = 10;

const ViewPage = () => {
  const [page, setPage] = useState(0);
  const [data] = useGetData(page);

  const handlePageChange = async (page: number) => {
    setPage(page);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>View</h1>
      <Grid.Container justify="center">
        <Pagination
          total={data?.total ? Math.ceil(data?.total / LIMIT) : 0}
          initialPage={1}
          onChange={handlePageChange}
        />
      </Grid.Container>
      <Table
        aria-label="Example table with dynamic content"
        css={{
          height: "auto",
          width: "1000px",
          margin: "auto",
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={data?.data ?? []}>
          {(item: any) => (
            <Table.Row key={item.id}>
              {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default withAuth(ViewPage);
