import styled, { css } from 'styled-components';
import { DataTable, DialogBox } from '@/components';
import { BottomToolBar, Input } from '@/components';

const Container = styled.div`
  padding: 0px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  .actionButton {
    padding: 10px 10px;
    font-weight: 500;
    margin: 0px 5px;
  }
  .marginRight {
    margin-right: 18px;
  }
  .conatiner-dialog-table {
    table {
      position: relative !important;
      thead {
        top: 0px !important;
        position: sticky !important;
        tr {
        }
        th {
          border: 0 !important;
          border-right: 1px solid gray !important;
        }
      }
      tbody {
        tr {
          border-left: 1px solid gray !important;
          width: 95% !important;
        }
      }
    }
  }
`;

const StyledDialogBox = styled(DialogBox)`
  max-height: fit-content;
  .suppier-select {
    min-height: 60vh;
  }
  .supplier-header {
    justify-content: space-between;
  }
  .suppier-input-container {
    width: auto;
  }
  .supplier-flex {
    width: auto;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const CommonLabelStyles = css`
  label {
    font-weight: 400;
    padding-top: 4px;
    min-width: 70px;
  }
`;
const StyledInput = styled(Input)`
  width: 280px;
  ${CommonLabelStyles}
`;

const StyledSmallInput = styled(Input)`
  width: 180px;
  ${CommonLabelStyles}
`;

const StyledMediumInput = styled(Input)`
  width: 200px;
  ${CommonLabelStyles}
`;

const StyledToolBar = styled(BottomToolBar)`
  width: 100%;
  margin-top: 5px;
  padding: 0px;
`;

const Fieldset = styled.fieldset`
  border: 0.5px solid gray;
  border-radius: 5px;
  margin-top: 4px;
  padding: 10px;
  legend {
    color: ${({ theme }) => theme.colors.themePrimary};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 600;
  }
  margin-bottom: 5px;
`;
const TableContainer = styled(DataTable)`
  .main-table {
    height: 40vh;
  }
  .table {
    height: fit-content;
  }
  thead {
    top: -0.5px !important;
    tr {
      th {
        border: 1px solid gray !important;
      }
    }
  }

  tbody {
    tr {
      border-right: 1px solid gray !important;
      td {
        border-right: 1px solid gray !important;
        text-align: right !important;
      }
    }
  }
  .tableEdit {
    height: auto;
  }
`;
export {
  StyledDialogBox,
  StyledInput,
  StyledToolBar,
  Container,
  FlexBox,
  StyledSmallInput,
  Fieldset,
  StyledMediumInput,
  TableContainer
};
