import styled from 'styled-components';
import { Button, DataTable } from '@/components';

interface TableContainerProps {
  $isEditable?: boolean;
}

const TelePhoneInput = styled.div`
  display: flex;
`;

const Spacer = styled.span`
  border-left: 1px solid gray;
  margin: 0px 5px;
`;

// Layout Components
const PaymentContainer = styled.div<{
  $isTypeSelection: boolean;
  $height?: any;
}>`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  padding-bottom: ${props => (props.isTypeSelection ? '10px' : '85px')};
  justify-content: space-between;
  .main-box {
    display: flex;
    flex-direction: column;
    height: 70vh;
  }
  .bottom-relative {
    position: initial !important;
  }
  .bottom {
    margin-top: 15px;
    .table-container {
      max-height: ${props => (props.$height ? `${props.$height}vh` : '20vh')};
    }
  }
  .table-fieldset {
    padding: 0;
  }
  .table-one {
    flex: 0 0 auto;
    display: flex;
  }
  .table-two {
    flex: 1 1 auto;
    overflow-y: auto;
    display: flex;
  }
  .table-bottom {
    max-height: auto;
    overflow: initial;
  }
  .otherButton {
    width: calc(100% - 4px);
    margin: 0px 2px;
    cursor: default;
    // background-color:white;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.theme_primary};
    opacity: 1;
    border-radius: 5px 5px 0px 0px;
    border: 1px solid black;
    border-bottom: 0;
    &:hover {
      opacity: 1;
    }
  }
  .print {
    height: 65vh;
  }
  .dummy {
    background-color: transparent;
    color: transparent;
    border: 0;
    outline: 0;
    box-shadow: none;
    cursor: default;
    margin-bottom: 5px;
  }
  .print-header {
    display: flex;
    width: calc(100% - 10px);
    justify-content: space-between;
    padding: 5px 5px;
    font-weight: 500;
    @media print {
      font-size: 15px !important;
    }
  }

  .print-footer {
    border: 0;
    margin-top: 15px;
  }
  .print-footer-summary {
    @media print {
      margin-top: 0px !important;
    }
  }
  .center {
    @media print {
      font-size: 15px !important;
    }
    text-align: center;
    padding: 5px 0px;
    background-color: lightgray;
    border-radius: 5px;
    margin: 5px 0px;
    .second-title {
      margin-top: 10px;
      @media print {
        margin-top: 0px !important;
      }
    }
  }

  .report {
    padding: 10px 0px !important;
    @media print {
      border-bottom: 1px solid black;
      font-weight: 700;
      font-size: 14px;
      padding-bottom: 20px !important;
    }
  }
  @media print {
    height: fit-content;
    .print-header {
      margin-top: 0px;
    }
    justify-content: initial;

    .print-hide {
      display: none !important;
    }

    .print {
      height: auto !important;
      overflow: visible !important;
      thead,
      tr,
      th {
        background-color: black;
        color: white;
      }
      thead,
      tbody,
      tr,
      td,
      th,
      div,
      * {
        font-size: 11px !important;
        color: black;
      }
    }

    .print-footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border: 0;
      padding: 10px;
      background-color: white; /* Optional, depending on your design */
      @media print {
        position: relative;
        top: 100px;
      }
    }
    th,
    td {
      border: 0 !important;
      outline: 0.5px solid black !important;
    }
  }
  .no-border {
    table {
      th,
      td {
        border-right: 1px solid gray !important;
        border-top: 0 !important;
      }
    }
    @media print {
      table {
        thead {
          tr {
            th {
              border-bottom: 1px solid black !important;
              border-right: 0 !important;
              border-left: 1px solid black !important;
            }
            th:last-child {
              border-left: 0 !important;
            }
          }
        }
        td {
          border: 0 !important;
          outline: 0 !important;
        }
      }
    }
  }
  .print-font {
    @media print {
      thead th div div,
      tbody td div,
      tbody td div span {
        font-size: 15px !important;
      }
    }
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
`;

const FlexContainerMain = styled.div`
  display: flex;
  width: 100%;
`;

const FlexContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 2px;
`;
const DummyBox = styled.div`
  display: flex;
  flex: 1;
  background-color: red;
`;
const FlexContainer = styled(FlexContainerMain)`
  display: flex;
  height: 100%;
`;

const FlexContainerButton = styled(FlexContainer)`
  width: 25%;
`;

const FlexContainerWrap = styled.div`
  display: flex;
`;

const Aligner = styled.div``;

const MainActionButtonsContainer = styled(FlexContainerMain)`
  margin: 0 10px 0 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: -22px;
  .aligner {
    margin-bottom: 5px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 60%;
`;

const InputSection = styled.div<{ $alignment?: boolean }>`
  display: flex;
  justify-content: ${props => (props.$alignment ? 'space-between' : 'flex-end')};
  gap: 10px;
  align-items: center;

  .input,
  .inputSmall {
    align-items: center;
    margin-bottom: 3px;
    label {
      min-width: 70px;
      font-weight: 500;
    }
  }
  .input {
    width: 50%;
  }
  .inputSmall {
    width: 49%;
  }
`;

const CheckboxSection = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .checkbox-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.xSmall};
    font-weight: 500;
  }
`;

const ActionSection = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  .actionButton {
    padding: 10px 10px;
    font-weight: 500;
    margin: 0px 5px;
  }
`;

const TotalContainer = styled(FlexContainerMain)`
  padding: 0px 85px;
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 6px;

  .totalInput {
    width: 12%;
    align-items: center;
  }
`;

const TableContainer = styled(DataTable)<TableContainerProps>`
  table {
    border: 1px solid #b5b1b1 !important;
    border-top: 0px !important;
    border-radius: 5px;
  }
  .table-body {
    tr {
      td:nth-child(11),
      td:nth-child(12) {
        width: 6%;
        align-items: center;
      }
      td {
        text-align: right;
        padding: 2px 5px !important;
      }
    }
  }
  .bank {
    width: 35%;
  }
  .bank-name {
    width: 65%;
  }
  @media print {
    table {
      width: 100% !important;
      table-layout: fixed;
      margin: 0 !important;
      padding: 0 !important;
    }

    .table-header {
      display: table-header-group;
    }

    thead {
      display: table-header-group;
      background-color: black;
      color: white;
    }

    thead:after {
      content: '';
      display: block;
    }

    tr {
      page-break-inside: avoid !important;
      background-color: black;
      color: white;
    }

    td,
    th {
      page-break-inside: avoid !important;
      word-break: break-word;
      overflow-wrap: break-word;
    }

    td:nth-child(1),
    th:nth-child(1),
    td:nth-child(3),
    th:nth-child(3),
    td:nth-child(4),
    th:nth-child(4),
    td:nth-child(5),
    th:nth-child(5),
    td:nth-child(7),
    th:nth-child(7) {
      width: 35px !important;
      max-width: 35px !important;
      text-align: center;
    }

    td:nth-child(2),
    th:nth-child(2),
    td:nth-child(6),
    th:nth-child(6) {
      width: 170px !important;
      max-width: 170px !important;
    }
    td:nth-child(8),
    th:nth-child(8) {
      width: 70px !important;
      max-width: 70px !important;
    }
    td:nth-child(n + 7),
    th:nth-child(n + 7) {
      // width: auto !important;
    }

    body {
      width: 100%;
      overflow: visible;
    }
  }
`;

const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  width: auto;
  padding: 2px 5px;
  border-radius: 2px;
  margin: 0px 2px;
`;

const ToolbarWrapper = styled.div`
  padding: 0;
  width: 100%;
  margin-top: 7px;
  position: fixed;
  bottom: 0;
  height: 70px;
  right: 0;
  background-color: #f6f6f6;

  .bottomToolBar {
    padding: 20px 20px 0px 20px;
  }
  .pagination-container{
    width: 16%;
  }
  .toolBarPrint {
    padding: 0;
    margin: 0;
    position: fixed;
    padding: 10px;
    bottom: 0;
    right: 0;
    width: 98%;
  }
  .greenColor {
    color: green;
  }
`;

const CustomRow = styled.tr<{ $isSelected: boolean }>`
  background-color: ${props => (props.$isSelected ? '#f2f2f2' : 'transparent')};
  cursor: pointer;
`;

const Fieldset = styled.fieldset`
  border: 0.5px solid gray;
  border-radius: 5px;
  @media print {
    border: 0;
  }
  .textColor {
    color: ${({ theme }) => theme.colors.themePrimary};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 700;
  }

  .print-flex {
    width: auto;
    margin-bottom: 5px;
    .aligner {
      display: flex;
      .alignerLabel {
        width: 100px;
        white-space: nowrap;
        margin-left: 18px;
      }
      .alignerLabel2 {
        width: 100px;
        white-space: nowrap;
        margin-left: 14px;
      }
    }
    .bottomText {
      padding-top: 10px;
    }
  }
  .main {
    padding: 0;
  }
`;

const TableBox = styled(DataTable)`
  .table {
    border-radius: 5px !important;
  }
  thead {
    tr {
      th {
        border: 1px solid gray !important;
        border-top: 0 !important;
      }
    }
  }

  tbody {
    tr {
      border-right: 1px solid gray !important;
      td {
        border: 1px solid gray !important;
        text-align: right !important;
      }
    }
  }
`;
export {
  PaymentContainer,
  HeaderWrapper,
  FlexContainerMain,
  FlexContainer,
  InputSection,
  CheckboxSection,
  ActionSection,
  MainActionButtonsContainer,
  TableContainer,
  StyledButton,
  ToolbarWrapper,
  Aligner,
  CustomRow,
  FlexContainerColumn,
  FlexContainerWrap,
  TotalContainer,
  FlexContainerButton,
  InputContainer,
  TelePhoneInput,
  Spacer,
  Fieldset,
  DummyBox,
  TableBox
};
