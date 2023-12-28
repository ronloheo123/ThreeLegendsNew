import { Box } from "@mui/material";
export default function Layout1({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Box sx={{ bgcolor: "blue" }}>Trên1</Box>
      {children}
      <Box sx={{ bgcolor: "blue" }}>Dưới1</Box>
    </main>
  );
}
