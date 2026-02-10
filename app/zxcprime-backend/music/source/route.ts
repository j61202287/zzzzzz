import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (!id)
      return NextResponse.json({ error: "No ID found" }, { status: 400 });

    const url = `https://katze.qqdl.site/track/?id=${id}&quality=HI_RES_LOSSLESS`;
    const res = await axios.get(url);

    return NextResponse.json(res.data);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
