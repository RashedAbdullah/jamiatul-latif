import {
  School,
  Users,
  UserCog,
  BookOpenText,
  Home,
  Landmark,
  Images,
  Calendar,
  Folder,
  Building2,
  AudioWaveform,
  Bookmark,
  FileText,
  HelpCircle,
  Award,
  BarChart2,
  Bell,
  CreditCard,
  Book,
  ClipboardCheck,
  CalendarCheck,
  UserPlus,
  Utensils,
} from "lucide-react";

// import { auth } from "@/auth";

export const dashboardMenu = {
  user: {
    name: "রাশেদ আব্দুল্লাহ",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "মাদ্রাসা ম্যানেজমেন্ট",
      logo: Building2,
      plan: "TopOfStack Software",
    },
    {
      name: "স্কুল ম্যানেজমেন্ট",
      logo: AudioWaveform,
      plan: "TopOfStack Software",
    },
  ],
  navMain: [
    {
      title: "ছাত্র ব্যবস্থাপনা",
      url: "#",
      icon: Users,
      items: [
        {
          title: "সকল ছাত্র",
          url: "#",
          icon: Users,
        },
        {
          title: "নতুন ভর্তি",
          url: "#",
          icon: UserPlus,
        },
        {
          title: "ছাত্র তথ্য আপডেট",
          url: "#",
          icon: ClipboardCheck,
        },
        {
          title: "ফলাফল ব্যবস্থাপনা",
          url: "#",
          icon: Award,
        },
        {
          title: "উপস্থিতি রেকর্ড",
          url: "#",
          icon: CalendarCheck,
        },
      ],
    },
    {
      title: "শিক্ষক ব্যবস্থাপনা",
      url: "#",
      icon: UserCog,
      items: [
        {
          title: "শিক্ষকবৃন্দ",
          url: "#",
          icon: Users,
        },
        {
          title: "নতুন শিক্ষক সংযুক্তি",
          url: "#",
          icon: UserPlus,
        },
        {
          title: "তথ্য আপডেট",
          url: "#",
          icon: ClipboardCheck,
        },
        {
          title: "শিক্ষক বেতন",
          url: "#",
          icon: CreditCard,
        },
      ],
    },
    {
      title: "তালীমাত",
      url: "#",
      icon: BookOpenText,
      items: [
        {
          title: "ক্লাস রুটিন",
          url: "#",
          icon: Calendar,
        },
        {
          title: "বিষয় ব্যবস্থাপনা",
          url: "#",
          icon: Bookmark,
        },
        {
          title: "পরীক্ষা ব্যবস্থাপনা",
          url: "#",
          icon: FileText,
        },
        {
          title: "ফলাফল সিস্টেম",
          url: "#",
          icon: Award,
        },
        {
          title: "শিক্ষকদের রিপোর্ট",
          url: "#",
          icon: Users,
        },
      ],
    },
    {
      title: "দারুল ইকামা",
      url: "#",
      icon: Home,
      items: [
        {
          title: "হোস্টেল তালিকা",
          url: "#",
          icon: Building2,
        },
        {
          title: "ছাত্র আবাসন বরাদ্দ",
          url: "#",
          icon: UserPlus,
        },
        {
          title: "আবাসিক উপস্থিতি",
          url: "#",
          icon: ClipboardCheck,
        },
        {
          title: "মেস ব্যবস্থাপনা",
          url: "#",
          icon: Utensils,
        },
        {
          title: "আবাসিক ফি সংগ্রহ",
          url: "#",
          icon: CreditCard,
        },
        {
          title: "শিক্ষকদের রিপোর্ট",
          url: "#",
          icon: Users,
        },
      ],
    },
    {
      title: "আল কাসিম",
      url: "#",
      icon: School,
      items: [
        {
          title: "সাপ্তাহিক হালাকাহ",
          url: "#",
        },
        {
          title: "অনুষ্ঠান",
          url: "#",
        },
        {
          title: "আয়",
          url: "#",
        },
        {
          title: "ব্যয়",
          url: "#",
        },
      ],
    },
    {
      title: "নোটিশ বোর্ড",
      url: "#",
      icon: Bell,
      items: [
        {
          title: "নোটিশ তালিকা",
          url: "#",
        },
        {
          title: "নোটিশ তৈরি করুন",
          url: "#",
        },
        {
          title: "নোটিশ আপডেট করুন",
          url: "#",
        },
        {
          title: "ইমেইল নোটিশ",
          url: "#",
        },
      ],
    },
    {
      title: "প্রবন্ধ ও প্রকাশনা",
      url: "#",
      icon: Book,
      items: [
        {
          title: "প্রবন্ধ সংযুক্তি",
          url: "#",
        },
        {
          title: "প্রবন্ধ আপডেট",
          url: "#",
        },
        {
          title: "ছাত্রদের পাতা",
          url: "#",
        },
      ],
    },
    {
      title: "আর্থিক ব্যবস্থাপনা",
      url: "#",
      icon: Landmark,
      items: [
        {
          title: "ফি সংগ্রহ",
          url: "#",
        },
        {
          title: "বেতন বিল",
          url: "#",
        },
        {
          title: "অন্যান্য আয়",
          url: "#",
        },
        {
          title: "অন্যান্য ব্যয়",
          url: "#",
        },
        {
          title: "আর্থিক রিপোর্ট",
          url: "#",
        },
        {
          title: "অনুদান ব্যবস্থাপনা",
          url: "#",
        },
      ],
    },
    {
      title: "রিপোর্টিং",
      url: "#",
      icon: BarChart2,
      items: [
        {
          title: "একাডেমিক রিপোর্ট",
          url: "#",
        },
        {
          title: "আর্থিক রিপোর্ট",
          url: "#",
        },
        {
          title: "ছাত্র রিপোর্ট",
          url: "#",
        },
        {
          title: "কাস্টম রিপোর্ট",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "গ্যালারি",
      url: "#",
      icon: Images,
    },
    {
      name: "অনুষ্ঠান ব্যবস্থাপনা",
      url: "#",
      icon: Calendar,
    },
    {
      name: "ডকুমেন্ট ম্যানেজমেন্ট",
      url: "#",
      icon: Folder,
    },
    {
      name: "হেল্পডেস্ক",
      url: "#",
      icon: HelpCircle,
    },
  ],
};
