import theme from '@/utils/theme';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
`;
const Summary = styled.div<{ $width?: string }>`
  font-weight: bold;
  width: ${props => (props.$width ? `${props.$width}%` : '80%')};
  @media print {
    width: 100%;
    div {
      span {
        height: 10px;
      }
    }
  }
  .remark-box {
    flex-direction: column;
    font-weight: 500;
    color: red;
  }
  .remark-0649 {
    position: absolute;
    right: 5px;
    flex-direction: column;
    font-weight: 500;
    color: red;
  }

  .bottom-remarks {
    position: relative;
  }
  .align-container {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    .input-align {
      margin: 0px 20px;
      div {
        span {
          min-width: 60px;
        }
      }
    }
  }
  .total-inputs {
    left: 14%;
    position: absolute;
    display: flex;
    gap: 70%;
  }
  .total {
    width: 70px;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    margin: 0;
    p {
      margin: 0px;
      display: flex;
      text-align: right;
      div {
        display: flex;
        flex-direction: column;
      }
      span {
        min-width: 100px;
        display: block;
        margin-right: 10px;
        background-color: #d3d2d2;
        border-radius: 5px;
        padding: 2px 5px;
        height: 20px;
        margin-bottom: 4px;
        b {
          width: 40px;
          display: inline-block;
        }
      }
    }
    .hider {
      display: inline !important;
      @media print {
        display: none !important;
      }
    }
  }
`;
const TableContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  background-color: white;
  min-height: calc(45vh - 30px);
  height: calc(45vh - 30px);
  margin: 5px 0px;
  @media print {
    margin-bottom: 10px;
    min-height: auto !important;
  }
  .pointer {
    cursor: pointer;
  }
  .star-box {
    width: 20px;
    height: 20px;
    color: red;
    margin-top: 5px;
  }
  .supplier-align {
    display: flex;
    align-items: center;
    .seperator {
      margin: 0px 5px;
    }
  }
  .disabled {
    background-color: lightgray;
  }
  .print-table-final {
    @media print {
      border: 0 !important;
      outline: 1px solid black !important;
      tr {
        background-color: transparent !important;
        th,
        td {
          border: 0 !important;
          outline: 0 !important;
          background-color: transparent !important;
          color: black !important;
          font-weight: 500 !important;
        }
      }
      thead {
        border: 0 !important;
        font-weight: 600 !important;
        th {
          border: 0 !important;
          border-left: 1px solid black !important;
          font-weight: 600 !important;
          border-bottom: 1px solid black !important;
          &:last-child {
            border-left: 0 !important;
          }
        }
      }
      tbody {
        border: 0 !important;
        tr {
          td {
            padding-right: 3px !important;
            border: 0 !important;
            border-left: 1px solid black !important;
            font-weight: 600 !important;
          }
        }
      }
    }
  }
`;
const DisplayRender = styled.div`
  @media print {
    display: none;
  }
`;
const DisplayPrintRender = styled.div`
  display: none;
  @media print {
    display: block;
    height: 100%;
    @page {
      size: A4 landscape !important;
      margin: 3mm;
      min-height: 130% !important;
    }
  }
  .print-report-table {
    /* margin-bottom: 50px !important; */
    height: auto !important;

    thead,
    tr {
      th {
        padding: 10px 2px !important;
        font-weight: 700;
        font-size: 14px !important;
      }
      th:nth-child(15),
      th:nth-child(12) {
        width: 5% !important;
      }
      th:nth-child(14) {
        width: 7% !important;
      }
      th:nth-child(6) {
        width: 3% !important;
      }
      th:nth-child(3) {
        width: 4% !important;
      }
    }
    tbody {
      tr,
      td {
        padding: 1px !important;
      }
    }
    th,
    td {
      font-weight: 600 !important;
      font-size: 14px !important;
    }
  }
  .pdfbuttonhide {
    display: none;
  }
`;
const ContainerMain = styled.div`
  height: 100%;
  .print-preview {
    padding-bottom: 0;
    justify-content: initial;
  }
  .print-main-font {
    @media print {
      font-size: 15px !important;
    }
  }
  @media print {
    html,
    body {
      min-height: 100%;
    }
    @page {
      size: auto;
      margin: 5mm;
    }
    min-height: 100vh;
    margin: 0 !important;

    .print-actual {
      height: 100% !important;
      overflow: visible !important;
    }
    .th {
      position: relative;
      tr {
        th {
          color: black !important;
        }
      }
    }
    .new-expense {
      min-height: 70vh !important;
      @media print {
        th {
          padding: 0px 5px !important;
        }
        th:nth-child(1),
        th:nth-child(3),
        th:nth-child(12),
        th:nth-child(10) {
          min-width: 75px !important;
          width: 75px !important;
        }
        td:nth-child(2) {
          div {
            span:nth-child(1) {
              width: 50% !important;
              margin-left: 5px;
              overflow-wrap: keep-all !important;
              word-break: keep-all !important;
              white-space: normal !important;
            }
          }
        }
        th:nth-child(10),
        th:nth-child(11) {
          min-width: 85px !important;
          width: 85px !important;
        }
        td {
          overflow-wrap: break-word !important;
          word-break: break-word !important;
          white-space: normal !important;
          padding: 0px 5px !important;
        }
      }
      @page {
        margin: 3mm;
        size: auto;
        width: 150% !important;
        .pageNumber {
          content: counter(page) '/' counter(pages);
        }
      }
    }
  }
  .new-expense-list {
    justify-content: initial;
    height: fit-content;
    .new-expense {
      min-height: 40vh;
    }
    @media print {
      height: auto;
      font-size: 15px !important;
    }
  }
  .footerTextButton {
    height: 35px;
    padding: 10px;
    margin: 0px 4px;
    max-width: 100px;
  }
  .print-preview-invoices {
    margin: 5px 0px 10px 0px;
    @media print {
      height: auto;
      font-size: 14px !important;
    }
  }
`;
const PDFButton = styled.button``;
const Table = styled.table`
  width: 100%;
  /* border-collapse: collapse; */
  border-spacing: 0;
  border-top: 0 !important;
  .sortable {
    cursor: pointer;
  }
  .th {
    position: sticky;
    top: 0px;
    z-index: 2;
    tr {
      th {
        border-right: 1px solid gray;
        padding: 3px;
        border-top: 0 !important;
        @media print {
          outline: 0 !important;
        }
      }
    }

    @media print {
      position: static !important;
    }
  }

  tbody {
    tr {
      td {
        border-right: 1px solid gray;
        border-bottom: 1px solid gray;
        &:last-child {
          border-left: 1px solid gray;
        }
        padding: 3px;
        box-sizing: border-box;

        @media print {
          border: 1px solid black !important;
          outline: 0 !important;
        }
      }
    }
  }
`;

const Th = styled.th`
  background: ${theme.colors.themePrimary};
  color: ${theme.colors.white};
  border-top: 0 !important;
  padding: 7px 5px;
  font-weight: 500;
`;

const Td = styled.td`
  padding: 3px 2px;
  border-top: 0 !important;
  .redStar {
    color: red;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  text-align: center;
`;
export {
  GlobalStyle,
  Input,
  Td,
  Th,
  Table,
  TableContainer,
  ContainerMain,
  Summary,
  PDFButton,
  DisplayPrintRender,
  DisplayRender
};
