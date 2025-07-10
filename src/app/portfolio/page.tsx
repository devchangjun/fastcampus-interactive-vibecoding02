import PortfolioListClient from "./PortfolioListClient";
import { projectsData } from "../lib/projectData";

export const metadata = {
  title: "포트폴리오 - 더 스페이스 랩",
  description: "더 스페이스 랩의 혁신적이고 고급스러운 건축 프로젝트들을 만나보세요.",
};

export default function PortfolioPage() {
  return <PortfolioListClient projects={projectsData} />;
}
