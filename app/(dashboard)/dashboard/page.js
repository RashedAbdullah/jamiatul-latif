"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  BookOpen,
  Landmark,
  Calendar,
  Bell,
  FileText,
  Home,
  School,
  Library,
  PieChart,
  BarChart,
  Clock,
  AlertCircle,
  UserPlus,
} from "lucide-react";

export default function DashboardPage() {
  // Sample data
  const stats = [
    { title: "মোট ছাত্র", value: "১,২৫০", icon: Users, change: "+১২ এই মাসে" },
    { title: "মোট শিক্ষক", value: "৪৫", icon: School, change: "+২ এই মাসে" },
    {
      title: "বর্তমান মাসের আয়",
      value: "৳২,৫০,০০০",
      icon: Landmark,
      change: "১০% বৃদ্ধি",
    },
    { title: "আসন্ন ইভেন্ট", value: "৫", icon: Calendar, change: "২ টি নতুন" },
  ];

  const quickActions = [
    { title: "নতুন ভর্তি", icon: UserPlus, url: "#" },
    { title: "ফি জমা দিন", icon: Landmark, url: "#" },
    { title: "নোটিশ তৈরি", icon: Bell, url: "#" },
    { title: "ফলোয়া যোগ করুন", icon: FileText, url: "#" },
  ];

  const recentActivities = [
    {
      time: "১০ মিনিট আগে",
      activity: "নতুন ছাত্র ভর্তি হয়েছে - আহমেদ রহমান",
      icon: Users,
    },
    {
      time: "৩০ মিনিট আগে",
      activity: "ফি জমা দিয়েছেন - আব্দুল্লাহ আল মামুন",
      icon: Landmark,
    },
    {
      time: "২ ঘন্টা আগে",
      activity: "নতুন ফতোয়া যোগ করা হয়েছে",
      icon: FileText,
    },
    {
      time: "১ দিন আগে",
      activity: "মাসিক পরীক্ষার রুটিন প্রকাশিত",
      icon: Calendar,
    },
  ];

  const importantNotices = [
    { title: "পরীক্ষার সময়সূচী", date: "১৫ মার্চ, ২০২৪", priority: "উচ্চ" },
    {
      title: "ঈদের ছুটির নির্দেশিকা",
      date: "১০ এপ্রিল, ২০২৪",
      priority: "মাধ্যম",
    },
    { title: "শিক্ষক সম্মেলন", date: "২০ মার্চ, ২০২৪", priority: "উচ্চ" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">ড্যাশবোর্ড ওভারভিউ</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Clock className="mr-2 h-4 w-4" />
            আজকের তারিখ: {new Date().toLocaleDateString("bn-BD")}
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            রিপোর্ট জেনারেট করুন
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions and Recent Activities */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Quick Actions */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>দ্রুত কাজ</CardTitle>
            <CardDescription>সাধারণ ব্যবস্থাপনা কাজসমূহ</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-24 flex flex-col"
                >
                  <action.icon className="h-6 w-6 mb-2" />
                  {action.title}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>সাম্প্রতিক কার্যক্রম</CardTitle>
            <CardDescription>সিস্টেমের সাম্প্রতিক অ্যাক্টিভিটি</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-secondary rounded-lg mr-3">
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{activity.activity}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Important Notices */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>গুরুত্বপূর্ণ নোটিশ</CardTitle>
            <CardDescription>আসন্ন ইভেন্ট ও ঘোষণা</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {importantNotices.map((notice, index) => (
                <div key={index} className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-yellow-500 mt-0.5 mr-2" />
                  <div>
                    <p className="text-sm font-medium">{notice.title}</p>
                    <div className="flex justify-between">
                      <p className="text-xs text-muted-foreground">
                        {notice.date}
                      </p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          notice.priority === "উচ্চ"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {notice.priority}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Monthly Fee Collection */}
        <Card>
          <CardHeader>
            <CardTitle>মাসিক ফি সংগ্রহ</CardTitle>
            <CardDescription>গত ৬ মাসের ফি সংগ্রহ পরিসংখ্যান</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-secondary rounded-lg">
              <PieChart className="h-16 w-16 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">
                চার্ট এখানে প্রদর্শিত হবে
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Student Attendance */}
        <Card>
          <CardHeader>
            <CardTitle>ছাত্র উপস্থিতি</CardTitle>
            <CardDescription>গত মাসের উপস্থিতির হার</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-secondary rounded-lg">
              <BarChart className="h-16 w-16 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">
                চার্ট এখানে প্রদর্শিত হবে
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
