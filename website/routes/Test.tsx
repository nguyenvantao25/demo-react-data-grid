// import { Fragment, useState } from 'react';
import { css } from '@linaria/core';

import { SelectColumn } from '../../src';
import type { Column } from '../../src';
import { useDirection } from '../directionContext';
import TableGrid from './grid-table/Table';
import { faker } from '@faker-js/faker';
import type { ColumnsTable, ColumnTable } from './grid-table/type';
interface Row {
  readonly id: string;
  readonly title: string;
  readonly client: string;
  readonly area: string;
  readonly country: string;
  readonly contact: string;
  readonly assignee: string;
  readonly progress: number;
  readonly startTimestamp: any;
  readonly endTimestamp: any;
  readonly budget: number;
  readonly transaction: string;
  readonly account: string;
  readonly version: string;
  readonly available: boolean;
}

// function createRows(): Row[] {
//   const rows: Row[] = [];
//   const now = Date.now();

//   for (let i = 1; i < 500; i++) {
//     const country = faker.location.country();
//     rows.push({

//          id: i.toString(),
//       title: `Task #${i + 1}`,
//       client: faker.company.name(),
//       area: faker.person.jobArea(),
//       country,
//       contact: faker.internet.exampleEmail(),
//       assignee: faker.person.fullName(),
//       progress: Math.random() * 100,
//       startTimestamp: now - Math.round(Math.random() * 1e10),
//       endTimestamp: now + Math.round(Math.random() * 1e10),
//       budget: 500 + Math.random() * 10500,
//       transaction: faker.finance.transactionType(),
//       account: faker.finance.iban(),
//       version: faker.system.semver(),
//       available: Math.random() > 0.5
//     });
//   }

//   return rows;
// }

function createRows2(number: number): Row[] {
  const now = Date.now();
  const rows: Row[] = [];
  // const countrySet = new Set<string>();

  for (let i = 0; i < number; i++) {
    const country = faker.location.country();
    // countrySet.add(country);

    rows.push({
      id: i.toString(),
      title: `Task #${i + 1}`,
      client: faker.company.name(),
      area: faker.person.jobArea(),
      country,
      contact: faker.internet.exampleEmail(),
      assignee: faker.person.fullName(),
      progress: faker.number.int(10000),
      startTimestamp: now - Math.round(Math.random() * 1e10),
      endTimestamp: now + Math.round(Math.random() * 1e10),
      budget: 500 + Math.random() * 10500,
      transaction: faker.finance.transactionType(),
      account: faker.finance.iban(),
      version: faker.system.semver(),
      available: Math.random() > 0.5
    });
  }

  return rows;
}

// const columns: Column<Row>[] = [
//   SelectColumn,
//   {
//     key: 'id',
//     name: 'ID',
//     width: 80,

//   },
//   {
//     key: 'task',
//     name: 'Title',
//     width: 80,
//     resizable: true,
//     sortable: true,
//     draggable: true
//   },
//   {
//     key: 'priority',
//     name: 'Priority',
//     minWidth: 200,
//     // width: 80,
//     resizable: true,
//     sortable: true,
//     draggable: true
//   },
//   {
//     key: 'issueType',
//     name: 'Issue Type',
//     minWidth: 200,
//     // width: 80,
//     resizable: true,
//     sortable: true,
//     draggable: true
//   },
//   {
//     key: 'complete',
//     name: '% Complete',
//     minWidth: 200,
//     // width: 80,
//     resizable: true,
//     sortable: true,
//     draggable: true
//   }
// ];

const columns: ColumnsTable<Row> = [
  // SelectColumn,
  {
    field: 'id',
    headerText: 'id',
    width: 50,
    fixed: 'left',
    // resizable: false,
    // renderSummaryCell() {
    //   return <strong>Total</strong>;
    // }
  },
  {
    field: 'title',
    headerText: 'Task',
    width: 150,
    fixed: true,
    template(args) {
      return <>aaaa</>
    },

    // renderEditCell: textEditor,
    // renderSummaryCell({ row }) {
    //   return `${row.totalCount} records`;
    // }
  },
  {
    field: 'client',
    headerText: 'Client',
    width: 150,
    // width: 'max-content',
    // draggable: true,
    // renderEditCell: textEditor
  },
  {
    field: 'area',
    headerText: 'Area',
    width: 150,
    // renderEditCell: textEditor
  },
  {
    field: 'country',
    headerText: 'Country',
    width: 150,
    // renderEditCell: (p) => (
    //   <select
    //     autoFocus
    //     className={textEditorClassname}
    //     value={p.row.country}
    //     onChange={(e) => p.onRowChange({ ...p.row, country: e.target.value }, true)}
    //   >
    //     {countries.map((country) => (
    //       <option key={country}>{country}</option>
    //     ))}
    //   </select>
    // )
  },
  {
    field: 'contact',
    headerText: 'Contact',
    fixed: true,
    width: 100
    // renderEditCell: textEditor
  },
  {
    field: 'assignee',
    headerText: 'Assignee',
    template() {
      return 'bbbb'
    },
    width: 150,
    // renderEditCell: textEditor
  },
  {
    field: 'progress',
    headerText: 'Completion',
    type: 'number',
    width: 150,
    format: {
      decimalSeparator: ',',
      thousandSeparator: '.'
    }
    // renderCell(props) {
    //   const value = props.row.progress;
    //   return (
    //     <>
    //       <progress max={100} value={value} style={{ inlineSize: 50 }} /> {Math.round(value)}%
    //     </>
    //   );
    // },
    // renderEditCell({ row, onRowChange, onClose }) {
    //   return createPortal(
    //     <div
    //       dir={direction}
    //       className={dialogContainerClassname}
    //       onKeyDown={(event) => {
    //         if (event.key === 'Escape') {
    //           onClose();
    //         }
    //       }}
    //     >
    //       <dialog open>
    //         <input
    //           autoFocus
    //           type="range"
    //           min="0"
    //           max="100"
    //           value={row.progress}
    //           onChange={(e) => onRowChange({ ...row, progress: e.target.valueAsNumber })}
    //         />
    //         <menu>
    //           <button type="button" onClick={() => onClose()}>
    //             Cancel
    //           </button>
    //           <button type="button" onClick={() => onClose(true)}>
    //             Save
    //           </button>
    //         </menu>
    //       </dialog>
    //     </div>,
    //     document.body
    //   );
    // },
    // editorOptions: {
    //   displayCellContent: true
    // }
  },
  {
    field: 'startTimestamp',
    headerText: 'Start date',
    width: 150,
    // renderCell(props) {
    //   return dateFormatter.format(props.row.startTimestamp);
    // }
  },
  {
    field: 'endTimestamp',
    headerText: 'Deadline',
    width: 150,
    // renderCell(props) {
    //   return dateFormatter.format(props.row.endTimestamp);
    // }
  },
  {
    field: 'budget',
    headerText: 'Budget',
    width: 150,
    // renderCell(props) {
    //   return currencyFormatter.format(props.row.budget);
    // }
  },
  {
    field: 'version',
    headerText: 'Version',
    fixed: 'right',
    width: 100
  },
  {
    field: 'transaction',
    headerText: 'Transaction type',
    width: 150,
  },
  {
    field: 'account',
    headerText: 'Account',
    width: 150,
  },

  {
    field: 'available',
    headerText: 'Available',
    width: 150,


    // renderCell({ row, onRowChange, tabIndex }) {
    //   return (
    //     <SelectCellFormatter
    //       value={row.available}
    //       onChange={() => {
    //         onRowChange({ ...row, available: !row.available });
    //       }}
    //       tabIndex={tabIndex}
    //     />
    //   );
    // },
    // renderSummaryCell({ row: { yesCount, totalCount } }) {
    //   return `${Math.floor((100 * yesCount) / totalCount)}% ✔️`;
    // }
  }
]

const rows = createRows2(1000);

const Test = () => {
  const direction = useDirection();
  // const [rowHeight, setRowHeight] = useState(30);
  // const [sortColumns, setSortColumns] = useState([]);
  // const [selectedRows, setSelectedRows] = useState<any>([]);

  // const [selectedRows, setSelectedRows] = useState((): ReadonlySet<string> => new Set());

  console.log('direction', direction)

  return (
    <>

      <TableGrid
        columns={columns}
        dataSource={rows}

        direction={direction}
        wrapSettings={{
          wrapMode: 'Content'
        }}

      // rowHeight={rowHeight}

      />


    </>
  );
}


export default Test