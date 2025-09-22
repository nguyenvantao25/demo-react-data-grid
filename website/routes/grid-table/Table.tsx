import React, { useState } from 'react';
import { css } from '@linaria/core';
import { DataGrid } from '../../../src';
import { convertToTanStackColumns } from './hook/utils';
import type { AnyObject, ColumnsTable, IFormat, IWrapSettings, PaginationConfig } from './type';

// import { DataGrid } from '../../../src';


const transitionClassname = css`
  transition: grid-template-rows 0.5s ease;
`;




interface Props<T = AnyObject> {
  rowHeight?: number
  columns: ColumnsTable<T>
  dataSource: any[]
  direction?: any,
  t?: any,
  format?: IFormat

  wrapSettings?: IWrapSettings

  pagination?: false | PaginationConfig

  infiniteScroll?: boolean
}

const TableGrid = <RecordType extends object>(props: Props<RecordType>) => {

  const {
    t,
    columns,
    dataSource,
    rowHeight,
    direction,
    format,
    pagination,
    ...rest
  } = props
  // const direction = useDirection();
  const [sortColumns, setSortColumns] = useState([]);
  // const [selectedRows, setSelectedRows] = useState<any>([]);

  const [selectedRows, setSelectedRows] = useState((): ReadonlySet<string> => new Set());


    const mergedColumns = React.useMemo(() => {
    return convertToTanStackColumns({ t, columns, format})

  }, [t, columns, format])






  return (
    <>

      <div className='top-toolbar' />

      <DataGrid
        // aria-label="Animation Example"

        {...rest}
        className={`${transitionClassname} fill-grid`}
        columns={mergedColumns as any}
        rows={dataSource}
        rowKeyGetter={(row: any) => {
          return row.id
        }}
        direction={direction}
        rowHeight={rowHeight}
        selectedRows={selectedRows}

        onSelectedRowsChange={setSelectedRows}


        sortColumns={sortColumns}

        onSortColumnsChange={(v: any) => {

          setSortColumns(v)

        }}

        // style={{ height: '100%', maxHeight: '100%' }}
      />

      <div className='bottom-toolbar' >


        {pagination && !infiniteScroll && (
          <Pagination
            // style={{padding: '0.75rem 1rem'}}
            {...pagination}
            rootClassName={'pagination-template'}
            showSizeChanger={true}
            responsive={true}
            size={'small'}
            total={pagination.total}
            pageSize={pagination.onChange ? pagination?.pageSize : table.getState().pagination.pageSize}
            pageSizeOptions={[20, 50, 100, 1000, 10000]}
            onChange={(page, pageSize) => {
              if (pagination.onChange) {
                pagination.onChange(page, pageSize)
              } else {
                table.setPageIndex(page - 1)
                table.setPageSize(pageSize)
              }
            }}
            showTotal={(total: any, range: any) => `${numericFormatter((range[0] ?? 0).toString(), { thousandSeparator: '.' })}-${numericFormatter((range[1] ?? 0).toString(), { thousandSeparator: '.' })} / ${numericFormatter((total ?? 0).toString(), { thousandSeparator: '.' })} items`}

          />
        )}
      </div>




    </>
  );
}


export default TableGrid