import React from "react";
import { Box, Skeleton, Stack, Typography } from "@mui/material";

const BlogCardSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 2,
        borderRadius: 2,
        maxWidth: 600,
        margin: "auto",
        backgroundColor: "#fff",
      }}
    >
      <Stack spacing={2}>
        {/* Profile Image and Text */}
        <Stack direction="row" spacing={2} alignItems="center">
          {/* Circle for Profile Image */}
          <Skeleton variant="circular" width={40} height={40} />
          {/* Text Placeholder */}
          <Skeleton variant="text" width="50%" />
        </Stack>

        {/* Heading and Image */}
        <Stack direction="row" spacing={2} alignItems="center">
          {/* Heading Placeholder */}
          <Box flex={1}>
            <Skeleton variant="text" width="80%" height={30} />
            <Skeleton variant="text" width="60%" height={20} />
          </Box>

          {/* Image Placeholder */}
          <Skeleton variant="rectangular" width={130} height={130} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default BlogCardSkeleton;
