export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  year: string;
  location?: string;
  area?: string;
  client?: string;
  architect?: string;
  gallery?: string[];
  features?: string[];
  materials?: string[];
  concept?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "모던 펜트하우스",
    subtitle: "MODERN PENTHOUSE",
    description:
      "도심 속 럭셔리 주거공간의 새로운 정의. 미니멀한 디자인과 최첨단 기술이 조화를 이룬 프리미엄 펜트하우스.",
    image: "/images/projects/building1.jpg",
    category: "주거공간",
    year: "2024",
    location: "서울 강남구",
    area: "320㎡",
    client: "개인 고객",
    architect: "THE SPACE LAB",
    gallery: ["/images/projects/building1.jpg", "/images/projects/building2.jpg", "/images/projects/building3.jpg"],
    features: ["스마트 홈 시스템", "천장 높이 4.5m", "전면 유리창", "루프탑 정원", "홈 오피스 공간"],
    materials: ["노출 콘크리트", "천연 대리석", "원목 마감", "스틸 프레임"],
    concept:
      "도시적 세련미와 자연의 조화를 추구한 공간으로, 거주자의 라이프스타일을 극대화할 수 있는 유연하고 개방적인 구조를 구현했습니다. 최고급 자재와 첨단 기술을 활용하여 편안함과 럭셔리함을 동시에 만족시키는 현대적 주거 공간을 완성했습니다.",
  },
  {
    id: 2,
    title: "컨템포러리 오피스",
    subtitle: "CONTEMPORARY OFFICE",
    description: "창의성과 효율성을 극대화한 미래형 업무공간. 친환경 소재와 스마트 시스템이 결합된 차세대 오피스.",
    image: "/images/projects/building2.jpg",
    category: "상업공간",
    year: "2024",
    location: "서울 마포구",
    area: "1,200㎡",
    client: "테크 스타트업",
    architect: "THE SPACE LAB",
    gallery: ["/images/projects/building2.jpg", "/images/projects/building4.jpg", "/images/projects/building5.jpg"],
    features: ["오픈 플랜 레이아웃", "협업 공간", "카페테리아", "루프탑 테라스", "무선 충전 시설"],
    materials: ["재생 목재", "친환경 카펫", "LED 조명", "강화유리"],
    concept:
      "창의성과 협업을 촉진하는 유연한 업무환경을 조성하여, 변화하는 업무 패턴에 대응할 수 있는 적응형 오피스 공간을 설계했습니다. 지속가능한 소재와 에너지 효율적인 시스템을 도입하여 환경 친화적이면서도 생산성 높은 근무환경을 구현했습니다.",
  },
  {
    id: 3,
    title: "아틀리에 스튜디오",
    subtitle: "ATELIER STUDIO",
    description: "예술가를 위한 영감의 공간. 자연광을 최대한 활용하고 창작 활동에 최적화된 아틀리에 스튜디오.",
    image: "/images/projects/building3.jpg",
    category: "문화공간",
    year: "2023",
    location: "경기 파주시",
    area: "450㎡",
    client: "아티스트 그룹",
    architect: "THE SPACE LAB",
    gallery: ["/images/projects/building3.jpg", "/images/projects/building1.jpg", "/images/projects/building6.jpg"],
    features: ["북측 채광", "더블 하이트 천장", "작품 전시 공간", "작업용 싱크대", "수납 시설"],
    materials: ["적벽돌", "철골 구조", "폴리카보네이트", "콘크리트 바닥"],
    concept:
      "예술가의 창작 활동에 최적화된 환경을 조성하기 위해 자연광의 질과 양을 세심하게 계획했습니다. 공간의 가변성과 기능성을 높여 다양한 예술 장르에 대응할 수 있는 유연한 스튜디오 공간을 완성했습니다.",
  },
  {
    id: 4,
    title: "어반 레지던스",
    subtitle: "URBAN RESIDENCE",
    description: "도시 생활의 새로운 패러다임. 프라이버시와 커뮤니티를 동시에 만족시키는 혁신적인 주거 복합시설.",
    image: "/images/projects/building4.jpg",
    category: "주거공간",
    year: "2023",
    location: "서울 용산구",
    area: "2,800㎡",
    client: "부동산 개발사",
    architect: "THE SPACE LAB",
    gallery: ["/images/projects/building4.jpg", "/images/projects/building2.jpg", "/images/projects/building5.jpg"],
    features: ["커뮤니티 라운지", "피트니스 센터", "옥상 정원", "키즈 플레이룸", "24시간 컨시어지"],
    materials: ["고급 석재", "목재 클래딩", "대형 유리창", "스틸 프레임"],
    concept:
      "현대 도시 주거의 새로운 모델을 제시하며, 개인의 프라이버시를 보장하면서도 커뮤니티 공간을 통해 소통과 교류가 가능한 복합 주거시설을 설계했습니다. 도시적 맥락을 고려한 건축 언어로 주변 환경과 조화를 이루도록 계획했습니다.",
  },
  {
    id: 5,
    title: "그린 커머셜",
    subtitle: "GREEN COMMERCIAL",
    description: "지속가능성을 추구하는 친환경 상업공간. ESG 경영철학이 반영된 미래지향적 건축물.",
    image: "/images/projects/building5.jpg",
    category: "상업공간",
    year: "2023",
    location: "인천 송도구",
    area: "3,500㎡",
    client: "글로벌 기업",
    architect: "THE SPACE LAB",
    gallery: ["/images/projects/building5.jpg", "/images/projects/building3.jpg", "/images/projects/building6.jpg"],
    features: ["태양광 패널", "빗물 수집 시스템", "수직 정원", "자연 환기 시스템", "LEED 인증"],
    materials: ["재활용 강재", "친환경 단열재", "Low-E 유리", "자연석"],
    concept:
      "지속가능한 건축의 모범 사례를 제시하기 위해 환경 친화적 소재와 에너지 절약 기술을 적극 도입했습니다. 건물 생애주기 전반에 걸쳐 환경 영향을 최소화하면서도 사용자의 쾌적성과 효율성을 극대화한 미래형 상업시설을 구현했습니다.",
  },
];

export function getProjectById(id: number): ProjectData | null {
  return projectsData.find((project) => project.id === id) || null;
}

export function getRelatedProjects(currentId: number, limit: number = 3): ProjectData[] {
  return projectsData.filter((project) => project.id !== currentId).slice(0, limit);
}

export function getPrevNextProjects(currentId: number): { prev: ProjectData | null; next: ProjectData | null } {
  const currentIndex = projectsData.findIndex((project) => project.id === currentId);

  return {
    prev: currentIndex > 0 ? projectsData[currentIndex - 1] : null,
    next: currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null,
  };
}
