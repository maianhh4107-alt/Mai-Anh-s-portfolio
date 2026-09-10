export interface EducationItem {
  id?: string;
  school: string;
  period: string;
  major?: string;
  degree?: string;
  gpa?: string;
  ielts?: string;
  badge?: string;
  details?: string;
}

export interface WorkItem {
  id: string;
  company: string;
  year: string;
  role: string;
  color: string;
  folderColor?: string;
  tasks: string[];
}

export interface ExtracurricularItem {
  id?: string;
  name?: string;
  club?: string;
  period: string;
  role: string;
  crew?: string;
  description?: string;
  events?: string[];
  projects?: string[];
}

export interface PerformanceVideo {
  id: string;
  title: string;
  tag: string;
  year: string;
  participation: string;
  youtubeUrl: string;
  embedUrl: string;
  videoId: string;
  posterBg: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  year: string;
  level: string;
  iconType: string;
  badgeColor: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  level: string;
  items: string[];
}

export const PERSONAL_INFO = {
  name: "Nguyễn Mai Anh",
  koreanName: "응우옌 마이 안 ♡",
  birthDate: "04/10/2007",
  email: "maianhh4107@gmail.com",
  phone: "0339036607",
  address: "Thanh Xuân, Hà Nội",
  location: "Thanh Xuân, Hà Nội",
  statusMessage: "welcome to my little internet world ♡",
  todayMood: "Tập trung học tập & hoạt động ngoại khóa",
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "edu-ftu",
    school: "Trường Đại học Ngoại Thương",
    period: "2025 - 2029",
    major: "Kinh tế quốc tế",
    degree: "Chuyên ngành Kinh tế quốc tế",
    gpa: "3.83 / 4.0",
    badge: "Sinh viên FTU",
    details: "Đại học Ngoại Thương Hà Nội — Khóa 2025–2029 (GPA: 3.83 / 4.0)",
  },
  {
    id: "edu-nc",
    school: "THPT Nhân Chính",
    period: "2022 - 2025",
    degree: "Bằng Tốt nghiệp THPT",
    gpa: "9.5 / 10",
    badge: "Tốt nghiệp Xuất sắc",
    details: "Học sinh giỏi THPT Nhân Chính (Thanh Xuân, Hà Nội) — GPA 9.5 / 10",
  },
];

export const WORK_LIST: WorkItem[] = [
  {
    id: "gtp-media",
    company: "GTP MEDIA",
    year: "2025",
    role: "Booking KOL, KOC",
    color: "#ff3366",
    folderColor: "#ffecf1",
    tasks: [
      "Phụ trách tìm kiếm, liên hệ các KOL, KOC thích hợp để review sản phẩm của nhãn hàng.",
      "Set up gian hàng TikTokShop, Shopee.",
      "Quay video cho KOC.",
      "Phụ trách đăng bài, content trên fanpage của nhãn hàng.",
    ],
  },
  {
    id: "np-education",
    company: "NP EDUCATION",
    year: "2026",
    role: "Quản lý lớp học",
    color: "#3b82f6",
    folderColor: "#eff6ff",
    tasks: [
      "Điểm danh học sinh.",
      "Gửi báo cáo học tập sau mỗi buổi học cho phụ huynh.",
      "Kết nối giữa phụ huynh và trung tâm.",
      "Làm tài liệu cho lớp học.",
      "Giúp đỡ khi học sinh, giáo viên cần.",
    ],
  },
];

export const EXTRACURRICULAR_LIST: ExtracurricularItem[] = [
  {
    id: "extra-1",
    name: "Red Dancing Club (THPT Nhân Chính)",
    club: "RED DANCING CLUB",
    period: "2022 - 2025",
    role: "Thành viên Ban Chuyên môn",
    description: "Phụ trách chuyên môn vũ đạo, biên đạo và biểu diễn trong các sự kiện thường niên, Club Fair chào đón tân học sinh (2023, 2024, 2025).",
  },
  {
    id: "extra-2",
    name: "Concert “Ký hoạ” (2022) & Tết Quý Mão (2023)",
    club: "RED DANCING CLUB",
    period: "2022 - 2023",
    role: "Nghệ sĩ biểu diễn & Ban chuyên môn",
    description: "Tham gia dàn dựng tiết mục và biểu diễn chính thức trong Concert Ký hoạ và video showcase Tết Quý Mão.",
  },
];

export const EXTRACURRICULAR = EXTRACURRICULAR_LIST[0];

export const PERFORMANCE_VIDEOS: PerformanceVideo[] = [
  {
    id: "stage-01",
    title: "RED DANCING CLUB / PERFORMANCE",
    tag: "OFFICIAL CLUB STAGE",
    year: "2022 - 2025",
    participation: "Ban Chuyên môn • Vũ công biểu diễn",
    youtubeUrl: "https://youtu.be/OxeWw4fR3vE?si=5K-m8iouQcMU--WX",
    embedUrl: "https://www.youtube-nocookie.com/embed/OxeWw4fR3vE",
    videoId: "OxeWw4fR3vE",
    posterBg: "from-pink-500 via-rose-500 to-red-600",
  },
  {
    id: "stage-02",
    title: "THE FIRST KONTUM DANCE CREW",
    tag: "CREW SHOWCASE",
    year: "2022 - 2025",
    participation: "Thành viên The First Kontum Dance Crew",
    youtubeUrl: "https://youtu.be/I--_mFivAaE?si=eckNb5A_cK_ocKIi",
    embedUrl: "https://www.youtube-nocookie.com/embed/I--_mFivAaE",
    videoId: "I--_mFivAaE",
    posterBg: "from-cyan-500 via-sky-500 to-blue-600",
  },
  {
    id: "stage-03",
    title: "PROJECT TẾT QUÝ MÃO 2023",
    tag: "SPECIAL DANCE PROJECT",
    year: "2023",
    participation: "Dự án vũ đạo đặc biệt chào đón Tết Quý Mão",
    youtubeUrl: "https://youtu.be/8wlJMKrYtKw?si=I7X6BOfdPX5PfcTb",
    embedUrl: "https://www.youtube-nocookie.com/embed/8wlJMKrYtKw",
    videoId: "8wlJMKrYtKw",
    posterBg: "from-amber-400 via-orange-500 to-red-500",
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: "ach-01",
    title: "Giải Nhất “Giai Điệu Tuổi Hồng” Cụm Thanh Xuân - Cầu Giấy",
    category: "Hội thi nghệ thuật / Biểu diễn",
    year: "2022",
    level: "GIẢI NHẤT 🏆",
    iconType: "trophy",
    badgeColor: "#fbbf24",
  },
  {
    id: "ach-02",
    title: "Giải Ba “Liên hoan Hợp xướng các trường THPT Cụm Thanh Xuân - Cầu Giấy”",
    category: "Liên hoan âm nhạc & Hợp xướng",
    year: "2022 - 2025",
    level: "GIẢI BA 🥉",
    iconType: "medal",
    badgeColor: "#fb923c",
  },
];

export const ACHIEVEMENTS = ACHIEVEMENTS_LIST;

export const SKILLS_LIST: SkillCategory[] = [
  {
    id: "office",
    name: "Tin học văn phòng cơ bản",
    level: "Thành thạo",
    items: ["Microsoft Word", "Microsoft Excel", "PowerPoint"],
  },
  {
    id: "language",
    name: "Tiếng Anh",
    level: "Giao tiếp",
    items: ["Tiếng Anh giao tiếp", "Tiếng Việt (Bản ngữ)"],
  },
];
