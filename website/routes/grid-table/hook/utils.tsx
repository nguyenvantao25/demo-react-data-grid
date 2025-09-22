import { Fragment } from "react";
import { numericFormatter } from 'react-numeric-component'
import dayjs from 'dayjs'
import moment from 'moment'

import type { Column } from "../../../../src";
import type { ColumnsTable, ColumnTable, IFormat } from "../type";

export const isEmpty = (d: any): boolean => {
  return d === null || d === undefined || d === ''

}


export const getFormat = (colFormat?: IFormat, format?: IFormat) => {
  return {
    thousandSeparator: colFormat?.thousandSeparator ?? format?.thousandSeparator,
    decimalSeparator: colFormat?.decimalSeparator ?? format?.decimalSeparator,
    decimalScale: (colFormat?.decimalScale ?? format?.decimalScale) ? Number(colFormat?.decimalScale ?? format?.decimalScale) : colFormat?.decimalScale ?? format?.decimalScale,
    allowNegative: colFormat?.allowNegative ?? format?.allowNegative, // check nhập số âm
    prefix: colFormat?.prefix ?? format?.prefix ?? undefined,
    suffix: colFormat?.suffix ?? format?.suffix ?? undefined,
    fixedDecimalScale: colFormat?.fixedDecimalScale ?? format?.fixedDecimalScale, // mặc định thêm số 0 sau số thập phân
    dateFormat: colFormat?.dateFormat ?? format?.dateFormat,
    datetimeFormat: colFormat?.datetimeFormat ?? format?.datetimeFormat,
    timeFormat: colFormat?.timeFormat ?? format?.timeFormat,
    weekFormat: colFormat?.weekFormat ?? format?.weekFormat,
    monthFormat: colFormat?.monthFormat ?? format?.monthFormat,
    yearFormat: colFormat?.yearFormat ?? format?.yearFormat
  }
}


export const checkThousandSeparator = (thousandSeparator: string | undefined, decimalSeparator: string | undefined) => {
  if (thousandSeparator) {
    if (decimalSeparator) {
      if (
        thousandSeparator === decimalSeparator
      ) {
        return ','
      } else {
        return thousandSeparator
      }
    } else {
      return thousandSeparator
    }
  } else {
    return false
  }
}

export const checkDecimalSeparator = (thousandSeparator: string | undefined, decimalSeparator: string | undefined) => {
  if (decimalSeparator) {
    if (thousandSeparator) {
      if (
        thousandSeparator === decimalSeparator
      ) {
        return '.'
      } else {
        return decimalSeparator
      }
    } else {
      return decimalSeparator
    }
  } else {
    if (thousandSeparator && thousandSeparator === '.') {
      return ','
    }
    return '.'
  }
}


export const isNameColor = (strColor: string) => {
  const s = new Option().style
  s.color = strColor
  return s.color === strColor
}

export const isColor = (value: string) => {
  const hexRegex = /^#([0-9A-F]{3}){1,2}$/i
  const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/
  const rgbaRegex = /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0|1|0?\.\d+)\)$/
  const hslRegex = /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/
  const hslaRegex = /^hsla\(\d{1,3}, \d{1,3}%, \d{1,3}%, (0|1|0?\.\d+)\)$/
  const namedColors = /^(?:aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|purple|red|silver|teal|white|yellow)$/i

  return hexRegex.test(value) ||
    rgbRegex.test(value) ||
    rgbaRegex.test(value) ||
    hslRegex.test(value) ||
    hslaRegex.test(value) ||
    namedColors.test(value) ||
    isNameColor(value)
}


export const renderValueCell = <T,>(column: ColumnTable<T>, value: any, record: T, rowIndex: number, format?: IFormat): any => {

  // if (!column.type) {
  //   return ''
  // }

        const year = value ? moment(value).format('yyyy') : ''

        
  // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
  switch (column?.type) {

    case 'number':

      const colFormat = typeof column.format === 'function' ? column.format(record) : column.format

      const cellFormat = getFormat(colFormat, format)

      const thousandSeparator = cellFormat?.thousandSeparator
      const decimalSeparator = cellFormat?.decimalSeparator
      const dec = cellFormat?.decimalScale

      // const contentNumber = !isEmpty(value) ? ((dec || dec === 0) ? parseFloat(Number(value).toFixed(dec)).toString() : value.toString()) : '0'

      const tmpval = typeof value === 'string' ? Number(value) : value

      const numericFormatProps = {
        thousandSeparator: checkThousandSeparator(thousandSeparator, decimalSeparator),
        decimalSeparator: checkDecimalSeparator(thousandSeparator, decimalSeparator),
        allowNegative: (cellFormat?.allowNegative) ?? true,
        prefix: cellFormat?.prefix,
        suffix: cellFormat?.suffix,
        decimalScale: dec,
        fixedDecimalScale: (cellFormat?.fixedDecimalScale) ?? false
      }
      

   
      const contentNumber = !isEmpty(value) ? ((dec || dec === 0) ? parseFloat(tmpval.toFixed(dec)).toString() : tmpval.toString()) : '0'




      return !isEmpty(contentNumber) ? numericFormatter(contentNumber, numericFormatProps as any) : ''

    case 'date':
      return value ? dayjs(value).format((format?.dateFormat) ?? 'DD/MM/YYYY') : ''
    case 'time':

      return value || ''
    case 'year':
      return (
        <Fragment>
          {year}
        </Fragment>
      )
    case 'datetime':

      return value ? moment(value).format((format?.datetimeFormat) ?? 'DD/MM/YYYY HH:mm') : ''
    case 'boolean':
      return value ? 'true' : 'false'
    case 'color':
      return (
        <Fragment>
          <div className="w-100 h-100" style={{
            backgroundColor: isColor(value) ? value : '#fff',
            border: '1px solid #f0f0f0',
            height: '100%',
            minHeight: 20
          }} />

        </Fragment>
      )
    case 'checkbox':

      return ( ''

        // <ControlCheckbox
        //   column={column as any}
        //   record={record}
        //   rowIndex={rowIndex}
        //   colIndex={colIndex}
        //   checked={!!value}
        //   checkValue={value}
        //   editAble={editAble}
        // />

      )

    case 'file':

      const nameFile: string = (typeof value === 'object' && !Array.isArray(value)) ? value.name : (Array.isArray(value) ? value.map((it: any) => (typeof it === 'object' ? it.name : it)).filter(Boolean).join(", ") : '')

      return value ? nameFile : ''
    default:
      if (Array.isArray(value)) {
        return value.join(', ')
      }
      return value

  }
}


export function convertToTanStackColumns<T>({
  t,
  columns,
  format,
  // editAble
}: {
  columns: ColumnsTable<T>
  t?: any
  format?: IFormat | undefined
  // editAble?: boolean
}): Column<T, any>[] {

  // const expandIconColumnIndex = expandable?.expandIconColumnIndex ?? 0

  return columns.map(col => {

    const { headerText, headerTemplate, field, width, minWidth, maxWidth, template, fixed, children } = col;
    // const { children, ...restProps } = col;


    const newCol: Column<T, any> = {


      // enableResizing: allowResizing !== false,
      // enableHiding: false,

      key: field,
      name: headerText ?? field ,
      width,
      minWidth,
      maxWidth,
       frozen: fixed ?? false,
      renderHeaderCell() {

        if (headerTemplate) {

          if (typeof headerTemplate === 'function') {
            return headerTemplate(col)
          }
          return headerTemplate

        }
        return t ? t(headerText) : headerText


      },
      

      renderCell(props) {

        const {column, row, rowIdx} = props

          if (template) {

          if (typeof template === 'function') {
            return template({
              field,
              index: rowIdx,
              rowData: row,
              value: row[field as keyof T]
            })
          } else {
            return template
          }

        } else {
          return (
            <Fragment>

            

              {renderValueCell(col, row[field as keyof T], row, rowIdx, format)}

            </Fragment>
          )
        }
        
      },

     

      // frozen: fixed
      // renderHeaderCell: () => {

      // }
      // enableSorting: allowSorter !== false || col.sorter !== false
    };


    if (children) {
      // @ts-ignore
      newCol.children = convertToTanStackColumns({
        columns: children,
        // editAble,
        format,
        t
      });
    }

    return newCol;
  });
}