import { Box } from "@mui/material";
export default function Layout3({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Box sx={{ bgcolor: "yellow" }}>Trên3</Box>
      {children}
      <Box sx={{ bgcolor: "yellow" }}>Dưới3</Box>
    </main>
  );
}
