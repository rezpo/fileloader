import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { Buffer } from "buffer";
import { usePapaParse } from "react-papaparse";

export default function Grid() {
  const base64 = useState(localStorage.getItem("sheet") ?? [])[0];
  const { readString } = usePapaParse();
  const [data, setData] = useState([]);

  useEffect(() => {
    const buffer = Buffer.from(base64, "base64").toString();

    readString(buffer, {
      header: true,
      worker: true,
      complete: (results) => {
        let dataList = [];
        results.data.forEach((item, index) => {
          dataList.push({ ...item, id: index });
        });

        setData(dataList);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    { field: "Total", headerName: "Total", width: 90 },
    {
      field: "Name",
      headerName: "Product Name",
      flex: 1,
      editable: false,
      sortable: false,
    },
    {
      field: "SKU",
      headerName: "SKU/Code",
      flex: 1,
      editable: false,
      sortable: false,
    },
  ];

  return (
    <>
      {base64.length ? (
        <Box className="datagrid__wrapper">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      ) : (
        <Box>
          <Typography variant="h4" align="center">
            😞 Well, there's nothing here...
          </Typography>
        </Box>
      )}
    </>
  );
}
