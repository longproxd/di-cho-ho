import styled from 'styled-components'
import { useTable, usePagination, useRowSelect, useSortBy } from 'react-table'
import React, { useState, useEffect } from "react"
import axios from 'axios'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 2px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
        const defaultRef = React.useRef()
        const resolvedRef = ref || defaultRef

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate])

        return (
            <>
                <input type="checkbox" ref={resolvedRef} {...rest} />
            </>
        )
    }
)

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        selectedFlatRows,
        state: { pageIndex, pageSize, selectedRowIds },
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
        usePagination,
        useRowSelect,
        hooks => {
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',

                    Header: ({ getToggleAllPageRowsSelectedProps }) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
                        </div>
                    ),

                    Cell: ({ row }) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        }
    )

    return (
        <>
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            pageIndex,
                            pageSize,
                            pageCount,
                            canNextPage,
                            canPreviousPage,
                        },
                        null,
                        2
                    )}
                </code>
            </pre>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <pre>
                    <code>
                        {JSON.stringify(
                            {
                                selectedRowIds: selectedRowIds,
                                'selectedFlatRows[].original': selectedFlatRows.map(
                                    d => d.original
                                ),
                            },
                            null,
                            2
                        )}
                    </code>
                </pre>
            </div>
        </>
    )
}

export default function Test3() {
    const url = 'https://localhost:8001/api/doitac';
    const [DoiTac, setDoiTac] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res);
                setDoiTac(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: 'Bảng Đối Tác',
                columns: [
                    {
                        Header: 'Mã đối tác',
                        accessor: 'Id',
                    },
                    {
                        Header: 'Tên đối tác',
                        accessor: 'ten_doi_tac',
                    },
                    {
                        Header: 'Số điện thoại',
                        accessor: 'sdt',
                    },
                    {
                        Header: 'Công chứng công dân',
                        accessor: 'cccd',
                    },
                    {
                        Header: 'Loại đối tác',
                        accessor: 'loai_doi_tac',
                    },
                    {
                        Header: 'Ngày tham gia',
                        accessor: 'ngay_tham_gia',
                    },
                    {
                        Header: 'Số lượng cửa hàng',
                        accessor: 'so_luong_cua_hang',
                    },
                    {
                        Header: 'Địa chỉ',
                        accessor: 'dia_chi',
                    },
                    {
                        Header: 'Trạng thái',
                        accessor: 'trang_thai',
                    },
                ],
            }
        ],
        []
    )

    return (
        <Styles>
            <Table columns={columns} data={DoiTac} />
        </Styles>
    )
}