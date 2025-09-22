import { css } from '@linaria/core';

export const cell = css`
  @layer rdg.Cell {
    /* max-content does not work with size containment
     * dynamically switching between different containment styles incurs a heavy relayout penalty
     * Chromium bug: at odd zoom levels or subpixel positioning,
     * layout/paint/style containment can make cell borders disappear
     *   https://issues.chromium.org/issues/40840864
     */
    position: relative; /* needed for absolute positioning to work */
    padding-block: 0;
    padding-inline: 8px;
    border-inline-end: var(--rdg-border-width) solid var(--rdg-border-color);
    border-block-end: var(--rdg-border-width) solid var(--rdg-border-color);
    grid-row-start: var(--rdg-grid-row-start);
    align-content: center;
    /* background-color: inherit; */
    background-color: #ffffff;

    /* white-space: nowrap; */
    /* overflow: clip; */
    /* text-overflow: ellipsis; */
    outline: none;
  

    &[aria-selected='true'] {
      outline: var(--rdg-selection-width) solid var(--rdg-selection-color);
      outline-offset: calc(var(--rdg-selection-width) * -1);
    }

    &.rc-grid-cell-wrap {
      white-space: normal;
      word-break: break-all;
      overflow: hidden;
    }
    &.rc-grid-cell-ellipsis {
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
      overflow: hidden;
    }


  }
`;

export const cellClassname = `rdg-cell ${cell}`;

export const cellFrozenLeft = css`
  @layer rdg.Cell {
    position: sticky;
    /* Should have a higher value than 0 to show up above unfrozen cells */
    z-index: 1;

    /* Add box-shadow on the last frozen cell */
    &:nth-last-child(1 of &) {
      box-shadow: var(--rdg-cell-frozen-box-shadow);
    }

    &.rc-grid-cell-wrap {
      overflow: unset;
      .cell-content {
         white-space: normal;
         word-break: break-all;
         overflow: hidden;
      }
    }


     &.rc-grid-cell-ellipsis {
      overflow: unset;
      .cell-content {
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
        overflow: hidden;
      }
    }

    
  }
`;

export const cellFrozenRight = css`
  @layer rdg.Cell {
    position: sticky;
    /* Should have a higher value than 0 to show up above unfrozen cells */
    z-index: 1;

    /* Add box-shadow on the last frozen cell */
    &:nth-child(1 of &) {
      /* box-shadow: var(--rdg-cell-frozen-right-box-shadow); */
      &::after {
         position: absolute;
            top: 0;
            bottom: -1px;
            left: 0;
            width: 30px;
            transform: translateX(-100%);
            transition: box-shadow 0.3s;
            content: "";
            pointer-events: none;
            box-shadow: inset -10px 0 8px -8px rgba(5, 5, 5, 0.09);
      };
        &::before {
            content: "";
            position: absolute;
            inset-block: 0;
            inset-inline-start: -1px;
            border-inline-start: 1px solid #e0e0e0;
          }
    }

     &.rc-grid-cell-wrap {
      overflow: unset;
      .cell-content {
         white-space: normal;
         word-break: break-all;
         overflow: hidden;
      }
    }


     &.rc-grid-cell-ellipsis {
      overflow: unset;
      .cell-content {
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
        overflow: hidden;
      }
    }
  }
`;


export const cellFrozenClassname = `rdg-cell-frozen rdg-cell-frozen-left ${cellFrozenLeft}`;
export const cellFrozenRightClassname = `rdg-cell-frozen rdg-cell-frozen-right ${cellFrozenRight}`;

const cellDragHandle = css`
  @layer rdg.DragHandle {
    --rdg-drag-handle-size: 8px;
    z-index: 0;
    cursor: move;
    inline-size: var(--rdg-drag-handle-size);
    block-size: var(--rdg-drag-handle-size);
    background-color: var(--rdg-selection-color);
    place-self: end;

    &:hover {
      --rdg-drag-handle-size: 16px;
      border: 2px solid var(--rdg-selection-color);
      background-color: var(--rdg-background-color);
    }
  }
`;

export const cellDragHandleFrozenClassname = css`
  @layer rdg.DragHandle {
    z-index: 1;
    position: sticky;
  }
`;

export const cellDragHandleClassname = `rdg-cell-drag-handle ${cellDragHandle}`;
