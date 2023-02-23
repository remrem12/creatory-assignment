import { fetchApi } from "@/utils/fetchApi";
import { useState, useEffect } from "react";

type RowType = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type ResType = {
  total: number;
  limit: number;
  offset: number;
  data: RowType[];
};

const LIMIT = 10;
export const useGetData = (page = 0): [ResType | undefined] => {
  const [data, setData] = useState<ResType | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchApi(
        `http://localhost:3000/api/view?limit=${LIMIT}&offset=${page * LIMIT}`
      );
      setData(res);
    };
    fetchData();
  }, [page]);

  return [data];
};
