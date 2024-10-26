import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  console.log(token);
  const { role } = token;

  if (role === "teacher" || role === "principal") {
    return NextResponse.next();
  } else if (role === "darul ifta") {
    const pathname = request.nextUrl.pathname;
    const allowedPaths = [
      "/dashboard/darul-ifta/get-questions",
      "/dashboard/darul-ifta/add-fatwa",
      "/dashboard/darul-ifta/update-fatwa",
      "/dashboard/add-article",
      "/dashboard/update-article",
    ];

    const isAllowed = allowedPaths.some((path) => pathname.startsWith(path));
    if (isAllowed) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/403", request.url));
    }
  }

  return NextResponse.redirect(new URL("/403", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
