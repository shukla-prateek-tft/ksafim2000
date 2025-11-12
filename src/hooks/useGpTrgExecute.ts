import { useTranslation } from "react-i18next";
import { useAuth } from "./useAuth";

interface GpTrgExecuteParams {
  formName: string;
  pInsti: string;
  pInstiName: string;
  studyYear: string;
  systemYear: string;
  userName?: string;
  componentName?: string;
}

export const useGpTrgExecute = () => {
  const { t } = useTranslation("common");
  const { user } = useAuth();

  const gpTrgExecute = ({
    formName,
    pInsti,
    pInstiName,
    studyYear,
    systemYear,
    componentName,
  }: GpTrgExecuteParams) => {
    let formNameResolved = formName;
    const startsWithS = formName[3] === "S";
    const startsWithB = formName[2] === "B";

    if (startsWithB) {
      formNameResolved = `MCBH${formName.substring(4, 8)}`;
    }

    const s1 = formNameResolved.substring(4, 8);
    const formNumber = `MC${formNameResolved.substring(4, 6)}`;
    const n1 = Number(s1);
    const windowNumber = n1.toString();

    // Build translated title
    const L_QUERY = t("L_QUERY");
    const formText = t(`T_${formNameResolved}`);
    const s3 = startsWithS
      ? `${windowNumber} - ${L_QUERY} ${formText}`
      : `${windowNumber} - ${formText}`;

    const s4 = `${s3} * ${pInsti} - ${pInstiName} * ${studyYear} * ${systemYear}`;
    const formTitle = s4;

    // Determine edit/view mode (mock logic)
    const editMode = "edit"; // placeholder since real $status logic is backend-driven

    // Mock DB + server info (in real app, fetched via API)
    const dbName = "SampleDB";
    const server = "LocalServer";

    // Prepare notification insert payload (instead of SQL insert)
    const screenNotif = {
      runNumber: new Date().toISOString(),
      dbName,
      screen: componentName ?? formNameResolved,
      insti: pInsti,
      userName: user?.userName ?? null,
      ipAddress: server,
    };

    // Return results
    return {
      formNameResolved,
      formNumber,
      windowNumber,
      formTitle,
      editMode,
      screenNotif,
    };
  };

  return { gpTrgExecute };
}
