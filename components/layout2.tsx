import { Box } from "@mui/material";
export default function Layout2({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Box sx={{ bgcolor: "green" }}>Trên2</Box>
      {children}
      <Box sx={{ bgcolor: "green" }}>Dưới2</Box>
    </main>
  );
}
