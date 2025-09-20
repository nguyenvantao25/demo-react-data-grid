import type { CheckboxProps, TablePaginationConfig } from 'rc-master-ui'
import type { ItemType } from 'rc-master-ui/es/menu/interface'

import type { OnChangeFn } from '@tanstack/react-table'
import type { ReactElement, ReactNode } from 'react'
import type { IOperator } from './hook/constant'
import type { ColorPickerProps } from 'antd'
import type { TableLocale } from "rc-master-ui/lib/table/interface";

// export type FilterOperator = 'contains' | 'equals' | 'startsWith' | 'endsWith'

declare module "@tanstack/table-core" {
  // @ts-expect-error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<any, any> extends ColumnTable {
    rowSpan?: number;
  }
}

export type ExtendedColumnFilter = {
  id: string
  value: string
  operator?: FilterOperator
}
// ------- custom feature --------

export type OpetorState = ColumnOperator[]

export interface OpetorTableState {
  operator: OpetorState
}

export interface ColumnOperator {
  id: string
  operator: string
}

// define types for our new feature's table options
export interface DensityOptions {
  enableOperator?: boolean
  onOperatorChange?: OnChangeFn<OpetorState>
}

// ------- custom feature --------

export type Key = React.Key

export type PaginationConfig = TablePaginationConfig & {
  currentPage?: number
}

export type AnyObject = Record<PropertyKey, any>

export type IFormat = {
  thousandSeparator?: string
  decimalSeparator?: string
  decimalScale?: number | undefined // bao nhiêu số sau số thập phân
  allowNegative?: boolean // check nhập số âm
  prefix?: string | undefined
  suffix?: string | undefined
  fixedDecimalScale?: boolean // mặc định thêm số 0 sau số thập phân
  dateFormat?: string
  datetimeFormat?: string
  timeFormat?: string
  weekFormat?: string
  monthFormat?: string
  yearFormat?: string
}

export type RowSelectMethod = 'all' | 'none' | 'invert' | 'single' | 'multiple'

export type EditType =
  | 'text'
  | 'numeric'
  | 'asyncSelect'
  | 'date'
  | 'datetime'
  | 'time'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year'
  | 'select'
  | 'checkbox'
  | 'currency'
  | 'image'
  | 'selectTable'
  | 'customSelect'
  | 'form'
  | 'color'
  | 'treeSelect'
  | 'file'
export type ITextAlign = 'center' | 'left' | 'right'
export type TypeFilter =
  | 'Text'
  | 'Date'
  | 'Time'
  | 'Datetime'
  | 'DateRange'
  | 'Month'
  | 'Quarter'
  | 'Year'
  | 'Week'
  | 'Number'
  | 'NumberRange'
  | 'Dropdown'
  | 'DropTree'
  | 'Checkbox'
  | 'CheckboxTree'
  | 'CheckboxDropdown'
export type IColumnType =
  | 'number'
  | 'time'
  | 'date'
  | 'week'
  | 'month'
  | 'file'
  | 'quarter'
  | 'year'
  | 'datetime'
  | 'string'
  | 'boolean'
  | 'checkbox'
  | 'color'
  | null
  | undefined
export type FilterOperator =
  | 'equal'
  | 'notEqual'
  | 'greaterThan'
  | 'greaterThanOrEqual'
  | 'lessThan'
  | 'lessThanOrEqual'
  | 'startsWith'
  | 'endsWith'
  | 'contains'
export type FixedType = 'left' | 'right' | boolean
export type SelectMode = 'checkbox' | 'radio' | undefined
type IGrid =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24

export interface FieldNames {
  value?: string
  label?: string
  groupLabel?: string
  options?: string
}

export interface CommandItem {
  id: string
  type?: string
  visible?: boolean | ((record: any) => boolean)
  title: string
  color?:
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'green'
  | 'magenta'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'volcano'
  | 'geekblue'
  | 'lime'
  | 'gold'
  tooltip?: string
  icon?: ReactNode | ReactElement | (() => ReactNode | ReactElement)
  template?: ReactNode | ReactElement | ((record: any) => ReactNode | ReactElement)
  client?: boolean
  confirmDialog?: boolean
}

export type ColumnTemplate<RecordType> = {
  value: any
  rowData: RecordType
  index: number
  field: string
}

export type ColumnTable<RecordType = AnyObject> = {
  field: string
  // key?: any,

  width?: number
  maxWidth?: number
  minWidth?: number

  type?: IColumnType
  haveSum?: boolean
  isSummary?: boolean
  summaryTemplate?: (data: number, key: string) => ReactElement | ReactNode

  format?: IFormat | ((rowData: any) => IFormat)
  allowFiltering?: boolean
  /**
    * @deprecated Please use `allowSorter` instead.
    * @since  1.7.25
    */
  sorter?: boolean
  allowSorter?: boolean
  operator?: FilterOperator
  hideOperator?: boolean
  placeholder?: string
  showInColumnChoose?: boolean
  typeFilter?: TypeFilter
  source?: any[]
  showFilterSearch?: boolean
  headerText?: string
  /**
    * @deprecated Please use `visible` instead.
    * @since  1.7.33
    */
  hidden?: boolean
  visible?: boolean
  headerTooltip?: boolean | string | (() => ReactNode | ReactElement)
  columnGroupText?: string
  /**
   * @deprecated Please use `textAlign` instead.
   * @since  1.7.34
   */
  align?: ITextAlign
  textAlign?: ITextAlign
  headerTextAlign?: ITextAlign
  // template?: ReactNode | ReactElement | ((value: any, record: RecordType, index: number) => ReactNode | ReactElement)
  template?: ReactNode | ReactElement | ((args: ColumnTemplate<RecordType>) => ReactNode | ReactElement)
  showTooltip?: boolean
  tooltipDescription?:
  | ReactNode
  | ReactElement
  | ((value: any, record: RecordType, index: number) => ReactNode | ReactElement)
  headerTemplate?:
  | React.ReactNode
  | React.ReactElement
  | ((column: ColumnTable<RecordType>) => React.ReactNode | React.ReactElement)
  commandItems?: CommandItem[]

  children?: ColumnTable<RecordType>[]

  editType?: EditType | ((rowData?: RecordType) => EditType)
  disable?: boolean | ((rowData: any) => boolean)
  editEnable?: boolean | ((rowData: any) => boolean)
  isClearable?: boolean
  maxDate?: any
  minDate?: any
  maxTime?: any
  minTime?: any
  max?: number
  min?: number
  editSelectSettings?: IEditSelectSettings
  editFromSettings?: IEditFromSettings
  /**
   * @deprecated Please use `fixed` instead.
   * @since 1.7.25
   */
  fixedType?: FixedType
 fixed?: FixedType
 /**
   * @deprecated Please use `wrapSettings` instead.
   * @since 1.7.34
   */
  headerTextWrap?: boolean

  ellipsis?: boolean
  allowResizing?: boolean


}

export type Locale = TableLocale & {
  ok_btn?: string
  cancel_btn?: string
  add_rows?: string
  add_rows_before?: string
  add_rows_after?: string
  add_1?: string
  add_10?: string
  add_50?: string
  add_100?: string
  add_children?: string
  delete_content?: string
  delete_rows?: string
  custom?: string

  filterTitle: string
  filterConfirm: string
  filterEmptyText: string
  filterCheckall: string
  filterSearchPlaceholder: string
  emptyText: string
  selectAll: string
  selectInvert: string
  selectNone: string
  selectionAll: string
  sortTitle: string
  expand: string
  collapse: string
  triggerDesc: string
  triggerAsc: string
  cancelSort: string
}

export type ColumnsTable<RecordType = AnyObject> = ColumnTable<RecordType>[]

export type TableProps<RecordType = AnyObject> = {
  editAble?: boolean
  infiniteScroll?: boolean
  next?: () => void
  locale?: Locale
  groupAble?: boolean
  groupColumns?: string[]
  groupSetting?: IGroupSetting
  onChooseColumns?: (props: IOnChooseColumns) => void
  pagination?: false | PaginationConfig
  showCustomTooltip?: boolean

  sortMultiple?: boolean
  dataSource: RecordType[]
  columns: ColumnsTable<RecordType>
  height?: number
  minHeight?: number
  format?: IFormat
  t?: any
  lang?: string
  contextMenuItems?: ContextMenuItem[]
  showDefaultContext?: boolean
  contextMenuHidden?: string[] | ((args?: Omit<ContextInfo<RecordType>, 'item' | 'event'>) => string[])
  contextMenuOpen?: (args: Omit<ContextInfo<RecordType>, 'item'>) => void
  contextMenuClick?: (args: ContextInfo<RecordType>) => void
  recordDoubleClick?: (args: RecordDoubleClickEventArgs<RecordType>) => void
  toolbarItems?: ToolbarItem[]
  showColumnChoose?: boolean
  showAdvanceFilter?: boolean
  onFilter?: (query: { field: string; key: string; operator: IOperator; predicate: 'and' | 'or'; value: any }[]) => void
  onSorter?: (args: Sorter[]) => void

  selectionSettings?: SelectionSettings

  rowSelection?: RowSelection<RecordType>
  rowSelected?: (args: { type: string; rowData: RecordType; selected: RecordType | RecordType[] }) => void

  dataSourceFilter?: SourceFilter[]
  onFilterClick?: (column: ColumnTable<RecordType>, callback: (key: string, data: any) => void) => void
  loading?: boolean
  allowResizing?: boolean
  showToolbar?: boolean
  onDataChange?: (data: RecordType[]) => void
  defaultValue?: AnyObject | (() => AnyObject)

  // summary?: boolean | ((data: readonly RecordType[]) => React.ReactNode)
  summary?: boolean
  showEmptyText?: boolean
  commandSettings?: CommandSettings

  // columns: ColumnsTable<RecordType>
  onCellPaste?: ICellPasteModel<RecordType>
  onCellChange?: (
    args: CellChangeArgs<RecordType>,
    handleCallback: (rowData: any, index: any, value?: any) => void
  ) => void
  onCellClick?: (args: ICellClick, callback?: any) => void
  rowEditable?: (rowData: RecordType) => boolean
  validate?: any
  onBlur?: (data: RecordType[]) => void

  onExpandClick?: (args: { expandedKeys: string[]; key: string; rowData: any }) => void

  wrapSettings?: IWrapSettings

  actionTemplate?: ReactNode | ReactElement | (() => ReactNode | ReactElement)

  commandClick?: (args: CommandClick<RecordType>) => void

  expandable?: ExpandableConfig<RecordType>;

  fullScreen?: boolean
}

export type ExpandableConfig<RecordType> = {
  expandedRowKeys?: readonly Key[];
  defaultExpandedRowKeys?: readonly Key[];
  expandedRowRender?: ExpandedRowRender<RecordType>;
  columnTitle?: React.ReactNode;
  expandRowByClick?: boolean;
  expandIcon?: RenderExpandIcon<RecordType>;
  onExpand?: (expanded: boolean, record: RecordType) => void;
  onExpandedRowsChange?: (expandedKeys: readonly Key[]) => void;
  defaultExpandAllRows?: boolean;
  indentSize?: number;
  // /** @deprecated Please use `EXPAND_COLUMN` in `columns` directly */
  expandIconColumnIndex?: number;
  showExpandColumn?: boolean;
  expandedRowClassName?: string | RowClassName<RecordType>;
  childrenColumnName?: string;
  rowExpandable?: (record: RecordType) => boolean;
  columnWidth?: number | string;
  fixed?: FixedType;
}

export type RenderExpandIcon<RecordType> = (props: RenderExpandIconProps<RecordType>) => React.ReactNode;
export interface RenderExpandIconProps<RecordType> {
  prefixCls: string;
  expanded: boolean;
  record: RecordType;
  expandable: boolean;
  onExpand: TriggerEventHandler<RecordType>;
}

export type TriggerEventHandler<RecordType> = (record: RecordType, event: React.MouseEvent<HTMLElement>) => void;
export type RowClassName<RecordType> = (record: RecordType, index: number, indent: number) => string;
export type ExpandedRowRender<ValueType> = (record: ValueType, index: number, indent: number, expanded: boolean) => React.ReactNode;


export type CommandClick<T> = {
  id: string
  rowId: string
  rowData: any
  index: number
  rows: T[]
}

export type IEditSelectSettings = {
  fieldKey?: string
  options: any[] | ((rowData: any, field: string) => any[])
  /**  get value form other field **/
  fieldValue?: string
  /** get label form other field **/
  fieldLabel?: string
  /** cho phép nhập giá trị - onBlur: giá trị search được set thành value **/
  searchTextAsValue?: boolean

   /**
    * @deprecated Please use `allowSorter` instead.
    * @since  1.7.25
    */
  inputKey?: string
  // label?: string

  filterKey?: string[]
  selectMode?: SelectMode

  // eslint-disable-next-line no-unused-vars
  getPasteValue?: (value: any) => Record<string, any> | null
  // eslint-disable-next-line no-unused-vars
  validateOption?: (rowData: any, field: string) => any[]

  defaultOptions?: any[]
  // eslint-disable-next-line no-unused-vars
  defaultValue?: (
    value: any,
    rowData: any
  ) => {
    value: any
    label: string
    [key: string]: string
  } | null

  formatOptionLabel?: (option: any) => ReactNode | ReactElement
  // loadOptions?: (search: string, callback: (newOptions: any[]) => void) => void
  loadOptions?: (search: string, callback: (newOptions: any[]) => void, args?: LoadOptionsArgs) => void
  isMulti?: boolean
  closeMenuOnSelect?: boolean
  menuWidth?: number
  menuHeight?: number

  columns?: ColumnSelectTable[]
  toolbarItems?: ToolbarItem[]
  // eslint-disable-next-line no-unused-vars
  toolbarClick?: (props: ToolbarClick) => void
  toolbarHeight?: number
  hideSelectedOptions?: boolean
  showItems?: number
  isLengthSelected?: boolean
  fieldNames?: FieldNames
  filterOption?: boolean | FilterFunc<any>
}

export type IEditFromSettings = {
  fieldKey: string
  // eslint-disable-next-line no-unused-vars
  formOpen?: (props: IFormOpen) => void
  // eslint-disable-next-line no-unused-vars
  formClose?: (props: IFormOpen) => void
  // eslint-disable-next-line no-unused-vars
  formatLabel?: (value: any) => string
  menuWidth?: number
  menuHeight?: number
  labelWith?: number
  items: any[]
  layout?: {
    xl?: IGrid
    lg?: IGrid
    md?: IGrid
    sm?: IGrid
    xs?: IGrid
  }

  defaultValues?: Record<string, any>

  schema?: any
}

export type IFormOpen = {
  value?: any
  setValue?: any
  getValues?: any
  reset?: any
  rowData?: any
}

export type FilterFunc<OptionType> = (inputValue: string, option?: OptionType) => boolean

export type ToolbarClick = {
  item: any
  column: any
}

export type ColumnSelectTable = {
  field: string
  dataIndex?: string
  type?: IColumnType
  headerText?: string
  fixedType?: 'left' | 'right' | undefined
  width?: number | undefined
  minWidth?: number
  maxWidth?: number
  visible?: boolean
  textAlign?: ITextAlign
  headerTextAlign?: ITextAlign
  // eslint-disable-next-line no-unused-vars
  template?: (props: ITemplateColumn) => ReactNode | ReactElement
  headerTemplate?: any
  ellipsis?: boolean | undefined
  format?: IFormat
  // eslint-disable-next-line no-unused-vars
  tooltipDescription?: string | ((rowData: any) => string | ReactNode)
  // tooltipDescription?: string | ((rowData: any) => string | React.FC<any> | ReactNode)
  showTooltip?: boolean
  showTooltipHeader?: boolean
}

export type ITemplateColumn = {
  value: any
  column: any
  rowData: any
  field: number | string
  index: number
  // [key: string]: any
}

export type RawValueType = string | number

export type ToolbarItem = {
  position?: 'Top' | 'Bottom'
  align?: ITextAlign
  onClick?: (args: any) => void
  key?: React.Key
  value?: RawValueType
  label?: React.ReactNode
  template?: React.ReactNode | React.ReactElement | (() => React.ReactNode | React.ReactElement)
  title?: React.ReactNode
  disabled?: boolean
  [key: string]: any
}

export type LoadOptionsArgs = {
  rowData?: any
}

export type IGroupSetting = {
  client?: boolean
  onGroup?: (props: IOnGroup) => void
  hiddenColumnGroup?: boolean
  showGroupIcon?: boolean
  unClearableLevel?: 1 | 2 | 3 | undefined
  sumGroup?: boolean
}

type IOnGroup = {
  columnGrouped: string[]
  columns: ColumnsTable
  flattenColumns: ColumnsTable
}

export type IOnChooseColumns = {
  columns: ColumnsTable
  showColumns: ColumnsTable
  flattenColumns: ColumnsTable
}

export type ContextMenuItem = ItemType

export type CommandSettings = {
  client?: boolean
  confirmDialog?: boolean
}

export interface ICellPasteModel<RecordType = AnyObject> {
  onPasted?: (args: IOnPastedProps, handleCallback: (callbackData: any[]) => void) => void

  dataChange?: (data: RecordType[]) => void
  getCallbackData?: (props: any) => void
  maxRowsPaste?: number
}

export type IOnPastedProps = {
  data: any[]
  copyRows: any[]
  pastedColumns: string[]
  pasteData: any[]
  type: 'onPaste' | 'onChange' | 'onCellPaste'
}

export type ICellClick = {
  index: number
  indexCol?: number
  rowId: string | number
  type: 'Editing' | 'Default'
  field: string
  cellValue: any
  rowData: any
}

export type CellChangeArgs<T> = {
  type: 'onPaste' | 'onChange' | 'onCellPaste'
  value: any
  option: AnyObject
  rowData: T
  rowsData: T[]
  indexRow: number
  rowId?: string
  field: string | undefined
  indexCol: any
  sumValue?: any[]
}
export type IWrapMode = 'Header' | 'Both' | 'Content'

export type IWrapSettings = {
  wrapMode?: IWrapMode
}

export type SelectionSettings<T = AnyObject> = {
  mode?: 'checkbox' | 'radio'
  type?: 'single' | 'multiple'
  checkboxOnly?: boolean
  columnWidth?: number
  hideSelectAll?: boolean
  selectedRowKeys?: Key[];
  defaultSelectedRowKeys?: Key[];
  getCheckboxProps?: (record: T) => Partial<Omit<CheckboxProps, 'checked' | 'defaultChecked'>>;
}

export type SelectionSelectFn<T = AnyObject> = (
  record: T,
  selected: boolean,
  selectedRows: T[],
  nativeEvent: Event
) => void

export type RowSelection<T> = {
  preserveSelectedRowKeys?: boolean
  selectedRowKeys?: Key[]
  defaultSelectedRowKeys?: Key[]
  onChange?: (
    selectedRowKeys: Key[],
    selectedRows: T[],
    info: {
      type: RowSelectMethod
    },
    selectedRow: T
  ) => void
  getCheckboxProps?: (record: T) => Partial<Omit<CheckboxProps, 'checked' | 'defaultChecked'>>
  onSelect?: SelectionSelectFn<T>
  /** @deprecated This function is deprecated and should use `onChange` instead */
  onSelectMultiple?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void
  /** @deprecated This function is deprecated and should use `onChange` instead */
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void
  /** @deprecated This function is deprecated and should use `onChange` instead */
  onSelectInvert?: (selectedRowKeys: Key[]) => void
  /** @deprecated This function is deprecated and should use `onChange` instead */
  onSelectNone?: () => void

  // selections?: INTERNAL_SELECTION_ITEM[] | boolean;

  // hideSelectAll?: boolean;
  fixed?: FixedType
  // columnWidth?: string | number;
  columnTitle?: React.ReactNode | ((checkboxNode: React.ReactNode) => React.ReactNode)
  checkStrictly?: boolean
  // renderCell?: (value: boolean, record: T, index: number, originNode: React.ReactNode) => React.ReactNode | RcRenderedCell<T>;
  // onCell?: GetComponentProps<T>;
  checkboxOnly?: boolean
  arrowKey?: boolean
}

export type RecordDoubleClickEventArgs<RecordType> = {
  rowData: RecordType
  rowIndex: number | undefined
  e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
}

export type SourceFilter = {
  key: string
  data: any[]
  loadOptions?: (search: string, callback: (newOptions: any[]) => void) => void
}

export type ContextInfo<RecordType> = {
  rowInfo: {
    rowData: RecordType | null
  }
  event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  item: ItemType
}


export type Presets = Required<ColorPickerProps>['presets'][number];


export type RangeState = {
  rowRange: string[],
  colRange: string[],
  startRowIndex: number | undefined,
  endRowIndex: number | undefined,
  startColIndex: number | undefined,
  endColIndex: number | undefined,
  rowIds: string[],
  colIds: string[]
}

export type Sorter = {
  columnKey: string
  field: string
  order: 'ascend' | 'descend'
}