export interface BankStatementCutFilterType {
    bankAcc: string;
    merge: string;
    valueDate: { from: string; to: string };
    document: string;
    creditDebit: { from: string; to: string };
}