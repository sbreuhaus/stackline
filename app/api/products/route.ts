// import { NextResponse } from "next/server";
// import path from "path";
// import { promises as fs } from "fs";

// export async function GET() {
//   // Get the absolute path to the JSON file
//   const filePath = path.join(process.cwd(), "data", "sales.json");

//   // Read the file
//   const fileContents = await fs.readFile(filePath, "utf8");

//   // Parse the JSON data
//   const data = JSON.parse(fileContents);
//   console.log('-------------- DATA -----------------', data)

//   // Return the JSON response
//   return NextResponse.json(data);
// }