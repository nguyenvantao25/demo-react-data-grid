import { useState } from 'react';
import { css } from '@linaria/core';
import { DataGrid } from '../../../src';
import { convertToTanStackColumns } from './hook/utils';

// import { DataGrid } from '../../../src';


const transitionClassname = css`
  transition: grid-template-rows 0.5s ease;
`;




interface Props<T = AnyObject> {
  rowHeight?: number
  columns: any[]
  dataSource: any[]
  direction?: any
}

const TableGrid = <RecordType extends object>(props: Props<RecordType>) => {

  const {
    columns,
    dataSource,
    rowHeight,
    direction
  } = props
  // const direction = useDirection();
  const [sortColumns, setSortColumns] = useState([]);
  // const [selectedRows, setSelectedRows] = useState<any>([]);

  const [selectedRows, setSelectedRows] = useState((): ReadonlySet<string> => new Set());


    const mergedColumns = React.useMemo(() => {
    return convertToTanStackColumns<RecordType>({
      t,
      columns,
      format,
      editAble
    })

    // return convertToTanStackColumns<RecordType>(columns)
  }, [t, columns, format, editAble])




  return (
    <>

      {/* <div className='top-toolbar' /> */}

      <DataGrid
        // aria-label="Animation Example"
        className={`${transitionClassname} fill-grid`}
        columns={columns as any}
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

      {/* <div className='top-toolbar' /> */}




    </>
  );
}


export default TableGrid