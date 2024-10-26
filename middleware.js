import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  const { role } = token;

  const darulIftaRoutes = [
    "/dashboard/darul-ifta/get-questions",
    "/dashboard/darul-ifta/add-fatwa",
    "/dashboard/darul-ifta/update-fatwa/*",
    "/dashboard/add-article",
    "/dashboard/update-article/*",
  ];

  const pathname = request.nextUrl.pathname;

  // Allow full dashboard access for "teacher" or "principal"
  if (role === "teacher" || role === "principal") {
    return NextResponse.next();
  }

  if (role === "darul ifta") {
    const isAllowed = darulIftaRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isAllowed) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Deny access for any other role or condition
  return NextResponse.redirect(new URL("/", request.url));
}

// Apply middleware only to dashboard routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
