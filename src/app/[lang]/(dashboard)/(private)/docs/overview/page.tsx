// Component Imports
import type {ColumnTable} from 'es-grid-template';
import { TableComponent} from 'es-grid-template'
import { faker } from '@faker-js/faker';

const genderData = (length: number, page: number, pageSize: number) => {

  return Array.from({ length }).map<any>((_, index) => ({
    id: ((page - 1) * pageSize) + index.toString(),

    // id: newGuid(),
    // employeefield: faker.number.int({ min: 0, max: 1 }),
    employeefield: faker.string.alphanumeric(10),

    // productName: `${faker.internet.username()} ${faker.internet.username()} ${faker.internet.username()}`,
    productName: `${faker.internet.username()}`,

    // unitName: faker.internet.username() + faker.internet.username() + faker.internet.username(),
    unitName: faker.internet.username(),
    onBoardingDate: undefined,
    name: faker.internet.username(),

    // time: '15/05/2026',
    time: '2026-05-31T00:00:00',

    // birthday: faker.date.birthdate(),
    note: '',
    age: faker.number.int({ min: 1000, max: 10000 }),
    street: faker.location.street(),
    building: faker.datatype.boolean(),
    number: index + 1,
    7: faker.location.streetAddress(true),
    8: faker.location.streetAddress(true),
    companyAddress: faker.location.streetAddress(true),

    // companyAddress: '',
    // companyName: faker.company.buzzAdjective(),
    companyName: '',
    gender: 'M',

  }))

}

const OverviewPage = async () => {

    const total = 100

    const pageSize = 20

    const data  = genderData(total, 1, pageSize)


  const headerColumns: ColumnTable[] = [
  {
    field: '#',
    headerText: 'STT',
    width: 80,
    fixed: 'left',

    // getCellProps
    headerCellProps: {
      style: {
        // backgroundColor: 'red',
        // border: 0
      }
    }
  },

  // {
  //   field: 'employeeCode',
  //   headerText: 'employeeCode',
  //   width: 150,
  //   textAlign: 'left',
  //   // lock: true,
  //   headerTextAlign: 'center',
  //   headerTemplate: () => {
  //     return (
  //       <div>
  //         <span>abc</span>
  //       </div>
  //     )
  //   },

  //   // getCellProps(value: any, record: any, rowIndex: number): any {
  //   //   if (rowIndex === 3) {
  //   //     return { rowSpan: 2, }
  //   //   }
  //   // },
  //   children: [
  //     {
  //       field: 'firstname',
  //       headerText: 'firstname',
  //       headerTooltip: 'Họ',
  //       width: 100,
  //       // render: () => {
  //       //   return (
  //       //     <div style={{ backgroundColor: 'red' }}>
  //       //       aa
  //       //     </div>
  //       //   )
  //       // },

  //     },
  //     { field: 'lastname', headerText: 'lastname', width: 150 },
  //   ]
  // },


  // { field: 'selection_column', headerText: 'selection_column', width: 60 },

  {
    field: 'productName',
    headerText: 'productName',
    width: 500,
    headerCellProps: {
      // colSpan: 2,
      style: {
        // backgroundColor: 'red',
        // border: 0
      }
    }
  },
  { field: 'name', headerText: 'name 1111', visible: false },
  { field: 'time', headerText: 'time', width: 550, typeFilter: 'DateRange', type: 'date' },
  { field: 'birthday', headerText: 'birthday', width: 150 },
  { field: 'age', headerText: 'age 1', width: 150, headerTemplate: (<>Tuổi</>), type: 'number' },

  // ...repeatedColumns,
  { field: 'street', headerText: 'street', width: 150 },
  {
    field: 'companyAddress',
    headerText: 'companyAddress',
    width: 550,
    textAlign: 'right',

    // fixed: 'right'
    // lock: true,
  },

  // {
  //   field: 'command',
  //   headerText: 'command',
  //   width: 50,
  //   textAlign: 'right',

  //   // fixed: 'right',
  //   // lock: true,
  //   commandItems
  // }
]

  return (
    <div>
      <TableComponent

        // t={t}
        // lang={lang}
        // locale={locale?.gridTable}

        // useVirtual={{
        //   horizontal: true,
        //   vertical: true
        // }}
        theme={{
          theme: 'dark',

          // backgroundColor: '#ffffff',
          cssVariables: {
            // "--bgcolor": 'blue',
            // "--hover-bgcolor": 'pink',
            // "--hover-color": 'red',
            // "--header-bgcolor": 'blue'
            // "--border-colo: 'r": 'red'
          }

        }}

        title={(<>aaaaaaaaaa</>)}
        bottom={(<>aaaaaaaaaa</>)}

        fullScreen={false}
        
        // toolbarItems={toolbarItems}

        // showHeader={false}

        // loading={true}

        columns={headerColumns}
        dataSource={data}
        height={700}
        minHeight={700}
        allowResizing={false}

        // contextMenuItems={contextMenuItem}
        pagination={{
          total,
          pageSize,

          // currentPage: currentPage,
          // onChange(page, pageSize1) {
          //   setCurrentPage(page)
          //   setPageSize(pageSize1)

            
          // },
        }}
        wrapSettings={{
          wrapMode: 'Header'
        }}
        commandClick={(args) => {
          console.log('args', args)
        }}

        showColumnChoose={false}

        selectionSettings={{
          type: 'single',
          getCheckboxProps(record) {
            return {
              disabled: record?.age > 15
            }
          },
        }}

        expandable={{
          defaultExpandAllRows: true,
          expandIconColumnIndex: 1
        }}

        rowSelected={(args) => {

          console.log('rowSelected', args)

        }}
        summary

        format={{
          thousandSeparator: ','
        }}

        recordDoubleClick={(args) => {
          console.log('recordDoubleClick', args)
        }}

      // useOuterBorder={false}
      // groupAble
      // groupColumns={['unitName']}
      // groupSetting={{

      // }}

      // onFilter={() => {

      // }}

      // onSorter={() => {

      // }}

      // defaultSorter={
      //   [
      //     {
      //       field: 'unitName',
      //       columnKey: 'unitName',
      //       order: 'ascend'
      //     }
      //   ]
      // }

      // defaultFilter={
      //   [
      //     {
      //       key: "unitName",
      //       field: "unitName",
      //       value: "B",
      //       predicate: "and",
      //       operator: "startswith"
      //     }
      //   ]
      // }

      // onRowStyles={{
      //   backgroundColor: 'red'
      // }}
      // sortMultiple={false}

      />
    </div>
  )
}

export default OverviewPage
