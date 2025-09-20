import { Fragment, useState } from 'react';
import { css } from '@linaria/core';

import { SelectColumn } from '../../src';
import type { Column } from '../../src';
import { useDirection } from '../directionContext';
import TableGrid from './grid-table/Table';



const rangeClassname = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const transitionClassname = css`
  transition: grid-template-rows 0.5s ease;
`;

interface Row {
  readonly id: string;
  readonly task: string;
  readonly complete: number;
  readonly priority: string;
  readonly issueType: string;
}

function createRows(): Row[] {
  const rows: Row[] = [];

  for (let i = 1; i < 500; i++) {
    rows.push({
      id: i.toString(),
      task: `Task ${i}`,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority: ['Critical', 'High', 'Medium', 'Low'][Math.round(Math.random() * 3)],
      issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.round(Math.random() * 3)]
    });
  }

  return rows;
}

const columns: Column<Row>[] = [
  SelectColumn,
  {
    key: 'id',
    name: 'ID',
    width: 80,

  },
  {
    key: 'task',
    name: 'Title',
    width: 80,
    resizable: true,
    sortable: true,
    draggable: true
  },
  {
    key: 'priority',
    name: 'Priority',
    minWidth: 200,
    // width: 80,
    resizable: true,
    sortable: true,
    draggable: true
  },
  {
    key: 'issueType',
    name: 'Issue Type',
    minWidth: 200,
    // width: 80,
    resizable: true,
    sortable: true,
    draggable: true
  },
  {
    key: 'complete',
    name: '% Complete',
    minWidth: 200,
    // width: 80,
    resizable: true,
    sortable: true,
    draggable: true
  }
];

const rows = createRows();

const Test = () => {
  const direction = useDirection();
  const [rowHeight, setRowHeight] = useState(30);
  const [sortColumns, setSortColumns] = useState([]);
  // const [selectedRows, setSelectedRows] = useState<any>([]);

  const [selectedRows, setSelectedRows] = useState((): ReadonlySet<string> => new Set());

  console.log('direction', direction)

  return (
    <Fragment>

      <div style={{ height: '100%' }}>
        <TableGrid
          columns={columns}
          dataSource={rows}

          direction={direction}

        // rowHeight={rowHeight}

        />
      </div>


    </Fragment>
  );
}


export default Test