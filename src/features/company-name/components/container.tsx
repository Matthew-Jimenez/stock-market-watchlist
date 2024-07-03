import { useCompany } from "../api/get-company";
import Component from "./component";

interface Props {
  symbol?: string;
}

const CompanyNameContainer = ({ symbol }: Props) => {
  const { data } = useCompany({ symbol });

  return <Component name={data?.companyName} />;
};

export default CompanyNameContainer;
