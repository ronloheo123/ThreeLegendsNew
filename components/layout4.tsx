import { Box } from "@mui/material";
export default function Layout4({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Box sx={{ bgcolor: "black" }}>Trên3</Box>
      {children}
      <Box sx={{ bgcolor: "black" }}>Dưới3</Box>
    </main>
  );
}
