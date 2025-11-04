import { AuthServices } from './auth';
import { InvoicesService } from './Invoices';
import { VouchersService } from './vouchers';
import { PaymentsService } from './payment';
import { SupplierServices } from './supplier';
import { CashServices } from './cash';
import { MappingService } from './mapping';
import { StudentService } from './student';
import { SystemServices } from './system';
import { UsersServices } from './users';
import { ReceiptService } from './receipt';
import { StudyService } from './study';

export const adminServices = {
  auth: AuthServices,
  invoice: InvoicesService,
  vouchers: VouchersService,
  payments: PaymentsService,
  suppliers: SupplierServices,
  cash: CashServices,
  mapping: MappingService,
  student: StudentService,
  system: SystemServices,
  users: UsersServices,
  receipt: ReceiptService,
  study: StudyService
};
