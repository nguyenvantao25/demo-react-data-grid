import type { CalculatedColumn, CalculatedColumnOrColumnGroup, Maybe } from '../types';

export * from './colSpanUtils';
export * from './domUtils';
export * from './eventUtils';
export * from './keyboardUtils';
export * from './renderMeasuringCells';
export * from './selectedCellUtils';
export * from './styleUtils';

export const { min, max, floor, sign, abs } = Math;

export function assertIsValidKeyGetter<R, K extends React.Key>(
  keyGetter: Maybe<(row: NoInfer<R>) => K>
): asserts keyGetter is (row: R) => K {
  if (typeof keyGetter !== 'function') {
    throw new Error('Please specify the rowKeyGetter prop to use selection');
  }
}

export function clampColumnWidth<R, SR>(
  width: number,
  { minWidth, maxWidth }: CalculatedColumn<R, SR>
): number {
  width = max(width, minWidth);

  // ignore maxWidth if it less than minWidth
  if (typeof maxWidth === 'number' && maxWidth >= minWidth) {
    return min(width, maxWidth);
  }

  return width;
}

export function getHeaderCellRowSpan<R, SR>(
  column: CalculatedColumnOrColumnGroup<R, SR>,
  rowIdx: number
) {
  return column.parent === undefined ? rowIdx : column.level - column.parent.level;
}


export function removeDuplicatesBetweenArrays<T extends Record<string, any>>(
  arr1: T[],
  arr2: T[],
  key: keyof T
): T[] {
  // const set1 = new Set(arr1.map(item => item[key]));
  // const set2 = new Set(arr2.map(item => item[key]));

  // const onlyInArr1 = arr1.filter(item => !set2.has(item[key]));
  // const onlyInArr2 = arr2.filter(item => !set1.has(item[key]));

  // return [...onlyInArr1, ...onlyInArr2];

    const map = new Map<any, T>();

  // Ưu tiên arr1
  arr1.forEach(item => map.set(item[key], item));

  // Thêm arr2 nhưng không ghi đè arr1
  arr2.forEach(item => {
    if (!map.has(item[key])) {
      map.set(item[key], item);
    }
  });

  return Array.from(map.values());
}