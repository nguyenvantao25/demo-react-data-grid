export const defaultWidth: number = 100
export const defaultRowHeight: number = 35

export type IOperator = {
  value: string
  label: string
  key: string
}
export const numberOperator: IOperator[] = [
  { value: 'equal', label: 'Equal', key: '==' },
  { value: 'greaterthan', label: 'Greater than', key: '>' },
  { value: 'greaterthanorequal', label: 'Greater than or equal', key: '>=' },
  { value: 'lessthan', label: 'Less than', key: '<' },
  { value: 'lessthanorequal', label: 'Less than or equal', key: '<=' },
  { value: 'notequal', label: 'Not equal', key: '!=' }
]

export const stringOperator: IOperator[] = [
  { value: 'startswith', key: '_=', label: 'Starts with' },
  { value: 'endswith', key: '|=', label: 'Ends with' },
  { value: 'contains', key: '~=', label: 'Contains' },
  { value: 'equal', key: '==', label: 'Equal' },
  { value: 'notequal', key: '!=', label: 'Not equal' }
]

export const dateOperator: IOperator[] = [
  { value: 'equal', key: '==', label: 'Equal' },
  { value: 'notequal', key: '!=', label: 'Not equal' },
  { value: 'greaterthan', key: '>', label: 'Greater than' },
  { value: 'lessthan', key: '<', label: 'Less than' }
]

export const dateTimeOperator: IOperator[] = [
  { value: 'equal', key: '==', label: 'Equal' },
  { value: 'notequal', key: '!=', label: 'Not equal' },
  { value: 'greaterthan', key: '>', label: 'Greater than' },
  { value: 'lessthan', key: '<', label: 'Less than' }
]
export const booleanOperator: IOperator[] = [
  { value: 'equal', key: '==', label: 'Equal' },
  { value: 'notequal', key: '!=', label: 'Not equal' }

]

export const translateOption = (options: IOperator[], t: any) => {
  if (!t) {
    return options
  }

  return options.map((it: any) => (
    {...it, label: t(it.label)}
  ))

}

export const transferFontSize: any = {
  6: 8,
  7: 9,
  8: 11,
  9: 12,
  10: 13,
  11: 15,
  12: 16,
  13: 17,
  14: 19,
  15: 20,
  16: 21,
  17: 23,
  18: 24,
  19: 25,
  20: 27,
  21: 28,
  22: 29,
  24: 32,
  26: 35,
  27: 36,
  28: 37

}

export const defaultDateFormat = 'd/m/Y'
export const defaultDateTimeFormat = 'd/m/Y H:i'
export const defaultTimeFormat = 'H:i'
export const defaultPageSizes = [20, 30, 50, 100]

export const alignToFlex: any = {
  center: 'center',
  left: 'start',
  right: 'end'
}

export const optionsSize = [
  {
    label: 'letter',
    value: 'letter',
    width: 21.59,
    height: 27.94
  },
  {
    label: 'A3',
    value: 'a3',
    width: 27.94,
    height: 42
  },
  {
    label: 'A4',
    value: 'a4',
    width: 21,
    height: 29.7
  }
]

export const paperSize = {
  a4: {
    width: 21,
    height: 29.7
  },
  a3: {
    width: 27.94,
    height: 42
  },
  letter: {
    width: 21.59,
    height: 27.94
  }
}

export const optionFont = [
  {
    value: 'Times New Roman',
    label: 'Times New Roman'
  },
  {
    value: 'Calibri',
    label: 'Calibri (Body)'
  }
]
// portrait' | 'landscape'
export const optionsPaperOrientation: any[] = [
  {
    value: 'portrait',
    label: 'portrait'
  },
  {
    value: 'landscape',
    label: 'landscape'
  }
]

export const optionFontSize = [
  {
    value: 8,
    label: '8'
  },
  {
    value: 9,
    label: '9'
  },
  {
    value: 10,
    label: '10'
  },
  {
    value: 11,
    label: '11'
  },
  {
    value: 12,
    label: '12'
  },
  {
    value: 13,
    label: '13'
  },
  {
    value: 14,
    label: '14'
  },
  {
    value: 16,
    label: '16'
  },
  {
    value: 18,
    label: '18'
  },
  {
    value: 24,
    label: '24'
  },
  {
    value: 36,
    label: '36'
  },
  {
    value: 48,
    label: '48'
  }
]


/**
 * Sort order for BaseTable
 */
const SortOrder = {
  /**
   * Sort data in ascending order
   */
  ascend: 'Ascending',
  /**
   * Sort data in descending order
   */
  descend: 'Descending'
}

export default SortOrder


export const valueToBoolean = {
  true: true,
  false: false,
  1: true,
  0: false
}

export const booleanToValue = {
  true: 1,
  false: 0
}
