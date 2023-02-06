import React, { useMemo } from "react"
import {
  FaSortDown,
  FaSortUp,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"
import Flex from "./Flex"
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
  ButtonGroup,
  TextField,
  Typography,
} from "@mui/material"

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table"

const DisplayTable = ({ schema, source, title }) => {
  const columns = useMemo(() => schema, [schema])
  const data = useMemo(() => source, [source])

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageOptions,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state,
    setGlobalFilter,
  } = tableInstance
  return (
    <div>
      <Flex justify='between' align='center'>
        <h2>{title}</h2>
        <TextField
          variant='filled'
          placeholder='Search...'
          value={state.globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </Flex>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}
              style={{ background: "#333" }}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <Typography component='h6' style={{ color: "#fff" }}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaSortDown />
                        ) : (
                          <FaSortUp />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page?.map((row, index) => {
            prepareRow(row)
            return (
              <TableRow
                {...row.getRowProps()}
                style={{
                  background: `${index % 2 !== 0 ? "#F2F2F2" : "#fff"}`,
                }}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <div>
        <Flex justify='between'>
          <strong>
            page {state.pageIndex + 1} of {pageOptions.length}
          </strong>
          <Flex justify='end'>
            <ButtonGroup>
              <Button
                disabled={!canPreviousPage}
                onClick={() => previousPage()}>
                <FaChevronLeft />
                &nbsp;Previous
              </Button>
              <Button disabled={!canNextPage} onClick={() => nextPage()}>
                Next&nbsp;
                <FaChevronRight />
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </div>
    </div>
  )
}

DisplayTable.defaultProps = {
  title: "test",
}

export default DisplayTable
