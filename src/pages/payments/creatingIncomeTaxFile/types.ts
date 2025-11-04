export interface GetIncomeTaxFileResponse {
  success: boolean;
  message: string;
  data: number;
}

export interface CreatingIncomeTaxFileUIProps {
  renderActionItems: () => JSX.Element | null;
  data?: number;
  loading?: boolean;
}
export interface CreatingIncomeTaxFileProps {
  isOpen: boolean;
  onClose: () => void;
}