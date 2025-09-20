// import { Fragment, useState } from 'react';
import { css } from '@linaria/core';

import { SelectColumn } from '../../src';
import type { Column } from '../../src';
import { useDirection } from '../directionContext';
import TableGrid from './grid-table/Table';
import { faker } from '@faker-js/faker';
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
      progress: Math.random() * 100,
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

const columns: Column<Row>[]  = [
    SelectColumn,
    {
      key: 'id',
      name: 'ID',
      width: 50,
      frozen: true,
      resizable: false,
      renderSummaryCell() {
        return <strong>Total</strong>;
      }
    },
    {
      key: 'title',
      name: 'Task',
      width: 150,
      frozen: true,
      
      // renderEditCell: textEditor,
      // renderSummaryCell({ row }) {
      //   return `${row.totalCount} records`;
      // }
    },
    {
      key: 'client',
      name: 'Client',
      width: 'max-content',
      draggable: true,
      // renderEditCell: textEditor
    },
    {
      key: 'area',
      name: 'Area',

      // renderEditCell: textEditor
    },
    {
      key: 'country',
      name: 'Country',
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
      key: 'contact',
      name: 'Contact',
      frozen: true,
      // renderEditCell: textEditor
    },
    {
      key: 'assignee',
      name: 'Assignee',
      // renderEditCell: textEditor
    },
    {
      key: 'progress',
      name: 'Completion',
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
      key: 'startTimestamp',
      name: 'Start date',
      // renderCell(props) {
      //   return dateFormatter.format(props.row.startTimestamp);
      // }
    },
    {
      key: 'endTimestamp',
      name: 'Deadline',
      // renderCell(props) {
      //   return dateFormatter.format(props.row.endTimestamp);
      // }
    },
    {
      key: 'budget',
      name: 'Budget',
      // renderCell(props) {
      //   return currencyFormatter.format(props.row.budget);
      // }
    },
    {
      key: 'version',
      name: 'Version',
      frozen: 'right',
      width: 100
    },
    {
      key: 'transaction',
      name: 'Transaction type'
    },
    {
      key: 'account',
      name: 'Account'
    },

    {
      key: 'available',
      name: 'Available',



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

const rows = createRows2(10);

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

        // rowHeight={rowHeight}

        />


    </>
  );
}


export default Test