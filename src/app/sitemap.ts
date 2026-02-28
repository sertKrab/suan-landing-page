import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://suan.nomem.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // สามารถเพิ่มหน้าย่อยอื่นๆ ได้ที่นี่ในอนาคต เช่น /about, /features
  ];
}
