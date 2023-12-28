import { Box } from "@mui/material";
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
          <main>
            <Box sx={{bgcolor:"red"}}>Trên</Box>
            {children}
            <Box sx={{bgcolor:"red"}}>Dưới</Box>
            </main>
  
  );
}
