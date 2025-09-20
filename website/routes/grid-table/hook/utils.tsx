import type { Column } from "../../../../src";
import type { ColumnsTable, IFormat } from "../type";

export function convertToTanStackColumns<T>({
  t,
  columns,
  format,
  editAble
}: {
  t?: any
  columns: ColumnsTable<T>
  format?: IFormat
  editAble?: boolean
}): Column<T, any>[] {

  // const expandIconColumnIndex = expandable?.expandIconColumnIndex ?? 0

  return columns.map(col => {

    const { headerText, headerTemplate, field, width, minWidth, maxWidth, template, fixed, children } = col;
    // const { children, ...restProps } = col;


    const newCol: Column<T, any> = {


      // enableResizing: allowResizing !== false,
      // enableHiding: false,

      key: field,
      name: field,
      width,
      minWidth,
      maxWidth,
      renderHeaderCell(props) {

        console.log('props', props)
        if (headerTemplate) {

          if (typeof headerTemplate === 'function') {
            return headerTemplate(col)
          } 
            return headerTemplate
          
        } 
          return t ? t(headerText) : headerText
        
        
      },
      frozen: fixed ?? false,

      // frozen: fixed
      // renderHeaderCell: () => {

      // }
      // enableSorting: allowSorter !== false || col.sorter !== false
    };

  
    if (children) {
      // @ts-ignore
      newCol.children = convertToTanStackColumns({
        columns: children,
        editAble,
        format,
        t
      });
    }    

    return newCol;
  });
}