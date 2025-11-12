import { useTranslation } from "react-i18next";

// Helper: Uniface-style substring (1-based indexing)
const substr = (str: string, start: number, length: number): string =>
  str.substring(start - 1, start - 1 + length);

// Helper: Convert string to number
const toNumber = (str: string): number => parseInt(str, 10);

// Mock data retrieval (replace with real data fetch if needed)
const getItem = () => ({
  s2: "2024/2025",
  study_year: "2024",
  p_study_year: "2025",
});

export function useFormTitle() {
  const { t } = useTranslation();

  const generateFormTitle = (
    formname: string,
    p_insti: string,
    p_insti_name: string,
    p_system_year: string
  ): string => {
    let form_name = formname;
    let s1: string, form_number: string, n1: number, window_number: string;
    let s2: string, s3: string, s4: string, formtitle: string;

    if (substr(formname, 4, 1) === "S") {
      if (substr(formname, 3, 1) === "B") {
        form_name = "MCBH" + substr(formname, 5, 4);
      } else {
        const specialForms = [
          "MCSS0148",
          "MCES0425",
          "MCES0411",
          "MCIS0319",
          "MCIS0370",
          "MCIS0698",
          "MCFS1327",
        ];
        if (specialForms.includes(formname)) {
          form_name = formname;
        }
      }
    }

    s1 = substr(form_name, 5, 8);
    form_number = "MC" + substr(form_name, 5, 4);
    n1 = toNumber(s1);
    window_number = String(n1);

    const data = getItem();
    s2 = data.s2;

    if (substr(formname, 4, 1) === "S") {
      s3 = `${window_number}-${t("L_QUERY")} ${t(`T_${form_name}`)}`;
    } else {
      s3 = `${window_number}-${t(`T_${form_name}`)}`;
    }

    s4 = `${s3}*${p_insti}-${p_insti_name}*${s2}*${p_system_year}`;
    formtitle = s4;

    return formtitle;
  };

  return { generateFormTitle };
}
